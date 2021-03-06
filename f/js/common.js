﻿var scrollTargets = {};
$(document).ready(function(){
	$(".b-tabs__btn").removeClass("b-tabs__btn_active");
	$(".b-tabs__btn:first").addClass("b-tabs__btn_active");
	$(".b-tabs__content").removeClass("b-tabs__content_active");
	$(".b-tabs__content:first").addClass("b-tabs__content_active");
	$(".b-ham-menu").find(".icon-ham").removeClass("icon-ham_close");
	$(".b-ham-menu").removeClass("b-ham-menu_active");

	$('.js-scroll-link').each(function() {
    var setlink = $(this),
        settarget = setlink.data('scrollto'),
        settargetitem = $('.js-scroll-target[data-scrollto="' + settarget + '"]').not(setlink)
    		scrollTargets[settarget] = settargetitem.offset().top;
	});

	$(".back-call").click(function() {
     $.fancybox.open({
       padding: 0,
       maxWidth: 420,
       minWidth: 420,
       minHeight: 440,
       href: '#b-back-call-popup',
       scrolling: 'no',
       helpers: {
         overlay: {
           locked: true
         }
       }
     });
     return false;
   });
});
$(function(){
	$(".b-tabs__btn").click(function(){
		$(this).parent(".b-tabs__control").find(".b-tabs__btn").removeClass("b-tabs__btn_active");
		$(this).addClass("b-tabs__btn_active");

		$(this).parent().parent().find(".b-tabs__content").removeClass("b-tabs__content_active");
		$(this).parent().parent().find(".b-tabs__content").eq($(".b-tabs__btn").index(this)).addClass("b-tabs__content_active");
	});
});
function fancy_close() {
 	$.fancybox.close();
}
$(function(){
  $(".js-scroll-link").click(function(){
  	if(!$(this).hasClass("active")) {
	    var scrollTo = $(this).data("scrollto"),
	    scrollTarget = $('*[data-scrollto="'+scrollTo+'"].js-scroll-target');
	    $.scrollTo(scrollTarget, 350, {offset: -50});
  	}
  });
  $(".b-what-is__btn").click(function(){
  	$(this).closest(".b-what-is").find(".b-what-is__content").toggleClass("b-what-is__content_active")
  });
  $(".b-ham-menu__btn").click(function(){
  	$(this).find(".icon-ham").toggleClass("icon-ham_close");
  	$(this).closest(".b-ham-menu").toggleClass("b-ham-menu_active");
  });
});
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$(window).on('scroll', function() {
		var initial = $(document).scrollTop(),
    anchor = '',
    margin = 70;

		$.each(scrollTargets, function(JIndex, JElement) {
		        initial >= JElement - margin && (anchor = JIndex);
		    }),
    		$('.js-scroll-link').removeClass('active').filter('[data-scrollto="' + anchor + '"]').addClass('active');
}).trigger('scroll');

$(window).on('scroll', function() {
	var winTop = $(document).scrollTop() + $( window ).height() / 2;
	$(".b-history__row").each(function(){
		var top = $(this).offset().top;
		var sepHeight = winTop - top;
		if(winTop > top) {
			$(this).addClass("b-history__row_active");
		}
		else {
			$(this).removeClass("b-history__row_active");
		}
		$(this).find(".b-history__sep_fill").height(sepHeight);
	});
});
