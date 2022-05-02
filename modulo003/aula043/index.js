const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue - Pula para próxima iteração.
// Break - Encerra o laço.

for (let numero of numeros) {
	if (numero === 2) {
		console.log('Pulei o número 2!');
		continue; // Pula para próxima iteração do laçi.
	}
	
	console.log(numero);

	if (numero === 7) {
		console.log('7 encontrado, saindo...');
		break;
	}
}