(function () {
    const addSections = document.querySelector('#add-sections');

    const preview = document.querySelector('#preview');

    const sections = [...addSections.children];

    sections.forEach(button => {
        button.addEventListener('click', () => {
            handleSectionAdd(preview, button);
        });
    });
})();

function setMove(section) {
    section.children[0].addEventListener('click', (e) => {
        if (section.querySelector('.up').contains(e.target) && section.previousSibling) {
            section.parentElement.insertBefore(section, section.previousSibling);
        }
        else if (section.querySelector('.down').contains(e.target) && section.nextSibling) {
            section.parentElement.insertBefore(section.nextSibling, section);
        }
    });
}

function setSelect(section) {
    section.addEventListener('click', (e) => {
        if (!section.children[0].children[0].contains(e.target)
            && !section.children[0].children[1].contains(e.target)) {
            if (!section.classList.contains('active')) {
                handleSelect(section);
            }
        }
    });

    section.querySelector('.delete').addEventListener('click', () => {
        section.remove();
    });
}

function handleSectionAdd(preview, button) {
    const section = document.createElement('li');
    section.setAttribute('class', 'section');
    section.setAttribute('data-type', button.getAttribute('id'));
    section.innerHTML += moveHTML;

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    if (section.getAttribute('data-type') === 'textimage') {
        section.setAttribute('data-alignment', 'left-alignment');
        content.innerHTML += sectionHTMLs[button.getAttribute('id')]['left'];
    }
    else {
        content.innerHTML += sectionHTMLs[button.getAttribute('id')];
    }
    section.appendChild(content);
    section.innerHTML += deleteHTML;
    preview.appendChild(section);

    setMove(section);

    setSelect(section);

    handleSelect(section);
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
    const sectionType = section.getAttribute('data-type');

    const alignment = document.querySelector('#alignment');
    const imageDrop = document.querySelector('#image-drop');
    const textEditor = document.querySelector('.standalone-container');

    if (sectionType === 'header' || sectionType === 'footer') {
        alignment.classList.add('unavailable');
        imageDrop.classList.add('unavailable');
        textEditor.classList.add('unavailable');
    }
    else {
        if (sectionType === 'text') {
            alignment.classList.add('unavailable');
            imageDrop.classList.add('unavailable');
            textEditor.classList.remove('unavailable');
            fillTextEditor(section);
        }
        else if (sectionType === 'textimage') {
            alignment.classList.remove('unavailable');
            imageDrop.classList.remove('unavailable');
            textEditor.classList.remove('unavailable');
            fillTextEditor(section);
        }
        else if (sectionType === 'image') {
            alignment.classList.add('unavailable');
            imageDrop.classList.remove('unavailable');
            textEditor.classList.add('unavailable');
        }
    }
}

function fillTextEditor(section) {
    const textTd = section.querySelector('.text-td');

    const value = textTd.innerHTML;
    const delta = quill.clipboard.convert(value);

    quill.setContents(delta, 'silent');
}

