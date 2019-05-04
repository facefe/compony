
$(function () {
    var swiper = new Swiper('.y1-shopping-banner', {
        loop: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
    });
    //设置全选复选框
    $("#y1-shop-inp1").click(function(){
        if(this.checked){
            $(".y1-shopping-ul-li-box1 :checkbox").prop("checked", true);
        }else{
            $(".y1-shopping-ul-li-box1 :checkbox").prop("checked", false);
        }
    });
    $("#y1-shop-inp-1").click(function(){
        if(this.checked){
            $(".y1-shopping-ul-li-box1 :checkbox").prop("checked", true);
        }else{
            $(".y1-shopping-ul-li-box1 :checkbox").prop("checked", false);
        }
    });
    //反选
    $("#y1-shop-inp2").click(function () {
        $(".y1-shopping-ul-li-box1 :checkbox").each(function () {
            $(this).prop("checked", !$(this).prop("checked"));
        });
    });
})