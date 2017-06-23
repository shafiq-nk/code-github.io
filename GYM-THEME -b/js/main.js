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
        


        
        
        $('.googleMap')
          .gmap3({
            center:[41.850033, -87.650052],
            zoom:13,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
          })
          
          .styledmaptype(
            "shadeOfGrey",
            [
              {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#999966"},{"lightness":40}]},
              {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
              {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
              {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
              {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
              {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
              {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
              {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
              {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
              {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
              {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#999966"},{"lightness":16}]},
              {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
              {"featureType":"water","elementType":"geometry","stylers":[{"color":"#15A8CA"},{"lightness":17}]}
            ]
          );
          var center = [41.850033, -87.650052];
            $('.googleMap')
              .gmap3({
                center: center,
                zoom: 12,
                mapTypeId : google.maps.MapTypeId.ROADMAP
              })
              .marker({
                position: center,
                icon: 'http://maps.google.com/mapfiles/marker_green.png'
            });
        
    });  
    

    

    

    
    
    jQuery(window).load(function(){
        
    });
    
}(jQuery));