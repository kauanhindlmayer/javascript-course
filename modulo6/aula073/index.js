// defineProperty -> Getters e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: false, // pode alterar o valor
    configurable: false, // configurável
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
