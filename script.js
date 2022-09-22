/* APARECE SOLAMENTE LA PANTALLA DE PRESENTACIÓN DEL JUEGO */
const presentacion = document.getElementById("openGame").style.display = "none";
const nuevaPalabra = document.getElementById("new-word").style.display = "none";
const nuevoJuego = document.getElementById("new-game").style.display = "flex";

const input = document.querySelector(".new-word__input");
const advertencia = document.querySelector(".warning");

const arrayPalabras = ["alura", "oracle", "html", "css", "challenge", "one", "javascript"]

/////////////////////////////
function palabraNueva() {
const palabraAleatoria = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)]
console.log(palabraAleatoria)
let palabraGuiones = palabraAleatoria.replace(/./g,"_ ")
console.log(palabraGuiones)
let hiddenWord = document.querySelector("#hidden-word")
hiddenWord.innerText = palabraGuiones;
}
//////////////////////////////

function entrar_nuevoJuego() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-game").style.display = "flex";
    palabraNueva()
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
        advertencia.innerText = "⚠ Ingrese una palabra o presione Cancelar"
    } else {
        document.getElementById("new-word").style.display = "none";
        document.getElementById("new-game").style.display = "flex";
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


