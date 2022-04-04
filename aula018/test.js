const num1 = window.prompt('Digite um número: ');

document.body.innerHTML += `O seu número é <strong>${num1}</strong> <br />`;
document.body.innerHTML += `Raiz quadrada: <strong>${num1 ** 0.5}</strong> <br />`;
document.body.innerHTML += `${num1} é inteiro: <strong>${Number.isInteger(num1)}</strong> <br />`;
document.body.innerHTML += `É NaN: <strong>${Number.isNaN(num1)}</strong> <br />`;
document.body.innerHTML += `Arredondando para baixo: <strong>${Math.floor(num1)}</strong> <br />`;
document.body.innerHTML += `Arredondando para cima: <strong>${Math.ceil(num1)}</strong> <br />`;
document.body.innerHTML += `Com duas casas decimais: <strong>${Number(num1).toFixed(2)}</strong>`;
