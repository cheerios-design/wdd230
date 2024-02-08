document.addEventListener("DOMContentLoaded", function () {
    const elementsToLazyLoad = document.querySelectorAll("main img, .hero-img img, header img, iframe");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elementsToLazyLoad.forEach(function (element) {
        observer.observe(element);
    });
});
