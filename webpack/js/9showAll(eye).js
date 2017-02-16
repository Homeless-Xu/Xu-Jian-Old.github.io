



// 显隐文件日期
function fileNameDate() {
  // console.log( $(".fileNameCustonOrder").css("display")   );
  // 判断 某元素显示隐藏状态. 显示:block  隐藏:none
	var fileNameSortNumStatus = $(".fileNameDate").css("display");
	  if ( fileNameSortNumStatus ==  "none" ) {
	       $("#filenameDivDate").html("<use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#icon-13eye'></use>");
	       $(".fileNameDate").removeClass("hidden");
	     } else {
	       $("#filenameDivDate").html("<use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#icon-eyeblocked'></use>");
	       $(".fileNameDate").addClass("hidden");
	     }
}

$("#filenameDivDate").click(  function() { fileNameDate()  } );
 
 

  
// 显示所有的标签和文章
function showAllTagsandPosts () {
  $(".tagNames").show()
  $(".postNames").show()
  // 清楚 所有的高亮
  $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
  $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
  $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });    
}

$("#allCateTagPostBtn").click(  function() { showAllTagsandPosts()  } );



