//sample02.js

//h1をクリックした時
document.querySelector( "h1" ).onclick = function () {
    console.log ( "h1 click");
}

//文字色をtomatoに設定する
document.querySelector( "h1" ).style.color="tomato";

//ダブルクリックをした時
document.querySelector("h1").addEventListener(
    "dblclick",
    function() {
        //文字色をsky blueに変更
        document.querySelector("h1").style.color="skyblue";
    }
)

//マウスカーソルを重ねた時
document.querySelector("h1").addEventListener(
    "mouseover",
    function() {
        //h1の文字色をsky blueに変更
        document.querySelector("h1").style.fontWeig"
    }
)

// h1にカーソルを動かしている時（重なっている時）
document.querySelector("h1").addEventListener(
    "mousemove",
    function() {
        //h1文字色 sky blue に変更
        console.log("mouse over")
    }
)