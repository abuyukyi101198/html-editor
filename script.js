const preview = document.querySelector('#preview');
const addSectionButton = document.querySelector('#add-section');
const sectionSelector = document.querySelector('#select-section');

addSectionButton.addEventListener('click', () => {
    if (addSectionButton.getAttribute('data-state') === 'add') {
        addSectionButton.setAttribute('data-state', 'cancel');
        sectionSelector.style.setProperty('display', 'flex');
        addSectionButton.children[0].setAttribute('transform', 'rotate(45, 12, 12)');
    }
    else {
        addSectionButton.setAttribute('data-state', 'add');
        sectionSelector.style.setProperty('display', 'none');
        addSectionButton.children[0].setAttribute('transform', 'rotate(0, 12, 12)');
    }
});

const addTextButton = document.querySelector('#add-text');
addTextButton.addEventListener('click', () => {
    preview.innerHTML += sections.text;
    addSectionButton.click();
});

const addImageButton = document.querySelector('#add-image');
addImageButton.addEventListener('click', () => {
    preview.innerHTML += sections.image;
    addSectionButton.click();
});

const sections = {
    text:
        '<table role="presentation" border="0" cellspacing="0" width="75%">\n' +
        '    <tr>\n' +
        '        <td>\n' +
        '            <p>Text</p>\n' +
        '        </td>\n' +
        '    </tr>\n' +
        '</table>',

    image:
        '<table role="presentation" border="0" cellspacing="0" width="75%">\n' +
        '    <tr>\n' +
        '        <td style="text-align: center">\n' +
        '            <img src="image.png" alt="image" style="width: 100%">\n' +
        '        </td>\n' +
        '    </tr>\n' +
        '</table>'
}