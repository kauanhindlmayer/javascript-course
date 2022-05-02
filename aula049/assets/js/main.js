const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
})

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar (li) {
  li.innerText += ' ';
  const BotaoApagar = document.createElement('button');
  BotaoApagar.innerText = 'Apagar';
  // BotaoApagar.classList.add('apagar');;
  BotaoApagar.setAttribute('class', 'apagar');
  BotaoApagar.setAttribute('title', 'Apagar essa tarefa');
  li.appendChild(BotaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    console.log('Apagar clicacado!');
  }
});