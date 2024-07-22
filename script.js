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
    const messageDefault = document.getElementById("message-default");
    const messagePrompt = document.getElementById("message-prompt");
    const copyBtn = document.getElementById("copy-btn");
    const resultContainer = document.getElementById("result-container");
    const alertContainer = document.getElementById("alert");

    // Verificar si el texto contiene caracteres no permitidos
    if (/[^a-z\s]/.test(inputText)) {
        alertContainer.style.display = "flex";
        return;
    }

    alertContainer.style.display = "flex"; // Asegúrate de que el contenedor de alerta esté visible siempre
    outputArea.value = encryptText(inputText);
    messageDefault.style.display = "none";
    messagePrompt.style.display = "none"; // Oculta el mensaje predeterminado y el mensaje de aviso
    resultContainer.style.display = "block";
    copyBtn.style.display = "block";
}

// Función para manejar el clic del botón de desencriptar
function handleDecrypt() {
    const inputText = document.getElementById("text-input").value;
    const outputArea = document.getElementById("text-output");
    const messageDefault = document.getElementById("message-default");
    const messagePrompt = document.getElementById("message-prompt");
    const copyBtn = document.getElementById("copy-btn");
    const resultContainer = document.getElementById("result-container");
    const alertContainer = document.getElementById("alert");

    // Verificar si el texto contiene caracteres no permitidos
    if (/[^a-z\s]/.test(inputText)) {
        alertContainer.style.display = "flex";
        alert("El texto contiene caracteres no permitidos. Solo letras minúsculas y sin acentos.");
        return;
    }

    alertContainer.style.display = "flex"; // Asegúrate de que el contenedor de alerta esté visible siempre
    outputArea.value = decryptText(inputText);
    messageDefault.style.display = "none";
    messagePrompt.style.display = "none"; // Oculta el mensaje predeterminado y el mensaje de aviso
    resultContainer.style.display = "block";
    copyBtn.style.display = "block";
}

// Función para copiar el texto del área de resultados al portapapeles
function copyToClipboard() {
    const outputArea = document.getElementById("text-output");
    outputArea.select();
    document.execCommand("copy");
}

// Función para recargar la página al hacer clic en el logo
function reloadPage() {
    window.location.reload();
}

// Asignar las funciones a los botones
document.getElementById("encrypt-btn").addEventListener("click", handleEncrypt);
document.getElementById("decrypt-btn").addEventListener("click", handleDecrypt);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);

// Asignar la función de recarga al clic en el logo
document.getElementById("logo-link").addEventListener("click", reloadPage);
