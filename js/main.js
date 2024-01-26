$(function () {

  var mixer = mixitup('.directions__list')

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })


  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          draggable: true,
        }
      },
    ]
  });
  
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault();
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault();
    $('.team__slider').slick('slickNext')
  })
  

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    draggable: false,
    appendDots: $('.testimonials__dots')
  });

  $('.testimonials__slider-prev').on('click', function (e) {
    e.preventDefault();
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__slider-next').on('click', function (e) {
    e.preventDefault();
    $('.testimonials__slider').slick('slickNext')
  })


  // $('.program__acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.program__acc-text').slideToggle()
  // })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if($(this).hasClass('program__acc-link--active')){
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
  })

  $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (event) {
    event.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 150}, 800);
  })

  $(".burger, .overlay").on('click', function (e) {
    e.preventDefault()
    $(".overlay").toggleClass("overlay--show")
    $(".header__top").toggleClass("header__top--open")
    $(".burger").toggleClass("burger--shadow")
  })
})