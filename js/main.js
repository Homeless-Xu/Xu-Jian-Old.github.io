////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 点击大类过滤出对应的标签+文章:  同步进行高亮.
//  
$(".cateNames").click(   function() {
  // alert($(window).width());          // 浏览器当前窗口可视区域宽度
  var clickedCateName = $( this ).children('span').text()
  // console.log( clickedCateName );    // 可以获取 jQuery. 

  if ( $(window).width() <= 414 ) {   
      // 进行屏幕宽度的判断. 如果屏幕宽度<= 414 那就支持手机端的js: 比pc多两步 要先显示tag&filename栏.
      // 这里还要进行判断.如果 已经显示了tag filename 那么就隐藏他们!!
      if( $("#tagDiv").css("display") == "none" ) {
          //显示 tag 和filename
               $("#tagDiv").show()
          $("#filenameDiv").show()
          // 过滤出当前类下的标签和文章
          $(".tagNames").hide()
          $("[data-tagcate="+ clickedCateName +"]").show()
          // 先隐藏所有文件. 显示某类文件
          $(".postNames").hide()
          $("[data-cate="+ clickedCateName +"]").show()
       }else {  
       // 这里 如果是高亮的那就隐藏(按的同一个大类), 如果不是高亮那就过滤出对应的tag
           if ( $(this).hasClass('active') ){
              $("#tagDiv").hide();  
              $("#filenameDiv").hide();    // 隐藏 tag 和 filename 
           } else {
              $(".tagNames").hide()
              $("[data-tagcate="+ clickedCateName +"]").show()
              // 先隐藏所有文件. 显示某类文件
              $(".postNames").hide()
              $("[data-cate="+ clickedCateName +"]").show()             
           }       
       }
      // 手机端的 高亮设置
      var activeStatus = $(this).hasClass('active');
      console.log( activeStatus );
      if (activeStatus) {
        $(this).removeClass('active'); 
        console.log("执行1");   
      } else {
        $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
        $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
        $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });      
        $(this).addClass('active');
        console.log("执行2");
      }
  } else {
    // 执行pc端的js 点击大类: 1. 去除所有大类+标签+文件高亮; 2. 高亮被点击大类 
    $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
    $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
    $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });      
    $(this).addClass('active');   


    // 隐藏所有tag 显示某类tag
    $(".tagNames").hide()
    $("[data-tagcate="+ clickedCateName +"]").show()
    // 先隐藏所有文件. 显示某类文件
    $(".postNames").hide()
    $("[data-cate="+ clickedCateName +"]").show()
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ↓ 点击标签 过滤出对应的文章. 并进行 当前标签的高亮+当前标签所属大类的高亮.
  $(".tagNames").click(   function() {
      $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
      $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
      $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });      
      $(this).addClass('active'); 
      var tagCateName = $(this).data('tagcate');
      // console.log( tagCateName );
      $("#"+ tagCateName).addClass('active'); 

      var clickedTagName = $( this ).children('span').text()
      // 先隐藏所有文件. 显示某类文件
      $(".postNames").hide()
      $("[data-tag="+ clickedTagName +"]").show()

  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ↓ 文件高亮.+对应tag+对应cate 同步高亮.   这里还要显示出 该大类下的标签.而不是显示所有标签
// 这里也要考虑到手机.. 手机上点了文件名 就要隐藏 tag 和 filename 只留 cate
$(".postNames").click(   function() {
  var  postTagName = $(this).data('tag' );
  var postCateName = $(this).data('cate');
  if ( $(window).width() <= 414 ) {   
      // 进行屏幕宽度的判断. 如果屏幕宽度<= 414 那就支持手机端的js: 隐藏tag&filename栏.
      // 既然隐藏了 就不用设置高亮了..?  下次点击的时候 想要之前的高亮怎么办..
               $("#tagDiv").hide()
          $("#filenameDiv").hide()
  
   } else {
      $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
      $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
      $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });      
      $(this).addClass('active'); 

      $(".tagNames").hide()
      $("[data-tagcate="+ postCateName +"]").show()      
      $("#"+ postTagName ).addClass('active'); 	
      $("#"+ postCateName).addClass('active'); 	 
   }    
});


// 上面是 大类 标签过滤+高亮
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 各种额外功能:   拖动条js  + 方向箭js + pjax  + 回到顶部 + 滚动条高度.


