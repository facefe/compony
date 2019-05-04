$(function () {


    // 同意条款
    $('#f1-login-recall').click(function () {
        console.log("========");
        var $obj = $(this).find('i');
        var  rememberMe = $("#rememberMe");
        var _class = $(this).find('i').attr('class');
        if (_class == 'icon-checkbox-default-blank') {
            $obj.attr('class','icon-checkbox-checked-blank')
            rememberMe.val("true");
        }else {
            $obj.attr('class','icon-checkbox-default-blank')
            rememberMe.val("false")
        }
    });
    $(".w1-login-cont-h4-img").click(function () {
        layer.open({
            type: 1 //Page层类型
            ,area: ['500px', '180px']
            ,title: '帮助中心'
            ,shade: 0.6 //遮罩透明度
            ,maxmin: true //允许全屏最小化
            ,anim: 1 //0-6的动画形式，-1不开启
            ,content: '<div style="padding:50px;">如果在您的邮箱中未找见邮件，请您进入垃圾邮件箱中查看</div>'
        });

    })

});