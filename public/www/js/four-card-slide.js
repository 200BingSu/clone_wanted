window.addEventListener("load", function () {
  const popularSlide = new Swiper(".popular-slide", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".popular-slide .next-button",
      prevEl: ".popular-slide .prev-button",
    },
  });
  const slideFour = new Swiper(".latest-slide", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".latest-slide .next-button",
      prevEl: ".latest-slide .prev-button",
    },
  });
});
