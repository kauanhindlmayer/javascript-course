/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

console.log('Luiz Otávio' && 0 && 'Maria'); // 0
console.log('Luiz Otávio' && true && 'Maria'); // Maria

console.log(0 || false || null || 'Kauan' || true); // Kauan
