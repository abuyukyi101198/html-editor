let headHTML;
let style;
let sectionHTMLs;

fetch('./editor.json')
    .then((response) => response.json())
    .then((json) => main(json));

function main(json) {
    headHTML = json["headHTML"];
    style = json["style"];
    sectionHTMLs = json["sectionHTMLs"];

    setupSave();
    setupSections();
    setupEditor();
}