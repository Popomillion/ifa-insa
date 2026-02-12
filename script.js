/* =============================================
   IFA - INSA Finance Association
   JavaScript principal
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // Navigation
    // =========================================
    
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect on navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // =========================================
    // Smooth scroll for anchor links
    // =========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =========================================
    // Animate elements on scroll
    // =========================================
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.timeline-item, .article-card, .video-card, .membership-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // =========================================
    // Poll functionality
    // =========================================
    
    const pollForm = document.getElementById('poll-form');
    if (pollForm) {
        const pollOptions = pollForm.querySelectorAll('.poll-option');
        
        pollOptions.forEach(option => {
            const bar = option.querySelector('.poll-bar');
            const percentage = getComputedStyle(bar).getPropertyValue('--percentage');
            
            // Show results on hover
            option.addEventListener('mouseenter', function() {
                bar.style.width = percentage;
            });
            
            option.addEventListener('mouseleave', function() {
                if (!option.querySelector('input').checked) {
                    bar.style.width = '0';
                }
            });
        });
        
        pollForm.addEventListener('submit', function(e) {
            const selected = pollForm.querySelector('input[name="reponse"]:checked');
            if (!selected) {
                e.preventDefault();
                alert('Veuillez sélectionner une option');
                return;
            }
            
            // Show all bars before submit
            pollOptions.forEach(option => {
                const bar = option.querySelector('.poll-bar');
                const percentage = getComputedStyle(bar).getPropertyValue('--percentage');
                bar.style.width = percentage;
            });
            
            // Change button text
            pollForm.querySelector('button').textContent = 'Envoi en cours...';
        });
    }
    
    // =========================================
    // Form validation and submission
    // =========================================
    
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Skip poll form
        if (form.id === 'poll-form') return;
        
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    field.style.borderColor = '#e53e3e';
                } else {
                    field.classList.remove('error');
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
        
        // Remove error style on input
        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                this.style.borderColor = '';
            });
        });
    });
    
    // =========================================
    // Newsletter form special handling
    // =========================================
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            // Let form submit normally to Formspree
            // Add visual feedback
            const btn = this.querySelector('button');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        });
    }
    
    // =========================================
    // Membership form - type selection highlight
    // =========================================
    
    const membershipRadios = document.querySelectorAll('.radio-option input[name="type_membre"]');
    membershipRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            membershipRadios.forEach(r => {
                r.closest('.radio-option').style.borderColor = '';
                r.closest('.radio-option').style.background = '';
            });
            
            if (this.checked) {
                this.closest('.radio-option').style.borderColor = '#3182ce';
                this.closest('.radio-option').style.background = 'rgba(49, 130, 206, 0.05)';
            }
        });
    });
    
    // =========================================
    // Active navigation link on scroll
    // =========================================
    
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // =========================================
    // Video cards click handler
    // =========================================
    
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add YouTube embed functionality here
            alert('La vidéo sera bientôt disponible !');
        });
    });
    
    // =========================================
    // Article read more functionality
    // =========================================
    
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // You can add article modal or page redirect here
            alert('L\'article complet sera bientôt disponible !');
        });
    });
    
    // =========================================
    // Counter animation for stats
    // =========================================
    
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // =========================================
    // Lazy loading for images
    // =========================================
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // =========================================
    // Print current year in footer
    // =========================================
    
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', currentYear);
    }
    
});

// =========================================
// Utility functions
// =========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =========================================
// Bureau Members Carousel
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('bureauCarousel');
    if (!carousel) return;
    
    const members = carousel.querySelectorAll('.bureau-member');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    let autoSlideInterval;
    const autoSlideDelay = 3000; // 3 seconds
    
    // Function to show a specific member
    function showMember(index) {
        // Handle wrapping
        if (index < 0) index = members.length - 1;
        if (index >= members.length) index = 0;
        
        // Update current index
        currentIndex = index;
        
        // Hide all members
        members.forEach(member => {
            member.classList.remove('active');
        });
        
        // Show the target member
        members[currentIndex].classList.add('active');
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Function to go to next member
    function nextMember() {
        showMember(currentIndex + 1);
    }
    
    // Function to go to previous member
    function prevMember() {
        showMember(currentIndex - 1);
    }
    
    // Start auto-slide
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextMember, autoSlideDelay);
    }
    
    // Stop auto-slide
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevMember();
            startAutoSlide(); // Reset timer on manual navigation
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextMember();
            startAutoSlide(); // Reset timer on manual navigation
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showMember(index);
            startAutoSlide(); // Reset timer on manual navigation
        });
    });
    
    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
    }, { passive: true });
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - go to next
                nextMember();
            } else {
                // Swipe right - go to previous
                prevMember();
            }
        }
    }
    
    // Pause auto-slide on hover
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // Initialize carousel
    showMember(0);
    startAutoSlide();
});
