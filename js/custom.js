$(document).ready(function(){
	// navbar open
	$(".navbar-toggler-btn").on("click" , function(){
		$(".dart-menu").css("width" , "240px");
	});

	//navbar close
	$(".btn-close").on("click" , function(){
		$(".dart-menu").css("width" , "0");
	});

	// Slick slider
	$(".dart-slick-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		vertical: true,
		adaptiveHeight: true,
		autoplay: true,
		verticalSwiping: true,
		centerMode: false,
		centerPadding: '0',
		/*prevArrow: $('.top-arrow'),
		nextArrow: $('.bottom-arrow')*/
	});

	// smooth scrolling
	$(".dart-menu a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})