String.prototype.replaceAt = function (i, letra) {
    return this.substring(0, i) + letra + this.substring(i + letra.length);
}

/* APARECE SOLAMENTE LA PANTALLA DE PRESENTACIÓN DEL JUEGO */
const presentacion = document.getElementById("openGame").style.display = "flex";
const nuevaPalabra = document.getElementById("new-word").style.display = "none";
const nuevoJuego = document.getElementById("new-game").style.display = "none";

const arrayPalabras = ["gato", "perro", "elefante", "conejo", "lemur", "gorila", "ardilla", "pato", "gallina"];
const wrongLetters = document.querySelector(".letrasIncorrectas")

let palabra = null
let palabraConGuiones = null
let arrayLetrasIncorrectas = [];
let contadorFallos = 0;

const enfocar = document.querySelector(".ingresarLetra");
let dibujoAhorcado = document.querySelector("#ahorcado");
const escribirLetra = document.querySelector(".ingresarLetra");
const juegoGanado = document.querySelector("#won-game");

function palabraNueva() {
    palabra = arrayPalabras[(Math.floor(Math.random() * arrayPalabras.length))];
    console.log(palabra)
    palabraConGuiones = palabra.replace(/./g, "_ ");
    console.log(palabraConGuiones)
    document.querySelector(".output").innerHTML = palabraConGuiones;
    contadorFallos = 0
    dibujoAhorcado.style.backgroundPosition = 0;
    juegoGanado.style.display = "none"
    enfocar.focus();
    arrayLetrasIncorrectas = [];
    wrongLetters.innerHTML = "";
}

/* //////////////////////////////////////////////////////////// */
escribirLetra.addEventListener("keyup", function (event) {
    let newLetter = event.key.toUpperCase();

    if (newLetter.match(/^[a-zñ]$/i)) {
        console.log("ltr: " + newLetter)
        let letra = document.querySelector(".ingresarLetra").value;
        let haFallado = true;
        let repetida = false;
        for (let i in palabra) {
            if (letra == palabra[i]) {
                palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
                haFallado = false;
            }
        }

        if (haFallado) {
            for (let i in arrayLetrasIncorrectas) {
                if (letra == arrayLetrasIncorrectas[i]) {
                    console.log("ltr" + arrayLetrasIncorrectas);
                    repetida = true;
                }
            }

            if (!repetida) {
                contadorFallos++;
                dibujoAhorcado.style.backgroundPosition = -(240 * contadorFallos) + 'px 0';
                arrayLetrasIncorrectas.push(letra);
                wrongLetters.innerHTML = arrayLetrasIncorrectas.join(" ") /* letras incorrectas */
                if (contadorFallos == 7) {
                    juegoGanado.style.display = "flex"
                    document.querySelector(".won-game__you-won").innerHTML = "Perdiste<br>¡Fin del juego!";
                    document.querySelector(".won-game__word").innerHTML = palabra.toUpperCase();
                }
            }
        }
        else {
            if (palabraConGuiones.indexOf("_") < 0) {
                juegoGanado.style.display = "flex"
                document.querySelector(".won-game__you-won").innerHTML = "¡Felicidades! ¡Ganaste!";
                document.querySelector(".won-game__word").innerHTML = palabra.toUpperCase();
            }
        }
        document.querySelector(".output").innerHTML = palabraConGuiones;

        enfocar.value = ""
        enfocar.focus();
    }
});
/* //////////////////////////////////////////////////////////// */


/* INPUT, ARRAY Y ADVERTENCIA DE LA PANTALLA AGREGAR PALABRA */
const input = document.querySelector(".new-word__input");
const advertencia = document.querySelector(".warning");

///* PANTALLA INICIAL *///
function entrar_nuevoJuego() {
    document.getElementById("openGame").style.display = "none";
    document.getElementById("new-game").style.display = "flex";
    palabraNueva()
    enfocar.focus();
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
document.addEventListener('keyup', function (event) {
    if (event.code == 'Escape') {
        salir_nuevoJuego();
        document.getElementById("new-word").style.display = "none";
        advertencia.innerText = "";
        input.value = ""
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

        console.log(arrayPalabras);
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
}