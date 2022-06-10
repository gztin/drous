// JavaScript Document
$(function(){
	var timer = null;
	$(".dr1").click(function(){
		doctor1();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	$(".dr2").click(function(){
		doctor2();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	$(".dr3").click(function(){
		doctor3();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	$(".dr4").click(function(){
		doctor4();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	$(".dr5").click(function(){
		doctor5();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	$(".dr6").click(function(){
		doctor6();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});

	$(".dr7").click(function(){
		doctor7();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});

	$(".dr8").click(function(){
		doctor8();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});


	$(".dr9").click(function(){
		doctor9();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});

	$(".dr10").click(function(){
		doctor10();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});

	$(".dr11").click(function(){
		doctor11();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	$(".dr12").click(function(){
		doctor12();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	$(".dr13").click(function(){
		doctor13();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});

	$(".back_btn").click(function(){
		resetAll();
		if (timer)
			clearTimeout(timer);
		timer = setTimeout(resetAll, 30000);
	});
	function doctor1(){
		$(".doctor_inf_a").addClass("doctor_inf_a2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor2(){
		$(".doctor_inf_b").addClass("doctor_inf_b2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor3(){
		$(".doctor_inf_c").addClass("doctor_inf_c2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor4(){
		$(".doctor_inf_d").addClass("doctor_inf_d2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor5(){
		$(".doctor_inf_e").addClass("doctor_inf_e2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor6(){
		$(".doctor_inf_f").addClass("doctor_inf_f2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor7(){
		$(".doctor_inf_g").addClass("doctor_inf_g2");
		$(".member_pic").addClass("member_pic2");
	}

	function doctor8(){
		$(".doctor_inf_h").addClass("doctor_inf_h2");
		$(".member_pic").addClass("member_pic2");
	}

	function doctor9(){
		$(".doctor_inf_i").addClass("doctor_inf_i2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor10(){
		$(".doctor_inf_j").addClass("doctor_inf_j2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor11(){
		$(".doctor_inf_k").addClass("doctor_inf_k2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor12(){
		$(".doctor_inf_l").addClass("doctor_inf_l2");
		$(".member_pic").addClass("member_pic2");
	}
	function doctor13(){
		$(".doctor_inf_m").addClass("doctor_inf_m2");
		$(".member_pic").addClass("member_pic2");
	}

	function resetAll(){
		$(".doctor_inf_a").removeClass("doctor_inf_a2");
		$(".doctor_inf_b").removeClass("doctor_inf_b2");
		$(".doctor_inf_c").removeClass("doctor_inf_c2");
		$(".doctor_inf_d").removeClass("doctor_inf_d2");
		$(".doctor_inf_e").removeClass("doctor_inf_e2");
		$(".doctor_inf_f").removeClass("doctor_inf_f2");
		$(".doctor_inf_g").removeClass("doctor_inf_g2");
		$(".doctor_inf_h").removeClass("doctor_inf_h2");
		$(".doctor_inf_i").removeClass("doctor_inf_i2");
		$(".doctor_inf_j").removeClass("doctor_inf_j2");
		$(".doctor_inf_k").removeClass("doctor_inf_k2");
		$(".doctor_inf_l").removeClass("doctor_inf_l2");
		$(".doctor_inf_m").removeClass("doctor_inf_m2");
		$(".member_pic").removeClass("member_pic2");
		
	}
});