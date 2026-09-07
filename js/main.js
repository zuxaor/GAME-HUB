/* =========================================================
   GAME HUB - JAVASCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       MENU MOBILE
       ----------------------------------------------------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });
    }


    /* -----------------------------------------------------
       RECHERCHE
       ----------------------------------------------------- */

    const searchInputs = document.querySelectorAll(
        ".search-box input, .header-search input"
    );

    searchInputs.forEach(input => {

        input.addEventListener("input", () => {

            const query = input.value.toLowerCase().trim();

            const cards = document.querySelectorAll(
                ".game-card, .news-card, [data-search]"
            );

            cards.forEach(card => {

                const text = card.textContent.toLowerCase();

                if (!query || text.includes(query)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });


    /* -----------------------------------------------------
       FILTRES
       ----------------------------------------------------- */

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            const items = document.querySelectorAll(
                ".game-card, .news-card, [data-category]"
            );

            items.forEach(item => {

                if (!filter || filter === "all") {
                    item.style.display = "";
                    return;
                }

                const category =
                    item.dataset.category ||
                    item.getAttribute("data-category");

                if (category === filter) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });


    /* -----------------------------------------------------
       ANIMATION À L'APPARITION
       ----------------------------------------------------- */

    const animatedElements = document.querySelectorAll(
        ".card, .section-header, .hero-content"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("animate-up");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.08
            }
        );

        animatedElements.forEach(element => {
            observer.observe(element);
        });

    }


    /* -----------------------------------------------------
       DATE AUTOMATIQUE
       ----------------------------------------------------- */

    const dateElements = document.querySelectorAll("[data-date]");

    dateElements.forEach(element => {

        const date = element.dataset.date;

        if (!date) return;

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) return;

        element.textContent = parsedDate.toLocaleDateString(
            "fr-FR",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

    });


    /* -----------------------------------------------------
       ANNÉE DU FOOTER
       ----------------------------------------------------- */

    const yearElements = document.querySelectorAll(
        "[data-current-year]"
    );

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    /* -----------------------------------------------------
       FERMER LE MENU MOBILE APRÈS UN CLIC
       ----------------------------------------------------- */

    document.querySelectorAll(".main-nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (mainNav) {
                mainNav.classList.remove("open");
            }

        });

    });


    /* -----------------------------------------------------
       BOUTON RETOUR EN HAUT
       ----------------------------------------------------- */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});
