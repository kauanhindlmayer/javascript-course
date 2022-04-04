const nome = 'Kauan';
const sobrenome = 'Hindlmayer';
const idade = '17';
const peso = '76.5';
const alturaEmM = '1.82';
let IndiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${alturaEmM}m de altura e seu IMC é de ${IndiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em' ${anoNascimento}.`)