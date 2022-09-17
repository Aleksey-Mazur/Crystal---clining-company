const clientsSlider = new Swiper('.clients-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 1200,

  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: '.clients-slider-next',
    prevEl: '.clients-slider-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.clients-slider',
  },
});
