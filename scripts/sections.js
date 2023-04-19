const sectionHTMLs = {
    header:
        '        <table role="presentation" border="0" cellspacing="0" width="100%"\n' +
        '               style="margin-bottom: 10px">\n' +
        '            <tr>\n' +
        '                <td style="text-align: center">\n' +
        '                    <img style="height: 75px; padding: 10px 0" src="https://www.ye-ro.com/wp-content/uploads/2016/10/logo.png" alt="logo">\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '        </table>',

    text:
        '        <table role="presentation" border="0" cellspacing="0" width="75%">\n' +
        '            <tr>\n' +
        '                <td class="text-td">\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '        </table>',

    textimage: {
        left:
            '        <table role="presentation" border="0" cellspacing="0" width="75%">\n' +
            '            <tr>\n' +
            '                <td class="text-td" style="width: 50%">\n' +
            '                </td>\n' +
            '                <td class="image-td" style="text-align: right; padding-left: 20px">\n' +
            '                    <img style="width: 85%; margin-top: 10%" src="https://www.ye-ro.com/wp-content/uploads/2016/10/logo.png" alt="logo">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>',

        center:
            '<table role="presentation" border="0" cellspacing="0" width="75%">\n' +
            '    <tr>\n' +
            '        <td class="image-td" style="text-align: center">\n' +
            '            <img style="width: 50%; margin-top: 10%" src="https://www.ye-ro.com/wp-content/uploads/2016/10/logo.png" alt="logo">\n' +
            '        </td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="text-td" style="width: 50%; text-align: center">\n' +
            '        </td>\n' +
            '    </tr>\n' +
            '</table>',

        right:
            '        <table role="presentation" border="0" cellspacing="0" width="75%">\n' +
            '            <tr>\n' +
            '                <td class="image-td" style="text-align: left; padding-right: 20px">\n' +
            '                    <img style="width: 85%; margin-top: 10%" src="https://www.ye-ro.com/wp-content/uploads/2016/10/logo.png" alt="logo">\n' +
            '                </td>\n' +
            '                <td class="text-td" style="width: 50%">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>'
    },

    image:
        '        <table role="presentation" border="0" cellspacing="0" width="75%">\n' +
        '            <tr>\n' +
        '                <td class="image-td" style="text-align: center">\n' +
        '                    <img style="width: 100%; margin-top: 10%" src="https://www.ye-ro.com/wp-content/uploads/2016/10/logo.png" alt="logo">\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '        </table>',

    textvideo: {
        left:
            '        <table role="presentation" border="0" cellspacing="0" width="75%">\n' +
            '            <tr>\n' +
            '                <td class="text-td" style="width: 50%">\n' +
            '                </td>\n' +
            '                <td class="image-td" style="text-align: right; padding-left: 20px">\n' +
            '                    <div style="position: relative">\n' +
            '                        <a href="https://www.youtube.com/watch?v=fcBthkkm96U" disable-tracking=true>\n' +
            '                            <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="-36 -36 96 96">\n' +
            '                                <circle fill="#EC0B0C" r="18" cx="12" cy="12"></circle>\n' +
            '                                <path fill="#FFFFFF"\n' +
            '                                      d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"/>\n' +
            '                            </svg>\n' +
            '                        </a>\n' +
            '                        <img src="https://img.youtube.com/vi/fcBthkkm96U/maxresdefault.jpg" alt="" style="width: 100%">\n' +
            '                    </div>' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>',

        center:
            '<table role="presentation" border="0" cellspacing="0" width="75%">\n' +
            '    <tr>\n' +
            '        <td class="image-td" style="text-align: center">\n' +
            '                    <div style="position: relative">\n' +
            '                        <a href="https://www.youtube.com/watch?v=fcBthkkm96U" disable-tracking=true>\n' +
            '                            <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="-36 -36 96 96">\n' +
            '                                <circle fill="#EC0B0C" r="18" cx="12" cy="12"></circle>\n' +
            '                                <path fill="#FFFFFF"\n' +
            '                                      d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"/>\n' +
            '                            </svg>\n' +
            '                        </a>\n' +
            '                        <img src="https://img.youtube.com/vi/fcBthkkm96U/maxresdefault.jpg" alt="" style="width: 100%">\n' +
            '                    </div>' +
            '        </td>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '        <td class="text-td" style="width: 50%; text-align: center">\n' +
            '        </td>\n' +
            '    </tr>\n' +
            '</table>',

        right:
            '        <table role="presentation" border="0" cellspacing="0" width="75%">\n' +
            '            <tr>\n' +
            '                <td class="image-td" style="text-align: left; padding-right: 20px">\n' +
            '                    <div style="position: relative">\n' +
            '                        <a href="https://www.youtube.com/watch?v=fcBthkkm96U" disable-tracking=true>\n' +
            '                            <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="-36 -36 96 96">\n' +
            '                                <circle fill="#EC0B0C" r="18" cx="12" cy="12"></circle>\n' +
            '                                <path fill="#FFFFFF"\n' +
            '                                      d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"/>\n' +
            '                            </svg>\n' +
            '                        </a>\n' +
            '                        <img src="https://img.youtube.com/vi/fcBthkkm96U/maxresdefault.jpg" alt="" style="width: 100%">\n' +
            '                    </div>' +
            '                </td>\n' +
            '                <td class="text-td" style="width: 50%">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>',
    },

    video:
        '        <table role="presentation" border="0" cellspacing="0" width="75%">\n' +
        '            <tr>\n' +
        '                <td style="text-align: center">\n' +
        '                    <div style="position: relative">\n' +
        '                        <a href="https://www.youtube.com/watch?v=fcBthkkm96U" disable-tracking=true>\n' +
        '                            <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="-36 -36 96 96">\n' +
        '                                <circle fill="#EC0B0C" r="18" cx="12" cy="12"></circle>\n' +
        '                                <path fill="#FFFFFF"\n' +
        '                                      d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"/>\n' +
        '                            </svg>\n' +
        '                        </a>\n' +
        '                        <img src="https://img.youtube.com/vi/fcBthkkm96U/maxresdefault.jpg" alt="" style="width: 100%">\n' +
        '                    </div>\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '        </table>',

    button:
        '        <table style="margin-top: 12px" role="presentation" border="0" cellspacing="0" width="75%">\n' +
        '            <tr>\n' +
        '                <td style="text-align: center">\n' +
        '                    <div class="button">\n' +
        '                        <a class="text-td button" href="" disable-tracking=true></a>\n' +
        '                    </div>\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '        </table>',

    footer:
        '        <table role="presentation" border="0" cellspacing="0" width="100%" class="footer">\n' +
        '            <tr>\n' +
        '                <td style="text-align: center">\n' +
        '                    <div class="social">\n' +
        '                        <a href="https://www.facebook.com/YEROANKARA/" disable-tracking=true>\n' +
        '                            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/Facebook_white.png" alt="facebook">\n' +
        '                        </a>\n' +
        '                    </div>\n' +
        '                    <div class="social">\n' +
        '                        <a href="https://www.instagram.com/yeroyurtdisiegitim" disable-tracking=true>\n' +
        '                            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/Instagram_white.png" alt="instagram">\n' +
        '                        </a>\n' +
        '                    </div>\n' +
        '                    <div class="social">\n' +
        '                        <a href="https://twitter.com/ankarayero?lang=en" disable-tracking=true>\n' +
        '                            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/Twitter_white.png" alt="twitter">\n' +
        '                        </a>\n' +
        '                    </div>\n' +
        '                    <div class="social">\n' +
        '                        <a href="https://www.linkedin.com/company/yero-international-education/" disable-tracking=true>\n' +
        '                            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/LinkedIN_white.png" alt="linkedin">\n' +
        '                        </a>\n' +
        '                    </div>\n' +
        '                    <div class="social">\n' +
        '                        <a href="https://www.youtube.com/channel/UCGNXrdIZNdZKpk1YiJmg9vg" disable-tracking=true>\n' +
        '                            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/Youtube_white.png" alt="youtube">\n' +
        '                        </a>\n' +
        '                    </div>\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>\n' +
        '                    <div style="height: 4px; width: 100%; background-color: #FFFFFF"></div>\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td style="padding-bottom: 15px">\n' +
        '                    <h5><i>© YERO YURTDIŞI EĞİTİM, TÜM HAKLARI SAKLIDIR.</i></h5>\n' +
        '                    <h5 class="address">Mareşal Fevzi Çakmak Cad. 4/6</h5>\n' +
        '                    <h5 class="address">Beşevler / ANKARA</h5>\n' +
        '                    <h5 class="address">0 (312) 223 5218</h5>\n' +
        '                    <h5 class="address"><a href="mailto:ankara@ye-ro.com" disable-tracking=true>ankara@ye-ro.com</a>\n' +
        '                    </h5>\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td style="padding-bottom: 20px">\n' +
        '                    <h5><a href="#" disable-tracking=true>unsubscribe</a></h5>\n' +
        '                </td>\n' +
        '            </tr>\n' +
        '        </table>'
}

