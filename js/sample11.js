const box1 = document.querySelector(".box:nth-child(even)");

const offsetX = box1.offsetLeft;
const offsetY = box1.offsetTop;

//box1に挿入
box1.insertAdjacentHTML(
  "beforeend",
  `<p>
    X : ${offsetX}
    Y : ${offsetY}
  </p>`
);
// console.log(offsetX, offsetY);

//
//BoundingClientRect
//
const box2 = document.querySelector(".box:nth-child(odd)");
const box2Rect = box2.getBoundingClientRect();

//box2に挿入
box2.insertAdjacentHTML(
  "beforeend",
  `<p>
        ${JSON.stringify(box2Rect).replace(/,/g, "<br>").replace(/[{}"]/g, "")}
  </p>`
);
console.log(box2Rect);