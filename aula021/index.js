const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando: Olá, Mundo!`);
    }
};

pessoa1.fala();

/*
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome, pessoa1.sobrenome);

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

const pessoa1 = {
    nome: 'Luiz', 
    sobrenome: 'Miranda', 
    idade: 25
};

const pessoa2 = {
    nome: 'Maria', 
    sobrenome: 'Oliveira', 
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
*/