(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       $(".theme-one-select").on("click", function(){
           $("body").addClass("theme-one").removeClass("theme-two");
           return false;
       });
        
       $(".theme-two-select").on("click", function(){
           $("body").addClass("theme-two").removeClass("theme-one");
           return false;
       });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	