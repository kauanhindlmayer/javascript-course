let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]; // Solução mais atual

/*
let aux = varA;
varA = varB;
varB = varC;
varC = aux;
*/

console.log(varA, varB, varC);