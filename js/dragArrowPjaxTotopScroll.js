//  拖动条js  + 方向箭js + pjax  + 回到顶部 + 滚动条高度.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 这个是 获取元素 左边位置的函数. 要自己写. 不像鼠标位置 直接可以通过clientx 什么的 获取.
function getElementLeft(element){
　　var actualLeft = element.offsetLeft;
　　var current = element.offsetParent;
　　while (current !== null){
　　　　actualLeft += current.offsetLeft;
　　　　current = current.offsetParent;
　　}
　　return actualLeft;
}


$(function(){
  <!-- ----------------------------------------------------------------------------------------------- -->
  // $("#filenameDiv").css("flex-basis","600px");  这个是获取 和 修改div宽度的.    下面是 左线拖动代码
  // 其实就是 设置 tagDiv 的宽度.  = 鼠标的实时位置 -  鼠标和拖动条直接的微小差距 - tagDiv左边的宽度 - tagDiv的Padding(这个获得元素边距的函数 有个小问题.所以需要减去)
  // yy 是 鼠标和拖动条之间的微小差距.
  // realMouse 是鼠标的实时位置.
  // aa 是tagDiv 左边的宽度
  lineLeft.onmousedown = function(e) {
      var disLeft = (e || event).clientX;             // 鼠标按下时的 clientX 固定值.
      var xx = getElementLeft(lineLeft)               // lineLeft 元素 类似clientX的值. 这个函数是自己写的...也是固定值.
          //console.log("被点击元素的坐标="+ xx);
      var yy = disLeft - xx;                          // 这个就是 鼠标到 lineleft 左边框的距离. .
          //console.log("鼠标到linediv 的差距= "+ yy);    // 也是出来数字 19  不到px的... 整个宽度也就20.这个是对的...
          //console.log("鼠标实时位置= "+ e.clientX );    // 这里也是对的 ..
      var aa = getElementLeft(tagDiv);
          //console.log("tagDiv的左边位置="+ aa);

          document.onmousemove = function(e) {
            var realMouse = e.clientX;                                     // 鼠标移动的实时x轴值. 变化
              //console.log("实际鼠标位置(不带px)= "+ realMouse);               //  不带px
            var leftPaddingNum = parseFloat($("#tagDiv").css("padding"));  // 这个是 获取tagDiv 的padding. 需要单独减去.. .. 去掉px.只需要数值.
              //console.log("leftPaddingNum 不带px= "+ leftPaddingNum);       //  不带px 
            var zz = realMouse - yy -leftPaddingNum - aa ;               // 鼠标实时坐标 - 一定的差距 =  实时的左边div 的宽度
              //console.log("zz= "+ zz);                                     // 也不带px
              $("#tagDiv").css("flex-basis",zz);    // 这里就能实时拖动了.

            // 下面是 鼠标松开的时候触发的事件....
            document.onmouseup = function() {  
              document.onmousemove = null;  document.onmouseup = null;   
            };
         }
  };


  <!-- ----------------------------------------------------------------------------------------------- -->
  // 下面是 右线拖动代码
  lineRight.onmousedown = function(e) {
      var Mouse = (e || event).clientX;			
      //console.log("鼠标点击值= "+ Mouse);
      var line2Width = getElementLeft(lineRight)
      //console.log("右线自定义函数宽度= "+line2Width);
      var gap = Mouse - line2Width;		
      //console.log("鼠标和右线之间的微小差距.  需要减去= "+gap);

      var middleWidth = getElementLeft(filenameDiv)
      //console.log("中间自定义函数宽度= "+ middleWidth);
      //console.log("\n" );

          document.onmousemove = function(e) {
              var realMouse = (e || event).clientX;	
              var middlePaddingPX = $("#filenameDiv").css("padding");
              //console.log("filenameDiv padding 带px= " +middlePaddingPX);  
              // 这个是带px的. 需要提取前面的数字部分. 还需要x2 padding 是有两边的..
              var middlePaddingNum = parseFloat(middlePaddingPX);
              //console.log("filenameDiv padding 无px= " +middlePaddingNum);  

              var realMiddle = realMouse - middleWidth - gap - middlePaddingNum;
              $("#filenameDiv").css("flex-basis",realMiddle); 

          document.onmouseup = function() { 
              document.onmousemove = null;  document.onmouseup = null;   };
          }
  };

  <!-- ----------------------------------------------------------------------------------------------- -->

});
// 上面是  拖动条的 js
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 方向箭的js
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
  // 下面进行 左按钮设计.隐藏顺序 cate>tag>filename.   $('#userNav').hide('slide',{direction:'left'},1000);

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
  // 下面是 右下角的 左右键盘 开控制 显示隐藏的.
  $(document).keydown(function(event){ 
          if (event.keyCode == 37){   toLeft();   }
     else if (event.keyCode == 39){   toRight();  } 
     else if (event.keyCode == 38){   toTop();    } 
    }); 
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 pjax 
$(document).pjax("a", '#contentDiv', { fragment: '#contentDiv', timeout:8000}	);	
$(document).on('pjax:start', function() { NProgress.start(); });
$(document).on('pjax:end',   function() { NProgress.done();  });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 这个是 回到顶部的函数....
function toTop() {  $("#contentDiv").scrollTop(0); }







