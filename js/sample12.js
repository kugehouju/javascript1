// sample12

// .box
const box = document.querySelector(".box");

// InterSection Observer
const Observer = new IntersectionObserver(
    (entries,Observer) => {
        for(let i = 0; i < entries.length; i++) {
            if(entries[i].isIntersecting) {
                console.dir("InterSection Observer")
                console.dir(entries[i])
                //監視対象から除外
                Observer.unobserve(entries[i].target)
            }
        }
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }
);

// Observerへ監視対象を登録
Observer.observe(box);