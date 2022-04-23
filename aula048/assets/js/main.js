const relogio = document.queryCommandValue('#relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

setInterval(function () {
  console.log(mostraHora());
}, 1000);


iniciar.addEventListener('click', function(event) {
  alert('Cliquei no iniciar');
});

pausar.addEventListener('click', function(event) {
  alert('Cliquei no iniciar');
});

zerar.addEventListener('click', function(event) {
  alert('Cliquei no iniciar');
});