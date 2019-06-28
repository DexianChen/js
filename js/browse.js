$(function() {
	var indexList = [];
	$('ul').on('click','li',function(event){
		var target = event.target;
		//获取当前点击li的索引值
		var index = $(target).index();
		//判断indexList中是否存在index, 存在即返回-1
		if($.inArray(index, indexList) == -1){
			//加入到数组中
			indexList.push(index);
			//设置cookie, key, value, time(day)   JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串
			$.cookie("indexList", JSON.stringify(indexList), {expires:7});
			//this指向的就是触发这个事件的DOM对象, 这里是指点击到的li
			$(this).addClass("color");
		}
	});
	
	if ($.cookie("indexList") != null){
		//获取cookie记录的索引  JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
		indexListStr = JSON.parse($.cookie("indexList"));
		
		//alert(indexListStr);  0,1,2
		
		//遍历索引,为当前索引的元素添加样式
		//$.each(object, [callback]) 通用遍历方法，可用于遍历对象和数组。
		$.each(indexListStr, function(index, value){
			indexList.push(value);
			//eq(index|-index) 获取当前链式操作中第N个jQuery对象，返回jQuery对象
			$("ul li").eq(index).addClass("color");
		});
	}
});