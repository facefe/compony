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
		 $(function(){
             /**
             * textarea 限制输入字数
             * @param  string str 类名或ID
             * @param  number num 限制输入的字数
             */
            function limitImport(str){
                $(document).on('input propertychange',str,function(){
                    var self = $(this);
                    var content = self.val();
                    if (content.length > 200){
                        self.val(content.substring(0,200));
                    } 
                    self.siblings('span').text(self.val().length+'/'+200);
                });
            }

            //用法示例
            limitImport('.w1-Arefund-content1-tab-td5-txt',10);

        })
			
			
			
	var _paymentImg  = $('#g1-paySuccess-payment-details-img').attr("src");
	
	/**
	 * 评论页面查看大图
	 */
	var _g1CommentSrc;
	
	/**
	 * 评论页上传图片的张数
	 */
	var _g1CommentLen;
	
	/**
	 * 评论页上传图片的张数提示
	 */
	var _g1CommentNum=3;
	
	/**
	 * 收货地址页判断用
	 */
	var _g1setPasswordNum=0;		
//			
$('#shangchuan').change(function(){
		var obj = $(this);
		upFile(obj);
	});
	$('.g1-right-2-left').click(function(){
		$('#shangchuan').click();
		$('#shangchuan').change(function(){
			var obj = $(this);
			upFile(obj);
		});
	});
	$('.GRZX-ZHSZ-right-2-main-TX').mouseout(function(){
		$('.main-TX-ZZ').hide();
	});
	
	function upFile(obj){
		var result = new FileReader();
		result.readAsDataURL(obj[0].files[0]);
		result.onload = function(){	
			_g1CommentLen = $(".g1-Img-bao").length;
			if(_g1CommentLen!=3){
				$(obj).parent().before('<div class="g1-Img-bao"><img class="g1-xiaoImg f_l" src="'+ this.result + '"><div class="g1-overly"><input class="w1-Arefunds-content1-tab-td6-delete" type="button" value="删除" /><input class="g1-comment-show" type="button" value="查看图片" /></div></div>');
				_g1CommentNum--;				
											
				$('.g1-Img-bao').mouseover(function(){
					$(this).find('.g1-overly').show();
				});
				$('.g1-Img-bao').mouseout(function(){
					$(this).find('.g1-overly').hide();
				});
				/**
				 * 删除上传图片
				 */
				$('.w1-Arefunds-content1-tab-td6-delete').click(function(){
					_g1CommentLen = $(".g1-Img-bao").length;
					$(this).parents(".g1-Img-bao").remove();	
					_g1CommentNum++;				
					
				});
				/**
				 * 查看上传图片
				 */
				$('.g1-comment-show').click(function() {			
					_g1CommentSrc = $(this).parent().prev().attr("src");
					$('#g1-paySuccess-comment-container-daTuK').show();
					$('#g1-paySuccess-comment-container-daTuK').css("top", datuHeight())
					$('#g1-paySuccess-comment-container-daTuK').find(".g1-paySuccess-comment-container-daTuInner").attr("src", _g1CommentSrc);
				});
				$('#g1-paySuccess-comment-container-GB').click(function() {
	
					$('#g1-paySuccess-comment-container-daTuK').hide();
				});
			
			}else{
				
			}
		}
	}

	function datuHeight() {
		return window.pageYOffset;
	}
		$(function ($) {
		//弹出登录
		$("#example").hover(function () {
			$(this).stop().animate({
				opacity: '1'
			}, 600);
		}, function () {
			$(this).stop().animate({
				opacity: '0.6'
			}, 1000);
		}).on('click', function () {
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
			$("#LoginBox").fadeIn("slow");
		});
	
		//关闭
		$(".y1-right-box1-jiaoyicaozuo-box1-img").hover(function () { $(this).css({ color: 'black' }) }, function () { $(this).css({ color: '#999' }) }).on('click', function () {
			$("#LoginBox").fadeOut("fast");
			$("#mask").css({ display: 'none' });
		});
	});
})
