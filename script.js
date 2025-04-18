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

  // Tabbed Booking Form
  const bookingTabs = document.querySelectorAll(
    ".booking-card-v9__tabs button"
  );
  const bookingContents = document.querySelectorAll(
    ".booking-card-v9__content > div"
  );

  bookingTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.dataset.tab;

      bookingTabs.forEach((btn) => btn.classList.remove("active"));
      bookingContents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Initialize the first booking tab as active
  if (bookingTabs.length > 0 && bookingContents.length > 0) {
    bookingTabs[0].classList.add("active");
    bookingContents[0].classList.add("active");
  }

  const elementsToAnimate = document.querySelectorAll(
    "#about .section-radical__title, #about p, .offer-card-v3, .destination-card-v3, .booking-card-v9"
  );
  elementsToAnimate.forEach((element) => {
    element.classList.add("will-animate"); // Add a class to identify animatable elements
    observer.observe(element);
  });
});
