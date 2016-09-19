/* Common JS */

// global
var btn = $('.js-plus-btn'),
	infoContainer = $('.js-info'),
	instructionBtn = $('.js-instruction'),
	header = $('.js-header'),
	footer = $('.js-footer'),
	tutorial = $('.js-tutorial'),
	logo = $('.js-logo'),
	tutorialBackBtn = $('.js-tutorial-back');

instructionBtn.on('click', function () {
	logo.fadeToggle();
	instructionBtn.fadeToggle();
	footer.fadeToggle();
	tutorial.toggleClass('is-active');
	setTimeout(function () {
		tutorialBackBtn.fadeToggle();
	}, 1000);
});

tutorialBackBtn.on('click', function () {
	$(this).fadeToggle();
	tutorial.toggleClass('is-active');
	setTimeout(function () {
		footer.fadeToggle();
		logo.fadeToggle();
		instructionBtn.fadeToggle();
	}, 500);
});

btn.on('click', function () {
	$(this).toggleClass('is-minus');
});

function disableSwipe() {
	// Android.disablePaging();
}

function enableSwipe() {
	// Android.enablePaging();
}

/* Slide 1 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s1')) {
		var slider = $('.js-1-slider'),
			circle = $('.js-1-circle'),
			line = $('.js-1-line');

		disableSwipe();

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
					circle.unbind();
					circle.animate({'left': 524}, 200);
					line.animate({'left': 524}, 200, function () {
						Android.openSlide($('body').filter(':onScreen').attr('data-next-slide'))
					});
					return false;
				}
			}
		});
	}
})();

/* Slide 2 */
(function () {
	var nav = $('.js-nav'),
		tab = $('.js-tab'),
		navIndex,
		btn = $('.js-2-btn');

	disableSwipe();

	nav.children().on('click', function () {
		navIndex = $(this).index() + 1;
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
		tab.fadeOut(200).promise().done(function () {
			tab.filter('[data-index=' + navIndex + ']').fadeIn(200);
		});
	});

	if ($('body').filter(':onScreen').hasClass('s2')) {
		btn.on('click', function () {
			Android.openSlide($('body').filter(':onScreen').attr('data-next-slide'))
		});
	}
})();

