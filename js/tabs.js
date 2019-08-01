$(document).ready(() => {
	$('.list a').click(function (event) {
		event.preventDefault();
		$('.list .clicked').removeClass('clicked');
		$(this).addClass('clicked');
		let currentTab = $(this).attr('href');
		$('.tab-content').not(currentTab).css({'display': 'none'});
		$(currentTab).fadeIn(1000);
	})
});