let headHTML, style, sectionHTMLs, quill;

const sectionTemplateHTML =
    '<div class="drag">\n' +
    '<svg class="up control" viewBox="0 0 24 24">\n' +
    '<path xmlns="http://www.w3.org/2000/svg" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"></path>\n' +
    '</svg>\n' +
    '<svg class="down control" viewBox="0 0 24 24">\n' +
    '<path xmlns="http://www.w3.org/2000/svg" transform="rotate(180, 12, 12)" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"></path>\n' +
    '</svg>\n' +
    '</div><div class="content"></div><svg class="delete control" viewBox="0 0 24 24">\n' +
    '<path xmlns="http://www.w3.org/2000/svg" d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z"></path>\n' +
    '</svg>';

fetch('/editor.json')
    .then((response) => response.json())
    .then((json) => {
        fetch('/email.txt')
            .then((response) => response.text())
            .then((email) => main(json, email))
    });

function main(json, email) {
    headHTML = json["headHTML"];
    style = json["style"];
    sectionHTMLs = json["sectionHTMLs"];

    setupSectionAddition();
    setupEditorHandling();
    setupEmail(email);
    setupSave();
}

function setupSectionAddition() {
    const sectionAddButtons = document.querySelectorAll('#add-sections .button');
    sectionAddButtons.forEach(button => {
        button.addEventListener('click', () => {
            addSectionToPreview(button.getAttribute('id'));
        });
    })
}

function setupEditorHandling() {
    quill = new Quill('#snow-container', {
        placeholder: 'Write here...',
        theme: 'snow'
    });

    quill.on('text-change', () => {
        const changedSection = document.querySelector('.active .text-td');
        changedSection.innerHTML = quill.root.innerHTML;
    });

    const alignmentButtons = document.querySelectorAll('#alignment div');
    alignmentButtons.forEach(btn => btn.addEventListener('click',
        () => handleAlignment(btn)));

    const urlInput = document.querySelector('#url-link');
    urlInput.addEventListener('change', handleURL);
}

function setupEmail(emailHTML) {
    const emailDoc = new DOMParser().parseFromString(emailHTML, "text/xml");
    const sections = emailDoc.querySelectorAll('table');

    sections.forEach(section => {
        const sectionType = section.getAttribute('data-section');
        const sectionAlignment = section.getAttribute('data-alignment');
        addSectionToPreview(sectionType, sectionAlignment, section);
    });
}

function setupSave() {
    const editorHead = document.querySelector('head');
    const emailStyle = document.createElement('style');
    emailStyle.innerHTML = style;

    editorHead.appendChild(emailStyle);

    const save = document.querySelector('#save');
    save.addEventListener('click', handleSave);
}

function handleSave() {
    const contents = document.querySelectorAll('.content');
    let email = document.implementation.createHTMLDocument('');

    const head = email.querySelector('head');
    head.innerHTML = headHTML;
    const styleElem = email.createElement('style');
    styleElem.innerHTML = style;
    head.appendChild(styleElem);

    const body = email.querySelector('body');
    const container = email.createElement('div');
    container.setAttribute('class', 'content');
    body.appendChild(container);
    for (const content of contents) {
        container.appendChild(content.children[0].cloneNode(true));
    }

    navigator.clipboard.writeText(new XMLSerializer().serializeToString(email));
}

function handleAlignment(btn) {
    const active = document.querySelector('.active');
    const content = document.querySelector('.active .content');
    const sectionType = active.querySelector('table').getAttribute('data-section');
    const newAlignment = btn.getAttribute('id').split('-')[0];

    const text = content.querySelector('.text-td').innerHTML;
    const image = content.querySelector('.image-td').innerHTML;

    content.innerHTML = sectionHTMLs[sectionType][newAlignment];

    content.querySelector('.text-td').innerHTML = text;
    content.querySelector('.image-td').innerHTML = image;
}

function handleURL(e) {
    const active = document.querySelector('.active');
    const sectionType = active.querySelector('table').getAttribute('data-section');
    let activeURLField;

    if (sectionType === 'textimage' || sectionType === 'image') {
        activeURLField = active.querySelector('img');
        activeURLField.setAttribute('src', e.target.value);
    }
    else if (sectionType === 'textvideo' || sectionType === 'video') {
        activeURLField = active.querySelector('a');
        activeURLField.setAttribute('href', e.target.value);

        const url = new URL(e.target.value);
        const params = new URLSearchParams(url.search);
        const videoId = params.get('v');

        const thumbnailSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        const thumbnail = active.querySelector('img');
        thumbnail.setAttribute('src', thumbnailSrc);
    }
    else if (sectionType === 'button') {
        activeURLField = active.querySelector('a');
        activeURLField.setAttribute('href', e.target.value);
    }
    else if (sectionType === 'footer') {
        activeURLField = active.querySelector('.address a');
        activeURLField.setAttribute('href', `mailto:${e.target.value}`);
        activeURLField.innerText = e.target.value;
    }
}

