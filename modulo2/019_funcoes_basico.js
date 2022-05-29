const raiz = n => n ** 0.5;
console.log(raiz(9));


function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(2, 2);
console.log(resultado);


function saudacao(nome) {
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('Kauan');
console.log(variavel);
