/*
  Object.values
  Object.entries
  Object.assign (des, any)
  Object.getOwnPropertyDescriptor(o, 'prop')
  ... spread

  // Anteriormente visto:
  Object.keys (retorna as chaves)
  Object.freeze (congela o objeto)
  Object.defineProperties (define várias propriedades)
  Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
const caneca = { 
  ...produto,
  material: 'porcelana'
};

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto); // { nome: 'Produto', preco: 1.8 }
console.log(caneca); // { nome: 'Outro nome', preco: 2.5, material: 'porcelana' }
