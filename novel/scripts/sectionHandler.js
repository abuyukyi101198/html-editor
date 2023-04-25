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