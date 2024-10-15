const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []




function adicionarNovaTarefa() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLI = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLI = novaLI + `<li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="check na tarefa" onclick="concluirTarefa (${posicao})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa lixo" onclick="deletarItem(${posicao})">`
    })

    listaCompleta.innerHTML = novaLI

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))


}

function concluirTarefa (posicao){
    minhaListaDeItens[posicao].concluida =  !minhaListaDeItens[posicao].concluida 

    mostrarTarefas()
}


function deletarItem (posicao){
    minhaListaDeItens.splice(posicao, 1)
    
 mostrarTarefas ()
}

function recarregarTarefas (){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse (tarefasDoLocalStorage)
}

    mostrarTarefas ()
}


recarregarTarefas ()
button.addEventListener('click', adicionarNovaTarefa)