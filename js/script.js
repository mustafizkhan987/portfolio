// ==============================
// Smooth Scroll for Internal Links
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ==============================
// Section Reveal on Scroll
// ==============================
const sections = document.querySelectorAll(".section");

const revealSection = () => {
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// ==============================
// Button Click Feedback (Optional polish)
// ==============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("clicked");
        setTimeout(() => {
            btn.classList.remove("clicked");
        }, 150);
    });
});
