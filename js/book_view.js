$(function () {
    // alert(returnObjectInfo($("#book_page div:not('[id]')").find("p")));
    var array = $("#book_page div:not('[id]')").find("p").toArray();
    $.each(array, function (index, value) {
        var html = $(value).html();

        //以数字开头的正则表达式
        var textReg = /^\d/;
        if (textReg.test(html)) {
           // 判断是否含有<br>
            if (html.indexOf("<br>") == -1 && html.indexOf("\\.") == -1) {
                    alert(html);
            }else {
                alert(html.substring(0, html.indexOf("<br>")));
            }
        }
    })
});