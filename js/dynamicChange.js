// jQuery实现左右div自适应相同高度
$(function () {
    $(window).scroll(function () {
       var windowTop = $(this).scrollTop();
       if(windowTop < 100){
           $("#left").css({"position":"absolute",top:"100px"});
       }else {
           $("#left").css({"position":"absolute",top: windowTop + "px"});
       }
   });
});