// 主要过滤出某标签的文件. 并进行自定义 flex 排列...
function filter(tag) {
  setActiveTag(tag);
  showfilenameDiv2(tag);
  tagFilenameFlex();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showfilenameDiv2(tag){	
	if( tag == "allPosts") {
			// 显示 div1 就可以了... 隐藏div2 div3
			$(".blog-list-container").attr("class","blog-list-container");
			$(".blog-list-container2").attr("class","blog-list-container2 hidden");	
			$(".blog-list-container3").attr("class","blog-list-container3 hidden");	

			$("#cateDiv li").each( function() {  	$(this).removeClass('active');        }); // 移除 cateDiv    下所有的 active...

		}
	else{
			// 先隐藏 div1 ,这个div是要一直隐藏的.
			$(".blog-list-container").attr("class","blog-list-container hidden");
			// 再隐藏 div2 全部 .这里有 每个标签下的各自的文章.只需要显示某个标签就行
			$(".blog-list-container2").attr("class","blog-list-container2 hidden");
			// 这里 也要排错 div3... 不然你点过大类下某个标签.这里会残留
			$(".blog-list-container3").attr("class","blog-list-container3 hidden");
			// 最后显示 div2 下符合条件的id . 
			$("#"+ tag + "-container").attr("class","blog-list-container2");
		}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  选取遍历 tagdiv 下的 所有li  然后给选定的大类 添加active. tag 有好几个的.
function setActiveTag(tag) {


	// 显示所有标签是时候 要去除cate + tag + filename的 所有高亮
	$("#tagDiv li").each( function() {  	$(this).removeClass('active'); 	});       // 移除tagDiv      下所有的 active... 
	$("#filenameDiv li").each( function() {  	$(this).removeClass('active'); 	});   // 移除filenameDiv 下所有的 active... 


	$("#"+ tag +"-item").addClass('active');    // 默认情况 排序1 下的 active
	$("#"+ tag +"-item2").addClass('active');   // 默认情况 排序1 下的 active
	$("#"+ tag +"-item3").addClass('active');   // 默认情况 排序1 下的 active

	$("#"+ tag +"-cate22").addClass('active');   //  大类过滤出来的 active

}

// 这里只解决了默认情况下的 active...  大类下 还是不行??
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tagFilenameFlex() {
	$ (".blog-list-container22").each(function( index ) {
	   // console.log( index + ": " + $( this ).text()   );               
	   // console.log( index + ": " + $( this ).children("span").text() + $( this ).children("span").text().length )
	   // 上面 获取整个元素的内容.  下面获取子元素span. 
		var orderValue = $( this ).children('span').text();
		var orderLength = $( this ).children('span').text().length;
		if ( orderLength != "0" ) {
			//console.log( orderValue );
			//console.log( $(this ).css("order") );
			$(this ).css("order", orderValue); 
				//console.log( $(this ).css("order") );
			}
	});



}