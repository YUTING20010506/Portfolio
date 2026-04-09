document.addEventListener('DOMContentLoaded', () => {
    // 1. 進場動畫: .hero-title 淡入並向上位移
    // 參考 transition.duration.slow (400ms = 0.4s)
    gsap.from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out"
    });

    // 2. 卡片互動: .project-card Hover 效果
    // 使用 GSAP 的預設 Back 曲線來模擬 JSON 中的 Spring (cubic-bezier(0.34, 1.56, 0.64, 1))
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.4,
                ease: "back.out(1.7)", // 模擬 Spring 效果
                boxShadow: "0px 4px 12px rgba(0,0,0,0.4)", // shadows.base
                backgroundImage: "linear-gradient(135deg, rgba(255,183,28,0.06) 0%, transparent 60%)", // card-hover
                overwrite: 'auto'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.3)", // shadows.sm
                backgroundImage: "none",
                overwrite: 'auto'
            });
        });
    });
});
