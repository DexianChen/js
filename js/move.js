$(function () {
	//mousemove([[data],fn]),mouseout([[data],fn]) 两者一般一起使用
	$("#studentTable tbody tr").mouseover(function () {
		//css(name|pro|[,val|fn]), 其中pro取properties, 要设置为样式属性的名/键值对
		//改变字体颜色,红色
		$(this).css({"color":"#ff0011"});
	}).mouseout(function () {
		//黑色
		$(this).css({"color":"#000000"});
	});
});

//改变背景色
// $(function () {
// 	var oldColor = "";
// 	$("#studentTable tbody tr").mouseover(function () {
// 		oldColor = $(this).css("background-color");
// 	$(this).css("background-color","red");
// 	}).mouseout(function () {
// 		$(this).css("background-color",oldColor);
// });
