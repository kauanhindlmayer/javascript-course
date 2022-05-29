// Não podemos criar constantes com palavras reservadas.
// Constantes precisam ter nomes significativos.
// Não pode começar o nome de uma variável com um número.
// Não podem conter espaços ou traços.
// Utilizamos CamelCase.
// Case-sensitive.
// Não podemos modificar o valor de uma constante.
// NÃO UTILIZE VAR, UTILIZE LET.

// String = Text / Number = Número.
const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);