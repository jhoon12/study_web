// const { default: Axios } = require("axios");

const Id = document.getElementById("Id");
const password = document.getElementById("password")
const Login = document.getElementById("Login");
const signUp = document.getElementById("signUp");
    

const onClick = async (e) => {    
    e.preventDefault();
    if(!Id.value || !password.value)
    console.log("입력오류");
    else{
            try {
                console.log('QRWO박재훈바보')
                const res = await axios({
                    method: 'post',
                    url: 'http://10.156.145.141:3000',
                    data: {
                        name: Id.value
                    }
                });
                window.location.href = "./mainUI.html";
            } catch (err) {
                console.error(err);
            }
        }
      
 }


Login.addEventListener("click",onClick);

signUp.onclick=(e)=>{
    e.preventDefault();
    window.location.href = "./signup.html";
}