const NameText = document.getElementById("NameText");
const TimeText = document.getElementById("TimeText");
const stonesExpression = document.getElementById("stonesExpression");
const logout = document.getElementById("logout");
const todo = document.getElementById("todo");
document.querySelectorAll(".toDoCheck").forEach(element => element.onclick = changeStyle);
document.getElementById("success").onclick = submitPlan;
document.getElementById("add").onclick = addPlan;
let arr = new Array(8);
let TextArr = [];
const clickedArray = [];

async function submitPlan(){
  const activedInputLength = Array.from(document.querySelectorAll("input.input")).filter(ele => ele.value !== "").length;
  const activeButtonLength = document.querySelectorAll(".toDoCheck.active").length;
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1; 
  let day = today.getDate();   
      try{
          if(activeButtonLength === activedInputLength){
            const res  = await axios({
              url:`${CONSTANT.SERVER_ADRESS}​/todo/success`,
              method: 'post',
              headers:{
                access_token : localStorage.access_token
              } ,
              when:{
                year,
                month,
                day
              }
            })
            console.log('성공')
          }
          else{
            const res  = await axios({
              url:`${CONSTANT.SERVER_ADRESS}/todo/failed`,
              method: 'post',
              headers:{
                access_token : localStorage.access_token
              } ,
              when:{
                year,
                month,
                day
              }
            })
          }
          console.log('실패')
        }
        
        catch(e){
          // if(e.response.status === 403){
          //   Refresh.refresh();
          //   submitPlan();
          // }
          // else if(e.response.status === 500)
          //   console.log('실패');
          console.log(e);
        }
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
    if(err.response.status === 403)
      Refresh.refresh();
      addPlan();
  }
}

function changeStyle() {
  if(this.parentElement.querySelector("input").value === "") return;
  this.classList.toggle("active");//클래스가 있으면 추가, 없으면 추가 X
}

window.onload = async function onload(){
  console.log('sad')
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
        res.data.todo_what.forEach((arrElements,index) =>{
        todoArr[index].innerHTML = `<input class="input" value=${arrElements} >`;
        console.log(todoArr[index]);
      });
      
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
    if(e.response.status === 500)
      console.log("실패");  
    else if(e.response.status === 403){
      Refresh.refresh();
      onload();
    }
  }
}

logout.onclick =()=>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = "../Login/Login.html";
}