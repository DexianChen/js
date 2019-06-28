// jQuery实现左右div自适应相同高度
$(function () {
    var leftOuterHeight = $("#left").outerHeight();
    var rightOuterHeight = $("#right").outerHeight();
    // alert(leftOuterHeight + "    " + rightOuterHeight);

    var leftHeight = $("#left").height();
    var rightHeight = $("#right").height();
    // alert(leftHeight + "    " + rightHeight);

    var leftTop = $("#left").offset().top;
   $(window).scroll(function () {
       if(leftTop < $(this).scrollTop){
           alert("sadasdasdsad");
           $("#left").css("top", $(this).scrollTop - leftTop);
       }else {
           alert(1231321321)
       }
   });
});