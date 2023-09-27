let menu = document.querySelector("#menu");
let navbar = document.querySelector(".nav__links");

menu.onclick = () => {
  menu.classList.toggle("bx_menu");
  navbar.classList.toggle("open");
  menu.classList.toggle("bx_menu");
};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offset = 90;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;
        const easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
          easing: easing,
        });
      }
    });
  });
});

// script.js
const signupButton = document.getElementById("connect-btn");
const closeBtn = document.getElementById("close-button");
const signupFormContainer = document.getElementById("signup-form-container");

signupButton.addEventListener("click", (e) => {
  signupFormContainer.style.display = "flex";
  e.preventDefault();
});

closeBtn.addEventListener("click", () => {
  signupFormContainer.style.display = "none";
});
