const htmlEditor = CodeMirror(document.querySelector('.editor .html-code'),{
    lineNumbers: true,
    tabSize: 10000,
    mode: "xml"
});
const cssEditor = CodeMirror(document.querySelector('.editor .css-code'),{
    lineNumbers: true,
    tabSize: 10000,
    mode: "css"
});
const jsEditor = CodeMirror(document.querySelector('.editor .js-code'),{
    lineNumbers: true,
    tabSize: 10000,
    mode: "javascript"
});

document.querySelector('#run-btn').addEventListener("click", function(){
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector('#preview-window').contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();
});


document.querySelector('#rot').addEventListener("click", function(){
    document.querySelector('.editor').classList.toggle('rot-active');
});

