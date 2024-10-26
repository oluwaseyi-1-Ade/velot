const navBar = document.getElementById("navbar");
const navLinks = document.getElementsByClassName("nav-links");

navBarClick = () => {
  navLinks[0].setAttribute();
  if (navLinks[0].classList.contains("hidden")) {
    navLinks[0].classList.remove("hidden");
  } else {
    navLinks[0].classList.add("hidden");
  }
};

navBar.addEventListener("click", navBarClick);
let age; //declaration
let age1 = 20; //initialization
