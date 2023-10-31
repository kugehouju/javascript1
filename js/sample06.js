// sample06.js

//querySelectorで.boxをすべて探す
const box1 = document.querySelector(".box:nth-child(2)");
const box2 = document.querySelector(".box:nth-child(3)");
const box3 = document.querySelector(".box:nth-child(4)");

console.log(box1);
console.log(box2);
console.log(box3);

// querySelectorAll ですべての.boxを全て探す
const boxs = document.querySelectorAll(".box");

console.dir(boxs);

// NodeListとループの組み合わせ
for (let i = 0; i < 3; i++) {
    console.log(boxs[i]);
}

// NodeListのデータにイベントをつける
for (let i = 0; i < 3; i++) {
    boxs[0].addEventListener(
        "click",
        function (event) {
            // <p>
            console.log(event.target);

            // .box
            // 1. NodeListの参照
            console.log( boxs[ i ]);
            // 2. event.currentTargetプロぱアティ
            console.log( event.currentTarget);
            // 3. 先祖を探し続ける
            console.log( (event.target).closest(".box"));
        }
    );
}