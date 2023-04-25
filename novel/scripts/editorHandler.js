let quill;

function handleAlignment(btn) {
    const active = document.querySelector('.active');
    const content = document.querySelector('.active .content');
    const sectionType = active.querySelector('table').getAttribute('data-section');
    const newAlignment = btn.getAttribute('id').split('-')[0];

    const text = content.querySelector('.text-td').innerHTML;
    const image = content.querySelector('.image-td').innerHTML;

    content.innerHTML = sectionHTMLs[sectionType][newAlignment];

    content.querySelector('.text-td').innerHTML = text;
    content.querySelector('.image-td').innerHTML = image;
}

function handleURL(e) {
    const active = document.querySelector('.active');
    const sectionType = active.querySelector('table').getAttribute('data-section');
    let activeURLField;

    if (sectionType === 'textimage' || sectionType === 'image') {
        activeURLField = active.querySelector('img');
        activeURLField.setAttribute('src', e.target.value);
    }
    else if (sectionType === 'textvideo' || sectionType === 'video') {
        activeURLField = active.querySelector('a');
        activeURLField.setAttribute('href', e.target.value);

        const url = new URL(e.target.value);
        const params = new URLSearchParams(url.search);
        const videoId = params.get('v');

        const thumbnailSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        const thumbnail = active.querySelector('img');
        thumbnail.setAttribute('src', thumbnailSrc);
    }
    else if (sectionType === 'button') {
        activeURLField = active.querySelector('a');
        activeURLField.setAttribute('href', e.target.value);
    }
    else if (sectionType === 'footer') {
        activeURLField = active.querySelector('.address a');
        activeURLField.setAttribute('href', `mailto:${e.target.value}`);
        activeURLField.innerText = e.target.value;
    }
}