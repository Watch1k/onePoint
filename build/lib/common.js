/* Common JS */

// global
(function () {
	var btn = $('.js-plus-btn');

	btn.on('click', function () {
		$(this).toggleClass('is-minus');
	});
})();

/* Slide 1 */
(function () {
	var slider = $('.js-1-slider'),
		circle = $('.js-1-circle'),
		line = $('.js-1-line'),
		ind = false;

	circle.on('mouseup', function () {
		$(this).animate({'left': '0'}, 500);
		line.animate({'left': 82}, 500);
	});

	circle.draggable({
		containment: slider,
		axis: 'x',
		drag: function (event, ui) {
			line.css('left', 82 + ui.position.left);
			if (ui.position.left > 420) {
				if (!ind) {
					circle.animate({'left': 524}, 200);
					line.animate({'left': 524}, 200, function () {
						console.log('next slide');
						ind = false;
					});
				}
				ind = true;
				}
			}
	});
})();

/* Slide 2 */
(function () {
	var nav = $('.js-nav'),
		tab = $('.js-tab'),
		navIndex;

	nav.children().on('click', function () {
		navIndex = $(this).index() + 1;
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
		tab.fadeOut(200).promise().done(function () {
			tab.filter('[data-index=' + navIndex + ']').fadeIn(200);
		});
	});
})();

/* Slide 3 */
(function () {
	var btn = $('.js-3-btn'),
		tooltip = $('.js-3-tooltip');

	btn.on('click', function () {
		var btnIndex = $(this).attr('data-index'),
			btnXY = {
				x: $(this).offset().left,
				y: $(this).offset().top
			};

		var current = tooltip.filter('[data-index=' + btnIndex + ']');

		if (!current.hasClass('position')) {
			var cloneHeight = current.outerHeight();
			current.css({
				'left': btnXY.x + 60,
				'top': btnXY.y - cloneHeight / 2 + 23
			});
		}
		if (!current.hasClass('is-active')) {
			current.removeClass('fadeOut').addClass('is-active animated flipInX position');
		} else {
			current.addClass('animated fadeOut').removeClass('is-active flipInX');
		}
	});

	var sliderFor = $('.js-3-for'),
		sliderNav = $('.js-3-nav'),
		names = ['Astellas', 'Bayer', 'Dr. Reddys', 'Zambon', 'Novartis Pharma', 'Janssen'];

	sliderFor.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		vertical: true,
		verticalSwiping: true,
		customPaging: function (slider, i) {
			return '<div class="s3__nav-icon "></div><div class="s3__nav-text">' + names[i] + '</div>';
		},
		prevArrow: '<div class="s3__prev js-3-prev"><svg class="icon icon-arrow-top"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-top"></use></svg></div>',
		nextArrow: '<div class="s3__next js-3-next"><svg class="icon icon-arrow-bottom"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-bottom"></use></svg></div>'
	});

	sliderFor.on('beforeChange', function () {
		var tooltips = $('.js-3-tooltip');

		btn.removeClass('is-minus');
		tooltips.filter('.is-active').addClass('animated fadeOut').removeClass('is-active flipInX');
	});

	var dots = $('.s3 .slick-dots'),
		arrows = $('.js-3-arrows'),
		prev = $('.js-3-prev'),
		next = $('.js-3-next');

	dots.appendTo(sliderNav);
	prev.appendTo(arrows);
	next.appendTo(arrows);

	/* ---- particles.js config ---- */

	if ($('#particles-js').length) {
		particlesJS("particles-js", {
			"particles": {
				"number": {
					"value": 30,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#adadad"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 5
					},
					"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					}
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 7,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 250,
					"color": "#adadad",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 1,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					},
					"onclick": {
						"enable": true,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 140,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 200,
						"duration": 0.4
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		});
	}
})();

/* Slide 4 */
(function () {

})();

