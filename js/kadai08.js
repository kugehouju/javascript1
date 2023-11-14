const slider = document.querySelectorAll("#slider li");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let currentIndex = 0

function showSlider(index) {
    slider.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slider.length;
    showSlider(currentIndex);
}, 3000)

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 ) % slider.length; 
    showSlider(currentIndex);
})

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.length) % slider.length;
    showSlider(currentIndex);
})