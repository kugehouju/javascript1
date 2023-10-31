//カラーピッカーで選択した色を背景に反映する。
//カラーピッカーはプログラム寄りな言い方
//set_colorで選択した色をbodyのbackground-colorに反映する。

//タグを探す
document.querySelector( "#set_color" );

//コンソール画面に表示する
console.log(document.querySelector( "#set_color" ).value);

//bodyのbackground-colorを変更する。
document.body.style.backgroundColor = "#00CCFF";

//#set_color　色設定を変更したら
document.querySelector("#set_color").oninput = function() {
    //bodyの背景色を#set_colorのvalueに設定する
    document.body.style.backgroundColor = document.querySelector("#set_color").value;

//h1に #set_color のカラーコードを表示させる。
console.log(document.querySelector("h1"));

document.querySelector("h1").textContent = document.querySelector("#set_color").value
}
