window.addEventListener('load', function () {
  const sidemenuSwiper = new Swiper('.submenu-box', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  });
});
