let headHTML;
let style;
let sectionHTMLs;

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
    save.addEventListener('click', () => {
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
    })
}