$(function () {
    // 章、节、条文列表
    var chapterList = [];
    var nodeList = [];
    var itemList = [];

    var array = $("#book_page div:not('[id]')").find("p").toArray();
    $.each(array, function (index, value) {
        var html = $(value).html();

        var firstSpace_index = html.indexOf(" ");

        //以数字开头的正则表达式
        var textReg = /^\d/;
        var chapter = {"chapterId":"", "content":""};
        var node = {"nodeId":"", "content":""};
        if (textReg.test(html)) {
           // 判断是否含有<br>,有些章带着节，中间有<br>
            if (html.indexOf("<br>") == -1) {
                // ．非句号，从页面拷贝过来，不含该符号的即为章
                if (html.indexOf("．") == -1) {
                    chapter = {"chapterId":html.substring(0,firstSpace_index), "content":html.substring(firstSpace_index).trim()};
                    chapterList.push(chapter);
                }else {
                    //含该符号则为节或条纹
                    var htmlSplit = html.substring(0,firstSpace_index).split("．");
                    var lenght = htmlSplit.length;
                    if (lenght == 2){
                        // 没带章的节
                        node = {"nodeId":html.substring(0,html.indexOf("．")+2), "content":html.substring(html.indexOf("．")+2).trim()};
                        nodeList.push(node);
                    }
                }
            }else {
                //带着节的章，则截取
                chapter = {"chapterId":html.substring(0,firstSpace_index), "content":html.substring(firstSpace_index, html.indexOf("<br>")).trim()};
                chapterList.push(chapter);
                
                //带着章的节，则截取
                var nodeStr = html.substring(html.indexOf("<br>")+4);
                nodeStr = nodeStr.substring(nodeStr.indexOf("<br>")+4).trim();
                node = {"nodeId":nodeStr.substring(0,nodeStr.indexOf("．")+2), "content":nodeStr.substring(nodeStr.indexOf("．")+2).trim()};
                nodeList.push(node);
            }

            // 获取条文 TODO
            var itemArray = $(value).parent().siblings().html().split("<br>");
            var item = {"itemId":"", "content":""};
            var itemId = "";
            var itemContent = "";
            $.each(itemArray, function (index, value) {
                if (chapter.chapterId != "1"){
                    // if (value.indexOf("．") != -1){
                    //     itemId = value.substring(0, value.indexOf(" "));
                    //     alert(itemId)
                    //     itemContent += value.substring(value.indexOf(" ")+1).trim();
                    // }else {
                    //     if (value.indexOf("。") != -1){
                    //         alert(itemId)
                    //         itemContent += value.trim();
                    //         alert(itemContent)
                    //         item = {"itemId":itemId, "content":itemContent};
                    //         itemList.push(item);
                    //         itemContent = "";
                    //     }
                    // }
                }else {
                    //TODO
                    if (value.indexOf("．") != -1){
                        itemId = value.substring(0, value.indexOf(" "));
                        itemContent = value.substring(value.indexOf(" ")).trim();
                        item = {"itemId":itemId, "content":itemContent};
                        alert(item.itemId + "--->" + item.content)
                        itemList.push(item);
                    }
                }
            });
        }
    });

    // $.each(chapterList, function (index, value) {
    //     alert(value.chapterId + "   " + value.content);
    // });

    // $.each(nodeList, function (index, value) {
    //     alert(value.nodeId + "--->" + value.content);
    // });

    // $.each(itemList, function (index, value) {
    //     alert(value.itemId + "--->" + value.content);
    // });
});