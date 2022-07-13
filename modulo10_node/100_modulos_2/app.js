const Cachorro = require('./Z/mod2');

const lara = new Cachorro('Lara');
lara.latir();

console.log(__filename);
console.log(__dirname); 

const path = require('path');
console.log(path.resolve(__dirname, '..', '..'));