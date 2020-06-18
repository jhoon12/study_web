const toDoForm = document.querySelector(".js-toDoFrom"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];



function deleteToDo(event){
   const btn = event.target;
   const li = btn.parentNode;
   toDoList.removeChild(li);

   const cleanToDos =toDos.filter(function(toDo){
       return toDo.id !== parseInt(li.id);
   });
   toDos=cleanToDos;
   saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const newId = toDos.length +1;
   delBtn.innerText = "X";
   delBtn.addEventListener("click", deleteToDo);
   //deleteToDo함수 호출
   span.innerText = text;//입력받은값
   li.appendChild(span);
   li.appendChild(delBtn);
   li.id = newId;//id값 정수로 지정
   toDoList.appendChild(li)
   const toDoObj = {
       text : text,
       id :newId
0
   };
   toDos.push(toDoObj);
   saveToDos();
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
        const parsedToDos = JSON.parse(loadedToDo);
        parsedToDos.forEach(function(toDo){
          paintToDo(toDo.text);
        });
    }    
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();