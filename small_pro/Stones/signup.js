const id = document.getElementById("id");
const password = document.getElementById("password");
const form = document.getElementById("signupForm");

form.onsubmit = async(e) => {
    e.preventDefault();
//   location.href='./mainUI.html';
    try { 
        const username=id.value;
        const passwordValue=password.value;
        const res = await axios({
            method:'post',
            url: 'http://13.209.77.9:3000/api/auth/register',
            data: {
                username,
                password:passwordValue
            }
        })
        alert("계정 생성 완료");
    } catch(err) {
        console.log(err);
    }
}