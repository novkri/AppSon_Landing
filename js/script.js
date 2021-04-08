$(document).ready(function() {
  // burger lock scroll
  $('.navbar-toggler').click(function(event) {
    $('body').toggleClass('lock-scroll');
  });

    $('.owl-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipe: true,
      dots: true,
      arrows: false,

      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

});
