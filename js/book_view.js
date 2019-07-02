$(function () {
    // 章、节、条文列表
    var chapterList = [];
    var nodeList = [];
    var itemList = [];

    var array = $("#book_page div:not('[id]')").find("p").toArray();
    $.each(array, function (index, value) {
        var html = $(value).html();

        //以数字开头的正则表达式
        var textReg = /^\d/;
        if (textReg.test(html)) {
           // 判断是否含有<br>,有些章带着节，中间有<br>
            if (html.indexOf("<br>") == -1) {
                // ．非句号，从页面拷贝过来，不含该符号的即为章
                if (html.indexOf("．") == -1) {
                    // 这里不能仅仅获取个位数的  TODO
                    var chapter = {"id":html.substring(0,html.indexOf(" ")), "content":html.substring(html.indexOf(" ")).trim()};
                    // alert(chapter.content)
                    chapterList.push(chapter);
                }
            }else {
                //带着节的章，则截取
                var chapter = {"id":html.substring(0,html.indexOf(" ")), "content":html.substring(html.indexOf(" "), html.indexOf("<br>")).trim()};
                chapterList.push(chapter);
            }
        }
    });

    $.each(chapterList, function (index, value) {
        alert(value.id + "   " + value.content);
    });
});