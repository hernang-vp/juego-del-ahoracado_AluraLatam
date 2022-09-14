/* APARECE SOLAMENTE LA PANTALLA DE PRESENTACIÓN DEL JUEGO */
const presentacion = document.getElementById("openGame").style.display = "flex";
const nuevaPalabra = document.getElementById("new-word").style.display = "none";
const nuevoJuego = document.getElementById("new-game").style.display = "none";

const input = document.querySelector(".new-word__input");
const advertencia = document.querySelector(".warning");

let arrayPalabras = ["alura", "oracle", "html", "css", "challenge", "one", "javascript"]



function entrar_nuevoJuego() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-game").style.display = "flex";
}

function agregar_nuevaPalabra() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-word").style.display = "flex";
}

/* PANTALLA AGREGAR PALABRA NUEVA */
function clearInputText() {
    input.value = ""
}

function guardarEmpezar() {
    if (input.value == "") {
        // document.getElementById("new-word").style.display = "none";
        document.getElementById("new-game").style.display = "flex";
        advertencia.innerText = "⚠ Ingrese una palabra o presione Cancelar"
    } else {
        arrayPalabras.push(input.value);
        clearInputText();
        advertencia.innerText = "";
        console.log(arrayPalabras); /* borrar console.log */
    }
}

function cancelar_nuevaPalabra() {
    document.getElementById("new-word").style.display = "none";
    document.getElementById("openGame").style.display = "flex";
    clearInputText()
}

/* PANTALLA JUEGO NUEVO */

function salir_nuevoJuego() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("openGame").style.display = "flex";
}


function prueba() {
    let prueba = `
    <h1>hola</h1>
  `
    console.log(prueba)
}