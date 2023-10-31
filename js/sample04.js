// sample04.js

// aタグを探す
let linkElem = document.querySelector("a");

// aをクリックしたらイベントが起きる
linkElem.addEventListener("click",function(enter) {
    // console.log("a click");

    // タグのデフォルトの挙動をを止める
    event.preventDefault();

    // 新しいウィンドウを開く
    window.open("https://click.ecc.ac.jp/ecc/rtakimoto/webc", "JS1");
})