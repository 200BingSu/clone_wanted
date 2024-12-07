window.addEventListener("load", function () {
  const popularSlide = new Swiper(".popular-slide", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".popular-slide .right-button",
      prevEl: ".popular-slide .left-button",
    },
  });
  const slideFour = new Swiper(".latest-slide", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".latest-slide .right-button",
      prevEl: ".latest-slide .left-button",
    },
  });
});
