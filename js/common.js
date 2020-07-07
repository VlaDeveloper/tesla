$(function() {

	// img to svg
	$("img.img-svg").each(function(){var t=$(this),r=t.attr("id"),a=t.attr("class"),e=t.attr("src");$.get(e,function(e){var i=$(e).find("svg");void 0!==r&&(i=i.attr("id",r)),void 0!==a&&(i=i.attr("class",a+" replaced-svg")),!(i=i.removeAttr("xmlns:a")).attr("viewBox")&&i.attr("height")&&i.attr("width")&&i.attr("viewBox","0 0 "+i.attr("height")+" "+i.attr("width")),t.replaceWith(i)},"xml")});

	// mobile class
	function mob(){
		if($(window).width() < 992){
			$('.mnu-item').addClass('mob');
		} else {
			$('.mnu-item').removeClass('mob');
		}
	}

	mob();

	$(window).resize(function(){
		mob();
	});

	// toggle mobile menu
	$('.top-line').on('click', '.toggle-mnu, .mob a', function() {
		$('.mnu-wrapper').slideToggle(function(){
			if($(this).css('display') == 'none'){
				$(this).removeAttr('style');
			}
		});
	});

	$('.toggle-mnu, .mnu-item a').click(function(){
		$('.toggle-mnu').toggleClass('is-active');
	});

	// carousel
	$('.review-carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ['<i class="fa fa-car-side"></i>', '<i class="fa fa-car-side"></i>']
	});

	// smooth scroll
	$("a[href*='#']").mPageScroll2id();

});
