$(function(){
		$("#BTN").on("click",menuOpen);
	// function alarm(){
	// 	alert("aaa!!!");
	// }
	function menuOpen(){
		$("#MENU").removeClass("CLOSE").addClass("OPEN");
		$("#btn_close").on("click",menuClose);
	}

	function menuClose(){
		$("#MENU").removeClass("OPEN").addClass("CLOSE");
		$("#btn_close").off("click",menuClose);
	}
});