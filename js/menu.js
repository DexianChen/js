$(function () {
    //id为menu的子代div的第一个子代
    $("#menu div:first-child").hover(function () {
        //找出该菜单的父类的其他同类的含有.list属性的所有子类
        $(this).parent().siblings().children(".list").css({display:"none"});
        $(this).siblings().css({display:"block"});
    }, function () {
        $(this).parent().children(".list").css({display:"none"});
    });
});