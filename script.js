/*Script for navbar*/

$(window).on('scroll', function()  {
	if ($(window).scrollTop()) {
		$('nav').addClass('black');
	}
	else {
		$('nav').removeClass('black');
	}
});
$(function() {
  $('.button').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});	

/*Script for fullscreen scroll*/

$(document).ready(function() { $('#fullpage').fullpage(); });


