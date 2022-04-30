const relogio = document.queryCommandValue('#relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function mostraHora() {
  let data = new Date("December 17, 1995 00:00:00");

  const hora = data.getHours();
  const min = data.getMinutes();
  const sec = data.getSeconds();

  relogio.innerHTML = `${hora}:${min}:${sec}`;
}



iniciar.addEventListener('click', function(event) {
  setInterval(function () {
    mostraHora() + 1000;
  }, 1000);
});

pausar.addEventListener('click', function(event) {
  alert('Cliquei no iniciar');
});

zerar.addEventListener('click', function(event) {
  alert('Cliquei no iniciar');
});