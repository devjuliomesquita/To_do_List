//SELETORES
const listIput = document.querySelector('.list-input');
const listButton = document.querySelector('.list-button');
const list = document.querySelector('.list');
const listFiltros = document.querySelector('.listFiltros');

//EVENT LISTENERS
listButton.addEventListener('click',addList);
list.addEventListener('click',deleteCheck);
listFiltros.addEventListener('click',filtroList);

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
//FUNÇÃO DE CHECK E SELECT
function deleteCheck(e){
    const item = e.target;

    //DELETAR O ITEM DA LISTA
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    };

    //CHECAR A MARCAÇÃO
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completo');
    };
};

//FUNÇÃO DE FILTRO
function filtroList(e){
    const todos = list.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "todos":
                todo.style.display = 'flex';
                break;
            case "completo":
                if(todo.classList.contains('completo')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case "incompleto":
                if(!todo.classList.contains('completo')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    })
};

//CRIANDO FUNÇÃO DE SALVAR LOCAL STORANGE
