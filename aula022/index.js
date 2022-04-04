/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
- Valores copiados

Referência (mutável) - array, object, function
- Passados por referência
*/

/*          0123
let nome = 'Luiz';
nome[0] = 'R'
console.log(nome[0]);
*/

let a = [1, 2, 3];
let b = a;
let c= b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c);