$(document).ready(function() {
	var current = $(document).scrollTop(), delta = 0;
	$(document).scroll(function(event){
		var nav     = $(".nav").height(), diff = $(document).scrollTop() - current;
		    delta   = Math.min(Math.max(delta - diff, -nav), 0);
			current = $(document).scrollTop();

		if((current == 0)) {
			$(".nav").css({"position":"absolute", "top": "0px"}).removeClass("floating");
		} else {
			if((current >= Math.max(nav, $(".hero.background").outerHeight())) || $(".nav").css("position") == "fixed") {
				$(".nav").css("position", "fixed").addClass("floating");

				
				if(diff <= 0 && -parseInt($(".nav").css("top")) >= nav) {
					$(".nav").animate({"top": (delta = 0)+"px"}, 200);
					
				} else if (!$(".nav").is(":animated")) {
					$(".nav").css("top", delta+"px");

					if(delta <= -nav) {
						$(this).val("");
						$(".nav").removeClass("search-active");
					}
				}
			} else {
				$(".nav").css("position", "absolute");
			}
		}
	});

	$(".nav .search .icon").click(function(e) {
		e.preventDefault();
		$(".nav").addClass("search-active");
		$(".nav .search input").focus();
	});

	$(".nav .search input").focusout(function(e) {
		$(this).val("");
		$(".nav").removeClass("search-active");
	});

	$(".sidenav > ul > li").hover(function() {
		if($(this).has("ul").length) {
			$(this).closest(".sidenav").toggleClass("active");
		} else {
			$(this).closest(".sidenav").removeClass("active");
		}
	});

	$("main img").click(function() {
		console.log("AHOJ");
	});
});