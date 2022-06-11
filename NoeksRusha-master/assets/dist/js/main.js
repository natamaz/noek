$(document).ready(function(){
    $(".burger-menu").bind("click", function(e){
        e.preventDefault();
        $('.all-menu').stop().slideToggle();
        $('.header').stop().toggleClass('active');
    });
    //Open search-list
    $(".list-s").bind("click", function(e){
        e.preventDefault();
        $('.list-search').stop().toggleClass('list-open');
        $('.close-background').addClass('open-p');
    });

    //Open drop-menu catalog
    $(".burgerDropMenu").bind("click", function(e){
        e.preventDefault();
        $('.first-menu').stop().addClass('op');
        $('.close-background').addClass('open-p');
    });
    $(".first-menu > ul > li> i").bind("click", function(e){
        e.preventDefault();
        $(this).parents().find('i').stop().removeClass('foc');
        $(this).stop().addClass('foc');
        $('.second-menu').addClass('op');
    });
    $(".second-menu > ul > li").bind("click", function(e){
        e.preventDefault();
        $(this).parent().find('li').stop().removeClass('foc');
        $(this).stop().addClass('foc');
        $('.third-menu').addClass('op');
    });
    $(".close-background").bind("click", function(e){
        e.preventDefault();
        $('.close-background').stop().removeClass('open-p');
        $('.first-menu').stop().removeClass('op');
        $('.second-menu').stop().removeClass('op');
        $('.third-menu').stop().removeClass('op');
        $('.list-search').stop().removeClass('list-open');
    });

    //Open popUp
    $(".open-submit").bind("click", function(e){
        $('.close-background-black').css('display','block');
        $('.submit-application').css('display','block');
        $('body').css('overflow-y','hidden');
    });
    $(".open-feedback").bind("click", function(e){
        $('.close-background-black').css('display','block');
        $('.Feedback').css('display','block');
        $('body').css('overflow-y','hidden');
    });
    $(".open-politic").bind("click", function(e){
        $('.close-background-black').css('display','block');
        $('.some-popUp').css('display','block');
        $('body').css('overflow-y','hidden');
    });

    //Close popUp
    $(".close-background-black").bind("click", function(e){
        if(e.target.className === 'close-background-black'){
            $('.close-background-black').css('display','none');
            $('.pop').css('display','none');
            $('body').css('overflow-y','scroll');
        }
    });
    $(".close-pop").bind("click", function(e){
        $('.close-background-black').css('display','none');
        $('.pop').css('display','none');
        $('body').css('overflow-y','scroll');
    });

    $(".all").bind("click", function(e){
        e.stopPropagation();
    });


    $(".close-politic").on("click", function(){
            var subApp = $('.submit-application').css('display');
            var feedBack = $('.Feedback').css("display");
        if(  subApp === 'block' || feedBack === "block"){
            $('.some-popUp').css('display','none');
            $('body').css('overflow-y','scroll');
        }  
        else {
            $('.close-background-black').css('display','none');
            $('.some-popUp').css('display','none');
            $('body').css('overflow-y','scroll');
        } 

    });

    $("#phone").mask("+7(999) 999-99-99");
    $("#phone1").mask("+7(999) 999-99-99");
    $("#phone3").mask("+7(999) 999-99-99");


    var navSection = '.scrolling';

    function onScroll(){
    $(navSection + ' a').each(function(){
        var anchor      = $(this).attr('href');
        var scrollTop   = $(document).scrollTop();
        var positionTop = $(anchor).offset().top;
        var outerHeight = $(anchor).outerHeight();

        if ((positionTop-$(window).height()/2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
        $(navSection + ' li.act-li').removeClass('act-li');
        $($(this).parent()).addClass('act-li');
        } else {
        $($(this).parent()).removeClass('act-li');
        }
    });
    }

    $(document).on('scroll', onScroll);

});



