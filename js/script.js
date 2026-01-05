// ===== FADE-IN ON SCROLL ANIMATION =====

// Select all sections
const sections = document.querySelectorAll(".section");

// Observer options
const options = {
    threshold: 0.2
};

// Callback function
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, options);

// Observe each section
sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
// ===== ACTIVE NAV LINK ON SCROLL =====
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
