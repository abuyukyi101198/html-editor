let quill;

(function () {
    quill = new Quill('#snow-container', {
        placeholder: 'Write here...',
        theme: 'snow'
    });

    quill.on('text-change', () => {
        const changedSection = document.querySelector('.active .text-td');
        changedSection.innerHTML = quill.root.innerHTML;
    });

    const alignmentButtons = document.querySelectorAll('#alignment div');
    alignmentButtons.forEach(btn => btn.addEventListener('click', () => handleAlignment(btn)));

    const urlInput = document.querySelector('#url-link');
    urlInput.addEventListener('change', handleURL);
})();

function handleAlignment(btn) {
    const content = document.querySelector('.active .content');
    const sectionType = content.parentElement.getAttribute('data-type');

    const text = content.querySelector('.text-td').innerHTML;
    const image = content.querySelector('.image-td').innerHTML;

    content.innerHTML = sectionHTMLs[sectionType][btn.getAttribute('id').split('-')[0]];

    content.querySelector('.text-td').innerHTML = text;
    content.querySelector('.image-td').innerHTML = image;
}

function handleURL(e) {
    const active = document.querySelector('.active');
    let activeURLField;

    if (active.getAttribute('data-type') === 'footer') {
        activeURLField = active.querySelector('.address a');
        activeURLField.setAttribute('href', `mailto:${e.target.value}`);
        activeURLField.innerText = e.target.value;

        return;
    }

    activeURLField = active.querySelector('a');
    activeURLField.setAttribute('href', e.target.value);

    if (active.getAttribute('data-type') === 'textvideo'
        || active.getAttribute('data-type') === 'video') {
        const url = new URL(e.target.value);
        const params = new URLSearchParams(url.search);
        const videoId = params.get('v');

        const thumbnailSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        const thumbnail = active.querySelector('img');
        thumbnail.setAttribute('src', thumbnailSrc);
    }
}