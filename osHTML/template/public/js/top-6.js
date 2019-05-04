$(function(){
	$(document).click(function(){
	    $('.g1-index14-Header-history').hide();
	});
	$('#g1-index14-search').click(function(){
		$('.g1-index14-Header-history').show();
	  	event.stopPropagation();
	});
	
	
	$('.Header-history-ul-li-img').click(function(){
		$(this).parent().remove();
		event.stopPropagation();
	});
	$('.history-ul-li-active-span').click(function(){
		$(this).parent().siblings().remove();
		event.stopPropagation();
	});
})
