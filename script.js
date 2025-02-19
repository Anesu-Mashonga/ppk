const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function moveToNextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateCarousel();
}

function moveToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Loop to the last slide
    }
    updateCarousel();
}

prevButton.addEventListener('click', moveToPrevSlide);
nextButton.addEventListener('click', moveToNextSlide);

// Optional: Auto-slide functionality
let autoSlideInterval = setInterval(moveToNextSlide, 3500);

// Pause auto-slide on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(moveToNextSlide, 3500);
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });
});
