function meuEscopo() {
    const form = document.querySelector('.form');
    const resposta = document.querySelector('.resposta');
    let resultado;

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        let imc = peso.value / (altura.value * altura.value);

        if (imc < 18.5) {
            resultado = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado = 'Peso normal';
        } else if (imc >= 25 && imc <= 29,9) {
            resultado = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            resultado = 'Obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            resultado = 'Obesidade grau 2';
        } else if (imc >= 40) {
            resultado = 'Obesidade grau 3';
        }

        console.log(peso.value, altura.value, imc, resultado);
        
        resposta.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (${resultado}).</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
