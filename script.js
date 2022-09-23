/* APARECE SOLAMENTE LA PANTALLA DE PRESENTACIÓN DEL JUEGO */
const presentacion = document.getElementById("openGame").style.display = "flex";
const nuevaPalabra = document.getElementById("new-word").style.display = "none";
const nuevoJuego = document.getElementById("new-game").style.display = "none";

/* INPUT, ARRAY Y ADVERTENCIA DE LA PANTALLA AGREGAR PALABRA */
const input = document.querySelector(".new-word__input");
const advertencia = document.querySelector(".warning");
const arrayPalabras = ["alura", "oracle", "html", "css", "challenge", "one", "javascript"]

/* PALABRA AL AZAR CON GUIONES */
function palabraNueva() {
    const palabraAleatoria = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)].toUpperCase();
    console.log(palabraAleatoria)
    let palabraGuiones = palabraAleatoria.replace(/./g, "_")
    console.log(palabraGuiones)
    let hiddenWord = document.querySelector(".hidden-word")
    hiddenWord.innerText = palabraGuiones;
}

/* EVENTO PARA CAPTURAR LAS LETRAS DEL TECLADO */
const letterPress = event => {
    let newLetter = event.key.toLocaleUpperCase();
    if (newLetter.match(/^[a-zñ]$/i)) { //solo toma caracteres alfabéticos, sin números ni símbolos
        console.log("letra " + newLetter);
    }
}

/* EVENTO PARA DEJAR DE CAPTURAR EL TECLADO */
function noLetterCapture() {
    document.removeEventListener("keydown", letterPress);

}


/* PANTALLA INICIAL */
function entrar_nuevoJuego() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-game").style.display = "flex";
    palabraNueva()
    document.addEventListener("keydown", letterPress);
}

function agregar_nuevaPalabra() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-word").style.display = "flex";
    input.focus();
}


/* PANTALLA AGREGAR PALABRA NUEVA */
function clearInputText() {
    input.value = ""
}

function guardarEmpezar() {
    if (input.value == "") {
        advertencia.innerText = "⚠ Ingrese una palabra o presione Cancelar"
        input.focus()
    } else {
        document.getElementById("new-word").style.display = "none";
        document.getElementById("new-game").style.display = "flex";
        arrayPalabras.push(input.value);
        clearInputText();
        advertencia.innerText = "";
        palabraNueva()
        document.addEventListener("keydown", letterPress);
        console.log(arrayPalabras); /* borrar console.log */
    }
}

function cancelar_nuevaPalabra() {
    document.getElementById("new-word").style.display = "none";
    document.getElementById("openGame").style.display = "flex";
    clearInputText()
}


/* PANTALLA AHORACADO */
function salir_nuevoJuego() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("openGame").style.display = "flex";
    noLetterCapture() //deja de capturar el teclado
}