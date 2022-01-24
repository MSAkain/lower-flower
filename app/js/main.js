$(function () {

	const lastScrollTop = 0;
	const headerScroll = document.querySelector('.header-scroll');
	const body = document.querySelector('body');
	const headerBusket = document.querySelector('.header__basket');
	const busket = document.querySelector('.busket');
	const busketClose = document.querySelector('.busket__close');
	const header = document.querySelector('.header');
	const headerScrollButton = document.querySelector('.header-scroll__button');
	const headerScrollInput = document.querySelector('.header-scroll__input');
	const headerScrollForm = document.querySelector('.header-scroll__form');
	const headerScrollSearch = document.querySelector('.header-scroll__search');
	const headerScrollClose = document.querySelector('.header-scroll__close');
	const headerScrollRef = document.querySelector('.header-scroll__ref');



	new Swiper('.popular__swiper', {
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiperNext',
			prevEl: '.swiperPrev'
		},
	});

	$('.ticket__input').styler();




	window.addEventListener("scroll", function () {
		const st = window.pageYOffset || document.documentElement.scrollTop;

		if (st > lastScrollTop) {

			headerScroll.classList.add("header-scroll--active");
		} else {

			headerScroll.classList.remove("header-scroll--active");
		}
	});

	headerBusket.addEventListener('click', function () {
		busket.classList.add('busket--active');
		header.classList.add('header--blur');
		body.classList.add('hidden');
	});

	headerScrollButton.addEventListener('click', function () {
		busket.classList.add('busket--active');
		header.classList.add('header--blur');
		body.classList.add('hidden');
	});

	busketClose.addEventListener('click', function () {
		busket.classList.remove('busket--active');
		header.classList.remove('header--blur');
		body.classList.remove('hidden');
	});

	window.addEventListener('click', function (e) {
		if (!busket.contains(e.target) && !headerBusket.contains(e.target) && !headerScrollButton.contains(e.target)) {
			busket.classList.remove('busket--active');
			header.classList.remove('header--blur');
			body.classList.remove('hidden');
		}
	});

	headerScrollInput.addEventListener('click', function () {
		headerScrollInput.classList.add('header-scroll__input--active');
		headerScrollForm.classList.add('header-scroll__form--active');
		headerScrollSearch.classList.add('header-scroll__search--active');
		headerScrollClose.classList.add('header-scroll__close--active');
		headerScrollRef.classList.add('header-scroll__ref--disabled');
		document.getElementsByName('search')[0].placeholder = 'Введите свой запрос';
	})

	headerScrollClose.addEventListener('click', function () {
		headerScrollInput.classList.remove('header-scroll__input--active');
		headerScrollForm.classList.remove('header-scroll__form--active');
		headerScrollSearch.classList.remove('header-scroll__search--active');
		headerScrollClose.classList.remove('header-scroll__close--active');
		headerScrollRef.classList.remove('header-scroll__ref--disabled');
		document.getElementsByName('search')[0].placeholder = 'Поиск';
	})

});