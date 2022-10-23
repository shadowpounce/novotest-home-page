const documentWidth = document.documentElement.clientWidth

const swiper = new Swiper('#swiper-1', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '#swiper-pagination-1',
    clickable: true,
  },
  navigation: {
    nextEl: '#swiper-button-next-1',
    prevEl: '#swiper-button-prev-1',
  },
  breakpoints: {
    0: {
      pagination: false,
    },
    481: {
      pagination: {
        el: '#swiper-pagination-1',
        clickable: true,
      },
    },
  },
})

const swiper2 = new Swiper(`${documentWidth > 767.8 ? '#swiper-2' : ''}`, {
  direction: 'horizontal',
  speed: 400,
  slidesPerView: 5,
  navigation: {
    nextEl: '#swiper-button-next-2',
    prevEl: '#swiper-button-prev-2',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  },
})

const swiper3 = new Swiper('#swiper-3', {
  direction: 'horizontal',
  speed: 400,
  slidesPerView: 4,
  pagination: {
    el: '#swiper-pagination-3',
    clickable: true,
  },
  breakpoints: {
    0: {
      pagination: false,
      slidesPerView: 'auto',
    },
    767.8: {
      loop: false,
      slidesPerView: 3,
      pagination: {
        el: '#swiper-pagination-3',
        clickable: true,
      },
    },
    1025: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
})
