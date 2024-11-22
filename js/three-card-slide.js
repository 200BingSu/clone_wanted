window.addEventListener('load', function () {
  const slideThree = new Swiper('.three-card', {
    slidesPerView: 3,
    spaceBetween: 20,
  });
  const slideCardNews = new Swiper('.card-news-containers', {
    slidesPerView: 2.5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
