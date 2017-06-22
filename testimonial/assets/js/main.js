(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".list-author-name").perfectScrollbar({
            wheelSpeed: 3,
            maxScrollbarLength: 80
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

        })


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	