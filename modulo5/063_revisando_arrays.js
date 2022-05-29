// Valores por referência
//                    0         1        2         3          4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']; // "Array literal"
// String, Objetos, Funções, Números
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2]; // Deleta o elemente do array, mas mantém o índice dele
// const novo = [...nomes]; // novo recebe uma cópia de nomes
// const removido = nomes.pop(); // Remove o último elemento do array
// const removido2 = nomes.shift(); // Remove o primeiro e desloca o índice de todos elementos
// nomes.unshift('Wallace'); // Adiciona o elemento 'Wallace' no índice 0 do Array
// const novo = nomes.slice(1, -1);
// console.log(novo);

const nome = "Luiz Otávio Miranda";
const nomes = nome.split(' ');
console.log(nomes);