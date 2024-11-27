window.addEventListener("load", function () {
  const slideFour = new Swiper(".four-card", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".right-button",
      prevEl: ".left-button",
    },
  });
});
