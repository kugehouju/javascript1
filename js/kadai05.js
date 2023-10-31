const blank = document.querySelectorAll(".blank");

for (let i = 0; i < blank.length; i++) {
    blank[i].addEventListener("click", function (event) {
        event.preventDefault();
        window.open(blank[i].href, "kadai05")
    })
}