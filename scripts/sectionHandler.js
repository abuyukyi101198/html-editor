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
            if (section.classList.contains('active')) {
                handleUnselect(section);
            }
            else {
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
    section.innerHTML += moveHTML;

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    content.innerHTML += sectionHTMLs[button.getAttribute('id')];
    section.appendChild(content);
    section.innerHTML += deleteHTML;
    preview.appendChild(section);

    setMove(section);

    setSelect(section);
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