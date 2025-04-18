document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("ri-menu-line");
      navToggle.classList.toggle("ri-close-line");
      navToggle.classList.toggle("active");
    });
  }

  const elementsToAnimate = document.querySelectorAll(
    "#about .section-radical__title, #about p, .offer-card-v3"
  );
  elementsToAnimate.forEach((element) => {
    element.classList.add("will-animate"); // Add a class to identify animatable elements
    observer.observe(element);
  });
});
