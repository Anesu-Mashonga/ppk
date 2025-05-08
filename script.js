// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') { 
            e.preventDefault();
            return;
        }

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            const headerOffset = 80; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            if (mobileMenu && menuBtn && mobileMenu.classList.contains('open')) {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        }
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
            backToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animation on Scroll
const slideUpElements = document.querySelectorAll('.slide-up-animation');

const animateOnScroll = () => {
    slideUpElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements and apply transitions
slideUpElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    const delay = el.style.animationDelay || '0s';
    el.style.transition = `opacity 0.6s ease-out ${delay}, transform 0.6s ease-out ${delay}`;
    el.style.animationDelay = '';
});

// Initial check on load and then on scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

let currentSlideIdx = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide'); // Make sure you have elements with this class
const carouselTrack = document.querySelector('.carousel-track'); // Make sure you have an element with this class

function showCarouselSlide(index) {
    if (!carouselTrack || carouselSlides.length === 0) return;

    const totalCarouselSlides = carouselSlides.length;
    if (index >= totalCarouselSlides) currentSlideIdx = 0;
    else if (index < 0) currentSlideIdx = totalCarouselSlides - 1;
    else currentSlideIdx = index;

    const offset = -currentSlideIdx * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
}

// Auto-advance carousel if elements exist
if (carouselTrack && carouselSlides.length > 0) {
    setInterval(() => {
        showCarouselSlide(currentSlideIdx + 1);
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});