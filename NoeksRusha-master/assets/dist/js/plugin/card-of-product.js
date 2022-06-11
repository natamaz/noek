

  $(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: $('.prev'),
        nextArrow:  $('.next'),
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: false,
        // centerPadding: '5px',
        focusOnSelect: true
      }); 
      $('.related-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $('.prev-rel'),
        nextArrow:  $('.next-rel'),
        centerMode: false,
        focusOnSelect: false,
        responsive:[
          {
           breakpoint: 1600,
           settings: {
            slidesToShow: 3,
           }
          },
          {
           breakpoint: 1280,
           settings: {
            slidesToShow: 2,
           }
          },
          {
           breakpoint: 650,
           settings: {
            slidesToShow: 1,
           }
          },
         ],
      }); 


});