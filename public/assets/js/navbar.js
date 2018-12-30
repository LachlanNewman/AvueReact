$(function () {

	const desktop = 768;
	const screenWidth = $(window).width();

	$('.nav-menu__link').click(function () {
		const id = '#' + $(this).data('scroll');

		let offset = 60;
		if(screenWidth < desktop){
			offset = 270;
		}
		$('#nav').removeClass('show-menu');
		$('#main').removeClass('show-menu');
		$("html, body").animate({
			scrollTop: $(id).offset().top - offset
		}, 2000);
	})
	
	
	$('#toggle').click(function () {
		$('#nav').toggleClass('show-menu')
		$('#main').toggleClass('show-menu');
	})
})