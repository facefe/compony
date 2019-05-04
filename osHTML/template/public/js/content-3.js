$(function () {
    // 中部轮播初始化
    var mySwiper = new Swiper(".swiper-container", {
        autoplay: {
             delay: 3000
        },
    });
    //下部轮播初始化
    var mySwiper = new Swiper(".y3-btmbanner",{
        autoplay: 3000,
        effect : "coverflow",
        slidesPerView: 3,
        centeredSlides: true,
    });
});
