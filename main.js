const boton = document.querySelector(".boton");
const menu = document.querySelector(".menu");
const quitar = document.querySelector(".quitar");

boton.addEventListener("click", mostrarMenu);
quitar.addEventListener("click", quitarMenu);

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