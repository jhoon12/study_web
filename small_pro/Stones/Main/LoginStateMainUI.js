const { default: Axios } = require("axios");

const NowToken = localStorage.getItem('token');
const NameText = document.getElementById("NameText");
const TimeText = document.getElementById("TimeText");
window.onload = async ()=>{
    try{
        const res = await Axios({
          method : 'get',
          url : `${CONSTANT.SERVER_ADRESS}`,
          data : {
            
          }  
        })
    }
    catch(e){

    }
}

const txt = "박재훈님";
const txt2 = "오후 10시 30분까지 완료해야 합니다!";



NameText.innerText = txt;
TimeText.innerText = txt2;
