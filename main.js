document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['#about', '#skills', '#projects', '#resume'];
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const springEase = "cubic-bezier(0.34, 1.56, 0.64, 1)";

    // 1. Smooth Scroll Logic
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Handle internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: { y: href, offsetY: navHeight },
                    ease: "power3.inOut"
                });
            }
        });
    });

    // 2. ScrollSpy: Update active link on scroll
    sections.forEach(id => {
        ScrollTrigger.create({
            trigger: id,
            start: "top center",
            end: "bottom center",
            onEnter: () => updateActiveLink(id),
            onEnterBack: () => updateActiveLink(id)
        });
    });

    function updateActiveLink(id) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === id) {
                link.classList.add('active');
            }
        });
    }

    // 3. Section Entrance Animations
    const animatedSections = gsap.utils.toArray('section, main');
    animatedSections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 40,
            duration: 0.8, // Adjusted slightly from 0.4 for better visual flow with Spring
            ease: springEase
        });
    });

    // 4. Hero & Title Entrance
    gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: springEase,
        delay: 0.2
    });

    // 5. Project Card Staggered Entrance (Refined)
    gsap.utils.toArray(".works-grid").forEach(grid => {
        const cards = grid.querySelectorAll(".project-card");
        gsap.from(cards, {
            scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: springEase
        });
    });

    // 6. Project Card Hover Interaction
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.4,
                ease: springEase,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.5)",
                overwrite: 'auto'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.3)",
                overwrite: 'auto'
            });
        });
    });
});
