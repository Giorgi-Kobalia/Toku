var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",

  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "5",

  coverflowEffect: {
    rotate: 0,
    stretch: -20,
    depth: 100,
    modifier: 1,
    scale: 0.7,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
  },
});
