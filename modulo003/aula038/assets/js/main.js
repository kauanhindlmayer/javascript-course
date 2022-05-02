const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
]

const container = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const criaElemento = document.createElement(tag);
    criaElemento.innerHTML = `${texto}`;
    container.appendChild(criaElemento);
}
