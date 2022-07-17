// g  -> Global (encontra todas as ocorrências)
// i  -> Insensitive
// () -> Grupos
// |  -> OU

const { texto } = require('./base');
const regExp1 = /(maria)(, hoje sua esposa)/gi;

// console.log(regExp1.test(texto));

const found = regExp1.exec(texto);

if(found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
