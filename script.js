document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const body = document.body;

    const colors = {
        about: "#1e3a5f", // Dark blue for About section
        resume: "#4a5568", // Dark gray for Resume section
        "personal-statement": "#2c7a7b", // Teal for Personal Statement section
        contact: "#2d3748" // Darker gray for Contact section
    };

    function changeBackground() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && sectionTop >= 0) {
                const sectionId = section.getAttribute('id');
                body.style.backgroundColor = colors[sectionId];
            }
        });
    }

    function revealSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", () => {
        revealSection();
        changeBackground();
    });

    revealSection(); // Initial check on page load
    changeBackground(); // Initial background setup
});
