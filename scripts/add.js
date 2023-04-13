const adder = document.querySelector('#adder');
const addButton = adder.children[0];
const addSections = adder.children[1];

addButton.addEventListener('click', () => {
    const isExpanded = addSections.style.getPropertyValue('visibility') === 'visible';
    addButton.children[0].setAttribute('transform', `rotate(${isExpanded ? '0' : '45'}, 12, 12)`);
    addSections.style.setProperty('visibility', isExpanded ? 'hidden' : 'visible');
});