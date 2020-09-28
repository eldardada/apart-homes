if(document.querySelector('.swiper-wrapper')) {
	@@include('libs/swiper.min.js');
}

if(document.querySelector('.offers-slider')) {
	let offersSlider = new Swiper('.offers-slider', {
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
		navigation: {
			prevEl: '.offers__prev',
			nextEl: '.offers__next'
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