// 这个函数 传入的变量是 cateDiv 里面的 点击某个分类时候的 分类名:   cateClicked
function catefilter(cateClicked) { showTagsandPosts(cateClicked); delRows(); setActiveCate(cateClicked); }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  选取遍历 catediv 下的 所有li  然后给选定的大类 添加active  点击大类也要清楚 tagDiv 下的所有active....
function setActiveCate(cateClicked) {
	// 清除所有大类高亮+设置某个大类
	$("#cateDiv li").each( function() {  	$(this).removeClass('active');        });
	$("#"+ cateClicked).addClass('active');
	$("#"+ cateClicked +"-num").addClass('active');
	// console.log( $("#"+ cateClicked) )
	// 下面是清楚 tagDiv 的active 
	$("#tagDiv li").each( function() {  	$(this).removeClass('active');  	});
	// 下面是清除 filename 的高亮
	$("#filenameDiv li").each( function() {  	$(this).removeClass('active');  	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 点击大类 过滤出对应的tag 和 filename..  这里  也要进行yml 默认tag 排序的判断
function showTagsandPosts(cateClicked) {
	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");       //$(".tagsDiv1-allTags").css("display","none");
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");
	$("#"+ cateClicked +"-cate").attr("class","tagDiv2-catetags");         // 把这个元素的class 改成 ... 没有hidden的.
	// 下面是 filenameDiv 的 
	$(".blog-list-container").attr("class","blog-list-container hidden");
	$(".blog-list-container2").attr("class","blog-list-container2 hidden");
	$(".blog-list-container3").attr("class","blog-list-container3 hidden");
	$("#"+ cateClicked +"-filenames").attr("class","blog-list-container3");   		
}	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 根据元素的 内容长度 来删除 空行. 这里要用 正则式 进行筛选. 而不是长度. 正则式要筛选出来 而不是删除...
// function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
function delRows() {
		$(".delEmptyrow-C").each(  function(index){
			var thisALLText = $(this).text();
			var thisSpanText = $(this).find("span").text();
			var textSpanLength =　 $(this).find("span").text().length ;
			//console.log(thisSpanText+"标签长度"+textSpanLength);
			if ( $(this).find("span").text().length == 0 )	{	$(this).attr("class","delEmptyrow-C hidden");	}
		});
	}

// 上面是 cate 过滤
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 tag 过滤

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 file过滤


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 显隐 文件时间
function fileNameDate() {
  // console.log( $(".fileNameCustonOrder").css("display")   );
  // 判断 某元素显示隐藏状态. 显示:block  隐藏:none
  var fileNameSortNumStatus = $(".fileNameDate").css("display");
    if ( fileNameSortNumStatus ==  "none" ) {
         $("#filenameDivDate").removeClass("fa fa-eye-slash")  ;
         $("#filenameDivDate").addClass("fa fa-eye");
         $(".fileNameDate").removeClass("hidden");
       } else {
         $("#filenameDivDate").removeClass("fa fa-eye")  ;
         $("#filenameDivDate").addClass("fa fa-eye-slash");
         $(".fileNameDate").addClass("hidden");
       }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 点击某个文件名 高亮: 文件名+ 对应tag + 对应cate ....用 onclick 传入文件名 ...然后取消所有active 然后设置某个active...
function filenameActiveCT( afileTag,afileCate ) {
	setActiveCate(afileCate);   // 必须先设置大类高亮. 因为大类高亮会清除所有的 tag/filename 高亮. 在cateFilter 里.
	setActiveTag(afileTag);     // 第二个执行   函数在tagfilter里
}

function filenameActiveThis () {
	var selector = '#filenameDiv li';
	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 点击文件名. 显示出该文件名类下的所属 tag.. 类似点击某大类.. 这里只需要显示改大类下的标签就可以. 不用显示该大类的 文章....
function catefilterPart( afilename ) {
	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");
	//$(".tagsDiv1-allTags").css("display","none");
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");
	$("#"+ afilename +"-cate").attr("class","tagDiv2-catetags"); 
	// 把这个元素的class 改成 ... 没有hidden的.
		
delRows();  //这个是 cateFilter.js 下的 删除空行的 函数..

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 显示所有标签和文章
function showAllTagsandPosts () {
	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags");               //  默认所有标签时间排序
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden"); 	   //  大类过滤出来的 tag
	// 下面是 filenameDiv的if过滤 
	$(".blog-list-container").attr("class","blog-list-container");
	$(".blog-list-container2").attr("class","blog-list-container2 hidden"); 
	$(".blog-list-container3").attr("class","blog-list-container3 hidden"); 
	// 显示所有标签是时候 要去除cate + tag + filename的 所有高亮
	$("#cateDiv li").each( function()     { $(this).removeClass('active'); });
	$("#tagDiv li").each( function()      { $(this).removeClass('active'); });
	$("#filenameDiv li").each( function() { $(this).removeClass('active'); });
}





