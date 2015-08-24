$(document).ready(function () {
	$('span.smallNavButton').click(function () {
		$('#navItems').slideToggle();
	});

	$(window).resize(function (){
		if( $(window).width() > 890) {
			$('#navItems').removeAttr('style');
		}
	})
});