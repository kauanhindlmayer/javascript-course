const falar = {
  falar() {
    console.log(`${this.nome} está falando!`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo!`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo!`);
  },
};

// const pessoaPrototype = { ...falar, ...comer, ...beber};
const pessoaPrototype = Object.assign({}, falar, comer, beber);

// Factory Function
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  });
}

const p1 = criaPessoa('Kauan', 'Hindlmayer');
p1.falar();

const p2 = criaPessoa('Luiz', 'Otávio');
p2.falar();