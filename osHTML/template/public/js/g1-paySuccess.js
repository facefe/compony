$(function(){
	/**
	 *g1-pay-Success-payment页面的向下按钮的路径
	 */	
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
	/*
	 * g1-pay-Success-payment订单详情的显示与隐藏和向下按钮的路径转换
	 */
	$('#g1-paySuccess-payment-details').click(function(){
		if($('#g1-paySuccess-payment-details-img').attr("src")==_paymentImg){
			$('#g1-paySuccess-payment-details-content').show();
			$('#g1-paySuccess-payment-details-img').attr("src","template/public/img/icon/triangle-orange-2.png");
		}else{
			$('#g1-paySuccess-payment-details-content').hide();
			$('#g1-paySuccess-payment-details-img').attr("src","template/public/img/icon/triangle-orange-1.png");
		}
		
	});
	
	//g1-pay-Success-payment微信支付扫码的显示与隐藏
	$('#g1-paySuccess-payment-choose-chat').click(function(){
		$('#g1-paySuccess-payment-container-chatPay').show();
	});
	$('#g1-paySuccess-payment-container-chatPay-GB').click(function(){
		$('#g1-paySuccess-payment-container-chatPay').hide();
	});
	
	//g1-pay-Success-payment支付宝支付扫码的显示与隐藏
	$('#g1-paySuccess-payment-choose-ZFB').click(function(){
		$('#g1-paySuccess-payment-container-Alipay').show();
	});
	$('#g1-paySuccess-payment-container-Alipay-GB').click(function(){
		$('#g1-paySuccess-payment-container-Alipay').hide();
	});
	$('.g1-paySuccess-comment-container-content-right-xing').click(function(){		
		$(this).attr("src","template/public/img/other/g1-comment3.png");
		$(this).prevAll().attr("src","template/public/img/other/g1-comment3.png");
		$(this).nextAll().attr("src","template/public/img/other/g1-comment2.png");
	});
	
	/*评论上传图片*/
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
				$(obj).parent().before('<div class="g1-Img-bao"><img class="g1-xiaoImg f_l" src="'+ this.result + '"><div class="g1-overly"><input class="delete" type="button" value="删除" /><input class="g1-comment-show" type="button" value="查看图片" /></div></div>');
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
				$('.delete').click(function(){
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

	/* 当前页面宽度 */
	function datuWidth() {
		return document.body.scrollWidth;
	}
	/**
	 * 添加地址页面失焦和获取焦点的效果
	 */
	$('.g1-paySuccess-setAddress-you1').focus(function(){
		$(this).removeClass('kong');
		$(this).addClass('you');
		$(this).parent().find('.g1-paySuccess-setAddress-kong').css("visibility","hidden");
	});
	$('.g1-paySuccess-setAddress-you1').blur(function(){
		if($(this).val().length==0){
			$(this).removeClass('you');
			$(this).addClass('kong');
			$(this).parent().find('.g1-paySuccess-setAddress-kong').css("visibility","visible");
		}else{
			$(this).removeClass('kong');
			$(this).addClass('you');
			$(this).parent().find('.g1-paySuccess-setAddress-kong').css("visibility","hidden");
		}
		
	});
	
	/**
	 * 添加地址页面保存的效果
	 */
	$('#g1-paySuccess-setAddress-BC').click(function(){
		$('.g1-paySuccess-setAddress-you1').each(function(){
			if($(this).val().length==0){				
				$(this).removeClass('you');
				$(this).addClass('kong');
				$(this).parent().find('.g1-paySuccess-setAddress-kong').css("visibility","visible");
			}else{
				
				$(this).removeClass('kong');
				$(this).addClass('you');
				$(this).parent().find('.g1-paySuccess-setAddress-kong').css("visibility","hidden");
			}
			
		});
	});
});
