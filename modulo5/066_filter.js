// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8  9   10  11  12  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados); // [ 50, 80, 11, 15, 22, 27 ]

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoas1 = pessoas.filter((valor) => valor.nome.length >= 5);
console.log(pessoas1);

// Retorna as pessoas com mais de 50 anos
const pessoas2 = pessoas.filter(valor => valor.idade > 50);
console.log(pessoas2);

// Retorne as pessoas cujo nome termina com a
const pessoa3 = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(pessoa3);