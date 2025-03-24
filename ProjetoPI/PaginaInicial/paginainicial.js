document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function mudarSlide(step) {
        slideIndex += step;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        mostrarSlide(slideIndex);
    }

    // Mudar slide automaticamente a cada 3 segundos
    setInterval(() => mudarSlide(1), 3000);

    // Inicia o primeiro slide
    mostrarSlide(slideIndex);
});
