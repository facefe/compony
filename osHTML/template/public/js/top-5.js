$(function () {
    $('.show-img').click(function() {
        $('.y5-headenav-ul').stop().toggle(500);
    });
    $('.y5-head-bs').hover(function () {
            $('.y5-header-search2').stop().show(200);
            $('.y5-head-bs').css('background','#e3e12d');
        },function () {
            $('.y5-header-search2').stop().hide(200);
            $('.y5-head-bs').css('background','none');
        });
})
