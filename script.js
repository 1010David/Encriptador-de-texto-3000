// script.js

// Función para encriptar el texto
function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para manejar el clic del botón de encriptar
function handleEncrypt() {
    const inputText = document.getElementById("text-input").value;
    const outputArea = document.getElementById("text-output");
    const messageContent = document.getElementById("message-content");
    const copyBtn = document.getElementById("copy-btn");
    const resultContainer = document.getElementById("result-container");
    const alertContainer = document.getElementById("alert");

    // Verificar si el texto contiene caracteres no permitidos
    if (/[^a-z\s]/.test(inputText)) {
        alertContainer.style.display = "flex";
        return;
    }

    alertContainer.style.display = "none";
    outputArea.value = encryptText(inputText);
    messageContent.innerHTML = `<p>${outputArea.value}</p>`;
    resultContainer.style.display = "block";
    copyBtn.style.display = "block";
}

// Función para manejar el clic del botón de desencriptar
function handleDecrypt() {
    const inputText = document.getElementById("text-input").value;
    const outputArea = document.getElementById("text-output");
    const messageContent = document.getElementById("message-content");
    const copyBtn = document.getElementById("copy-btn");
    const resultContainer = document.getElementById("result-container");
    const alertContainer = document.getElementById("alert");

    // Verificar si el texto contiene caracteres no permitidos
    if (/[^a-z\s]/.test(inputText)) {
        alertContainer.style.display = "flex";
        return;
    }

    alertContainer.style.display = "none";
    outputArea.value = decryptText(inputText);
    messageContent.innerHTML = `<p>${outputArea.value}</p>`;
    resultContainer.style.display = "block";
    copyBtn.style.display = "block";
}

// Función para copiar el texto del área de resultados al portapapeles
function copyToClipboard() {
    const outputArea = document.getElementById("text-output");
    outputArea.select();
    document.execCommand("copy");
}

// Asignar las funciones a los botones
document.getElementById("encrypt-btn").addEventListener("click", handleEncrypt);
document.getElementById("decrypt-btn").addEventListener("click", handleDecrypt);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
