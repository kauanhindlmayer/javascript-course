// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: false, // pode alterar o valor
    configurable: false, // configurável
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: estoque, 
      writable: false,
      configurable: false, 
    },
    preco: {
      enumerable: true, 
      value: estoque, 
      writable: false, 
      configurable: false, 
    },
  })
}

const p1 = new Produto('Camiseta', 20, 3);
delete p1.estoque; // como o configurable está false, esse comando não funciona
console.log(Object.keys(p1));

for(let chave in p1) {
  console.log(chave);
}