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
const capturarLetra = event => {
    let newLetter = event.key.toLocaleUpperCase();
    if (newLetter.match(/^[a-zñ]$/i)) { //solo toma caracteres alfabéticos, sin números ni símbolos
        console.log("letra " + newLetter);
    }
}

/* EVENTO PARA DEJAR DE CAPTURAR EL TECLADO */
function noCapturarLetra() {
    document.removeEventListener("keydown", capturarLetra);
}


///* PANTALLA INICIAL *///
function entrar_nuevoJuego() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-game").style.display = "flex";
    palabraNueva()
    document.addEventListener("keydown", capturarLetra);
}

function agregar_nuevaPalabra() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-word").style.display = "flex";
    input.focus();
}


///* PANTALLA AGREGAR PALABRA NUEVA *///
function clearInputText() {
    input.value = ""
}

/* EVENTO 'ENTER' PARA GRABAR PALABRA NUEVA EN EL INPUT Y COMENZAR UNA NUEVA PARTIDA */
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        guardarEmpezar();
    }
});

/* EVENTO 'ESCAPE' PARA SALIR A LA PANTALLA PRINCIPAL */
document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
        salir_nuevoJuego();        
        document.getElementById("new-word").style.display = "none";
        advertencia.innerText = "";
    }
});


/* BOTÓN GUARDAR Y EMPEZAR */
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
        document.addEventListener("keydown", capturarLetra);
        console.log(arrayPalabras); /* borrar console.log */
    }
}

/* BOTÓN CANCELAR NUEVA PALABRA Y VOLVER A LA PANTALLA PRINCIPAL */
function cancelar_nuevaPalabra() {
    document.getElementById("new-word").style.display = "none";
    document.getElementById("openGame").style.display = "flex";
    clearInputText()
    advertencia.innerText = "";
}


///* PANTALLA AHORACADO *///
function salir_nuevoJuego() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("openGame").style.display = "flex";
    noCapturarLetra() //deja de capturar el teclado
}













/*
Requisitos:
- Al completar el dibujo de la horca, debe ser mostrado un mensaje "Fin del juego" en la pantalla;
- Si se completa la palabra correcta antes de que se acaben los intentos, debe ser mostrado un mensaje de "Ganaste, Felicidades!" en la pantalla.
- La página debe tener los guiones indicando cada letra da palabra, separados por un espacio;
- Las letras equivocadas deben aparecer en la pantalla, pero no pueden aparecer de forma repetida;
- Las letras correctas deben aparecer en la pantalla encima de los guiones, en la posición correcta em relación a la palabra.


+ Debe funcionar solo con letras mayúsculas;
+ Para comenzar el juego la página debe tener un botón de "Iniciar Juego";
+ No deben ser utilizadas letras con acentos ni caracteres especiales;
+ No debe ser posible escribir números dentro del juego.
+ La página debe tener un campo para inserción de texto con la finalidad de adicionar nuevas palabras al juego, e un botón "Agregar palabra". */