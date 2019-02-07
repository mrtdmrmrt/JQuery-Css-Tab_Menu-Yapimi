$(document).ready(function(){
	//$(".tab-content div").hide();
	$(".tab-content div:first").show();
	/*
	$(".tab li").click(function(){
		//1.yol..index üzerinden gitme..
		var indis= $(this).index();
		$(".tab-content div").hide();
		$(".tab-content div:eq(" + indis + ")").show();
		$(".tab li").removeClass("active");
		$(".tab li:eq("+indis+")").addClass("active");
	})
	*/
	//2.yol..attribute üzerinden yapma..
	$(".tab li").click(function(){
		//1.yol..index üzerinden gitme..
		var indis= $(this).index();
		var tab_content= $(this).attr("rel");
		$(".tab-content div").hide();
		//$(tab_content).slideDown();
		$(tab_content).fadeIn();
		//$(tab_content).show();

		$(".tab li").removeClass("active");
		$(".tab li:eq("+indis+")").addClass("active");
	})

})