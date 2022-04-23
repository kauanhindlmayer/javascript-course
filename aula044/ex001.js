// Escreva uma função que recebe 2 números e retorne o maior deles.

// function maiorNumero (num1, num2) {
//     if (num1 > num2) {
//         console.log(`O maior número é o ${num1}!`);
//     } else {
//         console.log(`O maior número é o ${num2}!`);
//     }
// }

// function maiorNumero (x, y) {
//     return (x > y) ? x : y;
// }

const maior = (x, y) => x > y ? x : y;

console.log(maior(7, 23));