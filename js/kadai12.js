const lazyElement = document.querySelectorAll(".lazy");

const lazyElementObserverOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const lazyElementObserver = new IntersectionObserver((entries) => {
  console.log(entries);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add("loaded");
      lazyElementObserver.unobserve(entries[i].target);
    }
  }
}, lazyElementObserverOption);

for (let i = 0; i < lazyElement.length; i++) {
  lazyElementObserver.observe(lazyElement[i]);
}
