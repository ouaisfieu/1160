document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');

    menuToggle.addEventListener('click', () => {
        // Toggle classe active
        nav.classList.toggle('active');
        
        // Accessibilité (ARIA)
        const isExpanded = nav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        // Animation simple de l'icône
        if (isExpanded) {
            hamburger.style.background = 'transparent';
            // On pourrait ajouter des transformations CSS pour faire une croix ici
        } else {
            hamburger.style.background = 'var(--dark)';
        }
    });

    // 2. Fermer le menu si on clique sur un lien (UX Mobile)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 3. Highlight du menu au scroll (Active State)
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.main-nav ul li a');

    window.onscroll = () => {
        var current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) { // -150 pour compenser le header fixe
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute("href").includes(current)) {
                li.classList.add("active");
            }
        });
    };
});
