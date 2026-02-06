/*
Create minimal JavaScript functionality for a static website.

Requirements:
- Smooth scroll for navigation links.
- Optional mobile menu toggle.
- No external libraries.
- Clean and readable code.
*/

document.addEventListener('DOMContentLoaded', function () {

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            });
        });
    }

    // Initialize Swiper for Gallery
    const swiper = new Swiper('.gallery-swiper', {
        // Essential mobile settings
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,

        // Mobile-first interaction
        touchEventsTarget: 'container',
        resistanceRatio: 0.7,

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Lazy loading
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
        },

        // Responsive breakpoints
        breakpoints: {
            768: {
                spaceBetween: 30,
            },
            1024: {
                spaceBetween: 40,
            }
        }
    });

});
