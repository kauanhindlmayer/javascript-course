//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(índice, delete, elemento1, elemento2, elemento3);
// const removidos = nomes.splice(3, 2);
// console.log(nomes, removidos); 

nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Luiz' ]

 
const removidos = nomes.splice(-1, 1); // pop
const removidos2 = nomes.splice(0, 1); // unshift