(function ($) {
	"use strict";

    jQuery(document).ready(function($){


      $('#clock').countdown('2020/10/15', function(event) {
          $(this).html(event.strftime('<span class="count-down-wrap"><span class="single-count-down">%w <span><br>Weeks</span></span><span class="single-count-down">%d <span><br>days</span></span><span class="single-count-down">%H <span><br>hours</span></span><span class="single-count-down">%M <span><br>minutes</span></span><span class="single-count-down">%S <span><br>seconds</span></span></span>'));
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	