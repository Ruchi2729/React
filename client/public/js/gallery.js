/* TURN OFF HOVER DURING SCROLL (PERFORMANCE) */
var body = document.body, timer;

window.addEventListener('scroll', function() {
	clearTimeout(timer);
	if(!body.classList.contains('disable-hover')) {
		body.classList.add('disable-hover');
        console.log("body classlist");
	}

	timer = setTimeout(function() {
		body.classList.remove('disable-hover');
	}, 500);
}, false);

/* NAVIGATION */
var picture = $('.picture');

// Show full screen nav
$('nav').on('click', function () {
    console.log("nav onclick");
	$(this).toggleClass('show');
});

// On click, scroll to appropriate select
$('ul li').on('click', function () {
	console.log("ul li onclick");
	var thisPicture = $(this);
	var number = thisPicture.text();

	$('html, body').stop().animate({scrollTop: $('.picture'+number).position().top}, 400);
});