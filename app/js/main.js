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
	const menuMobile = document.querySelector('.menu-mobile');
	const menuMobileBurger = document.querySelector('.mobile-header__burger');
	const menuMobileInput = document.querySelector('.menu-mobile__input');
	const menuMobileForm = document.querySelector('.menu-mobile__form');
	const menuMobileSearch = document.querySelector('.menu-mobile__search');
	const menuMobileClose = document.querySelector('.menu-mobile__close');
	const menuMobileRef = document.querySelector('.menu-mobile__ref');
	const menuMobileBtn = document.querySelector('.menu-mobile__button');
	const mobileHeader = document.querySelector('.mobile-header');
	const mobileHeaderTitle = document.querySelector('.mobile-header__title');



	$('.ticket__input').styler();




	window.addEventListener("scroll", function () {
		const st = window.pageYOffset || document.documentElement.scrollTop;

		if (st > lastScrollTop) {
			headerScroll.classList.add("header-scroll--active")
		} else {
			headerScroll.classList.remove("header-scroll--active")
		}
	});

	window.addEventListener("scroll", function () {
		const st = window.pageYOffset || document.documentElement.scrollTop;

		if (st > lastScrollTop) {
			mobileHeaderTitle.classList.add("mobile-header__title--active")
			mobileHeader.classList.add('mobile-header--active')
		} else {
			mobileHeaderTitle.classList.remove("mobile-header__title--active")
			mobileHeader.classList.remove('mobile-header--active')
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

	menuMobileInput.addEventListener('click', function () {
		menuMobileInput.classList.add('menu-mobile__input--active');
		menuMobileForm.classList.add('menu-mobile__form--active');
		menuMobileSearch.classList.add('menu-mobile__search--active');
		menuMobileClose.classList.add('menu-mobile__close--active');
		menuMobileRef.classList.add('menu-mobile__ref--disabled');
	})

	menuMobileClose.addEventListener('click', function () {
		menuMobileInput.classList.remove('menu-mobile__input--active');
		menuMobileForm.classList.remove('menu-mobile__form--active');
		menuMobileSearch.classList.remove('menu-mobile__search--active');
		menuMobileClose.classList.remove('menu-mobile__close--active');
		menuMobileRef.classList.remove('menu-mobile__ref--disabled');
	})

	menuMobileBurger.addEventListener('click', function () {
		menuMobile.classList.add('menu-mobile--active');
		header.classList.add('header--mobile-blur');
	})

	menuMobileBtn.addEventListener('click', function () {
		menuMobile.classList.remove('menu-mobile--active');
		header.classList.remove('header--mobile-blur');
	})

	function resizeScrenn() {
		if ($(window).width() >= 1081) {
			new Swiper('.popular__swiper', {
				slidesPerView: 3,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiperNext',
					prevEl: '.swiperPrev'
				},
			});
		} else {
			swiper.autoplay.stop();
		}
	}

	resizeScrenn();

	$(window).resize(function () {
		resizeScrenn();
	});

});