const moveHTML = '<div class="drag">\n<svg class="up control" viewBox="0 0 24 24">\n<path xmlns="http://www.w3.org/2000/svg" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"/>\n</svg>\n<svg class="down control" viewBox="0 0 24 24">\n<path xmlns="http://www.w3.org/2000/svg" transform="rotate(180, 12, 12)" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"/>\n</svg>\n</div>';

const deleteHTML = '<svg class="delete control" viewBox="0 0 24 24">\n<path xmlns="http://www.w3.org/2000/svg" d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z"/>\n</svg>';

const headHMTL =
    '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\n' +
    '    <meta name="viewport" content="width=device-width">\n' +
    '    <meta name="color-scheme" content="light">\n' +
    '    <meta name="supported-color-schemes" content="light">\n' +
    '    <title></title>\n' +
    '    <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
    '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'

const style = '@import url(\'https://fonts.googleapis.com/css2?family=Prompt:wght@500;700&family=Spectral:wght@700&display=swap\');.content h1,.content h3{margin-bottom:.5rem;line-height:110%}.content{max-width:600px;margin:auto;background-color:#fff;font-family:Prompt,Geneva,sans-serif;font-size:.55rem;font-weight:500;color:#000d3b;-webkit-font-smoothing:antialiased}.content h1{width:100%;font-size:1rem;font-weight:700}.content h2,.content h3{width:100%;font-size:.8rem;font-weight:500;margin-top:0}.content h4,.content h5{font-size:.45rem;width:100%;text-align:center}.content h3,.content h4,.content strong{font-weight:700}.content h4{font-family:Spectral,serif}.content .button,.content h3 a{font-size:.55rem;font-weight:500;padding:4px 25px;text-decoration:none;border-radius:15px;color:#fff;background-color:#ec0b0c}.content .button p{display:inline;margin:0}.content table{margin-left:auto;margin-right:auto;margin-bottom:25px}.content .play{position:absolute;width:100%;height:100%}.content .social{display:inline-block;width:35px;margin: 20px 10px 15px}.content .social img{width:100%}.content .address{margin:0}.content .footer{text-align:center;color:#fff;background-color:#000d3b;margin-bottom:0}.content .footer a{color:inherit;text-decoration:underline}@media screen and (min-width:350px){.content body{font-size:.65rem}.content h1{font-size:1.2rem}.content h2,.content h3{font-size:1rem}.content h4{font-size:.6rem}}@media screen and (min-width:1000px){.content body{font-size:.75rem}.content h1{font-size:1.8rem}.content h2,.content h3{font-size:1.2rem}.content h4{font-size:.7rem}}';

const editorHead = document.querySelector('head');
const emailStyle = document.createElement('style');
emailStyle.innerHTML = style;

editorHead.appendChild(emailStyle);

const save = document.querySelector('#save');
save.addEventListener('click', () => {
    const contents = document.querySelectorAll('.content');
    let email = document.implementation.createHTMLDocument('');

    const head = email.querySelector('head');
    head.innerHTML = headHMTL;
    const styleElem = email.createElement('style');
    styleElem.innerHTML = style;
    head.appendChild(styleElem);

    const body = email.querySelector('body');
    const container = email.createElement('div');
    container.setAttribute('class', 'content');
    body.appendChild(container);
    for (const content of contents) {
        container.appendChild(content.children[0].cloneNode(true));
    }

    navigator.clipboard.writeText(new XMLSerializer().serializeToString(email));
})

