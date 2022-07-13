const nome = 'Kauan';
const sobrenome = 'Hindlmayer';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(module.exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// module.exports = 'Kauan';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser.';

module.exports = {
  nome, sobrenome, Pessoa
};