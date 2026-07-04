// JAPALI Website Interactivity

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    // Icons have been removed, replaced by CSS background pattern.

    // Change nav background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 2rem';
            nav.style.background = 'rgba(255, 255, 255, 0.9)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            nav.style.padding = '1.5rem 2rem';
            nav.style.background = 'rgba(255, 255, 255, 0.05)';
            nav.style.boxShadow = 'none';
        }
    });

    // Add some subtle parallax to blueprint markers
    window.addEventListener('mousemove', (e) => {
        const markers = document.querySelectorAll('.blueprint-marker');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        markers.forEach(marker => {
            marker.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(menuToggle);

    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Staggered Reveal Animation
    const observerOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .brutalist, h1, h2').forEach(el => {
        revealObserver.observe(el);
    });

    // Slideshow Functionality for the solutions section
    const slideshow = document.querySelector('.slideshow-container');
    if (slideshow) {
        const slides = slideshow.querySelectorAll('.slide');
        const prevBtn = slideshow.querySelector('.slide-prev');
        const nextBtn = slideshow.querySelector('.slide-next');
        const dots = slideshow.querySelectorAll('.slide-dot');
        let currentIndex = 0;
        let slideInterval;
        const intervalTime = 5000; // 5 seconds autoplay

        function showSlide(index) {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');

            currentIndex = (index + slides.length) % slides.length;

            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetSlide = parseInt(dot.getAttribute('data-slide'));
                showSlide(targetSlide);
                resetAutoplay();
            });
        });

        function startAutoplay() {
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        function stopAutoplay() {
            clearInterval(slideInterval);
        }

        function resetAutoplay() {
            stopAutoplay();
            startAutoplay();
        }

        startAutoplay();

        slideshow.addEventListener('mouseenter', stopAutoplay);
        slideshow.addEventListener('mouseleave', startAutoplay);
    }

    // Hero Slideshow Functionality
    const heroSlideshowContainer = document.querySelector('.hero-slideshow-container');
    if (heroSlideshowContainer) {
        const heroSlides = heroSlideshowContainer.querySelectorAll('.hero-slide');
        const heroPrev = heroSlideshowContainer.querySelector('.hero-slide-prev');
        const heroNext = heroSlideshowContainer.querySelector('.hero-slide-next');
        let heroIndex = 0;
        let heroInterval;
        const heroIntervalTime = 3000; // 3 seconds autoplay

        function showHeroSlide(index) {
            heroSlides[heroIndex].classList.remove('active');
            heroIndex = (index + heroSlides.length) % heroSlides.length;
            heroSlides[heroIndex].classList.add('active');
        }

        function nextHeroSlide() {
            showHeroSlide(heroIndex + 1);
        }

        function prevHeroSlide() {
            showHeroSlide(heroIndex - 1);
        }

        heroNext.addEventListener('click', () => {
            nextHeroSlide();
            resetHeroAutoplay();
        });

        heroPrev.addEventListener('click', () => {
            prevHeroSlide();
            resetHeroAutoplay();
        });

        function startHeroAutoplay() {
            heroInterval = setInterval(nextHeroSlide, heroIntervalTime);
        }

        function stopHeroAutoplay() {
            clearInterval(heroInterval);
        }

        function resetHeroAutoplay() {
            stopHeroAutoplay();
            startHeroAutoplay();
        }

        startHeroAutoplay();

        // No pause on hover - user specified no pause behavior
    }
});
