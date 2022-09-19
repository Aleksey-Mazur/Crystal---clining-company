// Clients slider
const clientsSlider = new Swiper('.clients-slider', {
  slidesPerView: 4,
  slidesPerGroup: 4,
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

// Works example slider
const worksSlider = new Swiper('.works-slider', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  speed: 900,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: '.works-slider-next',
    prevEl: '.works-slider-prev',
  },

  pagination: {
    el: '.works-pagination',
    clickable: true,
    bulletClass: 'works-swiper-pagination-bullet',
    bulletActiveClass: 'works-swiper-pagination-bullet-active',
    clickableClass: 'works-swiper-pagination-clickable',
  },
});

// Testimonials slider
const testimonialsSlider = new Swiper('.testimonials-slider', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  speed: 900,
  spaceBetween: 36,

  autoplay: {
    delay: 8000,
  },

  navigation: {
    nextEl: '.testimonials-slider-next',
    prevEl: '.testimonials-slider-prev',
  },

  pagination: {
    el: '.testimonials-pagination',
    clickable: true,
    bulletClass: 'testimonials-swiper-pagination-bullet',
    bulletActiveClass: 'testimonials-swiper-pagination-bullet-active',
    clickableClass: 'testimonials-swiper-pagination-clickable',
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.testimonials-slider',
  },
});
