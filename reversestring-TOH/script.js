// Obtener elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const reverseBtn = document.getElementById('reverseBtn');
const errorMessage = document.getElementById('errorMessage');

// Función para reversar el string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Función para validar la entrada
function validateInput(text) {
    if (text.length < 3) {
        return {
            valid: false,
            message: 'El texto debe tener al menos 3 caracteres'
        };
    }
    return {
        valid: true,
        message: ''
    };
}

// Función para mostrar error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    inputText.classList.add('error');
}

// Función para limpiar error
function clearError() {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    inputText.classList.remove('error');
}

// Función principal para procesar la reversión
function processReverse() {
    const text = inputText.value.trim();
    
    // Limpiar error previo
    clearError();
    
    // Validar entrada
    const validation = validateInput(text);
    
    if (!validation.valid) {
        showError(validation.message);
        outputText.value = '';
        return;
    }
    
    // Reversar el texto
    const reversed = reverseString(text);
    outputText.value = reversed;
}

// Event listener para el botón
reverseBtn.addEventListener('click', processReverse);

// Event listener para limpiar error al escribir
inputText.addEventListener('input', () => {
    if (errorMessage.style.display === 'block') {
        clearError();
    }
});