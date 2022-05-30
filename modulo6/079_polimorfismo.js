// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(`Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaC.prototype = Object.create(Conta.prototype);
ContaC.prototype.constructor = ContaC;

ContaC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function ContaP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaP.prototype = Object.create(Conta.prototype);
ContaP.prototype.constructor = ContaP;

const contaC = new ContaC(1, 2, 30, 100);
contaC.verSaldo();
contaC.sacar(100);

console.log();

const contaP = new ContaP(2, 3, 300);
contaP.verSaldo();
contaC.sacar(350);
