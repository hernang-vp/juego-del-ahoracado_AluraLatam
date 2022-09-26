String.prototype.replaceAt = function (i, letra) {
    return this.substring(0, i) + letra + this.substring(i + letra.length);
}

document.querySelector(".ingresarLetra").focus();

const palabras = ["gato", "perro", "elefante", "conejo", "lemur", "gorila", "ardilla", "pato", "gallina"];

const palabra = palabras[(Math.floor(Math.random() * palabras.length))];

let palabraConGuiones = palabra.replace(/./g, "_ ");

let contadorFallos = 0;

console.log(palabra)

document.querySelector(".output").innerHTML = palabraConGuiones;


const escribirLetra = document.querySelector(".ingresarLetra");

    
escribirLetra.addEventListener("keyup", function (event) {
    let newLetter = event.key.toLocaleUpperCase();
    if (newLetter.match(/^[a-zñ]$/i)) {
        console.log(newLetter)
    }

    let letra = document.querySelector(".ingresarLetra").value;
    let haFallado = true;
    for (let i in palabra) {
        if (letra == palabra[i]) {
            palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
            haFallado = false;
        }
    }

    if (haFallado) {
        contadorFallos++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(199 * contadorFallos) + 'px 0';
        if (contadorFallos == 4) {
            alert("perdiste el juego")
        }
    } else {
        if (palabraConGuiones.indexOf("_") < 0) {
            document.querySelector("#ganador").style.display = "flex"
        }
    }

    document.querySelector(".output").innerHTML = palabraConGuiones;

    document.querySelector(".ingresarLetra").value = ""
    document.querySelector(".ingresarLetra").focus();
});