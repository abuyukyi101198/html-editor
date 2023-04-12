(function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('click', (e) => {
            if (e.target !== section.children[1].children[0]) {
                handleSelect(section);
            }
        });

        section.querySelector('.done').addEventListener('click', () => {
            handleUnselect(section);
        });

        section.querySelector('.delete').addEventListener('click', () => {
            section.remove();
        });
    });
})();

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