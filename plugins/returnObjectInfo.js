//obj为一个对象，也可能为数组
returnObjectInfo = function (obj) {
    if ($.isPlainObject(obj)) {
        return returnSingleObjectInfo(obj);
    }else if ($.isArray(obj)) {
        return returnArrayInfo(obj);
    }else {
        return null;
    }
};

returnSingleObjectInfo = function (obj) {
    return "节点名称：" + returnInfoByVolidate(obj.nodeName);
};

returnArrayInfo = function(obj){
    return returnSingleObjectInfo(obj[0]);
};

returnInfoByVolidate = function (str) {
    if (str != ""){
        return str;
    }else {
        return "空";
    }
};