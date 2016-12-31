// 判断yml里面的默认值. 然后给 对应的,默认排序添加css







$(function (){
	$("#sidebarDiv").hide();    // 隐藏右边 侧栏.

	// yml 大类的 默认排序:  ymlCateSortDefault . 如果这个值不是num 就选自定义排序. 
	if   ( $("#ymlCateSortDefault").text() != "num"     )  { $("#cateDiv-sort1").addClass("sortDeafuleBtn"); }
	else { $("#cateDiv-sort2").addClass("sortDeafuleBtn"); }


	// yml tag 默认排序: ymlTagSortDefault 可选值:abc num 不然就时间排序
	if      ( $("#ymlTagSortDefault").text() == "abc" )  { $("#tagDiv-sort1").addClass("sortDeafuleBtn"); }
	else if ( $("#ymlTagSortDefault").text() == "num" )  { $("#tagDiv-sort3").addClass("sortDeafuleBtn"); }
    else    { $("#tagDiv-sort2").addClass("sortDeafuleBtn"); }



















});
