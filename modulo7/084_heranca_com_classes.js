class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // Chama o construtor da classe pai
    
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

class Tablet extends DispositivoEletronico {
	constructor(nome, temWifi) {
  	super(nome);
   	this.temWifi = temWifi;
	}

	ligar() {
		console.log('Você alterou o método ligar.');
	}

  falaOi() {
    console.log('Oi');
  }
}

const t1 = new Tablet('iPad', true);
t1.ligar();