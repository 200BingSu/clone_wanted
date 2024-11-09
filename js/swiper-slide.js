window.addEventListener('load', function () {
  const slideThree = new Swiper('.three-card', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  });
  const slideCardNews = new Swiper('.card-news-container-set-wrap', {
    slidesPerView: 3,
    loop: true,
  });
  const slideFour = new Swiper('.four-card', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
  });
});
