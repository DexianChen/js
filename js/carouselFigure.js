$(function () {
    // 定义一个按钮的索引
    var index = 0;
    // 定义一个是否播放的属性，因为要判断鼠标停留在图片上的时候停止播放
    var play_setInterval = null;

    // 开始自动切换
    auto_banner();

    // 按钮的显与隐
    $(".bg").mouseover(function () {
        $(".btn").addClass("show");
        // 鼠标划在上面时候停止播放
        clearInterval(play_setInterval);
    }).mouseout(function () {
        $(".btn").removeClass("show");
        auto_banner();
    });

    // 第一种：下标与图片联动
    // 先是做下标动
    $(".nav").find("li").mouseover(function () {
        // this 表示当前的li；siblings是他的兄弟元素，没有select就add；有就remove
        $(this).addClass("select").siblings().removeClass("select");

        // 图片的下标的联动的
        // 第一条件就是获取图片的下标
        index = $(this).index();

        // 第二条件就是让图片根据下标消失
        $(".b_img").find("li").eq(index).fadeIn(1000).siblings().hide();

        // 如果背景图片是白色；在切换过程中会有刺眼的感觉，所以要在切换过程中更改背景颜色
        // 获取背景颜色
        var background = $(this).data("color");
        // 通过css样式更改背景颜色
        $(this).parents(".bg").fadeIn(1000).css("background", background);
    });

    // 第二种：按钮与图片联动
    // 既然是按钮；就是需要点击(前进按钮)
    $(".b_next").click(function () {
        // 每点击一次，索引值加一
        index++;

        // 索引长度 注意是length而不是length()
        var length = $(".nav").find("li").length;
        // 当索引值大于索引长度的时候归零
        if (index >= length) {
            index = 0;
        }

        // 点击按钮图片切换
        $(".b_img").find("li").eq(index).fadeIn(1000).siblings().hide();

        // 点击按钮图片背景切换
        var _background = $(".nav").find("li").eq(index).data("color");
        $(this).parents(".bg").fadeIn(1000).css("background", _background);

        // 点击按钮下标切换
        $(".nav").find("li").eq(index).addClass("select").siblings().removeClass("select");
    });
    // 后退按钮
    $(".b_pre").click(function () {
        index--;
        var _length = $(".nav").find("li").length;
        if (index < 0) {
            index = _length - 1;
        }
        $(".b_img").find("li").eq(index).fadeIn(1000).siblings().hide();
        var _background = $(".nav").find("li").eq(index).data("color");
        $(this).parents(".bg").fadeIn(1000).css("background", _background);
        $(".nav").find("li").eq(index).addClass("select").siblings().removeClass("select");
    });

    // 自动切换
    function auto_banner() {
        var length = $(".nav").find("li").length;
        play_setInterval = setInterval(function () {
            if (index > length) {
                index = length;
            }
            //图片
            $(".b_img").find("li").eq(index).fadeIn(1000).siblings().hide();
            $(".nav").find("li").eq(index).addClass("select").siblings().removeClass("select");

            //背景
            var background = $(".nav").find("li").eq(index).data("color");
            $(".bg").fadeIn(1000).css("background", background);

            if (index == length-1) {
                //如果索引为最后一个，则置零
                index = 0;
            } else {
                index++;
            }
        }, 2000);
    }
});
