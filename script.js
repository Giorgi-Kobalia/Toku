var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",

  breakpoints: {
    100: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "2",

      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 40,
        modifier: 1,
        scale: 0.78,
      },

      autoplay: {
        delay: 5000,
      },
    },

    550: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "2",

      coverflowEffect: {
        rotate: 0,
        stretch: 130,
        depth: 50,
        modifier: 1,
        scale: 0.8,
      },

      autoplay: {
        delay: 5000,
      },
    },

    700: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "3",

      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 1,
        scale: 0.85,
      },

      autoplay: {
        delay: 5000,
      },
    },

    910: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "4",

      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 1,
        scale: 0.85,
      },

      autoplay: {
        delay: 5000,
      },
    },

    1121: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "5",

      coverflowEffect: {
        rotate: 0,
        stretch: -30,
        depth: 50,
        modifier: 1,
        scale: 0.85,
      },

      autoplay: {
        delay: 5000,
      },
    },
  },
});
