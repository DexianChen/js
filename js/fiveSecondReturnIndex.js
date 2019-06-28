$(function() {
    var count = 5;

    //setInterval(code,millisec[,"lang"])
    setInterval(function() {
        count--;

        if (count <= 0) {
            //页面跳转
            window.location.href = "browse.html";
        }

        $("#count").html("<b>" + count + "</b>");
    }, 1000);
});
