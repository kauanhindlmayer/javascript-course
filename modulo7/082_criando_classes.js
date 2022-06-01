// Classe
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando!`);
  }
}

// Instanciar é criar um objeto a partir da classe (molde)
const p1 = new Pessoa('Kauan', 'Hindlmayer');
console.log(p1);

// Função Construtora
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando!`);
};

const p2 = new Pessoa2('Luiz', 'Otávio');
console.log(p2);