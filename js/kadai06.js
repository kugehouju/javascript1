const items = document.querySelectorAll(".item img");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function() {
        items[i].classList.add("over")
    })
    items[i].addEventListener("mouseout", function() {
        items[i].classList.remove("over")
    })
}