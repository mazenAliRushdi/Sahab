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

  // Parallax Effect for Hero Background
  const heroBgImage = document.getElementById("hero-bg-image");
  if (heroBgImage) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      heroBgImage.style.transform = `translateY(${scrollY * 0.2}px)`;
    });
  }

  // Smooth Scrolling for Navigation Links
  const navLinksSmoothScroll = document.querySelectorAll(
    ".hero-radical-v7__nav .nav__links a"
  );

  navLinksSmoothScroll.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });

        // Close mobile menu after clicking a link
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          navToggle.classList.remove("ri-close-line");
          navToggle.classList.remove("active");
          navToggle.classList.add("ri-menu-line");
        }
      }
    });
  });

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

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Intersection Observer for Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 0.2, // Trigger animation when 20% of the element is visible
    }
  );

  const elementsToAnimate = document.querySelectorAll(
    "#about .section-radical__title, #about p, .offer-card-v3, .destination-card-v3, .booking-card-v9, .hero-radical-v7__content, .hero-radical-v7__title, .hero-radical-v7__subtitle, .call-to-action .btn"
  );
  elementsToAnimate.forEach((element) => {
    element.classList.add("will-animate"); // Add a class to identify animatable elements
    observer.observe(element);
  });
});
