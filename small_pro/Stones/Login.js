// const { default: Axios } = require("axios");

const Id = document.getElementById("Id");
const password = document.getElementById("password")
const Login = document.getElementById("Login");
const SignUp = document.getElementById("signUp");


Login.onclick = () => {    
    if(!Id.value || !password.value)
    console.log("입력오류");
    else{
        (async =>{
            try {
                console.log('QRWO박재훈바보')
                await axios({
                    method: 'post',
                    url: 'http://10.156.145.141:3000',
                    data: {
                        name: Id.value
                    }
                });
            } catch (err) {
                console.error(err);
            }
        })();
      
    }
}
SignUp.Onclick=()=>{
       
}