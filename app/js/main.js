// Clients slider
const clientsSlider = new Swiper('.clients-slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  speed: 1600,

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

  breakpoints: {
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    460: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
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

// Menu-burger
const body = document.body;
const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');
const menuExpand = document.querySelector('.menu-header');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.menu__link');
const menuExpandLinks = document.querySelectorAll('.menu-header__link');
const login = document.querySelector('.login__link');

const burgerController = function () {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  menuExpand.classList.toggle('hidden');
  body.classList.toggle('lock');
};

const closeBurger = function () {
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  menuExpand.classList.add('hidden');
  body.classList.remove('lock');
  overlay.classList.add('overlay-hidden');
};

if (menu && menuBtn && overlay) {
  menuBtn.addEventListener('click', () => {
    burgerController();
    overlay.classList.toggle('overlay-hidden');
  });

  overlay.addEventListener('click', () => {
    closeBurger();
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', closeBurger);
  });

  menuExpandLinks.forEach(link => {
    link.addEventListener('click', closeBurger);
  });

  login.addEventListener('click', closeBurger);
}

// Modal window
const btnOpenModal = document.querySelector('.banner__call-request-btn');
const btnCloseModal = document.querySelector('.clean-order__btn-close-modal');
const modal = document.querySelector('.banner__form-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('banner__form-modal-hidden');
  overlay.classList.remove('overlay-hidden');
};

const closeModal = function () {
  modal.classList.add('banner__form-modal-hidden');
  overlay.classList.add('overlay-hidden');
};

btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', e => {
  e.preventDefault();
  closeModal();
});

if (
  !menu.classList.contains('active') &&
  !menuBtn.classList.contains('active') &&
  menuExpand.classList.contains('hidden')
)
  overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('.overlay-hidden'))
    closeModal();
});

// Running numbers
const revealNumbers = document.querySelectorAll('.facts-bottom__item');
const target1 = document.getElementById('out-1').innerHTML;
const targetNum1 = +target1.split('.').join('');
const target2 = document.getElementById('out-2').innerHTML;
const targetNum2 = +target2.split('.').join('');
const target3 = document.getElementById('out-3').innerHTML;
const targetNum3 = +target3.split('.').join('');

const outNum = function (num, el, time, step) {
  const number = document.getElementById(el);
  let n = 0;
  const t = Math.round(time / (num / step));

  const interval = setInterval(() => {
    n = n + step;
    if (n >= num) {
      clearInterval(interval);
      number.innerHTML = num.toLocaleString('ua').replaceAll(',', '.');
    } else number.innerHTML = n.toLocaleString('ua').replaceAll(',', '.');
  }, t);
};

const runNumbers = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  outNum(targetNum1, 'out-1', 2000, 1000);
  outNum(targetNum2, 'out-2', 2000, 100000);
  outNum(targetNum3, 'out-3', 2000, 1000);
  observer.unobserve(entry.target);
};

const numObserver = new IntersectionObserver(runNumbers, {
  root: null,
  threshold: 0.5,
});

revealNumbers.forEach(numbers => numObserver.observe(numbers));
