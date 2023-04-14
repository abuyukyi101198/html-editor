var quill = new Quill('#snow-container', {
    placeholder: 'Write here...',
    theme: 'snow'
});

quill.on('text-change', () => {
    const changedSection = document.querySelector('.active .text-td');
    changedSection.innerHTML = quill.root.innerHTML;
});

const alignmentButtons = document.querySelectorAll('#alignment div');

alignmentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const active = document.querySelector('.active');
        const text = active.querySelector('.text-td').innerHTML;
        const image = active.querySelector('.image-td').innerHTML;

        active.children[1].innerHTML = sectionHTMLs['textimage'][button.getAttribute('id').split('-')[0]];

        const section = active.children[1].children[0];
        section.querySelector('.text-td').innerHTML = text;
        section.querySelector('.image-td').innerHTML = image;
    });
});