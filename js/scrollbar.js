// json 基本数据获取示范点


// 这个主要是 设置 滚动条高度的.  有高度 才能有滚动条.
$(function (){
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//下面这段是 设置 cate tag filename 的高度了. 控制 滚动条用的.
	function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　	}
　　　　return actualTop;
　　 }

	// 一个是 浏览器的高度 一个是 filenameDiv 距离 浏览器上边距 的距离 . 其他tag排序 cate排序 都在一个水平位置的.
	var xyz = document.documentElement.clientHeight;
	var xy = getElementTop(filenameDivFlex);
	var xxyy = xyz - xy;
		$("#filenameDivFlex").css("height",xxyy)
		$("#overflowHeighr2").css("height",xxyy)
		$(".blog-list-container3").css("height",xxyy) 
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是cate 的高度设置..
		$("#cateDivFlex").css("height",xxyy)
		$("#cateDiv1-numberSort").css("height",xxyy)
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是 tagDiv的 标签高度设置
		$("#alltagsContainer").css("height",xxyy)
		$("#tagDiv1-numberSort").css("height",xxyy)
		$("#tagDiv1-letterSort").css("height",xxyy) 
		$(".tagDiv2-catetags").css("height",xxyy) 

});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 filename 设置高度 来实现 滚动条.. 浏览器窗口一旦缩放 就执行这个函数. 来重新给 高度值..
window.onresize= function(){
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//下面这段是 设置 cate tag filename 的高度了. 控制 滚动条用的.
	function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　	}
　　　　return actualTop;
　　 }

	// 一个是 浏览器的高度 一个是 filenameDiv 距离 浏览器上边距 的距离 . 其他tag排序 cate排序 都在一个水平位置的.
	var xyz = document.documentElement.clientHeight;
	var xy = getElementTop(filenameDivFlex);
	var xxyy = xyz - xy;
		$("#filenameDivFlex").css("height",xxyy)
		$("#overflowHeighr2").css("height",xxyy)
		$(".blog-list-container3").css("height",xxyy) 
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是cate 的高度设置..
		$("#cateDivFlex").css("height",xxyy)
		$("#cateDiv1-numberSort").css("height",xxyy)
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是 tagDiv的 标签高度设置
		$("#alltagsContainer").css("height",xxyy)
		$("#tagDiv1-numberSort").css("height",xxyy)
		$("#tagDiv1-letterSort").css("height",xxyy) 
		$(".tagDiv2-catetags").css("height",xxyy) 

}





