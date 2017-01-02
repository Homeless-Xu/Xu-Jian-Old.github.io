// 这个函数 传入的变量是 cateDiv 里面的 点击某个分类时候的 分类名:   cateClicked
function catefilter(cateClicked) {
	  showTagsandPosts(cateClicked);
	  delRows();
	  cateFilenameFlex();
	  setActiveCate(cateClicked);
	  //console.log("传入函数的值: "+cateClicked);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  选取遍历 catediv 下的 所有li  然后给选定的大类 添加active
// 点击大类也要清楚 tagDiv 下的所有active....
function setActiveCate(cateClicked) {
	// 下面是 大类的清楚+设置某个大类
	$("#cateDiv li").each( function() {  	$(this).removeClass('active');        });
	$("#"+ cateClicked).addClass('active');
	$("#"+ cateClicked +"-num").addClass('active');

	// console.log( $("#"+ cateClicked) );

	// 下面是清楚 tagDiv 的active 
	$("#tagDiv li").each( function() {  	$(this).removeClass('active');  	});
	// 下面是清除 filename 的高亮
	$("#filenameDiv li").each( function() {  	$(this).removeClass('active');  	});

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 点击 所有标签 就显示 所有的tagdiv 和 filenamediv
// 这里 需要 点击的时候 按照yml的排序 来进行 显示.
// 这里进行判断把. 如果tag默认排序是 abc 那就 ....
// 如果tag默认排序是 num 那就...
// 如果tag排序没设置 就是默认的时间顺序.. 
// 先来判断 yml 里面的 tag值.   只有abc 或者 num . 不写就是时间默认顺序.
//  id="ymlTagSortDefault"  这个就是 tag的值
function showAllTagsandPosts () {
	var tagValueinYML =  $("#ymlTagSortDefault").text();
	// console.log(tagValueinYML );
	// 正常应该是可以获取到 abc的...

	if ( tagValueinYML == "abc" ){
		$("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort ");          //  abc div		
		$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");        //  默认所有标签时间排序
		$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden"); 	   //  大类过滤出来的 低V2EX
		$("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //  num div
	}
	else if ( tagValueinYML == "num") {
		$("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort ");        //  num div		
		$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");        //  默认所有标签时间排序
		$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden"); 	   //  大类过滤出来的 低V2EX
		$("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //  abc div
	}
	else {
		// 下面是 tagDiv 的if过滤
		$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags");               //  默认所有标签时间排序
		$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden"); 	   //  大类过滤出来的 低V2EX
		$("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //  num div
		$("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //  abc div
	}



	// 下面是 filenameDiv的if过滤 
	$(".blog-list-container").attr("class","blog-list-container");
	$(".blog-list-container2").attr("class","blog-list-container2 hidden"); 
	$(".blog-list-container3").attr("class","blog-list-container3 hidden"); 

	// 显示所有标签是时候 要去除cate + tag + filename的 所有高亮
	$("#cateDiv li").each( function() {  	$(this).removeClass('active');        });
	$("#tagDiv li").each( function() {  	$(this).removeClass('active');  	});
	$("#filenameDiv li").each( function() {  	$(this).removeClass('active');  	});

}


// 下面是 点击大类 过滤出对应的tag 和 filename..
function showTagsandPosts(cateClicked) {
	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");
	//$(".tagsDiv1-allTags").css("display","none");
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");
	$("#"+ cateClicked +"-cate").attr("class","tagDiv2-catetags"); 
	// 把这个元素的class 改成 ... 没有hidden的.
	$("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //隐藏  abc div
	$("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //隐藏  num div
	$("#all-tagsContainer").attr("class","tagsDiv1-allTags hidden");       //隐藏 time div

	// 下面是 filenameDiv 的else 
	$(".blog-list-container").attr("class","blog-list-container hidden");
	$(".blog-list-container2").attr("class","blog-list-container2 hidden");
	$(".blog-list-container3").attr("class","blog-list-container3 hidden");
	$("#"+ cateClicked +"-filenames").attr("class","blog-list-container3");   		
}	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 根据元素的 内容长度 来删除 空行.
// 这里要用 正则式 进行筛选. 而不是长度. 正则式要筛选出来 而不是删除...
// 
// function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}

function delRows() {
		$(".delEmptyrow-C").each(  function(index){


			var thisALLText = $(this).text();
			var thisSpanText = $(this).find("span").text();
			var textSpanLength =　 $(this).find("span").text().length ;
			console.log(thisSpanText+"标签长度"+textSpanLength);
			if ( $(this).find("span").text().length == 0 )	{	$(this).attr("class","delEmptyrow-C hidden");	}
		});
	}


// var 变量=trimStr(需要去空格的字符串)



// 去除空格 liquid
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 点击大类 对 filename 进行flex 自定义排序.这个函数 ...   大体应该和 filenameDiv 默认时候的自定义排序差不多的..
function cateFilenameFlex() {
	$ (".blog-list-container4").each(function( index ) {
		   // console.log( index + ": " + $( this ).text()   );               
		   // console.log( index + ": " + $( this ).children("span").text() + $( this ).children("span").text().length )
		   // 上面 获取整个元素的内容.  下面获取子元素span. 
			var orderValue = $( this ).find('span').text();
			var orderLength = $( this ).find('span').text().length;
			if ( orderLength != "0" ) {
				//console.log( orderValue );
				//console.log( $(this ).css("order") );
				$(this ).css("order", orderValue); 
					//console.log( $(this ).css("order") );
				}
		});

}





