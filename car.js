function openLightbox(src) {
    document.getElementById("lightbox").classList.add("active");
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
    document.getElementById("lightbox-img").src = "";
}
// Scroll पर header छोटा होगा
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const title = document.querySelector(".main-title");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
        title.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
        title.classList.remove("shrink");
    }
});
