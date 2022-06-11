$(document).ready(function(){
    $('.clean').click(function(){
        $(".filter > div > input").removeAttr("checked");
    });
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
});