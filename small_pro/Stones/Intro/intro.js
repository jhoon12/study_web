function nextPage(e){
  count = count + parseInt(e.target.dataset.value);
  console.log(count);
  if(count === 3) {
    popup.classList.add("active");
  } 
  else if(count == 5  ){
    location.href="../Goal/goal.html";
  }
  else {
    popup.classList.remove("active");
  } 
}

var mySwiper = new Swiper('.swiper-container', {
// 슬라이드를 버튼으로 움직일 수 있습니다.

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',  
  },
  // 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable : true
  },
  simulateTouch:false
});

let count = 0;

const img = document.getElementById('img');
const next = document.getElementById('next');
const popup = document.getElementById('popup');
const before = document.getElementById('before');

before.onclick = nextPage;
next.onclick = nextPage;

// if(count === 5){
//   var userInput = prompt("당신의 목표는 무엇인가요?")
// }