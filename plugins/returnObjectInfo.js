returnObjectInfo = function (obj) {
    //obj为一个对象，也可能为数组,所以先进行判断
    if (typeof obj === "object") {
        if ($.isArray(obj)) {
            return returnArrayInfo(array);
        }else {
            return returnSingleObjectInfo(obj);
        }
    } else {
        return null;
    }
};

returnSingleObjectInfo = function (obj) {
    return $(obj).prop("outerHTML");
};

returnArrayInfo = function(array){
    var str = "";
    $.each(array, function (index, value) {
        str += returnSingleObjectInfo(value);
    });
    return str;
};

returnInfoByVolidate = function (str) {
    if (str != ""){
        return str;
    }else {
        return "空";
    }
};