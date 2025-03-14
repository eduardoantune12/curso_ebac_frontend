const formulario = document.getElementById('formulario');

    // Adiciona um evento de submit
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

// Capturando os valores dos campos A e B
const campoA = parseFloat(document.getElementById('campoA').value);
const campoB = parseFloat(document.getElementById('campoB').value);
const mensagem = document.getElementById('mensagem');

// Validação: Número B deve ser maior que Número A
if (campoB > campoA) {
    mensagem.textContent = '✅ Formulário válido: Número B é maior que Número A! ✅';
    mensagem.style.color = 'white';
    mensagem.style.backgroundColor = 'green';
} else {
    mensagem.textContent = '❌ Erro: Número B precisa ser maior que Número A. ❌';
    mensagem.style.color = 'white';
    mensagem.style.backgroundColor = 'red';
}
});
