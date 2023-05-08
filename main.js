const boton = document.querySelector(".boton");
const menu = document.querySelector(".menu");
const quitar = document.querySelector(".quitar");
const menuItems = document.querySelectorAll(".navresponsive");


boton.addEventListener("click", mostrarMenu);
quitar.addEventListener("click", quitarMenu);
menuItems[0].addEventListener("click", quitarMenu);
menuItems[1].addEventListener("click", quitarMenu);
menuItems[2].addEventListener("click", quitarMenu);


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