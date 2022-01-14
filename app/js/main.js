$(function () {


	new Swiper('.popular__swiper', {
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiperNext',
			prevEl: '.swiperPrev'
		},
	});

});