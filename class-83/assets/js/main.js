(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $('#grapprogressbar-element').circleProgress({
            value: 0.9,
            size: 200,
            fill: {
              gradient: ["rgba(23, 124, 242, 1)", "rgba(23, 124, 242, 0.5)"]
            },
            thickness: 2,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $('#webprogressbar-element').circleProgress({
            value: 1,
            size: 200,
            fill: {
              gradient: ["rgba(23, 124, 242, 1)", "rgba(23, 124, 242, 0.5)"]
            },
            thickness: 2,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.progressbar-percentage').html(Math.round(100 * progress) + '<i>%</i>');
        });

        $('#wordprogressbar-element').circleProgress({
            value: 0.7,
            size: 200,
            fill: {
              gradient: ["rgba(23, 124, 242, 1)", "rgba(23, 124, 242, 0.5)"]
            },
            thickness: 2,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.progressbar-percentage').html(Math.round(70 * progress) + '<i>%</i>');
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	