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
  },


});