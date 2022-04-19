function getMesTexto (numeroMes) {
    let mes;
    switch (numeroMes) {
        case 0: 
            mes = 'Janeiro';
            return mes;
        case 1: 
            mes = 'Fevereiro';
            return mes;
        case 2: 
            mes = 'Março';
            return mes;
        case 3: 
            mes = 'Abril';
            return mes;
        case 4: 
            mes = 'Maio';
            return mes;
        case 5: 
            mes = 'Junho';
            return mes; 
        case 6: 
            mes = 'Julho';
            return mes;  
        case 7: 
            mes = 'Agosto';
            return mes;  
        case 8: 
            mes = 'Setembro';
            return mes;  
        case 9: 
            mes = 'Outubro';
            return mes;  
        case 10: 
            mes = 'Novembro';
            return mes;  
        case 11: 
            mes = 'Dezembro';
            return mes;  
        default:
            mes = '';
            return diaSemanaTexto;
        }
}

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0: 
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: 
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3: 
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;  
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
        }
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesTexto(numeroMes);
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();
    
    const res = document.getElementById('res');
    res.innerHTML = `${nomeDia}, ${diaSemana} de ${nomeMes} de ${ano}. </br> ${hora}:${min}:${sec}`;
}

const data = new Date();
criaData(data);