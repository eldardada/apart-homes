if(document.querySelector('.swiper-wrapper')) {
	@@include('libs/swiper.min.js');
}

if(document.querySelector('.offers-slider')) {
	let offersSlider = new Swiper('.offers-slider', {
		loop: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
		navigation: {
			prevEl: '.offers__prev',
			nextEl: '.offers__next'
		},
		breakpoints: {
			721: {
			  slidesPerView: 2
			},
			1000: {
			  slidesPerView: 3
			}
		}
	});
}
if(document.querySelector('.image-slider')) {
	let imageSlider = new Swiper('.image-slider', {
		loop: true,
		lazy: true,
		navigation: {
			prevEl: '.image-slider__prev',
			nextEl: '.image-slider__next'
		}
	});
}

if(document.querySelector('.header')) {
	const navList = document.querySelector('.nav-list');

	document.addEventListener('click', e => {
		const target = e.target;
		const link = target.closest('.nav-list__link');
		if(link) {
			const listItem = target.closest('.nav-list__item');
			listItem.classList.toggle('nav-list__item--active');
		}
		else {
			const navListItemsActive =  navList.querySelectorAll('.nav-list__item--active');
			if(navListItemsActive.length) {
				navListItemsActive.forEach(el => {
					el.classList.remove('nav-list__item--active');
				});
			}
		}
		const headerBurger = target.closest('.header__burger');
		if(headerBurger) {
			const headerMenu = document.querySelector('.header__menu');
			headerMenu.classList.toggle('header__menu--active');
			const body = document.querySelector('body');
		}
		
	});
}

