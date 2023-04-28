# E-mail Editor

### *Description*

This repository contains a simple frontend web application for creating newsletter e-mails using prefabricated HTML
sections. This editor's intended use is within a FileMaker WebViewer element for full save/edit functionality.

### *Contents*

* `legacy/`: deprecated editor contents.
  * `components/`: `HTML` code for subcomponents of the editor view.
  * `quill/`: locally installed code for _**[Quill JS](https://quilljs.com)**_.
  * `scripts/`: deprecated scripts.
  * `stylesheets/`: deprecated stylesheets.
    * `components/`: component stylesheets.
    * `email.scss`: stylesheets for the email being constructed _(designed specifically
      for **[YERO International Education](https://www.ye-ro.com)**_).
  * `index.html`: deprecated editor `HTML`.
  * `script.js`: deprecated editor `JavaScript` file.
  * `style.scss`: editor stylesheet.
* `novel/`: editor code.
  * `scripts/`: final editor scripts.
    * `editorHandler.js`: script for handling the functions of the editor panel.
    * `emailEditor.js`: unified script for all editor functionalities.
    * `previewHandler.js`: script for handling the email preview.
    * `sectionHandler.js`: script for handling section editing and editor interface.
  * `stylesheets/`: final editor stylesheets.
    * `email.scss`: stylesheet for the email being constructed _(updated version of `legacy/stylesheets/email.scss)_.
    * `style.scss`: stylesheet for the editor.
  * `index.html`: editor `HTML`.
* `.gitignore`
* `editor.json`: editor parameter containing email style, header, and section `HTML`s.
* `email.txt`: test file for passing an existing email for editing instead of a blank starter.
* `index.html`: editor `HTML` with style and scripts embedded.