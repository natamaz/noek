

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
        focusOnSelect: true
      }); 

      var slideLeng = $('.all-slider-banner').children('.one-slide').length;

      $('.all-slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        infinity: true,
        appendArrows: ".slick-dots",
        prevArrow: $('.prev-top'),
        nextArrow:  $('.next-top'),
        customPaging : function(slider, i) {
          var slidesCount = slider.slideCount;
          if(slider.slideCount <= 9 ) {
            slidesCount = '0'+slider.slideCount;
          }
          if(i <= 8) {
            return '<a class="link">0'+(i+1)+'<span>'+slidesCount+'</span></a>'
          }
          else {
            return '<a class="link">'+(i+1)+'<span>'+slidesCount+'</span></a>'
          }
          },
      }); 


});