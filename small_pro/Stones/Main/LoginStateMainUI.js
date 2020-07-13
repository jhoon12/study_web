
const NameText = document.getElementById("NameText");
const TimeText = document.getElementById("TimeText");
const stonesExpression = document.getElementById("stonesExpression");
const logout = document.getElementById("logout");
const todo = document.getElementById("todo");
document.querySelectorAll(".toDoCheck").forEach(element => element.onclick = changeStyle);
document.getElementById("success").onclick = submitPlan;
document.getElementById("add").onclick = addPlan;
let arr = [8];
let TextArr = [];

async function submitPlan(){
  const res = await axios({
    method : 'get',
    url : `${CONSTANT.SERVER_ADRESS}/main`,
    body:{
    }
  });
} 
async function addPlan(){
  document.querySelectorAll(".input").forEach(text => {
    TextArr.push(text.value);
  });
  try{
    const res = await axios({
      method : 'post',
      url : `${CONSTANT.SERVER_ADRESS}/todo`,
      data :{
        what : TextArr,
      },
      headers:{
        access_token : localStorage.access_token
      } 
    });
    window.location.reload();
  } catch(err) {
    console.log(err);
  }
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
      
        const replaceStr = res.data.phrase_word.replace(/\./g,".\n");//정규표현식
        stonesExpression.innerText = `"${replaceStr}"\n -${res.data.phrase_name}-`;
        NameText.innerText = `${res.data.name}님`;
        
        const todoArr = document.querySelectorAll('.todo');
        if(res.data.todo_what) {
          res.data.todo_what.forEach((arrElements,index) =>{
            todoArr[index].innerHTML = `<input class="input" value=${arrElements} >`;
            console.log(todoArr[index]);
          });
        }
        
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
  catch(e){ 
    console.log(e);
    if(e.response.status === 500){
      console.log("실패");
    }
  }

  

}

logout.onclick =()=>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = "../Login/Login.html";
}

