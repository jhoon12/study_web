const inputBody = document.querySelector("form");
const inputPlan = inputBody.querySelector("input");
const TODOLIST = document.querySelector(".ToDoList");

let arr =[];


function handleSubmmit(event){
    event.preventDefault();
    const valueNow = inputPlan.value;
    toDOInput(valueNow);
    inputPlan.value = null;
    
}

function toDOInput(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = arr.length+1;
    const box = document.createElement("div");
    span.innerText = text;
    deleteBtn.innerText='X';
    deleteBtn.id="delete";
    deleteBtn.addEventListener("onclick", Delete);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    box.appendChild(li);
   TODOLIST.appendChild(box);
    box.id='boxCss';
    li.id = newId;
    const ToDoObj = {
        text : text,
        id : newId
    }
    arr.push(ToDoObj);
    
    

}

function Delete(event){
    console.log('delete');
    const last = event.target;
    const li = last.parentNode;
    const box = li.parentNode;
    TODOLIST.removeChild(box);
}


function init(){
    inputBody.addEventListener("submit", handleSubmmit);
}
init();