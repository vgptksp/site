// Version low see
"use strict";
function dizSave (path) {
	cookies({diz_name : path || null}, {expires: 10 * 24 * 3600, autoencode : 0});
	location.reload();
};(function(d) {
	var cook = cookies('diz_name'),
		dcl = ('onpageshow' in window) ? 'pageshow' : 'DOMContentLoaded';

	window.addEventListener(dcl, function() {
		var linki = d.querySelectorAll('link');
		var link_alt = d.createElement('link');
		link_alt.rel = "StyleSheet";
		d.querySelector('head').appendChild(link_alt);
		link_alt.href = cookies('diz_name') || '';
	})
})(document);

// Date output
function mydate() {
	var temp_date = new Date();
	var year = temp_date.getFullYear();
	document.getElementById('dateFolder').innerHTML = '2009 - '+ year;
}


$(function(){

	// pjax
	$(document).pjax('.my_container ul.MenuBarVertical a', '.pjax-container', {fragment: '.pjax-container'});

	// Fixed #menu-btn
	var $menu = $('#menu-btn');
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 120 && $menu.hasClass('menu-btn_normal') ){
			$menu.removeClass('menu-btn_normal').addClass('menu-btn_fixed');
		}
		else if($(this).scrollTop() <= 120 && $menu.hasClass('menu-btn_fixed')) {
			$menu.removeClass('menu-btn_fixed').addClass('menu-btn_normal');
		}
	});

	// Menu hide & show on mobile
	$('#menu-btn').on('click', function(e) {
		e.preventDefault();
		$('.sidebar1').toggleClass('sidebar1_active'); //menu
		$('.content').toggleClass('content_active');
		$('.header').toggleClass('header_active');
		$('footer').toggleClass('footer_active');
	});
	$('.my_container ul.MenuBarVertical a').click(function() {
		$('.sidebar1_active').removeClass('sidebar1_active');
		$('.content').toggleClass('content_active');
		$('.header').toggleClass('header_active');
		$('footer').toggleClass('footer_active');
	});
	$('.content, .header, footer').click(function() {
		$('.sidebar1_active').removeClass('sidebar1_active');
		$('.content').toggleClass('content_active');
		$('.header').toggleClass('header_active');
		$('footer').toggleClass('footer_active');
	});

	//Scroll to top
	$(function() {
			$(window).scroll(function(){
		if ($(this).scrollTop() > 997) {
			$('.to-up').fadeIn();
		} else {
			$('.to-up').fadeOut();
		}
		});
		$('.to-up').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
		});
	});

	/*carousel*/
	$(".owl-carousel").owlCarousel({
		items: 3,
		nav: true,
		loop: true, /*infinity*/
		dots: true,
		margin: 5,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		autoplaySpeed: 2000,
		navSpeed: 1000,
		dotsSpeed: 500,
		responsive:{
			0: {
				items: 1,
				nav: false
			},
			992: {
				items: 2,
				nav: false
			},
			1280: {
				items: 3
			}
		}
	});

	// Асинхронная загрузка CSS
	$("head").append("<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300i|Roboto:300&amp;subset=cyrillic'>");
	$("head").append("<link rel='stylesheet' type='text/css' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>");


});