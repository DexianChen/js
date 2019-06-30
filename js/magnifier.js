$(function () {
    $(".mark").mouseover(function () {
        //鼠标进入图片后显示放大的区域
        $(".float-box").css("display", "block");
        $(".big-box img").css("display", "block");
    }).mouseout(function () {
        $(".float-box").css("display", "none");
        $(".big-box img").css("display", "none");
    });

    $(".mark").mousemove(function (event) {
        //让浮动窗口动起来
        //获取当前鼠标位置
        var e = event || window.event;
        var x = e.pageX || e.clientX + document.body.scrollLeft;
        var y = e.pageY || e.clientY + document.body.scrollTop;

        //放大图片分4个区域，获取分界线的x,y
        var big_box_boundary_x = $(".big-box img").width()/2;
        var big_box_boundary_y = $(".big-box img").height()/2;

        //不让浮动窗越界
        var float_box_boundary_left = $(".float-box").width();
        var float_box_boundary_top = $(".float-box").height();
        if (x>=0 && x<= float_box_boundary_left){
            $(".float-box").css("left", x + "px");
            //margin-left img相对于div的左偏移
            $(".big-box img").css("margin-left", -x + "px");
        }else {
            $(".float-box").css("left", float_box_boundary_left + "px");
            $(".big-box img").css("margin-left", -big_box_boundary_x + "px");
        }
        if (y>=0 && y<= float_box_boundary_top){
            $(".float-box").css("top", y + "px");
            //margin-left img相对于div的上偏移
            $(".big-box img").css("margin-top", -y + "px");
        }else {
            $(".float-box").css("top", float_box_boundary_top + "px");
            $(".big-box img").css("margin-top", -big_box_boundary_y + "px");
        }

    });
});
