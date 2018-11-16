(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        // isotope filter js
        $(".portfolio_menu ul li").on('click', function () {

            $(".portfolio_menu ul li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".portfolio_items").isotope({
                filter: selector,
                transitionDuration: '0.6s'
            });

        });

        //Counter Js
        $('.counter').counterUp({
            delay: 20,
            time: 2500
        });


        // welcome carousel
        $('.welcome_slides').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            items: 1,
            margin: 0,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        $(".welcome_slides").on("translate.owl.carousel", function () {
            $(".single_slide_item h2, .single_slide_item p, .single_slide_item .welcome_btn a").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".welcome_slides").on("translated.owl.carousel", function () {
            $(".single_slide_item h2, .single_slide_item p, .single_slide_item .welcome_btn a").addClass("animated fadeInUp").css("opacity", "1");
        });

        // team carousel
        $('.team_carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplaySpeed: 3000,
            nav: true,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            items: 4,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });

        // testimonial carousel
        $('.testimonial_carousel').owlCarousel({
            loop: true,
            autoplay: false,
            margin: 30,
            autoplaySpeed: 3000,
            nav: true,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
        // client carousel
        $('.client_carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            autoplaySpeed: 3000,
            items: 5,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });


        // stellar js activate
        $.stellar({
            horizontalOffset: 50,
            verticalOffset: 150
        });

        // Magnific Popup video

        $('#video_popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            zoom: {
                enabled: true,
            }
        });



        // sticky header
        jQuery(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $("#header").removeClass("sticky");
            } else {
                $("#header").addClass("sticky");
            }
        });




        // jQuery for page scrolling feature - requires jQuery Easing plugin

        // scrollt nav
        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'easeInOutExpo', // the easing function for animation
            scrollTime: 1250, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -70 // offste (in px) for fixed top navigation
        });


        // slicknav activate
        $('#nav').slicknav({
            prependTo: '.responsive_mobile_menu',
            label: '',
            closeOnClick: true
        });




    });







    // Window Load Function
    jQuery(window).on('load', function () {
        // isotope js
        $(".portfolio_items").isotope();
        $('.page-loader').delay(350).fadeOut('slow');


    });









}(jQuery));
