const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: false,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: "fade",
  });