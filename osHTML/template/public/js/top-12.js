$(function(){
	//导航点击
	var $active = $(".deng-index-header-nav-li >a");
	$active.click(function(){
		$(this).parent(".deng-index-header-nav-li").addClass("deng-index-header-nav-li-bh").siblings().removeClass("deng-index-header-nav-li-bh");
	})
})
