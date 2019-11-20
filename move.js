// JavaScript Document
$(function(){
	var timer = null;
	$(".css1").click(function(){
		resetAll();
		AA();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 15000);
	});
	$(".css2").click(function(){
		resetAll();
		BB();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 15000);
	});
	$(".css3").click(function(){
		resetAll();
		CC();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 15000);
	});
	$(".css4").click(function(){
		resetAll();
		DD();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 15000);
	});
	$(".css5").click(function(){
		resetAll();
		EE();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 15000);
	});
	$(".css6").click(function(){
		resetAll();
		FF();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 15000);
	});
	$(".back_btn").click(function(){
		resetAll();
	});
	function AA(){
		$(".A").addClass("A2");
		$(".doctor_inf").addClass("A2");
	}
	function BB(){
		$(".B").addClass("B2");
	}
	function CC(){
		$(".C").addClass("C2");
	}
	function DD(){
		$(".D").addClass("D2");
	}
	function EE(){
		$(".E").addClass("E2");
	}
	function FF(){
		$(".F").addClass("F2");
	}
	
	function resetAll(){
		$(".A").removeClass("A2");
		$(".B").removeClass("B2");
		$(".C").removeClass("C2");
		$(".D").removeClass("D2");
		$(".E").removeClass("E2");
		$(".F").removeClass("F2");
	}
});