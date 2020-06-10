const toDoForm = document.querySelector(".js-toDoFrom"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function paintToDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   delBtn.innerText = "X";
   span.innerText = text;
   li.appendChild(span);
   li.appendChild(delBtn);
   toDoList.appendChild(li)
   const toDoObj = {
       text : text,
       id: toDos.length +1,//길이 측정

   };
   toDos.push(toDoObj);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue =toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";

}

function loadToDos(){
    const loadedToDo = localStorage.getItem(TODOS_LS);
    
    if(loadedToDo !== null){
        //아무것도 실행 안함
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();