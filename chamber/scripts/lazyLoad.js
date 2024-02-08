document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".sidebar img");

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

    images.forEach(function (image) {
        observer.observe(image);
    });
});
