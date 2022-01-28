$(document).ready(function(){
	// navbar open
	$(".navbar-toggler-btn").on("click" , function(){
		$(".dart-menu").css("width" , "240px");
	});

	//navbar close
	$(".btn-close").on("click" , function(){
		$(".dart-menu").css("width" , "0px");
	});

})