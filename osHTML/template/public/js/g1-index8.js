$(function(){
	$('#g1-index8-search').focus(function(){
		$('#search-content-span1').hide();
		$('#search-content-span').hide();
	});
	$('#g1-index8-search').blur(function(){
		if($('#g1-index8-search').val()==""){
			$('#search-content-span1').show();
			$('#search-content-span').show();
		}
		
	});
	$('#search-content-span1').click(function(){
		var aa =$(this).text();
		$('#g1-index8-search').val(aa);
		$('#search-content-span1').hide();
		$('#search-content-span').hide();
	});
	$('#search-content-span').click(function(){
		var aa =$(this).text();
		$('#g1-index8-search').val(aa);
		$('#search-content-span1').hide();
		$('#search-content-span').hide();
	});
})
