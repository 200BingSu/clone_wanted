window.addEventListener("load", function () {
  const stationSlide = new Swiper(".station-slide", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".station-slide .next-button",
      prevEl: ".station-slide .prev-button",
    },
  });
});
