window.addEventListener("load", function () {
  const stationSlide = new Swiper(".station-slide", {
    slidesPerView: 2,
    grid: {
      rows: 3,
    },
    navigation: {
      nextEl: ".station-slide .next-button",
      prevEl: ".station-slide .prev-button",
    },
  });
});
