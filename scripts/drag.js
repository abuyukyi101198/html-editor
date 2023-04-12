const previewList = document.querySelector('#preview');
const sections = document.querySelectorAll('.section');
const dragButtons = document.querySelectorAll('.drag');

sections.forEach(section => {
    section.addEventListener('dragstart', () => {
        setTimeout(() => section.classList.add('dragging'), 0);
    });

    section.addEventListener('dragend', () => {
        section.classList.remove('dragging');
        section.setAttribute('draggable', 'false');
    });

    const dragButton = section.children[0];
    const deleteButton = section.children[2];

    dragButton.addEventListener('mousedown', () => {
        section.setAttribute('draggable', 'true');
    });

    dragButton.addEventListener('mouseup', () => {
        section.setAttribute('draggable', 'false');
    });

    deleteButton.addEventListener('click', () => {section.remove()});
});

previewList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingSection = previewList.querySelector('.dragging');

    let siblings = [...previewList.querySelectorAll('.section:not(.dragging)')];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    previewList.insertBefore(draggingSection, nextSibling);
});

previewList.addEventListener("dragenter", e => e.preventDefault());