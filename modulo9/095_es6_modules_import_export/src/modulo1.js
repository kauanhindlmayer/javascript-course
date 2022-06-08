export const nome = 'Kauan';
export const sobrenome = 'Hindlmayer';
export const idade = 17;
const cpf = '000.000.000-00'

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// export default (x, y) => x * y;

// export { nome, sobrenome, idade, soma, Pessoa };

