const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS ="currentUser";
const SHOWING_CN = "showing";

function saveName(text){//6
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){//4
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
} //  입력이벤트

function askForName(){//3
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){//5
    form.classList.remove(SHOWING_CN);  //폼 숨김   
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}//text 추가

function loadName(){//2
    const currentuser = localStorage.getItem(USER_LS);
    if(currentuser === null){
        askForName();
    }
    // 유저가 없을 때
    else{
        paintGreeting(currentuser)
    }//유저가 있을 때
}

function init(){//1
    loadName();
}
init();

