$(function(){
    var colors=["red","green","blue","pink","purple","cyan","hotpink","#000"];
    $("#btn1").click(function(){
        var randomColors = parseInt(Math.random()*colors.length);
        var randomY = Math.random()*400;
        
        $("<span></span>")
            .text($("#text").val())
            .css("color",colors[randomColors])
            .css("left",$(window).width())
            .css("top",randomY)
            .animate({left:-500},10000,"linear",function(){
                $(this).remove();
            })
            .appendTo("#box");
        $("#text").val("");
    });

    // 按回车键发送消息
    $("#text").keyup(function(e) {
        alert(returnObjectInfo(this));
        if (e.keyCode==13) {
            $("#btn1").click();
        }
    })
});