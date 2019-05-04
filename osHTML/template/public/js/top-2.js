$(function(){
    $('.y2-header-search').click(function () {
        $('.y2-search-text').show().find('input').focus();
        $('.y2-search-box').hide();
    });
    $('.y2-search-inp').blur(function () {
        $('.y2-search-text').hide();
        $('.y2-search-box').show();
    })
});