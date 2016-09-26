/* Common JS */

// global
var btn = $('.js-plus-btn'),
	infoContainer = $('.js-info'),
	instructionBtn = $('.js-instruction'),
	header = $('.js-header'),
	footer = $('.js-footer'),
	tutorial = $('.js-tutorial'),
	logo = $('.js-logo'),
	tutorialBackBtn = $('.js-tutorial-back'),
	nav = $('.js-nav'),
	tab = $('.js-tab'),
	navIndex,
	back = $('.js-back');

back.on('click', function () {
	Android.openSlide('four.html');
});

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

nav.children().on('click', function () {
	navIndex = $(this).index() + 1;
	$(this).siblings().removeClass('is-active');
	$(this).addClass('is-active');
	tab.fadeOut(200).promise().done(function () {
		tab.filter('[data-index=' + navIndex + ']').fadeIn(200);
	});
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