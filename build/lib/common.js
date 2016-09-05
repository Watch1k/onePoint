/* Common JS */

// global
(function(){
	var btn = $('.js-plus-btn');

	btn.on('click', function () {
		$(this).toggleClass('is-minus');
	});
})();

/* Slide 1 */
(function () {
	var slider = $('.js-1-slider'),
		circle = $('.js-1-circle'),
		line = $('.js-1-line');

	circle.on('mouseup', function () {
		$(this).animate({'left': '0'}, 500);
		line.animate({'right': 82}, 500);
	});

	circle.draggable({
		containment: slider,
		axis: 'x',
		drag: function (event, ui) {
			ui.position.left = Math.min(100, ui.position.left);
			line.css('right', 82 - ui.position.left);
			if (ui.position.left < (-400)) {
				circle.animate({'left': -524}, 300);
				circle.unbind();
				line.animate({'right': 524}, 150);
				return false;
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

})();

/* Slide 7 */
(function () {

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
		shadow1 = $('.js-10-shadow-1'),
		btn2 = $('.js-10-btn-2'),
		text = $('.js-10-text');

	btn1.on('click', function () {
		$(this).siblings('.s10__box').toggleClass('is-active').children('img').toggleClass('is-active');
		$(this).siblings().filter(img).toggleClass('is-active');
		shadow1.toggleClass('is-active');
		//text
		$(this).parent().siblings().filter(text).children().toggle();
	});

	btn2.on('click', function () {
		$(this).siblings().filter(img).toggleClass('is-active').not(':first-child').fadeToggle();
		//text
		$(this).parent().siblings().filter(text).children().toggle();
	});

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