// 判断yml里面的默认值. 然后给 对应的,默认排序添加css
/*
$(function(){                           
 $("#filenameDiv").scroll(function() {      
    var offset = $(this).offset();      
    $("#filenameDiv-Btnes").offset(offset);  
  }) ;                             
});

*/


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

	var xyz = document.documentElement.clientHeight
	// console.log(xyz);
	// 这个就是浏览器的高度. 
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 下面是 filename 设置高度 来实现 滚动条.
	var xy = getElementTop(filenameDivFlex);
	// console.log(xy);
	// 这个就是 文件列表 距离 浏览器上边距 的距离.
	var xxyy = xyz - xy;
	//console.log(xxyy);
	$("#filenameDivFlex").css("height",xxyy)
	$("#overflowHeighr2").css("height",xxyy)
	$(".blog-list-container3").css("height",xxyy) 
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 下面是cate 的高度设置..
	var xy3 = getElementTop(cateDivFlex);
	//console.log(xy3);
	var xxyy3 = xyz - xy3;
	$("#cateDivFlex").css("height",xxyy3)
	$("#cateDiv1-numberSort").css("height",xxyy3)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 下面是 tagDiv的 标签高度设置
	// 这里 本来是要用 id 来获取的. 但是id里面有 - . 导致函数报错. 就直接用了 66. 这个其实是xy的值.
	// 因为 三列是一条线上的 就直接用了....

	// var xy2 = getElementTop(alltagsContainer);
	// console.log(xy2);
	// 这个就是 文件列表 距离 浏览器上边距 的距离.
	var xxyy2 = xyz - 66;
	// console.log(xxyy2);
	$("#alltagsContainer").css("height",xxyy2)
	$("#tagDiv1-numberSort").css("height",xxyy2)
	$("#tagDiv1-letterSort").css("height",xxyy2) 
	$(".tagDiv2-catetags").css("height",xxyy2) 


	




　

	$("#sidebarDiv").hide();    // 隐藏右边 侧栏.
	// yml 大类的 默认排序:  ymlCateSortDefault . 如果这个值不是num 就选自定义排序. 
	if   ( $("#ymlCateSortDefault").text() != "num"     )  { $("#cateDiv-sort1").addClass("sortDeafuleBtn"); }
	else { $("#cateDiv-sort2").addClass("sortDeafuleBtn"); }
	// yml tag 默认排序: ymlTagSortDefault 可选值:abc num 不然就时间排序
	if      ( $("#ymlTagSortDefault").text() == "abc" )  { $("#tagDiv-sort1").addClass("sortDeafuleBtn"); }
	else if ( $("#ymlTagSortDefault").text() == "num" )  { $("#tagDiv-sort3").addClass("sortDeafuleBtn"); }
    else    { $("#tagDiv-sort2").addClass("sortDeafuleBtn"); }



















});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 filename 设置高度 来实现 滚动条.. 浏览器窗口一旦缩放 就执行这个函数. 来重新给 高度值..
window.onresize= function(){
	function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　	}
　　　　return actualTop;
　　 }

	var xyz = document.documentElement.clientHeight
	// console.log(xyz);
	// 这个就是浏览器的高度. 

	var xy = getElementTop(filenameDivFlex);
	 console.log(xy);
	// 这个就是 文件列表 距离 浏览器上边距 的距离.
	var xxyy = xyz - xy;
	//console.log(xxyy);
	$("#filenameDivFlex").css("height",xxyy)
	$("#overflowHeighr2").css("height",xxyy)
	$(".blog-list-container3").css("height",xxyy) 
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 下面是cate 的高度设置..
	var xy3 = getElementTop(cateDivFlex);
	console.log(xy3);
	var xxyy3 = xyz - xy3;
	$("#cateDivFlex").css("height",xxyy3)
	$("#cateDiv1-numberSort").css("height",xxyy3)
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 下面是 tagDiv的 标签高度设置
	// 这里 本来是要用 id 来获取的. 但是id里面有 - . 导致函数报错. 就直接用了 66. 这个其实是xy的值.
	// 因为 三列是一条线上的 就直接用了....

	// var xy2 = getElementTop(alltagsContainer);
	// console.log(xy2);
	// 这个就是 文件列表 距离 浏览器上边距 的距离.
	var xxyy2 = xyz - 66;
	// console.log(xxyy2);
	$("#alltagsContainer").css("height",xxyy2)
	$("#tagDiv1-numberSort").css("height",xxyy2)
	$("#tagDiv1-letterSort").css("height",xxyy2) 
	$(".tagDiv2-catetags").css("height",xxyy2) 

}

