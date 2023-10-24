// This file will be used to create a menu, to be used on all pages
let myLinks = document.getElementById('page-links')
let menuButton  = document.getElementById('menu-icon')

menuButton.addEventListener("click", function () {
    if (myLinks.style.display === "grid") {
        myLinks.style.display = "none";
      } else {
        myLinks.style.display = "grid";
      }
})