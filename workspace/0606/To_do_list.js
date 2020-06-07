const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];  
function saveToDos () {  
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = text;
    li.appendChild(span);
    toDoList.appendChild(li);
    
    const toDoObj = {
        text : text,
        id : toDos.length+1
    }

    toDos.push(toDoObj);
    console.log(toDoObj);
    saveToDos(toDos);
}

function handleSubmit(event) {
    event.preventDefault();
    const toDoText = toDoInput.value;
    paintToDo(toDoText);
    toDoInput.value="";
    
    
}

function loadToDolist() {
    const getList = JSON.parse(localStorage.getItem(TODOS_LS));
    if(getList === null){

    }else{
        getList.forEach(function(todo){
            paintToDo(todo.text);
        })
    }
}

function init() {
    loadToDolist();
    toDoForm.addEventListener('submit',handleSubmit);

}

init();
