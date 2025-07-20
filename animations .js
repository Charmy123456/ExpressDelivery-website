// Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--animation-order', index);
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.service-card, .about-text, .about-image, .contact-info, .contact-form').forEach(el => {
        observer.observe(el);
    });
});