// const { default: Axios } = require("axios");

const Id = document.getElementById("Id");
const password = document.getElementById("password")
const Login = document.getElementById("Login");



Login.onsubmit= async (e) => {  
    e.preventDefault();

    try { 
        const res = await axios({
            method: 'post',
            url: 'http://10.156.145.141:3000/api/auth/login',
            data: {
                username: Id.value,
                password: password.value
            }
        })
        if(res.status === 200) {
            window.location.href = "./mainUI.html";
        }
    } catch (err) {
        if(err.response.status === 403) 
            alert("입력정보가 틀렸습니다!");
    }      
 }


