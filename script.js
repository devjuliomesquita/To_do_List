//SELETORES
const listIput = document.querySelector('.list-input');
const listButton = document.querySelector('.list-button');
const list = document.querySelector('.list');

//EVENT LISTENERS
listButton.addEventListener('click',addList);

//FUNÇÕES
//FUNÇÃO QUE ADD DIVS  
function addList(event){
    event.preventDefault();
    //LIST DIV
    const listDiv = document.createElement('div');
    listDiv.classList.add('to_do');
    //CRIANDO UM LI
    const newTo_do = document.createElement('li');
    newTo_do.innerText = listIput.value;
    newTo_do.classList.add('to_do_item');
    listDiv.appendChild(newTo_do);
    //CHECAR MARCAÇÃO DE BOTÃO
    const buttonMarcado = document.createElement('button');
    buttonMarcado.innerHTML = '<i class="fas fa-check"></i>';
    buttonMarcado.classList.add('complete-btn');
    listDiv.appendChild(buttonMarcado);
    
    const buttonNaoMarcado = document.createElement('button');
    buttonNaoMarcado.innerHTML = '<i class="fas fa-trash"></i>';
    buttonNaoMarcado.classList.add('trash-btn');
    listDiv.appendChild(buttonNaoMarcado);

    list.appendChild(listDiv);

    //LIMPAR listImput
    listIput.value = '';
}