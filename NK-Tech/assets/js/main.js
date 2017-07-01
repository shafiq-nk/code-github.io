(function ($) {
    "use strict";
    
    jQuery(document).ready(function($){
          
        
        $(".mainmenu").slicknav({
            prependTo: ".responsive-menu"
        });
        
        $(".mainmenu-area").sticky({topSpacing: 0});
        $(".portfolio-nav").sticky({topSpacing: 65});
        

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
        
        
        $(".filtering-content").mixItUp({
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
        
        
                
        $('.google-map')
          .gmap3({
            center:[41.850033, -87.650052],
            zoom:13,
            scrollwheel: false,
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
            $('.google-map')
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