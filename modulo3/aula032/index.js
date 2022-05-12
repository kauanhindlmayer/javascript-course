const data = new Date();
const diaSemana = data.getDay();

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

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = '';
// }

const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);