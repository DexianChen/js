//首先屏蔽到浏览器自带的右键功能
document.oncontextmenu = function () {
    return false;
};
//点击鼠标三键
$(document).mousedown(function (e) {
    //1是左键；2是中间键；3是右键
    var key = e.which;
    if (key == 3) {
        var x = e.clientX; //x坐标
        var y = e.clientY; //y坐标
        //获取menu的长宽
        var menuHeight = $(".menu").height();
        var menuWidth = $(".menu").width();
        //获取浏览器的可见长宽
        var clintHeight = getClientHeight();
        var clintWidth = getClientWidth();
        //判断
        if (menuHeight + y >= clintHeight) {
            y = clintHeight - menuHeight - 8;
        }
        if (menuWidth + x >= clintWidth) {
            x = clintWidth - menuWidth - 8;
        }
        //之前必须要绝对定位才行
        $(".menu").show().css({left: x, top: y});

    }
});

//点击空白隐藏鼠标右键
$(document).click(function () {
    $(".menu").hide();
});

//响应事件
function jy_menu(i) {
    switch (i) {
        case 0:
            alert("这是打开操作");
            break;
        case 1:
            alert("这是刷新操作");
            break;
        case 2:
            alert("这是复制操作");
            break;
        case 3:
            alert("这是粘贴操作");
            break;
        default:
            alert("这是注销操作");
    }
}

// 浏览器的可见高度
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}

// 浏览器的可见宽度
function getClientWidth() {
    var clientWidth = 0;
    if (document.body.clientWidth && document.documentElement.clientWidth) {
        clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
    } else {
        clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
    }
    return clientWidth;
}