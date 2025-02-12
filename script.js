document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".navlinks");
    const closeBtn = document.querySelector(".close");
  
    // Open the menu
    navToggle.addEventListener("click", function () {
      navLinks.classList.remove("hidden");
      navToggle.classList.add("hidden");
      closeBtn.classList.remove("hidden");
    });
  
    // Close the menu
    closeBtn.addEventListener("click", function () {
      navLinks.classList.add("hidden");
      navToggle.classList.remove("hidden");
      closeBtn.classList.add("hidden");
    });
  
    // Ensure menu closes on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navLinks.classList.add("hidden");
        navToggle.classList.remove("hidden");
        closeBtn.classList.add("hidden");
      }
    });
  });
  