/* APARECE SOLAMENTE LA PANTALLA DE PRESENTACIÓN DEL JUEGO */
const presentacion = document.getElementById("presentation").style.display = "flex";
const nuevaPalabra = document.getElementById("new-word").style.display = "none";
const nuevoJuego = document.getElementById("new-game").style.display = "none";



function entrar_nuevoJuego() {
    document.getElementById("presentation").style.display = "none";
    document.getElementById("new-game").style.display = "flex";
}

function agregar_nuevaPalabra() {
    document.getElementById("presentation").style.display = "none";
    document.getElementById("new-word").style.display = "flex";
}

/* PANTALLA AGREGAR PALABRA NUEVA */
function guardarEmpezar() {
    document.getElementById("new-word").style.display = "none";
    document.getElementById("new-game").style.display = "flex";
}

function cancelar_nuevaPalabra() {
    document.getElementById("new-word").style.display = "none";
    document.getElementById("presentation").style.display = "flex";
}

/* PANTALLA JUEGO NUEVO */

 


function salir_nuevoJuego() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("presentation").style.display = "flex";
}