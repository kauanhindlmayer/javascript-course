// Capturar evento submit do formulário
const form = documet.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento prevenido!');
});