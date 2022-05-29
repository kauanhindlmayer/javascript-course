//               0   1   2  3  4  5  6  7  8  9   10  11  12  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números (Reduce)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);

console.log(total); // 236

// Retorne um array com os pares (Filter)
const pares = numeros.reduce(function(acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

console.log(pares); // [ 50, 80, 2, 8, 22 ]

// Retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(dobro); // [10, 100 160, ...]

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// Retorne a pessoa mais velha
const maisVelho = pessoas.reduce(function(acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
}) ;

console.log(maisVelho); // { nome: 'Luiz', idade: 62 }