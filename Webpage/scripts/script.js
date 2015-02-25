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

	$(".nav .sidebar > ul > li > a").click(function(e) {
		var element = $(this).parent();

		if(element.hasClass("active")) {
			$(".sidenav", element).animate({"min-height": 0}, 300);
			element.removeClass("active");
		} else {
			$(".sidenav", element).animate({"min-height": element.height()*$(".sidenav > ul > li", element).length}, 300);
			element.addClass("active");
		}
	});

	$(".sidenav > ul > li").hover(function() {
		if($(this).has("ul").length) {
			$(this).closest(".sidenav").toggleClass("active");
		} else {
			$(this).closest(".sidenav").removeClass("active");
		}
	});

	$(".article-list article a").click(function(e) {
		if(!$(this).parent().is(".meta")) {
			// e.preventDefault();
		}
	});

	// $(document).mousemove(function() {
		
	// });

	// $("main img").click(function() {
	// 	console.log("AHOJ");
	// });

	function toggleNav(apply) {

		if(apply === true) {
			$("body").addClass("navon");

			$(".page").animate({"left":"-" + Math.min($(document).width() * 0.85, 400) + "px"});
			$(".nav .sidebar").animate({"right": 0});
		} else if (apply === false) {
			$("body").removeClass("navon");
			$(".page").animate({"left":0});
			$(".nav .sidebar").animate({"right":"-" + Math.min($(document).width() * 0.85, 400) + "px"});
		} else {
			toggleNav(($("body").hasClass("navon")) == false);
		}
	}

	$(".nav .menu-open").click(function(event) {
		event.stopPropagation();
		toggleNav();
	});

	$(".nav .menu-close").click(function(event) {
		toggleNav(false);
	});

	$(".nav .sidebar").click(function(event) {
		if($("body").hasClass("navon")) {
			event.stopPropagation();
		}
	});

	$("body").click(function() {
		if($("body").hasClass("navon")) {
			toggleNav(false);
		}
	});
});