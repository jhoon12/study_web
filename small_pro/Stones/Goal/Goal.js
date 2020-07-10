// const { default: Axios } = require("axios");
const Goal = document.getElementById("Goal");
const term = document.getElementById("term");
const setTime = document.getElementById("SetTime");
const btn = document.getElementById("btn");


btn.onclick = async function(){
    const setTime = SetTime.value;
    const goal = Goal.value;

    const todayKorean = new Date();
    const today = new Date(todayKorean.getFullYear(),todayKorean.getMonth()+1,todayKorean.getDate());

    const date = term.value;
    let dateArr = [];
    dateArr = date.split("-");  
    const dateArr2 = new Date(dateArr[0],dateArr[1],dateArr[2]);

    const resultDay = Math.ceil((dateArr2.getTime() -today.getTime()) / (1000 * 3600 * 24));

    try{
        const res = await axios({
        method:'post',
        url: `${CONSTANT.SERVER_ADRESS}/goal`,
        data : {
            what : goal,
            year : goalYear,
            month : goalMonth,
            day : goalday,
            left : resultDay 
        }
        })
        console.log('전송완료');
    }catch(err) {
        console.log(err);
    }
 
};
