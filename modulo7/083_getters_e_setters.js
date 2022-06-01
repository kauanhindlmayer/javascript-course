class Carro {
  constructor(nome) {
    this.nome = nome;
    this.velocidade = 0;
  }

  acelerar() {
    if(this.velocidade >= 100) return;
    this.velocidade++;
  }

  desacelerar() {
    if(this.velocidade >= 100) return;
    this.velocidade--;
  }
}

const c1 = new Carro('Fusca');