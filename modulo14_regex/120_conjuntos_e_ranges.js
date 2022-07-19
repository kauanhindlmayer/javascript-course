const { alfabeto } = require('./base');

// [abc]  -> Conjunto
// [^abc] -> Negação
// [abc-xyz] -> Range (min-max)
console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-k]+/g));
console.log(alfabeto.match(/[^A-K]+/g));

// shorthands
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g)); 
console.log(alfabeto.match(/\d/g)); 
console.log(alfabeto.match(/\D/g)); 
console.log(alfabeto.match(/\s/g)); 
console.log(alfabeto.match(/\S/g)); 