// arguments que sustenta todos os argumentos enviados
// function funcao({nome, sobrenome, idade}) {
  // let total = 0;
  // for (let argumento of arguments) {
  //   total += argumento;
  // }

//   console.log(nome, sobrenome, idade);
// }

// let objeto = { nome: 'Kauan', sobrenome: 'Hindlmayer', idade: 17 };
// funcao(objeto);

function conta (operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  return console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);