/* Slide 5 */
(function () {
	var range1 = $('.js-5-range-1'),
		range2 = $('.js-5-range-2'),
		value1 = $('.js-5-value-1'),
		value2 = $('.js-5-value-2');

	range1.ionRangeSlider({
		type: 'single',
		hide_min_max: true,
		hide_from_to: true,
		min: 1,
		max: 35,
		from: 17,
		onStart: function (data) {
			value1.html(data.from)
		},
		onChange: function (data) {
			value1.html(data.from)
		},
		onFinish: function (data) {
			value1.html(data.from)
		},
		onUpdate: function (data) {
			value1.html(data.from)
		}
	});

	range2.ionRangeSlider({
		type: 'single',
		hide_min_max: true,
		hide_from_to: true,
		min: 1,
		max: 15,
		from: 12,
		onStart: function (data) {
			value2.html(data.from)
		},
		onChange: function (data) {
			value2.html(data.from)
		},
		onFinish: function (data) {
			value2.html(data.from)
		},
		onUpdate: function (data) {
			value2.html(data.from)
		}
	});
})();

/* Slide 6 */
(function () {
	var slider = $('.js-6-slider'),
		title = $('.js-6-title'),
		range = $('.js-6-range'),
		rangeIndex = 1;

	slider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true
	});

	slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide != nextSlide) {
			title.fadeOut(50);
		}
		if (nextSlide + 1 != rangeIndex) {
			rangeIndex = nextSlide + 1;
			if (nextSlide == 0) {
				range.slider('value', 2);
			}
			if (nextSlide == 1) {
				range.slider('value', 8);
			}
			if (nextSlide == 2) {
				range.slider('value', 14);
			}
			if (nextSlide == 3) {
				range.slider('value', 20);
			}
			if (nextSlide == 4) {
				range.slider('value', 26);
			}
			if (nextSlide == 5) {
				range.slider('value', 32);
			}
		}
	});
	slider.on('afterChange', function (event, slick, currentSlde) {
		title.fadeIn();
	});

	range.slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 33,
		value: 2,
		change: function (event, ui) {
			if (ui.value < 8) {
				rangeIndex = 1;
				slider.slick('slickGoTo', '0', false);
			}
			if (7 < ui.value && ui.value < 14) {
				rangeIndex = 2;
				slider.slick('slickGoTo', '1', false);
			}
			if (13 < ui.value && ui.value < 20) {
				rangeIndex = 3;
				slider.slick('slickGoTo', '2', false);
			}
			if (19 < ui.value && ui.value < 26) {
				rangeIndex = 4;
				slider.slick('slickGoTo', '3', false);
			}
			if (25 < ui.value && ui.value < 32) {
				rangeIndex = 5;
				slider.slick('slickGoTo', '4', false);
			}
			if (31 < ui.value) {
				rangeIndex = 6;
				slider.slick('slickGoTo', '5', false);
			}
		}
	});
})();

/* Slide 7 */
(function () {
	var nav = $('.js-7-nav'),
		navBtn = $('.js-7-nav-btn'),
		tab = $('.js-7-tab'),
		backBtn = $('.js-7-back');

	navBtn.on('click', function () {
		nav.addClass('is-active');
		tab.filter('[data-index=' + parseInt($(this).index() + 1) + ']').addClass('is-active');
	});

	backBtn.on('click', function () {
		$(this).closest(tab).removeClass('is-active');
		nav.removeClass('is-active');
	});
})();

/* Slide 8 */
(function () {
	var btn = $('.js-8-btn'),
		wallet = $('.js-8-wallet'),
		info = $('.js-8-info'),
		money = $('.js-8-money');

	btn.on('click', function () {
		info.fadeToggle();
		info.addClass('zoomIn');
		money.fadeToggle();
		money.addClass('zoomInRight');
	});
})();

/* Slide 9 */
(function () {

})();

/* Slide 10 */
(function () {
	var btn1 = $('.js-10-btn-1'),
		img = $('.js-10-img'),
		imgToggle = $('.js-10-img-toggle'),
		shadow1 = $('.js-10-shadow-1'),
		text = $('.js-10-text');

	btn1.on('click', function () {
		$(this).siblings('.s10__box').toggleClass('is-active').children('img').toggleClass('is-active');
		$(this).siblings().filter(img).toggleClass('is-active');
		shadow1.toggleClass('is-active');
		//text
		$(this).parent().siblings().filter(text).children().toggle();
	});

	setInterval(function () {
		imgToggle.eq(0).fadeToggle();
		imgToggle.eq(1).fadeToggle();
	}, 5000);
})();

/* Slide 11 */
(function () {

})();

/* Slide 12 */
(function () {

})();

/* Slide 13 */
(function () {

})();