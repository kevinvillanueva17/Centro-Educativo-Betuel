document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel .slide');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideInterval = 5000; // Intervalo de 3 segundos

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Inicializar el primer slide
    showSlide(currentSlide);

    // Cambiar slide automáticamente
    setInterval(nextSlide, slideInterval);
});

