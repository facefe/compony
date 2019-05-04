$(function () {
    // 选项切换
    $('#f1-login-tab li').click(function () {
        var _href = $(this).attr('data-href');
        $(this).siblings('li').removeClass('f1-login-active');
        $(this).addClass('f1-login-active');
        $('.f1-login-form').hide();
        $('#'+_href).show()
    })

    // 记住密码
    $('#f1-login-recall').click(function () {
        var $obj = $(this).find('i');
        var _class = $(this).find('i').attr('class');
        if (_class == 'icon-checkbox-default-blank') {
            $obj.attr('class','icon-checkbox-checked-blank')
        }else {
            $obj.attr('class','icon-checkbox-default-blank')
        }
    });

    // 密码切换
    $('#f1-login-toggle').click(function(){
        var $input = $(this).prev();
        var _type = $(this).prev().attr('type');
        if (_type == "password") {
                $input.attr('type','text');
                return false;
        }
        $input.attr('type','password');
    })
});