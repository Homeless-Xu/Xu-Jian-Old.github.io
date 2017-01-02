// 显隐按钮... 左上角: id="sidebarToggle"   右下角: id="rightBtn" id="leftBtn"	
$(function button(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 判断 所有的都不在.就显示. 不然就隐藏;   隐藏(none) → 就显示左边 3个+两拖动条;  显示(block):→隐藏左边三个+两拖动条 
$("#sidebarToggle").click(   function(){ 
  if ( $("#filenameDiv").css("display") == "none" && $("#tagDiv").css("display") == "none" && $("#cateDiv").css("display") == "none" ) {
      $("#filenameDiv").show('slide', {direction:'left'}, 100);
      $("#tagDiv").show('slide', {direction:'left'}, 100);
      $("#cateDiv").show('slide', {direction:'left'}, 100);
      $("#lineLeft").show('slide', {direction:'left'}, 100);
      $("#lineRight").show('slide', {direction:'left'}, 100);
     } else {
      $("#filenameDiv").hide('slide', {direction:'left'}, 100);
      $("#tagDiv").hide('slide', {direction:'left'}, 100);
      $("#cateDiv").hide('slide', {direction:'left'}, 100);
      $("#lineLeft").hide('slide', {direction:'left'}, 100);
      $("#lineRight").hide('slide', {direction:'left'}, 100);
     }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面进行 左按钮设计.隐藏顺序 cate>tag>filename. 
// 如果if cate在就隐藏cate . cate不再的情况下:else if 如果tag在就隐藏tag;; 不然就隐藏 filename

//                   $('#userNav').hide('slide',{direction:'left'},1000);


$("#leftBtn").click(   function(){ 
  if      ( $("#cateDiv").css("display") != "none" ) { $("#cateDiv").hide(    'slide', {direction:'left'}, 100); } 
  else if ( $("#tagDiv").css("display") != "none"  ) { $("#tagDiv").hide(     'slide', {direction:'left'}, 100); $("#lineLeft").hide( 'slide', {direction:'left'}, 100); }
  else                                               { $("#filenameDiv").hide('slide', {direction:'left'}, 100); $("#lineRight").hide('slide', {direction:'left'}, 100); }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面进行 右钮设计.显示顺序 cate<tag<filename.
// 如果 filename不在. 显示filename+右线.
// 如果 filename在 tag不在 就显示tag.+ 左线
// 否则就是 filename在 tag在. 显示cate
$("#rightBtn").click(   function(){ 
  if      ( $("#filenameDiv").css("display") == "none" ) { $("#filenameDiv").show('slide', {direction:'left'}, 100); $("#lineRight").show('slide', {direction:'left'}, 100); } 
  else if ( $("#tagDiv").css("display") == "none"  )     { $("#tagDiv").show('slide', {direction:'left'}, 100);      $("#lineLeft").show('slide', {direction:'left'}, 100);  }
  else                                                   { $("#cateDiv").show('slide', {direction:'left'}, 100);  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////





























});