$(function () {
    // 分类点击事件
	$('.x1-goodsList-sort-right').click(function () {
		var $this = $(this);
        var $parent = $(this).parent();
        var $icon = $parent.find('i');
        var _height = $(this).prev().outerHeight();
        var _status = $(this).attr('data-status');
        if (_status == 'on') {
            $parent.animate({height:'50px'},400,function() {
                $this.attr('data-status', 'off')
            });
            $icon.css('transform','rotate(0)');
        }else {
            $parent.animate({height:_height},400,function(){
                $this.attr('data-status','on');
			});
            $icon.css('transform','rotate(180deg)');
		}
    });
    //分类点击事件二
    
	 $('.x1-goodsList-sort-content-div').click(function () {
        var $all = $(this).siblings('div');
        var $allchildren = $all.children('a')
        var $children=$(this).children("a");
        $all.removeClass('x1-goodsList-sort-content-div-active');
        $allchildren.removeClass('x1-goodsList-sort-content-div-active-a')
        $children.addClass('x1-goodsList-sort-content-div-active-a')
        $(this).addClass('x1-goodsList-sort-content-div-active');
    })
    // 排序点击事件
    $('.x1-goodsList-btn').click(function () {
        var _type = $(this).attr('data-type');
        var $icon = $(this).find('i');
        var $all = $(this).siblings('div');
        $all.removeClass('x1-goodsList-btn-active');
        $all.find('i').removeClass('icon-down-white-1').addClass('icon-down-orange-1');
        $icon.addClass('icon-down-white-1');
        $(this).addClass('x1-goodsList-btn-active');
        if (_type == undefined || _type == 'down') {
            $icon.css('transform','rotate(180deg)');
            $(this).attr('data-type','up');
        }else {
            $icon.css('transform','rotate(0deg)');
            $(this).attr('data-type','down');
        }
    })
});