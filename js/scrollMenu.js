$(function () {
    // 定义区域的顶部和底部数组
    var topList = [];
    var bottomList = [];

    // 遍历章节，添加区域的顶部和底部到对应的数组中
    $("#content div").each(function (index, value) {
        bottomList.push($("#content div").eq(index).height() + $("#content div").eq(index).offset().top);
        topList.push($("#content div").eq(index).offset().top);
    });

    // 滚动事件
    $(window).scroll(function () {
        var windowTop = $(this).scrollTop();

        $.each(bottomList, function (index, value) {
            if (windowTop < value && windowTop > topList[index]){
                $("li").eq(index).css({background:"#425a66"});
                $("li").eq(index).siblings().css({background:"#ffffff"});
            }else {
                $("li").eq(index).css({background:"#ffffff"});
            }
        });

        var headerHeight = $(".pg-header").height();
        if (windowTop > headerHeight){
            $("#menu").css({top: windowTop + "px"});
        }else {
            $("#menu").css({top: headerHeight + "px"});
        }
    });
});