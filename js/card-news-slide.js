window.addEventListener("load", function () {
  const slideCardNews = new Swiper(".card-news-containers", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".card-news-containers .swiper-button-next",
      prevEl: ".card-news-containers .swiper-button-prev",
    },
  });
});
