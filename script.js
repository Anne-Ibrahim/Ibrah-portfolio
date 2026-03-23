// 1. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// 2. Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reveal the element
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // If it's a skill bar, trigger the fill
            if (entry.target.classList.contains('skill-bar')) {
                const fill = entry.target.querySelector('.progress-fill');
                // Temporarily store the width from the style attribute and apply it
                const targetWidth = fill.getAttribute('style').split('width:')[1];
                fill.style.width = targetWidth;
            }
        }
    });
}, observerOptions);

// Initialize elements for observation
document.querySelectorAll('.project-card, .skill-bar, .timeline li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);

    // Example: Simple contact form submission
    document.getElementById('contact-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
    });
});