// Factory function (Função Fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome, 
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala: function(assunto = 'falando sobre NADA') {
      return `${nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}
const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);