const menubar = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

function openMenu() {
    menubar.classList.add("show-menu");
    overlay.classList.add("show");
}


function coloseMenu() {
    menubar.classList.remove("show-menu");
    overlay.classList.remove("show");
}

function closeEffect() {
    menubar.classList.remove("show-menu");
    overlay.classList.remove("show");
}