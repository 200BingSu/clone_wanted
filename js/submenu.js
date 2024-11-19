window.addEventListener('load', function () {
  //채용 호버 시, 서브메뉴 높이 조절, 백그라운드 삽입

  //슬라이드
  const swiper = new Swiper('.submenu-slide', {
    direction: 'vertical', // 세로 스크롤 활성화
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 25,
    mousewheel: true, // 마우스 휠 지원
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true, // 드래그 가능한 스크롤바
    },
  });
});
