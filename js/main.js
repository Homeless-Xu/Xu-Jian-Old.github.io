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












/*

	$("#sidebarDiv").hide();    // 隐藏右边 侧栏.
	// yml 大类的 默认排序:  ymlCateSortDefault . 如果这个值不是num 就选自定义排序. 
	if   ( $("#ymlCateSortDefault").text() != "num"     )  { $("#cateDiv-sort1").addClass("sortDeafuleBtn"); }
	else { $("#cateDiv-sort2").addClass("sortDeafuleBtn"); }
	// yml tag 默认排序: ymlTagSortDefault 可选值:abc num 不然就时间排序
	if      ( $("#ymlTagSortDefault").text() == "abc" )  { $("#tagDiv-sort1").addClass("sortDeafuleBtn"); }
	else if ( $("#ymlTagSortDefault").text() == "num" )  { $("#tagDiv-sort3").addClass("sortDeafuleBtn"); }
    else    { $("#tagDiv-sort2").addClass("sortDeafuleBtn"); }


*/
	


