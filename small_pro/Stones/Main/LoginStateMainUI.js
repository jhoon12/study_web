
const NameText = document.getElementById("NameText");
const TimeText = document.getElementById("TimeText");
const stonesExpression = document.getElementById("stonesExpression");
const logout = document.getElementById("logout");
const todo = document.getElementById("todo");
let arr = [];
document.querySelectorAll(".toDoCheck").forEach(element => element.onclick = changeStyle);
document.getElementById("success").onclick = submitPlan;
document.querySelector(".input").forEach(element => addPlan)

async function submitPlan(){
  const res = await axios({
    method : 'get',
    url : `${CONSTANT.SERVER_ADRESS}/main`,
    body:{

    }
  });
} 
function addPlan(){
  
}

function changeStyle() {
  this.classList.toggle("active");//클래스가 있으면 추가, 없으면 추가 X
}

window.onload = async ()=>{
    try{
        const res = await axios({
          method : 'get',
          url : `${CONSTANT.SERVER_ADRESS}/main`,
          headers:{
            access_token : localStorage.access_token
          } 
        })
        if(res.status === 200){

          const replaceStr = res.data.phrase_word.replace(/\./g,".\n");//정규표현식
          stonesExpression.innerText = `"${replaceStr}"\n -${res.data.phrase_name}-`;
          NameText.innerText = `${res.data.name}님`;
          if(res.data.hour < 12){
            TimeText.innerText = `오전 ${res.data.hour}:${res.data.minute}까지 계획을 완료해야 합니다!`;
          }
          else{
            if(res.data.minute < 10){
                TimeText.innerText = `오후 ${res.data.hour-12}:${"0"+res.data.minute}까지 계획을 완료해야 합니다`;
            }
            else
            TimeText.innerText = `오후 ${res.data.hour-12}:${+res.data.minute}까지 계획을 완료해야 합니다`;
          }
        }
        else if(res.status === 500){
          console.log("실패");
        }
    }
    catch(e){
      console.log(e);
    }
}

logout.onclick =()=>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = "../Login/Login.html"
}