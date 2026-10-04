// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// =========================
// HEADER SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(45, 33, 27, 0.95)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
    }

});


// =========================
// BOOKING BUTTON
// =========================

const bookingButton = document.querySelector(
    '.booking .btn-primary'
);

if (bookingButton) {
    bookingButton.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Thank you for your interest in Aura Villa. " +
            "Booking availability will be available soon."
        );

    });
}