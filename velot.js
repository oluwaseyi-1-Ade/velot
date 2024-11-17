const navButton = document.getElementById("nav-btn");
const dropdownLink = document.querySelectorAll("#dropdown-links li");
let dropdown = document.getElementById("dropdown");

navButtonClick = () => {
  dropdown.classList.toggle("translate-y-[150px]");
};
navButton.onclick = navButtonClick;

for (let i = 0; i <= 5; i++) {
  dropdownLink[i].onclick = () => {
    dropdown.classList.remove("translate-y-[150px]");
  }
}

// let age; //declaration
// let age1 = 20; //initialization