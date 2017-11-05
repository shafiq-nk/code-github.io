(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".homepage-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dotsData : true
            
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	