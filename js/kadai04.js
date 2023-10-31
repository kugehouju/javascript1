let linkDoc = document.querySelector("#link_doc");
let linkHTML = document.querySelector("#link_html");
let linkCSS = document.querySelector("#link_css");
let linkJS = document.querySelector("#link_js");

linkDoc.addEventListener("click",function( enter ) {
    event.preventDefault();
    window.open("https://developer.mozilla.org/ja/", "kadai04")
}) 

linkHTML.addEventListener("click",function( enter ) {
    event.preventDefault();
    window.open("https://developer.mozilla.org/ja/docs/Web/HTML", "kadai04")
}) 

linkCSS.addEventListener("click",function( enter ) {
    event.preventDefault();
    window.open("https://developer.mozilla.org/ja/docs/Web/CSS", "kadai04")
}) 

linkJS.addEventListener("click",function( enter ) {
    event.preventDefault();
    window.open("https://developer.mozilla.org/ja/docs/Web/JavaScript", "kadai04")
}) 