$(function(){
	var swiper = new Swiper('.swiper-container', {
	    pagination: {
	       el: '.swiper-pagination',
	    },
	    autoplay:true,
	    loop:true,
	
	});
	$('.g1-index14-container-zhuanQv-li').hover(function(){
		$(this).find('.g1-index14-container-zhuanQv-li-div').slideDown();
	},function(){
		$(this).find('.g1-index14-container-zhuanQv-li-div').slideUp();
	})

})
