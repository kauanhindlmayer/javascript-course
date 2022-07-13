// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome;

const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome);

const path = require('path');
const axios = require('axios');
const mod1 = require('./mod1')

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Kauan');
console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then(response => console.log(response.data))
//   .catch(e => console.log(e));

const p2 = new Pessoa('João');
console.log(mod1);
console.log(Pessoa);