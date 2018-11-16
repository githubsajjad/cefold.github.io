(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // scrollt nav
        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 600, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: 0 // offste (in px) for fixed top navigation
        });





    });

    // Window Load Function
    jQuery(window).on('load', function () {
        // preloader activation
        $('.page-loader').delay(350).fadeOut('slow');


    });



}(jQuery));
