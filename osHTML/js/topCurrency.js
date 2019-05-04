
//通用 登录方法

function loginCom(){
    $.ajax({
        url: baseUrl + 'frontEnd/getUserInfo',
        async: false,
        success: function (res) {
            if(res.code === 1 )  {
                $('.loginon').html(res.data.loginName)
                $('.signout').html('退出')
                // 登录成功之后 主页字样消失
                $('.register1').html('')
                window.isLogin = true
                console.log('肯定是登录成功了')
                console.log('肯定是登录成功了')
                loginUrl = '';
            //  自动登登录成功
            //  在登录成功之后， 在退出按钮上绑定 退出功能
                $('.signout').on('click', function () {
                    signOutFunc();
                });

                bindingEventClick()
            } else {
                // 如果没有登录，在 login 按钮上绑定点击事件 跳转到登录页面
                $('.loginon').on('click' , function () {
                    delMiddlePage()
                    $('.mainview')
                        .load('./indexf/views/login/f1-login-main.html');
                });
            }

        }

    });
}

function signOutFunc () {
    $.ajax({
        url: baseUrl + '/pass/logout',
        type: 'GET',
        success: function(res) {
            // console.log(res)
            // $('.loginon').html('登录')
            // $('.loginon').on('click' , function () {
            //     $('.mainview').load(loginUrl, function () {
            //         // debugger
            //         $('.loginon').prop('onclick', null).off('click');
            //     });
            // })
            window.location.href = '/os/'
            $('.signout').html('');
        }
    });

}

function toPersonCenter() {

    // 页面路由控制, 如果没有登录，则跳转到登录页面 登录之后跳转到对应页面
    if (window.isLogin) {
        $('.person-center').on('click', function () {
            //登陆了 去对应的页面
            $('.mainview')
                .load('indexf/views/PersonalCenter/person-information.html');
        });
        $('#myorder').on('click', function () {
            $('.mainview')
                .load('indexf/views/PersonalCenter/content01.html');
        });
        $('#shopCar').on('click', function () {
            $('.mainview')
                .load('indexf/views/shoppingcar/y1-shoppingcar.html');
        });
        $('#collection').on('click', function () {
            $('.mainview')
                .load('indexf/views/collection/ collection_new.html');
        });
        $('#myNews').on('click', function () {
            $('.mainview')
                .load('indexf/views/myOrder/myorder.html');
        });
    } else {
        // 没有登录去登录页面， 同时设置 这次登录成功之后的中部访问的页面
        $('.person-center').on('click', function () {
            $('.mainview')
                .load('indexf/views/login/f1-login-main.html', function () {
                    setMiddlePage('indexf/views/PersonalCenter/person-information.html');
                });
        });

        $('#myorder').on('click', function () {
            $('.mainview')
                .load('indexf/views/login/f1-login-main.html',function () {
                    setMiddlePage('indexf/views/PersonalCenter/content01.html');
                });
        });
        $('#shopCar').on('click', function () {
            $('.mainview')
                .load('indexf/views/login/f1-login-main.html',function () {
                    setMiddlePage('indexf/views/PersonalCenter/content01.html');
                });
        });
        $('#collection').on('click', function () {
            $('.mainview')
                .load('indexf/views/login/f1-login-main.html',function () {
                    setMiddlePage('indexf/views/PersonalCenter/content01.html');
                });
        });
        $('#myNews').on('click', function () {
            $('.mainview')
                .load('indexf/views/login/f1-login-main.html',function () {
                    setMiddlePage('indexf/views/PersonalCenter/content01.html');
                });
        });

    }

}

function bindingEventClick() {

    $('#indexPage').on('click', function () {
        $('.mainview').load('./template/views/main'+ main + '.html');
    });

}





