document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Custom Cursor Logic
    const cursor = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Effet hover sur les liens
    const links = document.querySelectorAll('a, .card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });

    // 2. Intersection Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // On cible les textes pour les faire apparaître
    const textElements = document.querySelectorAll('h2, .lead, .card');
    textElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(el);
    });

    // 3. 3D Tilt Effect sur les cartes (CodePen style)
    const cards = document.querySelectorAll('.tilt-effect');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Rotation max 10deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // 4. L'Easter Egg pour la console (Signature Pro)
    console.log(
        "%c GOoD!öT.io \n%c Fan Club Non Officiel du PAC ",
        "color: #e63946; font-size: 40px; font-weight: bold; text-shadow: 2px 2px #000;",
        "background: #111; color: #fff; padding: 5px; font-size: 14px;"
    );
    console.log("On ne réinvente pas la roue, on la fait tourner plus vite. Vive le web sémantique.");
});