// 拖动条. 获取元素左边位置的函数. 要自己写. 不像鼠标位置 直接可以通过clientx 什么的 获取.
// offsetLeft = 当前元素的外边框 . 到父元素的 里边框的距离.
// offsetParent = 当前元素 上一级的定位元素....  很麻烦.. 诶 看着办...
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
        var disLeft = (e || event).clientX;             
        // 鼠标按下时鼠标的 X坐标 固定值.
        var xx = getElementLeft(lineLeft)               
        // lineLeft 元素 类似clientX的值. 这个函数是自己写的...也是固定值.
        //console.log("被点击元素的坐标="+ xx);
        var gapL = disLeft - xx;                          // 这个就是 鼠标到 lineleft 左边框的距离. .
        console.log("鼠标到linediv 的差距= "+ gapL );    // 也是出来数字 19  不到px的... 整个宽度也就20.这个是对的...
        //console.log("鼠标实时位置= "+ e.clientX );    // 这里也是对的 ..
        var tagDivL = getElementLeft(tagDiv);
            //console.log("tagDiv的左边位置="+ aa);

            document.onmousemove = function(e) {
              var realMouse = e.clientX;                                     // 鼠标移动的实时x轴值. 变化
                console.log("实际鼠标位置(不带px)= "+ realMouse);               //  不带px
              var leftPaddingNum = parseFloat($("#cateDiv").css("padding-left"));  
              // 这个是 获取cateDiv 的padding. 需要单独减去.. .. 去掉px.只需要数值... 不应该是tagDiv的padding么 -,- 
              // 懒得调整 就直接减去 多少px 好了....
                console.log("leftPaddingNum 不带px= "+ leftPaddingNum);       //  不带px 
                console.log("tagDiv的左边位置="+ tagDivL );
                console.log("鼠标到linediv 的差距= "+ gapL );
              var zz = realMouse - tagDivL - leftPaddingNum - gapL    ;               // 鼠标实时坐标 - 一定的差距 =  实时的左边div 的宽度
                console.log("tagDiv实际实时宽度= "+ zz);                                     // 也不带px
                $("#tagDiv").css("flex-basis",zz);    // 这里就能实时拖动了.

              // 下面是 鼠标松开的时候触发的事件....
              document.onmouseup = function() {  
                document.onmousemove = null;  document.onmouseup = null;   
              };
           }
    };
    <!-- ----------------------------------------------------------------------------------------------- -->
    // 下面是 右线拖动代码: fileDiv宽度= 鼠标实时x位置 - fileDiv左边距x - 鼠标到fileDiv右边的微小差距 
    // 有时候要减去 padding .有时候不用... 看情况..
    lineRight.onmousedown = function(e) {
        var Mouse = (e || event).clientX;			
        console.log("鼠标点击值= "+ Mouse);
        var line2Width = getElementLeft(lineRight)
        console.log("右线自定义函数宽度= "+line2Width);
        var gap = Mouse - line2Width;		
        console.log("鼠标和右线之间的微小差距.  需要减去= "+gap);
        // 正常情况下 拖动 gap 是个固定值.
        var middleWidth = getElementLeft(filenameDiv)
        //console.log("中间自定义函数宽度= "+ middleWidth);
        //console.log("\n" );
            document.onmousemove = function(e) {
                var realMouse = (e || event).clientX;	
                var middlePaddingPX = $("#filenameDiv").css("padding");
                console.log("filenameDiv padding 带px= " +middlePaddingPX);  
                // 这个是带px的. 需要提取前面的数字部分. padding 是有两边的..
                var middlePaddingNum = parseFloat(middlePaddingPX);
                console.log("filenameDiv padding 无px= " +middlePaddingNum);  
                var realMiddle = realMouse - middleWidth - gap;
                $("#filenameDiv").css("flex-basis",realMiddle); 
            document.onmouseup = function() { document.onmousemove = null;  document.onmouseup = null;   };  }
    };
  });

// 上面是  拖动条的 js
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 方向箭的js

  $(function button(){
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 判断 所有的都不在.就显示. 不然就隐藏;   隐藏(none) → 就显示左边 3个+两拖动条;  显示(block):→隐藏左边三个+两拖动条 
    $("#topbarToggle").click(   function(){ 
      if ( $("#filenameDiv").css("display") == "none" && $("#tagDiv").css("display") == "none" && $("#cateDiv").css("display") == "none" ) {
          $("#filenameDiv").show(100);
          $("#tagDiv").show(100);
          $("#cateDiv").show(100);
          $("#lineLeft").show(100);
          $("#lineRight").show(100);
         } else {
          $("#filenameDiv").hide(100);
          $("#tagDiv").hide(100);
          $("#cateDiv").hide(100);
          $("#lineLeft").hide(100);
          $("#lineRight").hide(100);
         }
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 下面进行 左按钮设计.隐藏顺序 cate>tag>filename.   $('#userNav').hide('slide',{direction:'left'},1000);

    function toLeft() {
      if      ( $("#cateDiv").css("display") != "none" ) { $("#cateDiv").hide(  100); } 
      else if ( $("#tagDiv").css("display") != "none"  ) { $("#tagDiv").hide(    100); $("#lineLeft").hide(  100); }
      else                                               { $("#filenameDiv").hide( 100); $("#lineRight").hide( 100); }
    }

    function toRight() {
      if      ( $("#filenameDiv").css("display") == "none" ) { $("#filenameDiv").show(100); $("#lineRight").show(100); } 
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
// 网页加载时候的 滚动条高度的.  有高度 才能有滚动条.
  function scrollbarHeight(){
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
      // 设置 fileDiv 高度
      var xyz = document.documentElement.clientHeight;
      var  xy = getElementTop(filenameDiv);
      var   x = getElementTop(cateDiv);
      var xxyy = xyz - xy;
          $("#filenameUL").css("height",xxyy)
      // 下面是cate 和 tag 的高度设置..
      var xxyy2 = xyz - x;
          $("#catenameUL").css("height",xxyy2)
          $("#tagnameUL").css("height",xxyy2) 
  }

  // 网页加载后 浏览器窗口大小改变时候的 滚动条 高度设置 
  $(function (){  scrollbarHeight()  });
  // 浏览器窗口大小改变时候 再次改变滚动条高度
  window.onresize= function(){ scrollbarHeight()  }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 眼睛功能: 显隐文件日期
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









