const id = document.getElementById("Id");
const password = document.getElementById("password");
const name = document.getElementById("name");
const passwordCheck = document.getElementById("passwordCheck");
const form = document.getElementById("form");
const passwordFalse = document.getElementById("passwordFalse");


form.onsubmit = async(e) => {
    e.preventDefault();
//   location.href='./mainUI.html';
    try { 
        if(password.value === passwordCheck.value){
            passwordFalse.style.opacity = 0;
            const nameValue = name.value;
            const username=id.value;
            const passwordValue=password.value;
            const res = await axios({
                method:'post',
                url: 'http://13.209.77.9:3000/api/auth/register',
                data: {
                    username : username,
                    password:passwordValue,
                    name : nameValue
                }
            })
            alert("계정 생성 완료");
            window.location.href = "../Login/Login.html";
        }
        else{
            passwordFalse.style.opacity = 1;
        } 
        }catch(err) {
            console.log(err);
    }    
}