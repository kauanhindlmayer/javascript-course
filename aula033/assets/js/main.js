function getMesTexto (numeroMes) {
let mes;

switch (mes) {
    case 0: 
        mes = 'Janeiro';
        return mes;
    case 1: 
        mes = 'Fevereiro';
        return mes;
    case 2: 
        diaSemanaTexto = 'Março';
        return mes;
    case 3: 
        diaSemanaTexto = 'Abril';
        return mes;
    case 4: 
        diaSemanaTexto = 'Maio';
        return mes;
    case 5: 
        diaSemanaTexto = 'Junho';
        return mes; 
    case 6: 
        diaSemanaTexto = 'Julho';
        return mes;  
    case 7: 
        diaSemanaTexto = 'Agosto';
        return mes;  
    case 8: 
        diaSemanaTexto = 'Setembro';
        return mes;  
    case 9: 
        diaSemanaTexto = 'Outubro';
        return mes;  
    case 10: 
        diaSemanaTexto = 'Novembro';
        return mes;  
    case 11: 
        diaSemanaTexto = 'Dezembro';
        return mes;  
    default:
        diaSemanaTexto = '';
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
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2: 
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3: 
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4: 
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5: 
        diaSemanaTexto = 'Sexta';
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

}

const data = new Date();
console.log(data);