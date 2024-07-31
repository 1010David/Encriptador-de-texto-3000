// Obtener elementos del DOM
const textInput = document.querySelector('.text-input');
const textOutput = document.querySelector('.text-output');
const encryptBtn = document.querySelector('.encrypt-btn');
const decryptBtn = document.querySelector('.decrypt-btn');
const copyBtn = document.querySelector('.copy-btn');
const resultContainer = document.querySelector('.result-container');
const messageDefault = document.querySelector('.message-default');
const messagePrompt = document.querySelector('.message-prompt');
const resultImage = document.querySelector('.result-image');
const logoLink = document.querySelector('.logo-link');

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
    }).catch(err => {
        console.error('Error al copiar al portapapeles:', err);
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

    // Estilos específicos para tabletas y móviles
    if (window.innerWidth <= 768) {
        // Estilos para tabletas
        resultImage.style.display = 'none'; // Ocultar la imagen si es necesario
    } else if (window.innerWidth <= 480) {
        // Estilos para teléfonos
        resultImage.style.display = 'none'; // Ocultar la imagen si es necesario
    }
}

// Función para validar el texto
function validateText(text) {
    // Expresión regular que permite solo letras minúsculas y espacios
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

// Event listener para validar el texto mientras se escribe
textInput.addEventListener('input', () => {
    const inputText = textInput.value.trim();
    if (!validateText(inputText)) {
        alert('Solo se permiten letras minúsculas, sin acentos.');
        textInput.value = inputText.slice(0, -1); // Remover el último carácter no válido
    }
});


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
