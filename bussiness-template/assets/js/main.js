(function ($) {
    "use strict";
    
    jQuery(document).ready(function($){
          
        
        $(".mainmenu").slicknav({
            prependTo: ".responsive-menu"
        });
        
        $(".mainmenu-area").sticky({topSpacing: 0});
        $(".portfolio-nav").sticky({topSpacing: 81});
        

        $(".slider-area").on("translate.owl.carousel", function(){
        $(".slide-text").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".slider-area").on("translated.owl.carousel", function(){
            $(".slide-text").addClass("animated fadeInUp").css("opacity", "1");
        });
        
        $(".section-title").on("translate.owl.carousel", function(){
        $(".section-title h2").removeClass("animated fadeInLeft").css("opacity", "0");
        });
        $(".section-title").on("translated.owl.carousel", function(){
            $(".section-title h2").addClass("animated fadeInLeft").css("opacity", "1");
        });
        
        $(".portfolio-carousel-img").owlCarousel({
            items: 4,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
        
        $(".portfolio-three").owlCarousel({
            items: 1,
            nav:true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        
        $(".blog-slider").owlCarousel({
            items: 1,
            nav:false,
            dots: false,
            autoplay: true,
            loop: true
        });
        
        
        $('#search').click(function(e){
            $('.search-box').toggleClass('open');
            e.preventDefault();
        });
        
        
        jQuery(".filtering-content").mixItUp({
            'animation' : {
                'enable' : true,
                'effects' : 'translateX fade'
            }
        });
        
          $(".portfolio-nav li").on('click', function(){
              $(".portfolio-nav li").removeClass("active");
              $(this).addClass("active")

          });
        
        $('.img-lightbox').magnificPopup({
            type:'image',
                gallery: {
                enabled: true
            }
        });
        
        
        $(".slider-area").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: false,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false
        });
        $(".first-slide").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            stopOnHover: true,
            touchDrag: false
        });
        $(".second-slide").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });     
        $(".s-details-slider").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

         new WOW().init();
        
    });
    
    jQuery(window).load(function(){
        
    });
}(jQuery));