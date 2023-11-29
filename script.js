var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",

  breakpoints: {

    200: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "1",

      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 1,
        scale: 0.85 ,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
        delay: 5000,
      },
    },

    600: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "3",

      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 1,
        scale: 0.85 ,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
        delay: 5000,
      },
    },

    960: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "5",

      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 1,
        scale: 0.85 ,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
        delay: 5000,
      },
    },
  },
});
