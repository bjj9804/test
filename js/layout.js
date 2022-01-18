$(function(){
    $(".menu").click(function(){
        $("#gnb").toggleClass("open");
        $(".depth1 > li").removeClass("on")
    })

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('ul.tabs-1 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs-1 li').removeClass('current');
        $('.tab-content1').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $(".depth1 > li > .title").click(function() {
        //$(this).next(".depth2").slideDown();
        $(this).parent("li").toggleClass("on");
        $(this).parent("li").siblings("li").removeClass("on");
    });

    $(".depth2_title").click(function() {
        $(this).next(".depth3").slideToggle();
    })
    
    $(".depth3_title").click(function() {
        $(this).next(".depth4").slideToggle();
    })
})