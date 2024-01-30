const naviBar = document.getElementById("category-navi")
const naviBarTop = naviBar.getBoundingClientRect().top
const naviBarHeight = naviBar.offsetHeight // ナビバーの高さを取得

window.addEventListener("scroll", () => {

	const scrollY = window.scrollY

	if (scrollY > naviBarTop) {
		naviBar.style.top = scrollY + "px"
	} else {
		naviBar.style.top = "0px"
	}
})