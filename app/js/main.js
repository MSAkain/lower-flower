$(function () {

	const lastScrollTop = 0;
	const headerScroll = document.querySelector('.header-scroll');
	const body = document.querySelector('body');
	const busket = document.querySelector('.busket');
	const headerBusket = document.querySelector('.header__basket');
	const headerScrollButton = document.querySelector('.header-scroll__button');
	const headerScrollInput = document.querySelector('.header-scroll__input');
	const headerScrollForm = document.querySelector('.header-scroll__form');
	const headerScrollSearch = document.querySelector('.header-scroll__search');
	const headerScrollClose = document.querySelector('.header-scroll__close');
	const headerScrollRef = document.querySelector('.header-scroll__ref');
	const menuMobile = document.querySelector('.menu-mobile');
	const menuMobileInput = document.querySelector('.menu-mobile__input');
	const menuMobileForm = document.querySelector('.menu-mobile__form');
	const menuMobileSearch = document.querySelector('.menu-mobile__search');
	const menuMobileClose = document.querySelector('.menu-mobile__close');
	const menuMobileRef = document.querySelector('.menu-mobile__ref');
	const mobileHeader = document.querySelector('.mobile-header');
	const mobileHeaderTitle = document.querySelector('.mobile-header__title');
	const scrollToTopButton = document.getElementById('js-top');
	const fillter = document.querySelector('.filler-mobile__trigger--fillter');
	const sort = document.querySelector('.filler-mobile__trigger--sort');
	const category = document.querySelector('.filler-mobile__trigger--category');
	const header = document.querySelector('.header');
	const filterMobile = document.querySelector('.filler-mobile');
	const active = document.querySelector('.active')
	const swiperVertical = document.querySelector('.product__swiper-verticalslider')
	const swiperProduct = document.querySelector('.product__swiper')
	const tabNavs = document.querySelectorAll(".tabs__link");
	const tabPanes = document.querySelectorAll(".tabs__pane");
	const catalog = document.querySelector('.catalog');
	const suggestion = document.querySelector('.suggestion');


	header.addEventListener('click', function (event) {

		if (event.target.closest('.header__basket')) {
			busket.classList.add('busket--active');
			body.classList.add('hidden');
		};

		if (event.target.closest('.header-scroll__button')) {
			busket.classList.add('busket--active');
			body.classList.add('hidden');
		};

		if (event.target.closest('.busket__close')) {
			busket.classList.remove('busket--active');
			body.classList.remove('hidden');
		};

		if (event.target.closest('.header-scroll__input')) {
			headerScrollInput.classList.add('header-scroll__input--active');
			headerScrollForm.classList.add('header-scroll__form--active');
			headerScrollSearch.classList.add('header-scroll__search--active');
			headerScrollClose.classList.add('header-scroll__close--active');
			headerScrollRef.classList.add('header-scroll__ref--disabled');
			document.getElementsByName('search')[0].placeholder = 'Введите свой запрос';
		};

		if (event.target.closest('.header-scroll__close')) {
			headerScrollInput.classList.remove('header-scroll__input--active');
			headerScrollForm.classList.remove('header-scroll__form--active');
			headerScrollSearch.classList.remove('header-scroll__search--active');
			headerScrollClose.classList.remove('header-scroll__close--active');
			headerScrollRef.classList.remove('header-scroll__ref--disabled');
			document.getElementsByName('search')[0].placeholder = 'Поиск';
		};

		if (event.target.closest('.menu-mobile__input')) {
			menuMobileInput.classList.add('menu-mobile__input--active');
			menuMobileForm.classList.add('menu-mobile__form--active');
			menuMobileSearch.classList.add('menu-mobile__search--active');
			menuMobileClose.classList.add('menu-mobile__close--active');
			menuMobileRef.classList.add('menu-mobile__ref--disabled');
		};

		if (event.target.closest('.menu-mobile__close')) {
			menuMobileInput.classList.remove('menu-mobile__input--active');
			menuMobileForm.classList.remove('menu-mobile__form--active');
			menuMobileSearch.classList.remove('menu-mobile__search--active');
			menuMobileClose.classList.remove('menu-mobile__close--active');
			menuMobileRef.classList.remove('menu-mobile__ref--disabled');
		};

		if (event.target.closest('.mobile-header__burger')) {
			menuMobile.classList.add('menu-mobile--active');
			header.classList.add('header--mobile-blur');
		};

		if (event.target.closest('.menu-mobile__button')) {
			menuMobile.classList.remove('menu-mobile--active');
			header.classList.remove('header--mobile-blur');
		};

		if (filterMobile) {

			if (fillter && event.target.closest('.filler-mobile__trigger--fillter')) {
				header.classList.toggle('header-catalog--fillter');
				header.classList.remove('header-catalog--category');
				header.classList.remove('header-catalog--scroll');
				header.classList.remove('header-catalog--sort');
			};

			if (category && event.target.closest('.filler-mobile__trigger--category')) {
				header.classList.toggle('header-catalog--category');
				header.classList.remove('header-catalog--fillter');
				header.classList.remove('header-catalog--scroll');
				header.classList.remove('header-catalog--sort');
			};

			if (sort && event.target.closest('.filler-mobile__trigger--sort')) {
				header.classList.toggle('header-catalog--sort');
				header.classList.remove('header-catalog--fillter');
				header.classList.remove('header-catalog--scroll');
				header.classList.remove('header-catalog--category');
			};
		};
	});

	window.addEventListener('scroll', function () {
		const st = window.pageYOffset || document.documentElement.scrollTop;

		if (!active) {

			if (st > lastScrollTop) {
				headerScroll.classList.add('header-scroll--active')
			} else {
				headerScroll.classList.remove("header-scroll--active")
			}
		}

		if (st > lastScrollTop) {
			mobileHeaderTitle.classList.add('mobile-header__title--active')
			mobileHeader.classList.add('mobile-header--active')
		} else {
			mobileHeaderTitle.classList.remove('mobile-header__title--active')
			mobileHeader.classList.remove('mobile-header--active')
		}
	})


	document.querySelectorAll('.filler-mobile__trigger').forEach((item) =>
		item.addEventListener('click', () => {
			const parent = item.parentNode;

			if (parent.classList.contains('filler-mobile__item--active')) {
				parent.classList.remove('filler-mobile__item--active')
			} else {
				document.querySelectorAll('.filler-mobile__item')
					.forEach((child) => child.classList.remove('filler-mobile__item--active'))

				parent.classList.add('filler-mobile__item--active')
			}
		})
	);


	window.addEventListener('click', function (e) {
		if (!busket.contains(e.target) && !headerBusket.contains(e.target) && !headerScrollButton.contains(e.target)) {
			busket.classList.remove('busket--active');
			body.classList.remove('hidden');
		}
	});


	if (swiperVertical && swiperProduct) {

		let vertical = new Swiper('.product__swiper-verticalslider', {
			slidesPerView: 2,
			direction: 'vertical',
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper__next',
				prevEl: '.swiper__prev'
			},
		});

		let normal = new Swiper('.product__swiper', {
			slidesPerView: 1,
			effect: 'fade',
		});

		vertical.controller.control = normal;
	}


	for (var i = 0; i < tabNavs.length; i++) {

		tabNavs[i].addEventListener('click', function (e) {
			e.preventDefault();
			var activeTabAttr = e.target.getAttribute('data-tab');

			for (var j = 0; j < tabNavs.length; j++) {
				var contentAttr = tabPanes[j].getAttribute('data-tab-content');

				if (activeTabAttr === contentAttr) {
					tabNavs[j].classList.add('active');
					tabPanes[j].classList.add('active');
				} else {
					tabNavs[j].classList.remove('active');
					tabPanes[j].classList.remove('active');
				}
			};
		});
	}


	$('.price__input').ionRangeSlider({
		type: 'double',
		prefix: '₽',
		onStart: function (data) {
			$('.price__from').text(data.from);
			$('.price__to').text(data.to);
		},
		onChange: function (data) {
			$('.price__from').text(data.from);
			$('.price__to').text(data.to);
		},
	});

	$('.ticket__input').styler();

	$('.product__input').styler();

	$('.directory__select').select2({
		minimumResultsForSearch: -1
	});

	if (catalog) {
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
	}


	if (suggestion) {
		new Swiper('.suggestion__swiper', {
			slidesPerView: 4,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiperNext',
				prevEl: '.swiperPrev'
			},
		});
	}


	const scrollFunc = () => {

		let y = window.scrollY;
	};

	window.addEventListener('scroll', scrollFunc);

	const scrollToTop = () => {

		const c = document.documentElement.scrollTop || document.body.scrollTop;

		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);

			window.scrollTo(0, c - c / 10);
		}
	};


	window.onload = function () {
		scrollToTopButton.onclick = function (e) {
			e.preventDefault();
			scrollToTop();
		}
	}

});