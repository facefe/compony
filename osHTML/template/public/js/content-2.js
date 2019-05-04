$(function () {
    // 轮播初始化
    var mySwiper = new Swiper('.swiper-container', {
        effect : 'fade',
        autoplay: {
            delay: 3000,
        },
    });
    $(function(){
        timer(intDiff);
    });
    /*关闭广告*/
    $('.x2-main-close-banner').click(function(){
        $(this).parent().remove();
    });
});
/*倒计时*/
var intDiff = parseInt(5);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }else{
    	// $('.x2-main-content-djs').hide();
    }
    if (hour <= 9) hour = '0' + hour;
    if (second <= 9) second = '0' + second;
    if (minute <= 9) minute = '0' + minute;
    $('#day_show').html(day);
    $('#hour_show').html(hour);
    $('#minute_show').html(minute);
    $('#second_show').html(second);
    intDiff--;
    }, 1000);
}
