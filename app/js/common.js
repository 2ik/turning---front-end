AOS.init({
	disable: 'mobile'
});

$(document).on('click', '.scroll', function(e){
	e.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

$(function () {
	$('.work-section .items').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		navText: [
		'<svg class="svg-icon-ar-left"><use xlink:href="#svg-icon-ar-left" /></use></svg>',
		'<svg class="svg-icon-ar-right"><use xlink:href="#svg-icon-ar-right" /></use></svg>'
		],
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1000,
		autoHeight: true,
		nav:true,
		dots:true,
	});
	$('.reviews-section .items').owlCarousel({
		loop:false,
		margin:75,
		items:3,
		navText: [
		'<svg class="svg-icon-ar-left"><use xlink:href="#svg-icon-ar-left" /></use></svg>',
		'<svg class="svg-icon-ar-right"><use xlink:href="#svg-icon-ar-right" /></use></svg>'
		],
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1000,
		autoHeight: true,
		nav:true,
		dots:true,
	});
	$('.certificates-section .items').owlCarousel({
		loop:false,
		margin:30,
		items:4,
		navText: [
		'<svg class="svg-icon-ar-left"><use xlink:href="#svg-icon-ar-left" /></use></svg>',
		'<svg class="svg-icon-ar-right"><use xlink:href="#svg-icon-ar-right" /></use></svg>'
		],
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1000,
		autoHeight: true,
		nav:true,
		dots:true,
	});
});