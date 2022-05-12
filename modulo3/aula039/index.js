// For in -> Lê os índices ou chaves do objeto;
//                0       1       2
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// const {nome, sobrenome, idade} = pessoa;
// console.log(nome);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }