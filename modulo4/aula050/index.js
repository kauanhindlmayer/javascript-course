// Declaração de função (Function Hoisting)
function falaOi() {
  console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log('Sou um dado.');
}

function executaFuncao(funcao) {
  console.log('Vou executar sua funçãoa abaixo: ');
  funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const objeto = {
  falar() {
    console.log('Estou falando...');
  }
};
objeto.falar();