$('.hero_slider').slick({
  responsive: [
    {
  breakpoint:1280,
  settings: {
  dots: true,
  height:700,
  width:1400,
  infinite: false,
  autoplay:true,
  autoplaySpeed:10000,
  speed: 200,
  fade: true,
  slide: "div",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
    }
  },


    {
      breakpoint: 768,
      settings: {
        width: 768,
        height: 380,
        slide: "div",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 320,
      settings: {
        width: 320,
        height: 384,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.products_list').slick({
 
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  arrows:true,
  nextArrow: document.querySelector('.products_next_arrow'),
  prevArrow: document.querySelector('.products_prev_arrow'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('.partners_slider').slick({
 
  centerMode: true,
  centerPadding: '0px',
  autoplay:true,
  autoplaySpeed:4000,
  slidesToShow: 9,
  slidesToScroll: 1,
  slide:'div',
  arrows:true,
  prevArrow: document.querySelector('.partners_prev_arrow'),
  nextArrow: document.querySelector('.partners_next_arrow'),

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 9,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

