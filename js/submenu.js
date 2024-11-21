window.addEventListener('load', function () {
  //슬라이드
  const submenuSlide = new Swiper('.submenu-slide', {
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
  //채용 호버 시, 서브메뉴 높이 조절, 백그라운드 삽입
  const employ = document.querySelector('#employ');
  const submenuBox = document.querySelector('.submenu-box');
  const submenuBg = document.querySelector('.submenu-bg');

  employ.addEventListener('mouseenter', function () {
    submenuBox.classList.add('submenu-box-active');
    submenuBg.classList.add('submenu-bg-active');
  });
  submenuBox.addEventListener('mouseleave', function () {
    submenuBox.classList.remove('submenu-box-active');
    submenuBg.classList.remove('submenu-bg-active');
    submenuSlide.slideToLoop(0);
  });

  // 더보기 메뉴 애니메이션
  const addMenuBtn = document.querySelector('#add-menu-btn');
  const addMenuBox = document.querySelector('.add-menu-box');
  console.log(addMenuBtn);
  addMenuBtn.addEventListener('mouseenter', function () {
    addMenuBox.classList.add('add-menu-box-activ');
    submenuBg.classList.add('submenu-bg-active');
  });
  addMenuBox.addEventListener('mouseleave', function () {
    submenuBox.classList.remove('submenu-box-active');
    submenuBg.classList.remove('submenu-bg-active');
  });
});
