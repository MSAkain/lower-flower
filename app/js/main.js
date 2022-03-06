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
	const scrollToTopButton = document.getElementById('js-top');
	const fillter = document.querySelector('.filler-mobile__trigger--fillter');
	const sort = document.querySelector('.filler-mobile__trigger--sort');
	const category = document.querySelector('.filler-mobile__trigger--category');


	if (fillter) {
		fillter.addEventListener('click', function () {
			header.classList.toggle('header-catalog--fillter');
			header.classList.remove('header-catalog--category');
			header.classList.remove('header-catalog--scroll');
			header.classList.remove('header-catalog--sort');
		});
	}

	if (category) {
		category.addEventListener('click', function () {
			header.classList.toggle('header-catalog--category');
			header.classList.remove('header-catalog--fillter');
			header.classList.remove('header-catalog--scroll');
			header.classList.remove('header-catalog--sort');
		});
	}

	if (sort) {
		sort.addEventListener('click', function () {
			header.classList.toggle('header-catalog--sort');
			header.classList.remove('header-catalog--fillter');
			header.classList.remove('header-catalog--scroll');
			header.classList.remove('header-catalog--category');
		});
	}


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

	$('.price__input').ionRangeSlider({
		type: "double",
		prefix: "₽",
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

	const active = document.querySelector('.active')
	if (!active) {
		window.addEventListener("scroll", function () {
			const st = window.pageYOffset || document.documentElement.scrollTop;

			if (st > lastScrollTop) {
				headerScroll.classList.add("header-scroll--active")
			} else {
				headerScroll.classList.remove("header-scroll--active")
			}
		});
	}


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
		body.classList.add('hidden');
	});

	headerScrollButton.addEventListener('click', function () {
		busket.classList.add('busket--active');
		body.classList.add('hidden');
	});

	busketClose.addEventListener('click', function () {
		busket.classList.remove('busket--active');
		body.classList.remove('hidden');
	});

	window.addEventListener('click', function (e) {
		if (!busket.contains(e.target) && !headerBusket.contains(e.target) && !headerScrollButton.contains(e.target)) {
			busket.classList.remove('busket--active');
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


	const swiperVertical = document.querySelector('.product__swiper-verticalslider')
	const swiperProduct = document.querySelector('.product__swiper')

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

	const tabNavs = document.querySelectorAll(".tabs__link");
	const tabPanes = document.querySelectorAll(".tabs__pane");

	for (var i = 0; i < tabNavs.length; i++) {

		tabNavs[i].addEventListener("click", function (e) {
			e.preventDefault();
			var activeTabAttr = e.target.getAttribute("data-tab");

			for (var j = 0; j < tabNavs.length; j++) {
				var contentAttr = tabPanes[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					tabNavs[j].classList.add("active");
					tabPanes[j].classList.add("active");
				} else {
					tabNavs[j].classList.remove("active");
					tabPanes[j].classList.remove("active");
				}
			};
		});
	}


	const catalog = document.querySelector('.catalog')
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


	const scrollFunc = () => {

		let y = window.scrollY;
	};

	window.addEventListener("scroll", scrollFunc);

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