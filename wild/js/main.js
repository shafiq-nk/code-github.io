(function ($){
    
    jQuery(document).ready(function($){
        
        $(".homepage-sliders").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true
        });
        
        
        $(".gallery-thumb-imgs").owlCarousel({
            items: 5,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            margin: 15
        });
        
    });
    
}(jQuery));