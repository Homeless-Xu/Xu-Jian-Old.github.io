// 显示隐藏 文件自定义排序的角标. + 切换 显示隐藏按钮图标 
function fileNameSortNum() {
  $(".fileNameCustonOrder").toggle();
  // console.log( $(".fileNameCustonOrder").css("display")   );
  // 判断 某元素显示隐藏状态. 显示:block  隐藏:none
  var fileNameSortNumStatus = $(".fileNameCustonOrder").css("display")
    if ( fileNameSortNumStatus ==  "none" ) {
         $("#filenameDiv-sort4").removeClass("fa fa-eye")  ;
         $("#filenameDiv-sort4").addClass("fa fa-eye-slash");
       } else {
         $("#filenameDiv-sort4").removeClass("fa fa-eye-slash")  ;
         $("#filenameDiv-sort4").addClass("fa fa-eye");
       }
}
// 要把 排序栏目 设置成不滚动的  .. 下面的内容才滚动...



// 下面就是 点击文件名. 出现高亮了....
// 还是得 用 onclick啊.... 然后传入  文件名 ...然后取消所有active 然后设置某个active...
function filenameActiveCT( afileTag,afileCate ) {
	setActiveCate(afileCate);   // 必须先设置大类高亮. 因为大类高亮会清除所有的 tag/filename 高亮.
	setActiveTag(afileTag);     // 第二个执行 

	//	$("#"+ afileName).addClass('active');               // 默认情况的 active    ✔︎
	// $("#"+ afileName +"-tag").addClass('active');       // tag  过滤出来的文件名 ✔︎
	// $("#"+ afileName +"-filename").addClass('active');  // cate 过滤出来的文件名.....
	// 这里是根据名称来的 要不直接用 this 不就好了...  怎么用this 呢
	// 那就执行两个函数.先执行 大类  再执行this.... this    
}

function filenameActiveThis () {
	var selector = '#filenameDiv li';
	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
}



// 下面是 点击文件名. 显示出改文件名 所属的 tag..  
// 和点击某大类有点不同.. 这里只需要显示改大类下的标签就可以. 不用显示该大类的 文章....
function catefilterPart( afilename ) {

	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");
	//$(".tagsDiv1-allTags").css("display","none");
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");
	$("#"+ afilename +"-cate").attr("class","tagDiv2-catetags"); 
	// 把这个元素的class 改成 ... 没有hidden的.
	$("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //隐藏  abc div
	$("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //隐藏  num div
	$("#all-tagsContainer").attr("class","tagsDiv1-allTags hidden");       //隐藏 time div
 		

delRows();  //这个是 cateFilter.js 下的 删除空行的 函数..



}



