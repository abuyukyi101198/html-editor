const moveHTML = '<div class="drag">\n<svg class="up control" viewBox="0 0 24 24">\n<path xmlns="http://www.w3.org/2000/svg" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"/>\n</svg>\n<svg class="down control" viewBox="0 0 24 24">\n<path xmlns="http://www.w3.org/2000/svg" transform="rotate(180, 12, 12)" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"/>\n</svg>\n</div>';
const deleteHTML = '<svg class="delete control" viewBox="0 0 24 24">\n<path xmlns="http://www.w3.org/2000/svg" d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z"/>\n</svg>';

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

function setupEmail(emailHTML) {
    const emailDoc = new DOMParser().parseFromString(emailHTML, "text/xml");
    const sections = emailDoc.querySelectorAll('table');

    sections.forEach(section => {
        const btn = document.querySelector(`#${section.getAttribute('data-section')}`);

    });
}

