/**
 * Main JS file for Ayoungh behaviours
 */

/*globals jQuery, document */
(function ($) {
    //"use strict";



    $(document).ready(function(){

        $(".post-content").fitVids();

    });

}(jQuery));

$(window).load(function(){

	$('.home-template .site-head .blog-description').delay('600').fadeIn('slow');
	$('.home-template .site-head').delay('600').animate({'height':'40%'}, 'slow');

});