window.addEventListener("load", function () {
  const stationSlide = new Swiper(".station-slide", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
