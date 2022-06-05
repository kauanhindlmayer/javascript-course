function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof mensagem !== 'string') reject('BAD VALUE');
    setTimeout(() => {
      resolve(mensagem);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando dados da BASE', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Exibe dados na tela', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch(e => {
    console.log('ERRO', e)
  });

console.log('Isso aqui será exibido antes de qualquer promise');
