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
        adaptiveHeight: true,
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


    if ($(window).width() > 740) {
        var navigation = $('#nav-main').okayNav({
            // parent : 'nav.topnav ul', // will call nav's parent() by default
            toggle_icon_class: 'okayNav__menu-toggle',
            toggle_icon_content: '<span /><span /><span />',
            align_right: true, // If false, the menu and the kebab icon will be on the left
            swipe_enabled: true, // If true, you'll be able to swipe left/right to open the navigation
            threshold: 50, // Nav will auto open/close if swiped >= this many percent
            beforeOpen: function () {
            }, // Will trigger before the nav gets opened
            afterOpen: function () {
            }, // Will trigger after the nav gets opened
            beforeClose: function () {
            }, // Will trigger before the nav gets closed
            afterClose: function () {
            }, // Will trigger after the nav gets closed
            itemHidden: function () {
            }, // Will trigger after an item moves to the hidden navigation
            itemDisplayed: function () {
            } // Will trigger after an item moves to the visible navigation
        });
    }

    $('#show-nav').click(function () {
        $(this).toggleClass('active');
        $("#nav-main ul").toggleClass("responsive-menu")
    });


});