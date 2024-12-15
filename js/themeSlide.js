window.addEventListener("load", function () {
  const themeSlide = new Swiper(".theme-slide", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".theme-slide .next-button",
      prevEl: ".theme-slide .prev-button",
    },
  });
});
