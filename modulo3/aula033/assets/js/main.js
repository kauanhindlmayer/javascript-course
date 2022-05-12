function getMesTexto (numeroMes) {
    let mes;
    switch (numeroMes) {
        case 0: 
            mes = 'janeiro';
            return mes;
        case 1: 
            mes = 'fevereiro';
            return mes;
        case 2: 
            mes = 'março';
            return mes;
        case 3: 
            mes = 'abril';
            return mes;
        case 4: 
            mes = 'maio';
            return mes;
        case 5: 
            mes = 'junho';
            return mes; 
        case 6: 
            mes = 'julho';
            return mes;  
        case 7: 
            mes = 'agosto';
            return mes;  
        case 8: 
            mes = 'setembro';
            return mes;  
        case 9: 
            mes = 'outubro';
            return mes;  
        case 10: 
            mes = 'novembro';
            return mes;  
        case 11: 
            mes = 'dezembro';
            return mes;  
        default:
            mes = '';
            return mes;
        }
}

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0: 
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1: 
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3: 
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;  
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
        }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesTexto(numeroMes);
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    
    const res = document.getElementById('res');
    res.innerHTML = `${nomeDia}, ${diaSemana} de ${nomeMes} de ${ano} </br> ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`;
}

const data = new Date();
criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});