const addBtn = document.querySelector('.addBtn');
const todoBody = document.querySelector('.todo-body');


window.onload = function(){
    const dayArray = /["일","월","화","수","목","금","토"];
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();

    const h1Elements = document.querySelector('.todo-header h1');
    const dayElements = document.querySelector('.day');

    h1Elements.innerText = `${year}년 ${month+1}월 ${date}일`;
    dayElements.innerText = `${dayArray[day]}요일`;
}


addBtn.onclick = function(){
    const context = prompt("할일");
    if(!context) return;
    const todoItem = document.createElement('div');
    todoItem.className = "todo-item";
    todoItem.innerHTML = `
        <div class="todo-item-header-ico">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
        </div>
        <div class="todo-item-body">${context}</div>
        <div class="todo-item-delete-ico">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
        </div>
    `;

    todoItem.querySelector('.todo-item-header-ico').onclick = function(){
        todoItem.classList.toggle("active");
        countTodo();
    }

    todoItem.querySelector('.todo-item-delete-ico').onclick = function(){
        this.parentElement.remove();
        countTodo();
    }
    todoBody.appendChild(todoItem);
    countTodo();
}

function countTodo() {
    const noActiveLength = document.querySelectorAll('.todo-item').length;
    const isActiveLength = document.querySelectorAll('.todo-item.active').length;   
    const todoCountElements = document.querySelector(".todo-count");

    todoCountElements.innerText = `할 일${noActiveLength-isActiveLength}개 남음`;
}