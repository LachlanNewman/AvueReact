$(function () {
	$('.nav-menu__link').click(function () {
		const id = '#' + $(this).data('scroll');
		$('#nav').removeClass('show-menu');
		$('#main').removeClass('show-menu');
		$("html, body").animate({
			scrollTop: $(id).offset().top - 270
		}, 2000);
	})
	
	
	$('#toggle').click(function () {
		$('#nav').toggleClass('show-menu')
		$('#main').toggleClass('show-menu');
	})
})