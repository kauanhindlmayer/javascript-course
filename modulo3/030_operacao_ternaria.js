// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

/*
    if (pontuacaoUsuario >= 1000) {
        console.log('Usuário VIP');
    } else {
        console.log('Usuário normal');
    }
*/