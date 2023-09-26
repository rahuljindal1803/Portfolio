let menu = document.querySelector("#menu");
let navbar = document.querySelector(".nav__links");

menu.onclick = () => {
  menu.classList.toggle("bx_menu");
  navbar.classList.toggle("open");
};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      console.log("clicked");
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
