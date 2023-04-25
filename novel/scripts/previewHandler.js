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