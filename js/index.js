
$(document).ready(function(){
    
    var simple = $('#simple').offset().top/1.8;
    var module = $('#module').offset().top/1.2;
    var self = $('#self').offset().top/1.2;
    var server = $('#server').offset().top/1.1;
    var search = $('#search').offset().top/1.1;
    var open = $('#open').offset().top/1.1;
    var choose = $('#choose').offset().top/1.1;
    var offer = $('#offer').offset().top/1.1;
    var notOnly = $('#notOnly').offset().top/1.02;
    var cooperate = $('#cooperate').offset().top/1.1;
    var back = $('#back').offset().top/1.1;

    $(window).scroll(function(event) {
        var val = $(document).scrollTop();

         if(val >= simple ){
            $('#simple .simple-top h1').css('transform', 'translate(0, 0)');
            $('#simple .simple-top p').css('transform', 'translate(0, 0)');
        }


        if(val >= module ){
            $('#module .module-left img').css('transform', 'translate(0, 0)');
            $('#module .module-right p').css('transform', 'translate(0, 0)');
            $('#module .module-right h1').css('transform', 'translate(0, 0)');
        }

        if(val >= self ){
            $('#self img').css('transform', 'translate(0, 0)');
            $('#self .self-left h1').css('transform', 'translate(0, 0)');
            $('#self .self-left p').css('transform', 'translate(0, 0)');
        }

        if(val >= server ){
            $('#server .server-left img').css('transform', 'translate(0, 0)');
            $('#server .server-right h1').css('transform', 'translate(0, 0)');
            $('#server .server-right p').css('transform', 'translate(0, 0)');
        }

        if(val >= search ){
            $('#search img').css('transform', 'translate(0, 0)');
            $('#search .search-left h1').css('transform', 'translate(0, 0)');
            $('#search .search-left p').css('transform', 'translate(0, 0)');
        }

         if(val >= open ){
            $('#search img').css('transform', 'translate(0, 0)');
            $('#open .open-top h1').css('transform', 'translate(0, 0)');
            $('#open .open-top p').css('transform', 'translate(0, 0)');
            $('#open .open-bottom span img').css('opacity', 1);
        }

        if(val >= choose ){
            $('#choose .choose-top h1').css('transform', 'translate(0, 0)');
            $('#choose .choose-top p').css('transform', 'translate(0, 0)');
        }

          if(val >= offer ){
            $('#offer .offer-top h1').css('transform', 'translate(0, 0)');
            $('#offer .offer-top p').css('transform', 'translate(0, 0)');
        }

        if(val >= notOnly ){
            $('#notOnly .notOnly-top h1').css('transform', 'translate(0, 0)');
            $('#notOnly .notOnly-top p').css('transform', 'translate(0, 0)');
            $('#notOnly .notOnly-top span').css('transform', 'translate(0, 0)');
        }

        if(val >= cooperate ){
            $('#cooperate h1').addClass('show');
        }

         if(val >= back ){
            $('#back .back-top h1').addClass('on');
        }
    });

    

    // 挑选区域
    
    var key = 0;

    var timer  = setInterval(autoplay, 4000);

        function autoplay(){
            
            key++;

            if(key >4){

                key = 0;

                $('#choose .box ul').animate({'left':-439*key}, 500);

                // $('#choose .box ul').css({'left': 0}, 100);
            }

             $('#choose .box ul').animate({'left':-439*key}, 1000);
        }

        //点击左箭头
        $('#choose .left').click(function(event) {

            autoplay();

        });

        //点击右箭头
        $('#choose .right').click(function(event) {

            key--;

            if(key < 0){

                key = 4;
            }

            $('#choose .box ul').stop().animate({'left':-439*key}, 1000);
        });

        
        $('#choose .left,#choose .right').hover(function() {

            clearInterval(timer);

        }, function() {

            timer = setInterval(autoplay, 4000);
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

});
