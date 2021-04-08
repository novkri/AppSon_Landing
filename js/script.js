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
      // adaptiveHeight: true,
      // mobileFirst: true,
      // respondTo: min,
      // rows: 1,
      // variableWidth: true

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
