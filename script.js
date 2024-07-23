// Obtener elementos del DOM
const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const resultContainer = document.getElementById('result-container');
const messageDefault = document.getElementById('message-default');
const messagePrompt = document.getElementById('message-prompt');
const resultImage = document.getElementById('result-image');
const logoLink = document.getElementById('logo-link');

// Función para encriptar texto
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar texto
function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para copiar el texto al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

// Función para reiniciar el estado de la página
function resetPage() {
    textInput.value = '';
    textOutput.value = '';
    resultContainer.style.display = 'none';
    resultImage.style.display = 'block'; // Mostrar la imagen
    messageDefault.style.display = 'block';
    messagePrompt.style.display = 'block';
    copyBtn.style.display = 'none';
}

// Event listener para el botón de encriptar
encryptBtn.addEventListener('click', () => {
    const inputText = textInput.value.trim();
    if (inputText) {
        const encryptedText = encryptText(inputText);
        textOutput.value = encryptedText;
        resultContainer.style.display = 'block';
        resultImage.style.display = 'none'; // Ocultar la imagen
        messageDefault.style.display = 'none';
        messagePrompt.style.display = 'none';
        copyBtn.style.display = 'block';
    }
});

// Event listener para el botón de desencriptar
decryptBtn.addEventListener('click', () => {
    const inputText = textInput.value.trim();
    if (inputText) {
        const decryptedText = decryptText(inputText);
        textOutput.value = decryptedText;
        resultContainer.style.display = 'block';
        resultImage.style.display = 'none'; // Ocultar la imagen
        messageDefault.style.display = 'none';
        messagePrompt.style.display = 'none';
        copyBtn.style.display = 'block';
    }
});

// Event listener para el botón de copiar
copyBtn.addEventListener('click', () => {
    copyToClipboard(textOutput.value);
});

// Event listener para el clic en el logo
logoLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    resetPage(); // Llama a la función para reiniciar la página
});