function addSectionToPreview(sectionType, sectionAlignment = null, prefill = null) {
    const preview = document.querySelector('#preview');
    const section = document.createElement('li');

    section.setAttribute('class', 'section');
    section.innerHTML = sectionTemplateHTML;

    const content = section.children[1];
    if (prefill) {
        content.appendChild(prefill);
    }
    else if (sectionAlignment) {
        content.innerHTML = sectionHTMLs[sectionType][sectionAlignment];
    }
    else if (sectionType === 'textimage' || sectionType === 'textvideo') {
        content.innerHTML = sectionHTMLs[sectionType]['left'];
    }
    else {
        content.innerHTML = sectionHTMLs[sectionType];
    }

    preview.appendChild(section);

    setMove();
    setSelect();
    setDelete();
    handleSelect(section);

    function setMove() {
        section.children[0].addEventListener('click', (e) => {
            if (section.querySelector('.up').contains(e.target) && section.previousSibling) {
                section.parentElement.insertBefore(section, section.previousSibling);
            }
            else if (section.querySelector('.down').contains(e.target) && section.nextSibling) {
                section.parentElement.insertBefore(section.nextSibling, section);
            }
        });
    }

    function setSelect() {
        section.addEventListener('click', (e) => {
            if (!section.children[0].children[0].contains(e.target)
                && !section.children[0].children[1].contains(e.target)) {
                if (!section.classList.contains('active')) {
                    handleSelect(section);
                }
            }
        });
    }

    function setDelete() {
        section.querySelector('.delete').addEventListener('click', () => {
            section.remove();
            const alignment = document.querySelector('#alignment');
            const textEditor = document.querySelector('.standalone-container');
            const urlEditor = document.querySelector('#url');
            const urlInput = urlEditor.querySelector('input');

            alignment.classList.add('unavailable');
            textEditor.classList.add('unavailable');
            urlEditor.classList.add('unavailable');
            urlInput.setAttribute('disabled', '');
        });
    }
}

function handleSelect(section) {
    const active = section.parentElement.querySelector('.active');
    if (active !== null) {
        handleUnselect(active);
    }

    const controls = section.querySelectorAll('.control');
    controls.forEach(control => {
        control.style.setProperty('visibility', 'visible');
    });

    fillEditorContainer(section);

    if (!section.classList.contains('active')) {
        section.classList.add('active');
    }
}

function handleUnselect(section) {
    const controls = section.querySelectorAll('.control');

    controls.forEach(control => {
        control.style.setProperty('visibility', 'hidden');
    });

    section.classList.remove('active');
}

function fillEditorContainer(section) {
    const sectionType = section.querySelector('table').getAttribute('data-section');

    const alignment = document.querySelector('#alignment');
    const textEditor = document.querySelector('.standalone-container');
    const urlEditor = document.querySelector('#url');

    const urlInput = urlEditor.querySelector('input');

    if (sectionType === 'header') {
        setFields([true, true, true]);
    }
    else if (sectionType === 'text') {
        setFields([true, false, true]);
        fillTextEditor(section);
    }
    else if (sectionType === 'textimage') {
        setFields([false, false, false]);
        fillTextEditor(section);
        fillURLInput(urlInput, section);
    }
    else if (sectionType === 'image') {
        setFields([true, true, false]);
        fillURLInput(urlInput, section);
    }
    else if (sectionType === 'textvideo') {
        setFields([false, false, false]);
        fillTextEditor(section);
        fillURLInput(urlInput, section);
    }
    else if (sectionType === 'video') {
        setFields([true, true, false]);
        fillURLInput(urlInput, section);
    }
    else if (sectionType === 'button') {
        setFields([true, false, false]);
        fillTextEditor(section);
        fillURLInput(urlInput, section);
    }
    else if (sectionType === 'footer') {
        setFields([true, true, false]);
        fillURLInput(urlInput, section);
    }

    function setFields(fieldParams) {
        if (fieldParams[0])
            alignment.classList.add('unavailable');
        else
            alignment.classList.remove('unavailable');

        if (fieldParams[1])
            textEditor.classList.add('unavailable');
        else
            textEditor.classList.remove('unavailable');

        if (fieldParams[2]) {
            urlEditor.classList.add('unavailable');
            urlInput.setAttribute('disabled', '');
        }
        else {
            urlEditor.classList.remove('unavailable');
            urlInput.removeAttribute('disabled');
        }

    }
}

function fillTextEditor(section) {
    const textTd = section.querySelector('.text-td');

    const value = textTd.innerHTML;
    const delta = quill.clipboard.convert(value);

    quill.setContents(delta, 'silent');
}

function fillURLInput(urlInput, section) {
    const sectionType = section.querySelector('table').getAttribute('data-section');
    if (sectionType === 'footer') {
        urlInput.value = section.querySelector('.address a').getAttribute('href').split(':')[1];
    }
    else if (sectionType === 'textimage' || sectionType === 'image') {
        urlInput.value = section.querySelector('img').getAttribute('src');
    }
    else {
        urlInput.value = section.querySelector('a').getAttribute('href');
    }
}