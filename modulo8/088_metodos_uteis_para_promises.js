function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof mensagem !== 'string') {
        reject('ERRO');
        return;
      }

      resolve(mensagem.toUpperCase() + ' - Passei na promise!');
      return;
    }, tempo);
  });
}

/*
  Promise.all     => Retorna todas promises resolvidas
  Promise.race    => Retorna a primeira promise a ser resolvida
  Promise.resolve => Retorna um objeto Promise que é resolvido com o valor passado
  Promise.reject  => Retorna um objeto Promise que é rejeitado com um dado motivo
*/

const promises = [
  // 'Primeiro valor',
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  esperaAi(1000, rand(1, 5)),
  // 'Outro valor'
];

// Promise.race(promises)
//   .then(valor => {
//     console.log(valor);
//   })
//   .catch(e => {
//     console.log(e);
//   })

function baixaPagina() {
  const emCache = true;

  if(emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));
