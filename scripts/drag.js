(function () {
    const preview = document.querySelector('#preview');
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        setDrag(section);
    });

    preview.addEventListener('dragover', (e) => {
        handleDrop(e, preview);
    });

    preview.addEventListener("dragenter", e => e.preventDefault());
})();

function setDrag(section) {
    const dragButton = section.children[1].children[2];

    section.addEventListener('dragstart', () => {
        setTimeout(() => section.classList.add('dragging'), 0);
    });

    section.addEventListener('dragend', () => {
        section.classList.remove('dragging');
        section.setAttribute('draggable', 'false');
    });

    dragButton.addEventListener('mousedown', () => {
        section.setAttribute('draggable', 'true');
    });

    dragButton.addEventListener('mouseup', () => {
        section.setAttribute('draggable', 'false');
    });
}

function handleDrop(e, preview) {
    e.preventDefault();
    const draggingSection = preview.querySelector('.dragging');

    let siblings = [...preview.querySelectorAll('.section:not(.dragging)')];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    preview.insertBefore(draggingSection, nextSibling);
}