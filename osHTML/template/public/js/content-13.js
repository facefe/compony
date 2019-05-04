$(function(){
	//轮播图
 	var swiper = new Swiper('.swiper-container', {
   		pagination: '.swiper-pagination',
        paginationClickable: true,
   		autoplay: 3000,
	    loop: true
	});
	
	// 彩妆  tab切换
	var $contents1 = $('#ghmz-index-main-list1 .ghmz-index-main-container-list-bot>div');
	var $lists1 = $('#ghmz-index-main-list1 .ghmz-index-main-container-list-top-ul>li');
	var currIndex1 = 0 ;
    $lists1.click(function () { 		
	    $contents1[currIndex1].style.display = 'none';
	    var index1 = $(this).index();
	    $contents1[index1].style.display = 'block';
	    currIndex1 = index1
    });
    
    //彩妆1  tab切换
	var $contents2 = $('#ghmz-index-main-list2 .ghmz-index-main-container-list-bot>div');
	var $lists2 = $('#ghmz-index-main-list2 .ghmz-index-main-container-list-top-ul>li');
	var currIndex2 = 0 ;
    $lists2.click(function () {
	    $contents2[currIndex2].style.display = 'none';
	    var index2 = $(this).index();
	    $contents2[index2].style.display = 'block';
	    currIndex2 = index2
 	});
 	
})
