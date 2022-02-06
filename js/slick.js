$(function() {
  $('.photo').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    responsive: [
      { // BREAKPOINT
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          } // SETTINGS
        }, // BREAKPOINT
        
      ]
  })
  })