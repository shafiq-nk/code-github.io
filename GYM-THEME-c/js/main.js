(function ($) {
    
    "use strict";
    jQuery(document).ready(function($){
        
                                 
            $(".header-section").sticky({topSpacing: 0});
        
                          //jQuery  smooth scroll 
        $('li.smooth-menu a').bind('click', function(event){
            var $anchor = $(this);
            var headHE  = '65';
            $('html, body').stop().animate({
               scrollTop : $($anchor.attr('href')).offset().top - headHE + "px" 
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        
        $(".main-menu").slicknav({
            prependTo: ".responsive-menu"
        });
        
        $(".main-menu li").on('click', function(){
            $(".main-menu li").removeClass("active");
            $(this).addClass("active")
        });
        
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            mouseDrag:false,
            autoplay: false,
            loop:true,
            mouseDrag: false,
            touchDrag: false
        });

        
        $(".feature-slide").owlCarousel({
            items: 3,
            nav: true,
            dots: false,
            autoplay: false,
            loop:true,
            mouseDrag: false,
            touchDrag: false,
            margin: 30,
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
                }
            }
        });

        

        $(".instructor-slide").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: false,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
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
        $(".portfolio-items").mixItUp({
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
        $(".video-play-btn").magnificPopup({
           type: 'video',
        });
        


        
        
    });  
    

    

    

    
    
    jQuery(window).load(function(){
        
    });
    
}(jQuery));