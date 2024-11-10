const navButton = document.getElementById("nav-btn");
const navLinks = document.getElementsByClassName("nav-links");
const link = document.getElementsByTagName("li a");
let dropdown = document.getElementById("dropdown");

navButtonClick = () => {
  dropdown.classList.toggle("active");
  dropdown.classList.remove(" mt-[-400px]");
  console.log("ade");
};

navButton.addEventListener("click", navButtonClick);

// let age; //declaration
// let age1 = 20; //initialization
