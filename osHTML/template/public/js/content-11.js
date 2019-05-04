$(function(){
	//轮播图
 	var swiper = new Swiper('.swiper-container', {
   		pagination: '.swiper-pagination',
        paginationClickable: true,
   		autoplay: 3000,
	    loop: true
	});
	
	//经典系列1 tab切换
	var $contents1 = $('#cake-index-main-container-list1-bot-tabcon1>div');
	var $lists1 = $('#cake-index-main-container-list1-tab1>li');
	var currIndex1 = 0 ;
    $lists1.click(function () { 		$(this).addClass("cake-index-main-container-list1-top-right-li-qh").siblings().removeClass("cake-index-main-container-list1-top-right-li-qh");
	    $contents1[currIndex1].style.display = 'none';
	    var index1 = $(this).index();
	    $contents1[index1].style.display = 'block';
	    currIndex1 = index1
    });
    
    //经典系列2 tab切换
	var $contents2 = $('#cake-index-main-container-list2-bot-tabcon1>div');
	var $lists2 = $('#cake-index-main-container-list2-tab1>li');
	var currIndex2 = 0 ;
    $lists2.click(function () { 		$(this).addClass("cake-index-main-container-list1-top-right-li-qh").siblings().removeClass("cake-index-main-container-list1-top-right-li-qh");
	    $contents2[currIndex2].style.display = 'none';
	    var index2 = $(this).index();
	    $contents2[index2].style.display = 'block';
	    currIndex2 = index2
 	});
 	
 	//经典系列3 tab切换
	var $contents3 = $('#cake-index-main-container-list3-bot-tabcon1>div');
	var $lists3 = $('#cake-index-main-container-list3-tab1>li');
	var currIndex3 = 0 ;
    $lists3.click(function () { 		$(this).addClass("cake-index-main-container-list1-top-right-li-qh").siblings().removeClass("cake-index-main-container-list1-top-right-li-qh");
	    $contents3[currIndex3].style.display = 'none';
	    var index3 = $(this).index();
	    $contents3[index3].style.display = 'block';
	    currIndex3 = index3
 	});
 	
 	//经典系列4 tab切换
	var $contents4 = $('#cake-index-main-container-list4-bot-tabcon1>div');
	var $lists4 = $('#cake-index-main-container-list4-tab1>li');
	var currIndex4 = 0 ;
    $lists4.click(function () { 		$(this).addClass("cake-index-main-container-list1-top-right-li-qh").siblings().removeClass("cake-index-main-container-list1-top-right-li-qh");
	    $contents4[currIndex4].style.display = 'none';
	    var index4 = $(this).index();
	    $contents4[index4].style.display = 'block';
	    currIndex4 = index4
 	});
})
