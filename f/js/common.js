function set_active_control() {
	var active = $(".b-banner-control").find(".b-banner-control__btn.active");
	var offset = 30;
	var width = 60;
	if($("html").width() <= 1000) {
		offset = 20;
		width = 40;
	}
	$(".b-banner-control").find(".b-banner-control__pointer").width(active.width() + width).offset({left: active.offset().left - offset});
}
function theRotator() {
	$(".b-about-slider__item").removeClass("b-about-slider__item_active");
	$(".b-about-slider__item:first").addClass("b-about-slider__item_active");
	setInterval('rotate()',8000);
}
function rotate() {	
	var current = ($(".b-about-slider__item_active")?  $(".b-about-slider__item_active") : $(".b-about-slider__item:first"));
	var next = ((current.next().length) ? ((current.next().hasClass("b-about-slider__item_active")) ? $(".b-about-slider__item:first") :current.next()) : $(".b-about-slider__item:first"));	
	next.css({opacity: 0.0})
	.addClass("b-about-slider__item_active")
	.animate({opacity: 1.0}, 700);
	current.animate({opacity: 0.0}, 700)
	.removeClass("b-about-slider__item_active");
};
$(document).ready(function(){
	set_active_control();
	theRotator();
});
$(window).resize(function(){
	set_active_control();
})
$(function(){
	$(".b-banner-control").find(".b-banner-control__btn").click(function(){
		$(".b-banner-control").find(".b-banner-control__btn").removeClass("active");
		$(this).addClass("active");
		set_active_control();
		$(".b-main-banner__slide").removeClass("b-main-banner__slide_active");
		$(".b-main-banner__slide").eq($(".b-banner-control__btn").index(this)).addClass("b-main-banner__slide_active");
	});

});