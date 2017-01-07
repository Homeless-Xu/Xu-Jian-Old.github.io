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





function toLeft() {
  if      ( $("#cateDiv").css("display") != "none" ) { $("#cateDiv").hide(    'slide', {direction:'left'}, 100); } 
  else if ( $("#tagDiv").css("display") != "none"  ) { $("#tagDiv").hide(     'slide', {direction:'left'}, 100); $("#lineLeft").hide( 'slide', {direction:'left'}, 100); }
  else                                               { $("#filenameDiv").hide('slide', {direction:'left'}, 100); $("#lineRight").hide('slide', {direction:'left'}, 100); }

}


function toRight() {
  if      ( $("#filenameDiv").css("display") == "none" ) { $("#filenameDiv").show('slide', {direction:'left'}, 100); $("#lineRight").show('slide', {direction:'left'}, 100); } 
  else if ( $("#tagDiv").css("display") == "none"  )     { $("#tagDiv").show('slide', {direction:'left'}, 100);      $("#lineLeft").show('slide', {direction:'left'}, 100);  }
  else                                                   { $("#cateDiv").show('slide', {direction:'left'}, 100);  }
}










$("#leftBtn").click(   function() { toLeft()  } );
$("#rightBtn").click(  function() { toRight() } );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 右下角的 左右键盘 开控制 显示隐藏的.

$(document).keydown(function(event){ 
      if (event.keyCode == 37){   toLeft();   }
 else if (event.keyCode == 39){   toRight();  } 
 else if (event.keyCode == 38){   toTop();    } 
       
}); 
























});