(function () {
    const sections = document.querySelectorAll('#add-sections .button');
    sections.forEach(btn => {
        btn.addEventListener('click', () => handleSectionAdd(btn));
    })
})();

function handleSectionAdd(button) {
    const preview = document.querySelector('#preview');
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
        const alignment = document.querySelector('#alignment');
        const imageDrop = document.querySelector('#image-drop');
        const textEditor = document.querySelector('.standalone-container');
        const imageInput = imageDrop.querySelector('input');

        alignment.classList.add('unavailable');
        imageDrop.classList.add('unavailable');
        textEditor.classList.add('unavailable');
        imageInput.setAttribute('disabled', '');
    });
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

    const imageInput = imageDrop.querySelector('input');

    if (sectionType === 'header' || sectionType === 'footer') {
        setFields([true, true, true, true]);
    }
    else if (sectionType === 'text') {
        setFields([true, true, false, true]);
        fillTextEditor(section);
    }
    else if (sectionType === 'textimage') {
        setFields([false, false, false, false]);
        fillTextEditor(section);
        fillImageDrop(imageDrop, section);
    }
    else if (sectionType === 'image') {
        setFields([true, false, true, false]);
        fillImageDrop(imageDrop, section);
    }

    function setFields(fieldParams) {
        if (fieldParams[0])
            alignment.classList.add('unavailable');
        else
            alignment.classList.remove('unavailable');

        if (fieldParams[1])
            imageDrop.classList.add('unavailable');
        else
            imageDrop.classList.remove('unavailable');

        if (fieldParams[2])
            textEditor.classList.add('unavailable');
        else
            textEditor.classList.remove('unavailable');

        if (fieldParams[3])
            imageInput.setAttribute('disabled', '');
        else
            imageInput.removeAttribute('disabled');
    }
}

function fillTextEditor(section) {
    const textTd = section.querySelector('.text-td');

    const value = textTd.innerHTML;
    const delta = quill.clipboard.convert(value);

    quill.setContents(delta, 'silent');
}

function fillImageDrop(imageDrop, section) {
    let svg = section.querySelector('.image-td svg');

    if (!svg) return;

    svg = svg.cloneNode(true);
    svg.style.setProperty('margin-top', '0');
    svg.style.setProperty('height', '80%');
    svg.style.setProperty('width', '85%');

    if (imageDrop.getAttribute('data-preview')) {
        imageDrop.lastChild.remove();
    }

    imageDrop.appendChild(svg);
    imageDrop.setAttribute('data-preview', true);
}