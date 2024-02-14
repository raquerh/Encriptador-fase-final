/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
solo debe aceptar minusculas, sin acentos y sin caracteres especiales */



function limpiaringreso() {
    let limpiar = document.querySelector(".ingreso").value = "";
}

function limpiarresultado() {
    let limpiar = document.querySelector(".resultado").value = "";
}

function validarTexto(texto) {
    //letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z\s]+$/;

    // Verificar si el texto cumple (T o F)
    return regex.test(texto);
}

function encriptar() {
    // Obtener el texto ingresado
    let textoOriginal = document.querySelector('.ingreso').value;
    
    if (!validarTexto(textoOriginal)) {
        alert('Ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    //encriptar
    let textoEncriptado = textoOriginal.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el resultado 
    document.getElementById('resultado').value = textoEncriptado;
}

function desencriptar() {
    // Obtener el texto ingresado
    let textoEncriptado = document.querySelector('.ingreso').value;
    
    if (!validarTexto(textoEncriptado)) {
        alert('Ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    // desencriptar
    let textoOriginal = textoEncriptado.replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");

    // Mostrar el resultado
    document.getElementById('resultado').value = textoOriginal;
}


function copiar() {
    // Obtener resultado
    let resultado = document.getElementById('resultado');

    // Seleccionar el texto
    resultado.select();

    //copiar el texto al portapapeles
    navigator.clipboard.writeText(resultado.value)

    limpiarresultado();
}

function pegar() {
    
    limpiaringreso();

    // variable ingreso= el area de ingreso
    let ingreso = document.getElementById('ingreso');

    // copiar el portapapeles
    navigator.clipboard.readText()
        .then((clipboardText) => {
            // Pegar el portapapeles en ingreso
            ingreso.value = clipboardText;
        })
        .catch((err) => {
            console.error('Error al pegar desde el portapapeles:', err);
        });
}
