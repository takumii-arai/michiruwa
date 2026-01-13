const swiper01 = new Swiper("#js-mvSlider", {
  loop: true,
  autoplay: true,
  effect: 'fade',
  speed: '1000',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper02 = new Swiper("#js-introSlider", {
  loop: true,
  autoplay: true,
  speed: '1000',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
