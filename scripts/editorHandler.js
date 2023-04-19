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

    const imageInput = document.querySelector('#image-drop input');
    imageInput.addEventListener('change', (e) => {
        handleImageInput(e);
        imageInput.value = null;
    });

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

function handleImageInput(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');

    reader.addEventListener('load', handleFile);
    reader.addEventListener('error', () => console.log("Error reading file"));
}

function handleFile(e) {
    const activeImage = document.querySelector('.active .image-td');
    const styleAttr = activeImage.getAttribute('style');

    activeImage.innerHTML = e.target.result;

    activeImage.children[0].setAttribute('style', styleAttr);
    activeImage.children[0].removeAttribute('width');
    activeImage.children[0].removeAttribute('height');

    const imageDrop = document.querySelector('#image-drop');
    const section = document.querySelector('.active');
    fillImageDrop(imageDrop, section);
}

function handleURL(e) {
    const active = document.querySelector('.active');
    const activeURLField = active.querySelector('a');
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