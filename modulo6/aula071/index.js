const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

const chave = 'nome';
console.log(pessoa[chave]); // notação de colchete
console.log(pessoa.sobrenome); // notação de ponto

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 18;
pessoa1.falarNome = function() {
  return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

// delete pessoa1.nome;
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

// Factory functions
function criaPessoa(nome, sobrenome) {
  return {
    nome, 
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  }
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);

// Constructor functions 
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// {} <- this
const p2 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p2);
const p3 = new Pessoa('Maria', 'Miranda');
console.log(p2, p3);

// const p4 = {};
// p4.nome = 'Luiz';

// Classes