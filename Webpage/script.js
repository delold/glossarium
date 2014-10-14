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

				if(diff <= 0) {
					$(".nav").animate({"top": (delta = 0)+"px"}, 200);
				} else {
					$(".nav").stop(true).css("top", delta+"px");
				}
			} else {
				$(".nav").css("position", "absolute");
			}
		}
	});
});