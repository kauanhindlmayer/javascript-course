// Valores por referência
//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana']; // "Array literal"
// String, Objetos, Funções, Números
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2]; // Deleta o elemente do array, mas mantém o índice dele
// console.log(nomes);
const novo = [...nomes]; // novo recebe uma cópia de nomes
novo.pop();
console.log(nomes);
console.log(novo);