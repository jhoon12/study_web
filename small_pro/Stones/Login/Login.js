const Id = document.getElementById("Id");
const password = document.getElementById("password")
const form = document.getElementById("form");

form.onsubmit = async (e) => {  
    e.preventDefault();
    try { 
        const res = await axios({
            method: 'post',
            url: 'http://13.209.77.9:3000/api/auth/login',
            data: {
                username: Id.value,
                password: password.value
            }
        })
        const token = res.data.token;
        localStorage.setItem("token",res.data.token);
        if(res.status === 200) {
            window.location.href = "../Main/LoginStateMainUI.html";
        }
    } catch (err) {
        if(err.response.status === 403) 
            alert("입력정보가 틀렸습니다!");
    }      
 }


