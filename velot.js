let navBar = document.getElementById("navbar")
let navLinks = document.getElementsByClassName("nav-links");


navBarClick = () => {
   navLinks[0].classList.add("small-nav")
   }

navBar.addEventListener("click", navBarClick)