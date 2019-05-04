$(function(){
	//导航点击
	var $active = $(".ghmz-index-header-nav-li >a");
	$active.click(function(){
		$(this).parent(".ghmz-index-header-nav-li").addClass("ghmz-index-header-nav-li-bh").siblings().removeClass("ghmz-index-header-nav-li-bh");
	})
})
