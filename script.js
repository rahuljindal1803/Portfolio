let menu = document.querySelector("#menu");
let navbar = document.querySelector(".nav__links");

menu.onclick = () => {
  menu.classList.toggle("bx_menu");
  navbar.classList.toggle("open");
};
