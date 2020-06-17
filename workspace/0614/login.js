const { default: Axios } = require("axios");

const id = document.getElementById("login");
const password = document.getElementById("password");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

s = "양승빈";




btn1.onclick = ()=>{
    const text = btn1.value;
    console.log("로그인클릭");

    async function asyncTest(){
      const res = await axios({
        url: 'http://10.156.145.141:3000',
        method: 'post',
        data: {
          name: '양승빈 병신'
        }
      });


      const callBack = function(res){
        console.log(res);
      }

      Axios({
        url: 'http://10.156.145.141:3000',
        method: 'post',
        data: {
          name: '양승빈 병신'
        }
      }).then(callBack);

      await get(){
      // axios({/
      //   url: 'http://10.156.145.141:3000',
      //   method: 'post',
      //   data: {
      //     name: '양승빈 병신'
      //   }
      // });
    };
    get();
    send();
  }
}
btn2.onclick = ()=>{
axios.get('http://10.156.145.143:3000') 
  .then(res => {
    console.log(res.data)
  });
}


function getData(Data1){
  $.get('http://10.156.145.143:3000', function(Response){
      Data1(Response);
  });
}
getData(function(Data1){
  console.log(Data1);
})











// function getData(callbackFunc) {
// 	$.get('https://domain.com/products/1', function (response) {
// 		callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
// 	});
// }
// getData(function (tableData) {
// 	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
// });
// //callback은 어디로?
// function first(callback) {
//   setTimeout(function() {
//       callback();
//   }, 500);
// }

// function second() {
// console.log(2);
// }

// first(function() {
// second();
// });

// // 1
// // 2
// void abc(int a){
//   a(k);
// }