$(function(){
	//on(事件,[子代选择器],[数据],函数)
	$('#nav').on('click','li',function(event){
		//event是指点击事件, event.target是指最初触发事件的DOM元素。
		var target = event.target;
		
		//data-to, 其中data为key,to为value, go1等为具体的值
		var id = $(target).data("to");
		
		/**
		 animate(params,[speed],[easing],[fn]), 
			params:一组包含作为动画属性和终值的样式属性和及其值的集合
			speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000) 
			easing:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear" 和 "swing".
			fn:在动画完成时执行的函数，每个元素执行一次。
		*/
		//offset([condiction])获取匹配元素在当前视口的相对偏移
		$('html,body').animate({scrollTop:$('#'+id).offset().top}, 800);
	});
});