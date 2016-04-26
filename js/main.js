$(document).ready(function(){
    $('.main-slider').bxSlider({
        minSlides: 1,
        moveSlides: 1,
        maxSlides: 1,
        slideWidth: 1075,
        slideMargin: 0,
        auto: false,
        pager: true,
        pause: 3500,
        // adaptiveHeight: true,
        // mode: 'fade',
        controls: false
    });
    
    $('.ins-branded').bxSlider({
        minSlides: 3,
        moveSlides: 3,
        maxSlides: 3,
        slideWidth: 362,
        slideMargin: 0,
        auto: false,
        pager: false,
        pause: 4500,
        adaptiveHeight: true,
        controls: true
    });

});