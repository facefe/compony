// 注册功能

function registerFunc() {
    // 点击注册按钮跳转到注册页面
    $('.register1').on('click', function () {
        $('.mainview')
            .load('indexf/views/register/f1-register-min.html');
    });
}

