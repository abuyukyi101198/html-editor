createSection();

function createSection(sectionType) {
    const table = createElement('table', {
        'role': 'presentation',
        'border': '0',
        'cellspacing': '0',
        'width': sectionType === 'header' ? '100%' : '75%'
    });

    const tr = createElement('tr');
    table.appendChild(tr);

    const preview = document.querySelector('#preview');
    preview.appendChild(table);
}

function createElement(tageName, attributes = {}) {
    const element = document.createElement(tageName);

    for (let [attr, value] of Object.entries(attributes)) {
        element.setAttribute(attr, value);
    }

    return element;
}