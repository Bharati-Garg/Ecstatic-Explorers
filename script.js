//Icon Slider
var swiper = new Swiper(".icon", {
  slidesPerView: 6,
  spaceBetween: 20,
  arrows: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    991: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

// slider
$(document).ready(function () {
  $(".slick-slider").slick({
    slidesToShow: 7,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//cards swiper
var swiper = new Swiper(".card-slider", {
  loop: true,
  spaceBetween: 20,
  arrows: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
