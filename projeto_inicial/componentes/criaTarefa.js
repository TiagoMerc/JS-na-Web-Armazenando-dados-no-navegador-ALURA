import BotaoConclui from './concluiTarefas.js'
import BotaoDeleta from './deletaTarefa.js'
 

  //  const criarTarefa = (evento) => {
  export const handleNovoItem = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    }

    const criaTarefa = Tarefa(dados)

    tarefas.push(dados);
    lista.appendChild(criaTarefa)

   // sessionStorage.setItem("tarefas sessionStorage", JSON.stringify(dados));
    localStorage.setItem("tarefas sessionStorage", JSON.stringify(tarefas));
 
    input.value = " "
  }

  const Tarefa = ({valor, dataFormatada}) => { 
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
   
    return tarefa;
 } 