/* Slide 3 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s3')) {
		var btn = $('.js-3-btn'),
			tooltip = $('.js-3-tooltip'),
			hammerSwipe3 = new Hammer(document.getElementById('s3'));

		disableSwipe();

		hammerSwipe3.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s3').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s3').attr('data-prev-slide'));
			}
		});

		btn.on('click', function () {
			var btnIndex = $(this).attr('data-index'),
				btnXY = {
					x: $(this).offset().left,
					y: $(this).offset().top
				};

			var current = tooltip.filter('[data-index=' + btnIndex + ']');

			if (!current.hasClass('position')) {
				var cloneHeight = current.outerHeight();
				if (!$(this).hasClass('is-left')) {
					current.css({
						'left': btnXY.x + 60,
						'top': btnXY.y - cloneHeight / 2 + 23
					});
				} else {
					current.addClass('is-left');
					current.css({
						'left': btnXY.x - current.width() - 45,
						'top': btnXY.y - cloneHeight / 2 + 23
					});
				}
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
			touchMove: false,
			draggable: false,
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
			tooltips.filter('.is-active').addClass('animated bounceOut').removeClass('is-active flipInX');
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
						"value": 20,
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
	}
})();

/* Slide 4 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s4')) {
		var close = $('.js-4-close'),
			init = $('.js-4-init'),
			popup = $('.js-4-popup'),
			hammerSwipe4 = new Hammer(document.getElementById('s4'));

		disableSwipe();

		hammerSwipe4.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s4').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s4').attr('data-prev-slide'));
			}
		});

		init.on('click', function (e) {
			e.stopPropagation();
			popup.addClass('is-active');
		});

		close.on('click', function () {
			popup.removeClass('is-active');
		});
	}
})();

/* Slide 5 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s5')) {
		var range1 = $('.js-5-range-1'),
			range2 = $('.js-5-range-2'),
			value1 = $('.js-5-value-1'),
			value2 = $('.js-5-value-2'),
			hammerSwipe5 = new Hammer(document.getElementById('s5'));

		disableSwipe();

		hammerSwipe5.on('swipe', function (e) {
			if (!$(e.target).is('.irs') && !$(e.target).is('.irs-bar') && !$(e.target).is('.irs-slider') && !$(e.target).is('.irs-bar-edge')) {
				if (e.direction == 2) {
					Android.openSlide($('body.s5').attr('data-next-slide'));
				}
				if (e.direction == 4) {
					Android.openSlide($('body.s5').attr('data-prev-slide'));
				}
			}
		});

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
	}
})();

/* Slide 6 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s6')) {
		var slider = $('.js-6-slider'),
			title = $('.js-6-title'),
			range = $('.js-6-range'),
			rangeIndex = 1,
			hammerSwipe6 = new Hammer(document.getElementById('s6'));

		disableSwipe();

		hammerSwipe6.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s6').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s6').attr('data-prev-slide'));
			}
		});

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
					range.slider('value', 33);
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
	}
})();

/* Slide 7 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s7')) {
		var nav = $('.js-7-nav'),
			navBtn = $('.js-7-nav-btn'),
			tab = $('.js-7-tab'),
			backBtn = $('.js-7-back'),
			pulse = $('.js-7-pulse'),
			hammerSwipe7 = new Hammer(document.getElementById('s7'));

		disableSwipe();

		hammerSwipe7.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s7').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s7').attr('data-prev-slide'));
			}
		});

		navBtn.on('click', function () {
			var currentTab = tab.filter('[data-index=' + parseInt($(this).index() + 1) + ']');
			header.addClass('is-white');
			footer.addClass('is-white');
			nav.addClass('is-active');
			currentTab.addClass('is-active');
			setTimeout(function () {
				currentTab.find(pulse).fadeIn('500');
			}, 1000);
		});

		backBtn.on('click', function () {
			header.removeClass('is-white');
			footer.removeClass('is-white');
			$(this).siblings().filter(pulse).fadeOut('50');
			$(this).closest(tab).removeClass('is-active');
			nav.removeClass('is-active');
		});
	}
})();

/* Slide 8 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s8')) {
		var btn = $('.js-8-btn'),
			wallet = $('.js-8-wallet'),
			info = $('.js-8-info'),
			money = $('.js-8-money'),
			hammerSwipe8 = new Hammer(document.getElementById('s8'));

		disableSwipe();

		hammerSwipe8.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s8').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s8').attr('data-prev-slide'));
			}
		});

		btn.on('click', function () {
			info.fadeToggle();
			info.addClass('zoomIn');
			money.toggleClass('is-active');
		});
	}
})();

/* Slide 9 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s9')) {
		var range = $('.js-9-range'),
			circle = $('.js-9-circle'),
			tab = $('.js-9-tab'),
			tablet = $('.js-9-tablet'),
			shadow = $('.js-9-shadow'),
			lol = $('.js-9-lol'),
			hammerSwipe9 = new Hammer(document.getElementById('s9'));

		disableSwipe();

		hammerSwipe9.on('swipe', function (e) {
			if (!$(e.target).is('.irs') && !$(e.target).is('.irs-bar') && !$(e.target).is('.irs-slider') && !$(e.target).is('.irs-bar-edge')) {
				if (e.direction == 2) {
					Android.openSlide($('body.s9').attr('data-next-slide'));
				}
				if (e.direction == 4) {
					Android.openSlide($('body.s9').attr('data-prev-slide'));
				}
			}
		});

		function changeCircle(data) {
			circle.each(function () {
				if ($(this).attr('data-index') <= data.from) {
					$(this).addClass('is-active');
				} else {
					$(this).removeClass('is-active');
				}
			});
		}

		function showNextSlide(data) {
			tab.filter('.is-active').removeClass('is-active').fadeOut(function () {
				if (!tab.filter('[data-index=' + data.from + ']').hasClass('is-active')) {
					tab.filter('[data-index=' + data.from + ']').addClass('is-active').fadeIn();
				}
				lol.filter('.is-active').removeClass('is-active').fadeOut();
				lol.filter('[data-index=' + data.from + ']').addClass('is-active').fadeIn();
			});
		}

		range.ionRangeSlider({
			type: 'single',
			grid: false,
			hide_min_max: true,
			hide_from_to: true,
			min: 1,
			max: 5,
			from: 1,
			onChange: function (data) {
				changeCircle(data);
			},
			onFinish: function (data) {
				changeCircle(data);
				showNextSlide(data);

				if (data.from == 1) {
					tablet.transition({
						rotate3d: '1,0,1,12deg'
					});
					lol.transition({
						rotate3d: '1,0,1,12deg'
					});
					shadow.transition({
						rotate3d: '1,0,1,11deg'
					});
				}

				if (data.from == 2) {
					tablet.transition({
						rotate3d: '1,0,-1,15deg'
					});
					lol.transition({
						rotate3d: '1,0,-1,15deg'
					});
					shadow.transition({
						rotate3d: '1,0,-1,-5deg'
					});
				}

				if (data.from == 3) {
					tablet.transition({
						rotate3d: '1,0,1,0deg'
					});
					lol.transition({
						rotate3d: '1,0,1,0deg'
					});
					shadow.transition({
						rotate3d: '1,0,-1,7deg'
					});
				}

				if (data.from == 4) {
					tablet.transition({
						rotate3d: '1,0,1,13deg'
					});
					lol.transition({
						rotate3d: '1,0,1,13deg'
					});
					shadow.transition({
						rotate3d: '1,0,1,0deg'
					});
				}

				if (data.from == 5) {
					tablet.transition({
						rotate3d: '1,0,1,0deg'
					});
					lol.transition({
						rotate3d: '1,0,1,0deg'
					});
					shadow.transition({
						rotate3d: '1,0,-1,5deg'
					});
				}
			},
			onUpdate: function (data) {
				changeCircle(data - 1);
			}
		});
	}
})();

/* Slide 10 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s10')) {
		var btn1 = $('.js-10-btn-1'),
			img = $('.js-10-img'),
			imgToggle = $('.js-10-img-toggle'),
			shadow1 = $('.js-10-shadow-1'),
			text = $('.js-10-text'),
			fix = $('.js-10-fix'),
			fix2 = $('.js-10-fix-2'),
			hammerSwipe10 = new Hammer(document.getElementById('s10'));

		disableSwipe();

		hammerSwipe10.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s10').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s10').attr('data-prev-slide'));
			}
		});

		fix2.on('click', function () {
			fix.stop().css('opacity', '1').animate({'opacity': 0}, 12000);
		});

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
	}
})();

/* Slide 11 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s11')) {
		var spinner1 = $('#spinner1'),
			spinner2 = $('#spinner2'),
			spinner3 = $('#spinner3'),
			spinner4 = $('#spinner4'),
			hammerSwipe11 = new Hammer(document.getElementById('s11'));

		disableSwipe();

		hammerSwipe11.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s11').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s11').attr('data-prev-slide'));
			}
		});

		if (spinner1.length) {
			spinner1.circleProgress({
				size: 220,
				thickness: 13,
				value: 0.9,
				lineCap: 'round',
				startAngle: -Math.PI / 2,
				fill: {gradient: ['#F48F00', '#F36039']},
				animation: {duration: 3000, easing: "swing"}
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('strong').html(parseInt(90 * progress) + '<span>%</span>');
			});
		}

		if (spinner2.length) {
			spinner2.circleProgress({
				size: 220,
				thickness: 13,
				value: 0.88,
				lineCap: 'round',
				startAngle: -Math.PI / 2,
				fill: {gradient: ['#F48F00', '#F36039']},
				animation: {duration: 3000, easing: "swing"}
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('strong').html(parseInt(88 * progress) + '<span>%</span>');
			});
		}

		if (spinner3.length) {
			spinner3.circleProgress({
				size: 220,
				thickness: 13,
				value: 0.38,
				lineCap: 'round',
				startAngle: -Math.PI / 2,
				fill: {gradient: ['#F48F00', '#F36039']},
				animation: {duration: 3000, easing: "swing"}
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('strong').html(parseInt(38 * progress) + '<span>%</span>');
			});
		}

		if (spinner4.length) {
			spinner4.circleProgress({
				size: 220,
				thickness: 13,
				value: 0.93,
				lineCap: 'round',
				startAngle: -Math.PI / 2,
				fill: {gradient: ['#F48F00', '#F36039']},
				animation: {duration: 3000, easing: "swing"}
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('strong').html(parseInt(93 * progress) + '<span>%</span>');
			});
		}
	}
})();

/* Slide 12 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s12')) {
		var swiper = document.getElementById('swiper'),
			hammerSwipeElement = new Hammer(swiper),
			hammerSwipe12 = new Hammer(document.getElementById('s12'));

		disableSwipe();

		hammerSwipe12.on('swipe', function (e) {
			if (!$(e.target).is('#swiper')) {
				if (e.direction == 2) {
					Android.openSlide($('body.s12').attr('data-next-slide'));
				}
				if (e.direction == 4) {
					Android.openSlide($('body.s12').attr('data-prev-slide'));
				}
			}
		});

		hammerSwipeElement.on('swipe', function (e) {
			if (e.direction == 2) {
				disableSwipe();
				setTimeout(function () {
					enableSwipe();
				}, 500);
				$('#next').trigger('click');
			}
			if (e.direction == 4) {
				disableSwipe();
				setTimeout(function () {
					enableSwipe();
				}, 500);
				$('#prev').trigger('click');
			}
		});

	}
})();

/* Slide 13 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s13')) {
		var hammerSwipe13 = new Hammer(document.getElementById('s13'));

		disableSwipe();

		hammerSwipe13.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s13').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s13').attr('data-prev-slide'));
			}
		});
	}
})();

/* Slide 14 */
(function () {
	if ($('body').filter(':onScreen').hasClass('s14')) {
		var hammerSwipe14 = new Hammer(document.getElementById('s14'));

		disableSwipe();

		hammerSwipe14.on('swipe', function (e) {
			if (e.direction == 2) {
				Android.openSlide($('body.s14').attr('data-next-slide'));
			}
			if (e.direction == 4) {
				Android.openSlide($('body.s14').attr('data-prev-slide'));
			}
		});
	}
})();