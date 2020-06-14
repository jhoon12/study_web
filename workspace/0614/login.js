const id = document.getElementById("login");
const password = document.getElementById("password");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.onclick = ()=>{
    const text = btn1.value;
    console.log("로그인클릭");
    // $.ajax({
    //     url: '데이터를 보낼 곳 url',
    //     type: 'form 태그의 method 속성(post 또는 get)',
    //     data: {"변수1": "변수1의 값",
    //         "변수2": "변수2의 값"},
    //     success: function (data) {
    //             alert("데이터 전송이 성공적으로 끝났을 때 실행");
    //         }
    // });
}



