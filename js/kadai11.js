const html = document.documentElement;

const body = document.body;

const lazyImages = document.querySelectorAll(".lazy");

let winHeight = body.clientHeight;

window.addEventListener("scroll", function () {
  for (let i = 0; i < lazyImages.length; i++) {
    // console.log(i, lazyImages[i].getBoundingClientRect());
    const lazyImageRect = lazyImages[i].getBoundingClientRect().top;
    if (lazyImageRect - winHeight <= 0) {
      lazyImages[i].classList.add("loaded");
    }
  }
});
