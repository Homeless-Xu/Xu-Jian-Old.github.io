// 排序问题.  首先是  大类的 自定义...    然后是 文件名的 自定义.
// 主要解决覆盖大类默认的时间顺序. 用 flex的order实现自定义排序. 默认order:0 怎么设置成别的值呢... 取css里面设置....
// 首先判断 yml 里面的默认排序.是  num 还是 custom(没设置就是这个值) 
// if 不等于num...  eles 就自定义....  这里要需要获取html里面的值.
$(function catefilter(){
	// console.log( $("#ymlCateName").text() );        // 测试是否可以成功获取到 yml 里面自定义变量的值
	// console.log( $("#ymlCateSortDefault").text() ); // 测试是否可以成功获取到 yml 里面自定义变量的值
	var cateDefault = $("#ymlCateSortDefault").text();

	if ( cateDefault != 'num') {
			var xx= $("#ymlCateName").text();
			//console.log(xx);
			// 成功取到 cateDiv 下的 yml 里的自定义数据(字符串...)   → Web-1,Misc-2,-3
			var yy = xx.split(",")
			//console.log(yy);
			// 用split 把字符串 通过指定的分割符号 变为 数组  → ["Web-1", "Misc-2", "-3"]
			//console.log(yy.length);   // 取得数组的长度,用于循环

			for (i=0; i<yy.length; i++) {
					// alert(yy[0]); 这个会显示出 第一个数据  Web-1.
					// 把这个数据再次分割. 用 - 作为分隔符
					var temp = yy[i].split('^');
						//alert(temp[0]); → Web
						//alert(temp[1]); → 1
						var tempName = temp[0];
						var tempOrder = temp[1];

					$("#"+ tempName ).css("order",tempOrder); 

					// 然后这个 Web就可以拿来 作为 cateDiv 里面对应的id了. 把这个id 的 flex order 改成 数字.
					// 这里顺序就修改成功了....
					// 下面就是怎么实现 一载入就 修改顺序....
				}

			  $(".CLcateDivFlex").attr("class","C.cateDivFlex");
			  // 处理加载主页时候. 会闪的问题...  先隐藏掉默认排序... 等js排序好之后再显示就可以了..
		}

 		else {		cateNumfilter();  }  
 		// 这个就是按数量排序的 js.  


});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//下面是文件名 的初次加载时候的自定义排序

$(function filenameFlexFilter(){
	//var xxx = $(".filenameOrder").text();
	// console.log( $(".fileNameFlexOrder").length );

	$ (".fileNameFlexOrder").each(function( index ) {
	   // console.log( index + ": " + $( this ).text()   );               
	   // console.log( index + ": " + $( this ).children("span").text() + $( this ).children("span").text().length )
	   // 上面 获取整个元素的内容.  下面获取子元素span. 
	    var orderValue = $( this ).find('sup').text();
		var orderLength = $( this ).find('sup').text().length;
		if ( orderLength != "0" ) {
			//console.log( orderValue );
			//console.log( $(this ).css("order") );
			$(this ).css("order", orderValue); 
			//	console.log( $(this ).css("order") );
			}
	});
});


// 开始循环, 如果 第一个的 值 不是0. 那么就把这个值 设置成 order顺序.
//  怎么指定有多少个呢.. site.posts size.
// 处理第一个  标题.  id是标签-xx  class 都是xxx
//  获取第一个 的 标题.  然后获取这个标题的yml..
// if this.cclass.text =1 0. so give this to this id 's css;
// zhe就回到 index 来了.  js 通过class 来获得 所有的信息. 现在问题是 class 获取不到..
// 同样的还有...  用each 函数么...
// 现在 每个数据都获取到了.然后  判断 标签.
//







  
// $("input[name=tagCheckbtnes]").attr("checked",false); 
//console.log( "cateradioBtn1=" + $("#cateradioBtn1").is(':checked') );  
//console.log( "cateradioBtn2=" + $("#cateradioBtn2").is(':checked') );  
//console.log("tagCheckBtn1= "+ $("#tagCheckBtn1").is(':checked') );
//console.log("tagCheckBtn2= "+ $("#tagCheckBtn2").is(':checked') );
//console.log("tagCheckBtn3= "+ $("#tagCheckBtn3").is(':checked') );
// var xb = $("#tagDiv-sort1").data("tagSort1");

