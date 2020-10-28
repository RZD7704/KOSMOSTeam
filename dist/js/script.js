// 
var swiper1 = new Swiper('.swiper-header', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  mousewheel: true,
});

var swiper2 = new Swiper('.swiper-portfolio', {
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-portfolio__btn-next',
    prevEl: '.swiper-portfolio__btn-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2240: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});

var swiper3 = new Swiper('.swiper-open-portfolio', {
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-portfolio__btn-next',
    prevEl: '.swiper-portfolio__btn-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    2240: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});