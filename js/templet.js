
$(document).ready(function(){
    
     // 导航下拉菜单
        $('.navbar-logo .navbar-nav .wendang').mouseenter(function(event) {
             $('.navbar-logo .navbar-nav .wendang .nav-wendang .file').stop().fadeIn();
        });

         $('.navbar-logo .navbar-nav .wendang').mouseleave(function(event) {
            $('.navbar-logo .navbar-nav .wendang .nav-wendang .file').stop().fadeOut();
        });



        $('.navbar-logo .navbar-nav .guanyu').mouseenter(function(event) {
            $('.navbar-logo .navbar-nav .guanyu .nav-guanyu .file').stop().fadeIn();
        });

        $('.navbar-logo .navbar-nav .guanyu').mouseleave(function(event) {
            $('.navbar-logo .navbar-nav .guanyu .nav-guanyu .file').stop().fadeOut();
        });

        
        // 右侧固定区域
        $('#footer a').each(function(index, el) {
            $(this).hover(function() {

                $(this).addClass('active').siblings().removeClass('active');
                $(this).css('transform', 'translate(0px, 0)');

                $('#footer a:nth-of-type(4)').css('transform', 'translate(110px, 0)');
            }, function() {

                $(this).css('transform', 'translate(110px, 0)');
                
            });
        });


        $('#footer a:nth-of-type(4)').hover(function() {
            $('#weixin span ').css('display', 'block');
        }, function() {
            $('#weixin span ').css('display', 'none');
        });



        // 登录页面的js
        $('#login .close').hover(function() {
            $(this).children('img').attr('src', 'images/close2.png');
        });

});