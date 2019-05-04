$(function(){
	//轮播图
 	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
   		autoplay:3000,
	    loop:true,
	});
	//茶品tab点击切换
    $('#cha1-index-main-tab-gc>li').click(function () { // 隐式遍历		
		$(this).addClass("cha1-index-main-container-gc-top-right-li-qh").siblings().removeClass("cha1-index-main-container-gc-top-right-li-qh");
	    var index = $(this).index();
	    $(".cha1-index-main-container-zong>div").eq(index).show();
		$(".cha1-index-main-container-zong>div").not($(".cha1-index-main-container-zong>div").eq(index)).hide();
	});
	
	//茶品内容点击切换
	var $cp_tab1 = $('#cha1-index-main-containers-gc1');
	var $cp_tab2 = $('#cha1-index-main-containers-gc2');
	var $cp_tab3 = $('#cha1-index-main-containers-gc3');
	var $cp_tab4 = $('#cha1-index-main-containers-gc4');
	var $cp_tab5 = $('#cha1-index-main-containers-gc5');
	var $cp_tab6 = $('#cha1-index-main-containers-gc6');
	var img_num1 =$("#cha1-index-main-containers-gc1 ul li").length	//1、获取图片的数量
	var img_num2 =$("#cha1-index-main-containers-gc2 ul li").length	//1、获取图片的数量
	var img_num3 =$("#cha1-index-main-containers-gc3 ul li").length	//1、获取图片的数量
	var img_num4 =$("#cha1-index-main-containers-gc4 ul li").length	//1、获取图片的数量
	var img_num5 =$("#cha1-index-main-containers-gc5 ul li").length	//1、获取图片的数量
	var img_num6 =$("#cha1-index-main-containers-gc6 ul li").length	//1、获取图片的数量
	var page_num =8;//2.每页个数
	var tot_page1 = Math.ceil(img_num1/page_num);//3.总页数
	var tot_page2 = Math.ceil(img_num2/page_num);//3.总页数
	var tot_page3 = Math.ceil(img_num3/page_num);//3.总页数
	var tot_page4 = Math.ceil(img_num4/page_num);//3.总页数
	var tot_page5 = Math.ceil(img_num5/page_num);//3.总页数
	var tot_page6 = Math.ceil(img_num6/page_num);//3.总页数
	var page_height1= "-" + (tot_page1-1)*780 +"px";
	var page_height2= "-" + (tot_page2-1)*780 +"px";
	var page_height3= "-" + (tot_page3-1)*780 +"px";
	var page_height4= "-" + (tot_page4-1)*780 +"px";
	var page_height5= "-" + (tot_page5-1)*780 +"px";
	var page_height6= "-" + (tot_page6-1)*780 +"px";
    
    for(var i =0;i<tot_page1;i++){
		 $cp_tab1.children("ul").append("<li></li>");
	}
    for(var i =0;i<tot_page2;i++){
		 $cp_tab2.children("ul").append("<li></li>");
	}
    for(var i =0;i<tot_page3;i++){
		 $cp_tab3.children("ul").append("<li></li>");
	}
    for(var i =0;i<tot_page4;i++){
		 $cp_tab4.children("ul").append("<li></li>");
	}
    for(var i =0;i<tot_page5;i++){
		 $cp_tab5.children("ul").append("<li></li>");
	}
    for(var i =0;i<tot_page6;i++){
		 $cp_tab6.children("ul").append("<li></li>");
	}
    
	$cp_tab1.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cp_tab2.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cp_tab3.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cp_tab4.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cp_tab5.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cp_tab6.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	 
	$cp_tab1.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cp_tab2.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cp_tab3.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cp_tab4.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cp_tab5.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cp_tab6.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
						
	$cp_tab1.children("ul").children("li").eq(0).click(function(){
		$cp_tab1.children("div").children("ul").css('margin-top','0px')
	});
	$cp_tab2.children("ul").children("li").eq(0).click(function(){
		$cp_tab2.children("div").children("ul").css('margin-top','0px')
	});
	$cp_tab3.children("ul").children("li").eq(0).click(function(){
		$cp_tab3.children("div").children("ul").css('margin-top','0px')
	});
	$cp_tab4.children("ul").children("li").eq(0).click(function(){
		$cp_tab4.children("div").children("ul").css('margin-top','0px')
	});
	$cp_tab5.children("ul").children("li").eq(0).click(function(){
		$cp_tab5.children("div").children("ul").css('margin-top','0px')
	});
	$cp_tab6.children("ul").children("li").eq(0).click(function(){
		$cp_tab6.children("div").children("ul").css('margin-top','0px')
	});
	
	$cp_tab1.children("ul").children("li").eq(tot_page1-1).click(function(){
		$cp_tab1.children("div").children("ul").css('margin-top',page_height1)
	});
	$cp_tab2.children("ul").children("li").eq(tot_page2-1).click(function(){
		$cp_tab2.children("div").children("ul").css('margin-top',page_height2)
	});
	$cp_tab3.children("ul").children("li").eq(tot_page2-1).click(function(){
		$cp_tab3.children("div").children("ul").css('margin-top',page_height3)
	});
	$cp_tab4.children("ul").children("li").eq(tot_page2-1).click(function(){
		$cp_tab4.children("div").children("ul").css('margin-top',page_height4)
	});
	$cp_tab5.children("ul").children("li").eq(tot_page2-1).click(function(){
		$cp_tab5.children("div").children("ul").css('margin-top',page_height5)
	});
	$cp_tab6.children("ul").children("li").eq(tot_page2-1).click(function(){
		$cp_tab6.children("div").children("ul").css('margin-top',page_height6)
	});
	
	//茶具tab点击切换
    $('#cha1-index-main-tab-ts>li').click(function () { // 隐式遍历		
		$(this).addClass("cha1-index-main-container-gc-top-right-li-qh").siblings().removeClass("cha1-index-main-container-gc-top-right-li-qh");
	    var index = $(this).index();
	    $(".cha1-index-main-container-zong-ts>div").eq(index).show();
		$(".cha1-index-main-container-zong-ts>div").not($(".cha1-index-main-container-zong-ts>div").eq(index)).hide();
	});
	
	//茶具内容点击切换
	var $cj_tab1 = $('#cha1-index-main-containers-ts1');
	var $cj_tab2 = $('#cha1-index-main-containers-ts2');
	var $cj_tab3 = $('#cha1-index-main-containers-ts3');
	var $cj_tab4 = $('#cha1-index-main-containers-ts4');
	var $cj_tab5 = $('#cha1-index-main-containers-ts5');
	var $cj_tab6 = $('#cha1-index-main-containers-ts6');
	var cjimg_num1 =$("#cha1-index-main-containers-ts1 ul li").length	//1、获取图片的数量
	var cjimg_num2 =$("#cha1-index-main-containers-ts2 ul li").length	//1、获取图片的数量
	var cjimg_num3 =$("#cha1-index-main-containers-ts3 ul li").length	//1、获取图片的数量
	var cjimg_num4 =$("#cha1-index-main-containers-ts4 ul li").length	//1、获取图片的数量
	var cjimg_num5 =$("#cha1-index-main-containers-ts5 ul li").length	//1、获取图片的数量
	var cjimg_num6 =$("#cha1-index-main-containers-ts6 ul li").length	//1、获取图片的数量
	var page_num =8;//2.每页个数
	var cjtot_page1 = Math.ceil(cjimg_num1/page_num);//3.总页数
	var cjtot_page2 = Math.ceil(cjimg_num2/page_num);//3.总页数
	var cjtot_page3 = Math.ceil(cjimg_num3/page_num);//3.总页数
	var cjtot_page4 = Math.ceil(cjimg_num4/page_num);//3.总页数
	var cjtot_page5 = Math.ceil(cjimg_num5/page_num);//3.总页数
	var cjtot_page6 = Math.ceil(cjimg_num6/page_num);//3.总页数
	var cjpage_height1= "-" + (cjtot_page1-1)*780 +"px";
	var cjpage_height2= "-" + (cjtot_page2-1)*780 +"px";
	var cjpage_height3= "-" + (cjtot_page3-1)*780 +"px";
	var cjpage_height4= "-" + (cjtot_page4-1)*780 +"px";
	var cjpage_height5= "-" + (cjtot_page5-1)*780 +"px";
	var cjpage_height6= "-" + (cjtot_page6-1)*780 +"px";
    
    for(var i =0;i<cjtot_page1;i++){
		 $cj_tab1.children("ul").append("<li></li>");
	}
    for(var i =0;i<cjtot_page2;i++){
		 $cj_tab2.children("ul").append("<li></li>");
	}
    for(var i =0;i<cjtot_page3;i++){
		 $cj_tab3.children("ul").append("<li></li>");
	}
    for(var i =0;i<cjtot_page4;i++){
		 $cj_tab4.children("ul").append("<li></li>");
	}
    for(var i =0;i<cjtot_page5;i++){
		 $cj_tab5.children("ul").append("<li></li>");
	}
    for(var i =0;i<cjtot_page6;i++){
		 $cj_tab6.children("ul").append("<li></li>");
	}
    
	$cj_tab1.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cj_tab2.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cj_tab3.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cj_tab4.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cj_tab5.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	$cj_tab6.children("ul").children("li").eq(0).addClass("cha1-index-main-container-gc-dj-span-qh");
	 
	$cj_tab1.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cj_tab2.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cj_tab3.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cj_tab4.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cj_tab5.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
	$cj_tab6.children("ul").children("li").click(function(){	
		$(this).addClass("cha1-index-main-container-gc-dj-span-qh").siblings().removeClass("cha1-index-main-container-gc-dj-span-qh");
	});
						
	$cj_tab1.children("ul").children("li").eq(0).click(function(){
		$cj_tab1.children("div").children("ul").css('margin-top','0px')
	});
	$cj_tab2.children("ul").children("li").eq(0).click(function(){
		$cj_tab2.children("div").children("ul").css('margin-top','0px')
	});
	$cj_tab3.children("ul").children("li").eq(0).click(function(){
		$cj_tab3.children("div").children("ul").css('margin-top','0px')
	});
	$cj_tab4.children("ul").children("li").eq(0).click(function(){
		$cj_tab4.children("div").children("ul").css('margin-top','0px')
	});
	$cj_tab5.children("ul").children("li").eq(0).click(function(){
		$cj_tab5.children("div").children("ul").css('margin-top','0px')
	});
	$cj_tab6.children("ul").children("li").eq(0).click(function(){
		$cj_tab6.children("div").children("ul").css('margin-top','0px')
	});
	
	$cj_tab1.children("ul").children("li").eq(cjtot_page1-1).click(function(){
		$cj_tab1.children("div").children("ul").css('margin-top',cjpage_height1)
	});
	$cj_tab2.children("ul").children("li").eq(cjtot_page2-1).click(function(){
		$cj_tab2.children("div").children("ul").css('margin-top',cjpage_height2)
	});
	$cj_tab3.children("ul").children("li").eq(cjtot_page2-1).click(function(){
		$cj_tab3.children("div").children("ul").css('margin-top',cjpage_height3)
	});
	$cj_tab4.children("ul").children("li").eq(cjtot_page2-1).click(function(){
		$cj_tab4.children("div").children("ul").css('margin-top',cjpage_height4)
	});
	$cj_tab5.children("ul").children("li").eq(cjtot_page2-1).click(function(){
		$cj_tab5.children("div").children("ul").css('margin-top',cjpage_height5)
	});
	$cj_tab6.children("ul").children("li").eq(cjtot_page2-1).click(function(){
		$cj_tab6.children("div").children("ul").css('margin-top',cjpage_height6)
	});
	
})

