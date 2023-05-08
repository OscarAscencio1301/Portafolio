const boton = document.querySelector(".boton");
const menu = document.querySelector(".menu");
const quitar = document.querySelector(".quitar");
const menuItems = document.querySelectorAll(".navresponsive");


boton.addEventListener("click", mostrarMenu);
quitar.addEventListener("click", quitarMenu);
menuItems[0].addEventListener("click", quitarMenu2);
menuItems[1].addEventListener("click", quitarMenu2);
menuItems[2].addEventListener("click", quitarMenu2);


function mostrarMenu(e) {
    e.preventDefault();
    menu.classList.remove("menuarriba");
    menu.classList.add("menuabajo");

}

function quitarMenu(e) {
    e.preventDefault();
    menu.classList.remove("menuabajo");
    menu.classList.add("menuarriba");

}

function quitarMenu2(e) {
    menu.classList.remove("menuabajo");
    menu.classList.add("menuarriba");

}