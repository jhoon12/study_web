// const { default: Axios } = require("axios");
const Goal = document.getElementById("Goal");
const term = document.getElementById("term");
const setTime = document.getElementById("SetTime");
const btn = document.getElementById("btn");


// let arr = new Array();
// const date = term.value;
// arr = date.split("-");
btn.onclick = async function(){
    const date = term.value;
    const setTime = SetTime.value;
    
    const goal = Goal.value;

    let dateArr = new Array();
    dateArr = date.split("-");
        const year = dateArr[0];
        const month = dateArr[1];
        const day = dateArr[2];

    let timeArr = new Array();
        timeArr = setTime.split(":");
        const time = timeArr[0];
        const minute = timeArr[1]; 
   
    try{
        const res = await axios({
        method:'post',
        url: 'http://13.209.77.9:3000/api/auth/register',
        data : {
            do : goal,
            year : year,
            month : month,
            day : day,
            time : time,
            minute : minute 
        }
        })
        console.log('전송완료');
    }catch(err) {
        console.log(err);
    }
 
};
