$(document).ready(function(){
	$(".b-tabs__btn").removeClass("b-tabs__btn_active");
	$(".b-tabs__btn:first").addClass("b-tabs__btn_active");
	$(".b-tabs__content").removeClass("b-tabs__content_active");
	$(".b-tabs__content:first").addClass("b-tabs__content_active");
});
$(function(){
	$(".b-tabs__btn").click(function(){
		$(this).parent(".b-tabs__control").find(".b-tabs__btn").removeClass("b-tabs__btn_active");
		$(this).addClass("b-tabs__btn_active");

		$(this).parent().parent().find(".b-tabs__content").removeClass("b-tabs__content_active");
		$(this).parent().parent().find(".b-tabs__content").eq($(".b-tabs__btn").index(this)).addClass("b-tabs__content_active");
	});
});