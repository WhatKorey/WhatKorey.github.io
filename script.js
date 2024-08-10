document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const body = document.body;

    const colors = {
        about: "#1e3a5f",
        resume: "#4a5568",
        "personal-statement": "#2c7a7b",
        contact: "#2d3748"
    };

    const changeBackground = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && sectionTop >= 0) {
                const sectionId = section.getAttribute('id');
                body.style.backgroundColor = colors[sectionId];
            }
        });
    };

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", () => {
        revealSection();
        changeBackground();
    });

    revealSection();
    changeBackground();
});
