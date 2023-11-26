$(function(){
	'use strict';

	// preloader
    $(".preloader").fadeOut(3000);

	// sidebar
	$('.side-left').sidenav();

	// collapse
	$('.collapsible').collapsible();

	// slider
	$('.slide-show').owlCarousel({
		items: 1,
        margin: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
	});

	// category
	$('.category-show').owlCarousel({
		items: 2,
        margin: 10,
        dots: false,
       	margin: 10,
       	stagePadding: 20,
       	loop: false
	});

	// tabs
	$('.tabs').tabs();

	// testimonial
	$('.testimonial-show').owlCarousel({
		items: 1,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
	});

});
