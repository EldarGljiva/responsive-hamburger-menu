const mainMenu = document.querySelector(".mainMenu"); // Corrected class name
const closeMenu = document.querySelector(".closeMenu"); // Corrected class name
const openMenu = document.querySelector(".openMenu"); // Corrected class name

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
