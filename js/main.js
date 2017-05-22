$(function () {

    $(window).scroll(function () {
        //取得螢幕捲動的Top位置px
        var $scrollPosition = $(window).scrollTop();
        //console.log($scrollPosition);

        //如果捲動已經超過 500 , 那麼就顯示 Go Top 指令按鈕
        if ($scrollPosition > 500) {
            //$('#scrollTopBtn').addClass('scroll');
            $('#scrollTopBtn').fadeIn();
        } else {
            //$('#scrollTopBtn').removeClass('scroll');
            $('#scrollTopBtn').fadeOut();
        }
    });
});
