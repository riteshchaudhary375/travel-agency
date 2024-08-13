// Toggle Menu Functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  //   remix icons => ri-close-line, ri-menu-line
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll Reveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".home__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".home__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".home__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
