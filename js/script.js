//nav active

$(document).ready(function(){
	$('.menu .nav-active a').click(function(){
		$('.nav-active a').removeClass('active activ');
		$(this).addClass('active activ');
	});
});

// Event ketika link diklik

$('.page-scroll').on('click',function(){

	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);


	$('html,body').animate({
		scrollTop : elemenTujuan.offset().top -60
	}, 1000, 'easeInOutExpo');
});



// Untuk parallax

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// portofolio
	if( wScroll > $('.feature').offset().top -270) {
		$('.feature .iconn').each(function(i){
			setTimeout(function(){
				 $('.feature .iconn').eq(i).addClass('muncul');
			}, 400 * (i+1));

		});

		
	}
})
