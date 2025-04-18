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
  } // Tabbed Booking Form

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
  }); // Initialize the first booking tab as active

  if (bookingTabs.length > 0 && bookingContents.length > 0) {
    bookingTabs[0].classList.add("active");
    bookingContents[0].classList.add("active");
  } // Scroll to Top Button

  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } // Smooth Scrolling for Navigation Links

  const navLinksSmooth = document.querySelectorAll(
    ".hero-radical-v7__nav .nav__links a"
  );

  navLinksSmooth.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: "smooth" }); // Close mobile menu after clicking a link

        if (navToggle && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          navToggle.classList.remove("ri-close-line");
          navToggle.classList.add("ri-menu-line");
          navToggle.classList.remove("active");
        }
      }
    });
  });
});
