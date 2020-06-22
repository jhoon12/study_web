let time = document.getElementById('time'); 
let plan = document.getElementById('today');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const yo = document.getElementById('yo');
let count = 0;

let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
let week = ['일', '월', '화', '수', '목', '금', '토'];

time.innerText = `${year}년 ${month}월 ${date}일`;
yo.innerText = `${week[day]}요일`

plan.innerText = `할 일 ${count}개 남음`;

btn.onclick = ()=>{
    const li = document.createElement('li');
    const span = document.createElement('span');
    const del = document.createElement('button');
    const edit = document.createElement('button');

    edit.innerText = "EDIT";
    span.innerText = prompt("입력할 값");
    li.span= span.value;    
    plan.innerText = `오늘 할 일 ${count}`;

    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(del);
    li.appendChild(edit);
    
    del.className = "delete";

    count++;

    del.onclick = ()=>{
        li.remove();
        count--;
        plan.innerText = `오늘 할 일 ${count}`;
    }

    edit.onclick = ()=>{
        span.innerText = prompt("수정할 값");
    }
}
