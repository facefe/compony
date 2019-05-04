$(function(){
	// 用户中心的logo
	var _if = $('.y1-personal-column').size();
	if (_if > 0) {
		$('.y1-header-logo').find('img').attr('src','../public/img/other/f1-userCenter-logo.png')
	}

	// 初始化年月日三级联动插件
	var _length = $('.x1-personalCenter-div-birthday').size();
	if (_length !== 0) {
		new YMDselect('year1','month1','day1');
	}

	// 待评价订单删除
	$('#f1-userCenter-oj-del').click(function () {
		$(this).parents('.y1-personal-content1').remove();
	})

	// 编辑头像
	$('.x1-personalCenter-div-tab').on('change',function () {
		var obj = $('.x1-personalCenter-div-tab').get(0);
		var result = new FileReader();
		result.readAsDataURL(obj.files[0]);
		result.onload = function () {
			$('.x1-personalCenter-div-headPortrait').find('img').attr('src',this.result);
		}
		var result = new FileReader();
		result.readAsBinaryString(obj.files[0]);
		result.onload = function () {
			// 二进制原始数据
			var buffer = this.result;
		}
	});

	// 兴趣爱好点击事件
	var $tag = $('#f1-userCenter-tag > div');
	$tag.click(function(){
		if (!($(this).is('.f1-userCenter-tag-active'))) {
			$(this).addClass('f1-userCenter-tag-active');
		}else {
			$(this).removeClass('f1-userCenter-tag-active');
		}
	});

	// 左侧内容区悬浮控制（css无法解决）
	var $list = $('.y1-personal-column-ul-li-active');
	var _data = $list.attr('data-number');
	if (_data == 1) {
		$list.css('border-top','1px solid transparent');
	}else {
		$list.prev().css('border-bottom','1px solid transparent');
	}

	var $obj = $('#f1-userCenter-left-hover > li');
	$obj.mouseover(function(){
		if ($(this).attr('data-number') == 1) {
			$(this).css('border-top','1px solid transparent');
		}
		$(this).addClass('f1-userCenter-left-hover').css('border-bottom','1px solid transparent');
		$(this).prev().css('border-bottom', '1px solid transparent');
	})
	$obj.mouseout(function(){
		if ($(this).attr('data-number') == 1) {
			if ($(this).is('.y1-personal-column-ul-li-active')) {
				$(this).css('border-top','1px solid transparent');
			}else{
				$(this).css('border-bottom','1px solid #cccccc');
				$(this).css('border-top','1px solid #cccccc');
			};
		}else {
			if (!($(this).prev().is('.y1-personal-column-ul-li-active'))) {
				if ($(this).next().is('.y1-personal-column-ul-li-active')) {
					$(this).prev().css('border-bottom','1px solid #cccccc');
					$(this).css('border-bottom','1px solid transparent');
				}else {
					if ($(this).is('.y1-personal-column-ul-li-active')) {
						$(this).css('border-bottom','1px solid transparent');
					}else {
						$(this).prev().css('border-bottom','1px solid #cccccc');
						$(this).css('border-bottom','1px solid #cccccc');
					}
				}
			}else {
				$(this).css('border-bottom','1px solid #cccccc');
			}
		}
		$(this).removeClass('f1-userCenter-left-hover');
	})
	/*收藏点击删除出按钮界面*/
	  $(".w1-personal-box1-delete").click(function(){
			$(this).next('.w1-personal-box1-btn').css("display","block");
		})
	/*点击确定删除*/
	  $(".w1-personal-box1-btn-sure").click(function(){
			$(this).parents(".w1-personal-box1").css("display","none");
		})
	  /*点击取消*/
	  $(".w1-personal-box1-btn-cancel").click(function(){
			$(this).parent('.w1-personal-box1-btn').css("display","none");
		})
})
