$(function () {
    $("input:checked").prev().show()
    $("input:checked").siblings(".y1-address-ul-li-sp4").show()
    $(":checked").siblings('.y1-address-ul-li-sp3').html('修改本地址').parent().siblings().find('.y1-address-ul-li-sp3').html('设置默认地址');
    $(".y1-address-ul>li").change(function(){
        $(":checked").parent().addClass("cur").siblings().removeClass("cur");
        $(":checked").prev().show().parent().siblings().find('.y1-address-ul-li-sp1').hide();
    });
    $('.y1-address-ul-li-sp3').click(function(){
			$(this).html("修改本地址")
			$(this).parent().siblings().find(".y1-address-ul-li-sp3").html("设置默认地址");
			$(this).siblings(".y1-address-ul-li-sp4").show()
			$(this).parent().siblings().find(".y1-address-ul-li-sp4").hide();
		})

    // 添加收货地址
    $('#f1-settlement-address').click(function(){
        layer.open({
            type: 1,
            content: '',
            anim: 5,
            area: ['701px','430px'],
            moveOut : true,
            shadeClose: true,
            closeBtn: 0,
            move: false,
            title: false,
            success: function(layero, index){
                layer.style(index, {
                    borderRadius: '4px'
                });
                $('.layui-layer-content').html(
                    '<div class="f1-layui-layer-title">'+
                        '<div>修改收货人信息</div>'+
                        '<i class="f1-settlement-tk-close icon-close-gray-1"></i>'+
                    '</div>'+
                    '<div class="f1-settlement-tk">'+
                        '<div>'+
                            '<laber>*收货人：</laber>'+
                            '<input class="f1-sett-name-input" type="text" value="" placeholder="收货人姓名">'+
                        '</div>'+
                        '<div class="f1-sett-radio-box">'+
                            '<laber>性别：</laber>'+
                            '<input name="f1-sett-radio-1" type="radio">&nbsp;男&nbsp;&nbsp;&nbsp;'+
                            '<input name="f1-sett-radio-1" type="radio">&nbsp;女&nbsp;&nbsp;&nbsp;'+
                            '<input name="f1-sett-radio-1" type="radio" checked>&nbsp;保密'+
                        '</div>'+
                        '<div>'+
                            '<laber>*地址：</laber>'+
                            '<select class="f1-sett-sele-1"><option>省/直辖市</option></select>'+
                            '<select class="f1-sett-sele-1"><option>市</option></select>'+
                            '<select class="f1-sett-sele-1"><option>区/县</option></select>'+
                            '<select class="f1-sett-sele-1"><option>乡镇/街道</option></select>'+
                            '<input class="f1-sett-address-detail" type="text" value="" placeholder="详细地址">'+
                        '</div>'+
                        '<div>'+
                            '<laber>邮编：</laber><input type="text" value="" placeholder="如不清楚请写000000">'+
                        '</div>'+
                        '<div>'+
                            '<laber>*手机：</laber><input type="text" value="" placeholder="手机号">'+
                        '</div>'+
                        '<div class="f1-sett-address-default">'+
                            '<laber></laber>'+
                            '<input type="checkbox">设置为默认地址'+
                        '</div>'+
                        '<div>'+
                            '<laber></laber>'+
                            '<botton class="f1-sett-save-btn">保存</botton>'+
                        '</div>'+
                    '</div>'
                )
                $('.f1-settlement-tk-close').click(function(){
                    layer.closeAll();
                })
                console.log(layero, index);
              }
        })
    })
})