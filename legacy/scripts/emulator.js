let headHTML;
let style;
let sectionHTMLs;

fetch('./editor.json')
    .then((response) => response.json())
    .then((json) => {
        fetch('./email.txt')
            .then((response) => response.text())
            .then((email) => main(json, email))
    });

function main(json, email) {
    headHTML = json["headHTML"];
    style = json["style"];
    sectionHTMLs = json["sectionHTMLs"];

    setupSave();
    setupSections();
    setupEditor();
    setupEmail(email);
}