////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 设置滚动条高度的.  有高度 才能有滚动条.
$(function (){
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//下面这段是 设置 cate tag filename 的高度了. 控制 滚动条用的.
	function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　	}
　　　　return actualTop;
　　 }
	// xyz是 浏览器的高度; xy是 filenameDiv 距离浏览器上边距的距离;  x 是 CateDiv 和 tagDiv 的距离.(这两个 水平的)
	var xyz = document.documentElement.clientHeight;
	var  xy = getElementTop(filenameDiv);
	var   x = getElementTop(cateDiv);
	var xxyy = xyz - xy;
		$("#filenameDivFlex").css("height",xxyy)
		$("#overflowHeighr2").css("height",xxyy)
		$(".blog-list-container3").css("height",xxyy) 
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是cate 的高度设置..
	var xxyy2 = xyz - x;
		$("#cateDivFlex").css("height",xxyy2)
		$("#cateDiv1-numberSort").css("height",xxyy2)
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是 tagDiv的 标签高度设置
		$("#alltagsContainer").css("height",xxyy2)
		$("#tagDiv1-numberSort").css("height",xxyy2)
		$("#tagDiv1-letterSort").css("height",xxyy2) 
		$(".tagDiv2-catetags").css("height",xxyy2) 
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 filename 设置高度 来实现 滚动条.. 浏览器窗口一旦缩放 就执行这个函数. 来重新给 高度值..
window.onresize= function(){
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//下面这段是 设置 cate tag filename 的高度了. 控制 滚动条用的.
	function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　	}
　　　　return actualTop;
　　 }
	// 一个是 浏览器的高度 一个是 filenameDiv 距离 浏览器上边距 的距离 . 其他tag排序 cate排序 都在一个水平位置的.
	var xyz = document.documentElement.clientHeight;
	var  xy = getElementTop(filenameDivFlex);
	var   x = getElementTop(cateDiv);

	var xxyy = xyz - xy;
		$("#filenameDivFlex").css("height",xxyy)
		$("#overflowHeighr2").css("height",xxyy)
		$(".blog-list-container3").css("height",xxyy) 
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是cate 的高度设置..
	var xxyy2 = xyz - x;
		$("#cateDivFlex").css("height",xxyy2)
		$("#cateDiv1-numberSort").css("height",xxyy2)
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// 下面是 tagDiv的 标签高度设置
		$("#alltagsContainer").css("height",xxyy2)
		$("#tagDiv1-numberSort").css("height",xxyy2)
		$("#tagDiv1-letterSort").css("height",xxyy2) 
		$(".tagDiv2-catetags").css("height",xxyy2) 

}






