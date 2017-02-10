// 方向箭的  + 顶部过滤栏显隐按钮
$(function button(){
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 判断 所有的都不在.就显示. 不然就隐藏;   隐藏(none) → 就显示左边 3个+两拖动条;  显示(block):→隐藏左边三个+两拖动条 
    $("#topbarToggle").click(   function(){ 
        if ( $(window).width() <= 414 ) {  
              if (     $("#filenameDiv").css("display") == "none" 
                        && $("#tagDiv").css("display") == "none" 
                        && $("#cateDiv").css("display") == "none" ) {
                      $("#filenameDiv").show(100);
                      $("#tagDiv").show(100);
                      $("#cateDiv").show(100);
                 } else {
                      $("#filenameDiv").hide(100);
                      $("#tagDiv").hide(100);
                      $("#cateDiv").hide(100);
                      $("#lineLeft").hide(100);
                      $("#lineRight").hide(100);
                      $("#lineSide").hide(100);
                 }
        } else {
          
               if (     $("#filenameDiv").css("display") == "none" 
                        && $("#tagDiv").css("display") == "none" 
                        && $("#cateDiv").css("display") == "none" ) {
                      $("#filenameDiv").show(100);
                      $("#tagDiv").show(100);
                      $("#cateDiv").show(100);
                      $("#rightNavbar").show(100);
                      $("#lineLeft").show(100);
                      $("#lineRight").show(100);
                      $("#lineSide").show(100);
                 } else {
                      $("#filenameDiv").hide(100);
                      $("#tagDiv").hide(100);
                      $("#cateDiv").hide(100);
                      $("#rightNavbar").hide(100);
                      $("#lineLeft").hide(100);
                      $("#lineRight").hide(100);
                      $("#lineSide").hide(100);

                 }
        }
    });

// 顶部 右边的 文章结构栏目显示按钮
$("#topbarStructureToggle").click( function(){ 
  if ($("#rightNavbar").css("display") == "none" ) {
          $("#rightNavbar").show(100);
          $("#lineSide").show(100);
     } else {
          $("#rightNavbar").hide(100);
          $("#lineSide").hide(100);
     }

});






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 下面进行 左按钮设计.隐藏顺序 cate>tag>filename.   $('#userNav').hide('slide',{direction:'left'},1000);






    function toLeft() {
      if      ( $("#cateDiv").css("display") != "none" ) { 
        $("#cateDiv").hide(  100); 
    
  } 
      else if ( $("#tagDiv").css("display") != "none"  ) { $("#tagDiv").hide(    100); $("#lineLeft").hide(  100); }
      else                                               { $("#filenameDiv").hide( 100); $("#lineRight").hide( 100); }
    }

    function toRight() {
      if      ( $("#filenameDiv").css("display") == "none" ) 
      { 
      $("#filenameDiv").show(100); $("#lineRight").show(100); 
    
  
} 

      else if ( $("#tagDiv").css("display") == "none"  )     { $("#tagDiv").show( 100);      $("#lineLeft").show( 100);  }
      else                                                   { $("#cateDiv").show(100);  }
    }

    $("#leftBtn").click(   function() { toLeft()  } );
    $("#rightBtn").click(  function() { toRight() } );
    // 下面是 右下角的 左右键盘 开控制 显示隐藏的.
    $(document).keydown(function(event){ 
            if (event.keyCode == 37){   toLeft();   }
       else if (event.keyCode == 39){   toRight();  } 
       else if (event.keyCode == 38){   toTop();    } 
      }); 
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

















////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 这个是 回到顶部的函数....
function toTop() {  $("#contentDiv").scrollTop(0); }





////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 眼睛功能: 显隐文件日期
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 显示所有的标签和文章
function showAllTagsandPosts () {
    $(".tagNames").show()
    $(".postNames").show()
    // 清楚 所有的高亮
    $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
    $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
    $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });    

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////














