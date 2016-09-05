(function () {
	//slideshow style interval
	var autoSwap = setInterval( swap,500000);

	//pause slideshow and reinstantiate on mouseout
	$('.js-12-slider, .js-12-controls').hover(
		function () {
			clearInterval(autoSwap);
		},
		function () {
			autoSwap = setInterval( swap,500000);
		});

	//global variables
	var items = [];
	var startItem = 1;
	var position = 0;
	var itemCount = $('.js-12-slider li').length;
	var leftpos = itemCount;
	var resetCount = itemCount;
	var img = $('.js-12-desc');
	var currentImg = img.children('img').filter('.is-active').index();
	var nav = $('.js-12-nav');
	var currentNav = nav.children().filter('.is-active').index();

	//unused: gather text inside items class
	$('.js-12-slider li').each(function(index) {
		items[index] = $(this).text();
	});

	//swap images function
	function swap(action) {
		var direction = action;

		//moving carousel backwards
		if(direction == 'counter-clockwise') {
			var leftitem = $('.left-pos').attr('id') - 1;
			if(leftitem == 0) {
				leftitem = itemCount;
			}

			$('.right-pos').removeClass('right-pos').addClass('back-pos');
			$('.main-pos').removeClass('main-pos').addClass('right-pos');
			$('.left-pos').removeClass('left-pos').addClass('main-pos');
			$('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');

			startItem--;
			if(startItem < 1) {
				startItem = itemCount;
			}
		}

		//moving carousel forward
		if(direction == 'clockwise' || direction == '' || direction == null ) {
			function pos(positionvalue) {
				if(positionvalue != 'leftposition') {
					//increment image list id
					position++;

					//if final result is greater than image count, reset position.
					if((startItem+position) > resetCount) {
						position = 1-startItem;
					}
				}

				//setting the left positioned item
				if(positionvalue == 'leftposition') {
					//left positioned image should always be one left than main positioned image.
					position = startItem - 1;

					//reset last image in list to left position if first image is in main position
					if(position < 1) {
						position = itemCount;
					}
				}

				return position;
			}

			$('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
			$('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
			$('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
			$('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

			startItem++;
			position=0;
			if(startItem > itemCount) {
				startItem = 1;
			}
		}
	}

	//next button click function
	$('#next').click(function() {
		swap('clockwise');

		img.children('img').eq(currentImg).removeClass('is-active');
		if (currentImg == itemCount - 1) {
			currentImg = 0;
		} else {
			currentImg++;
		}
		img.children('img').eq(currentImg).addClass('is-active');

		nav.children().eq(currentNav).removeClass('is-active');
		if (currentNav == itemCount - 1) {
			currentNav = 0;
		} else {
			currentNav++;
		}
		nav.children().eq(currentNav).addClass('is-active');
	});

	//prev button click function
	$('#prev').click(function() {
		swap('counter-clockwise');

		img.children('img').eq(currentImg).removeClass('is-active');
		if (currentImg == 0) {
			currentImg = itemCount - 1;
		} else {
			currentImg--;
		}
		img.children('img').eq(currentImg).addClass('is-active');

		nav.children().eq(currentNav).removeClass('is-active');
		if (currentNav == 0) {
			currentNav = itemCount - 1;
		} else {
			currentNav--;
		}
		nav.children().eq(currentNav).addClass('is-active');
	});

	nav.children().click(function () {
		if ($(this).index() != currentNav) {
			nav.children().eq(currentNav).removeClass('is-active');
			$(this).addClass('is-active');
		}

		if ($(this).index() > currentNav) {
			for (var i = currentNav; i < $(this).index(); i ++) {
				swap('clockwise');
			}
			img.children('img').eq(currentImg).removeClass('is-active');
			if (currentImg == itemCount - 1) {
				currentImg = 0;
			} else {
				currentImg++;
			}
			img.children('img').eq(currentImg).addClass('is-active');
			currentNav = $(this).index();
		}

		if ($(this).index() < currentNav) {
			for (var j = $(this).index(); j < currentNav; j ++) {
				swap('counter-clockwise');
			}
			img.children('img').eq(currentImg).removeClass('is-active');
			if (currentImg == 0) {
				currentImg = itemCount - 1;
			} else {
				currentImg--;
			}
			img.children('img').eq(currentImg).addClass('is-active');
			currentNav = $(this).index();
		}
	});
})();