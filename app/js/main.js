$(function () {


	new Swiper('.popular__swiper', {
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiperNext',
			prevEl: '.swiperPrev'
		},
	});

	$('.ticket__input').styler();

	const $header = $(".header-scroll")
	const scroll = 0
	const active = "header-scroll--active"
	$(window).scroll(function () {
		if ($(window).scrollTop() > scroll) {
			$header.addClass(active)
		} else {
			$header.removeClass(active)
		}
	})

	$('.header__basket').on('click', function () {
		$('.busket').addClass('busket--active')
		$('.header').addClass('header--blur')
		$('body').addClass('hidden')
	});

	$('.header-scroll__button').on('click', function () {
		$('.busket').addClass('busket--active')
		$('.header').addClass('header--blur')
		$('body').addClass('hidden')
	});

	$('.busket__close').on('click', function () {
		$('.busket').removeClass('busket--active')
		$('.header').removeClass('header--blur')
		$('body').removeClass('hidden')
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".busket"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('busket--active')
			$('.header').removeClass('header--blur')
			$('body').removeClass('hidden')
		}
	});

});