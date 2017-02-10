/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// 下面是 各种额外功能:   拖动条js  + 方向箭js + pjax  + 回到顶部 + 滚动条高度.

// 拖动条. 
function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null){
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }
    return actualLeft;
  }
  // 这函数别的地方要用  不能放到下面的函数里面去...
  //获取元素左边位置的函数. 要自己写. 不像鼠标位置 直接可以通过clientx 什么的 获取.
  // offsetLeft = 当前元素的外边框 . 到父元素的 里边框的距离.
  // offsetParent = 当前元素 上一级的定位元素....  很麻烦.. 诶 看着办...
  $(function(){
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
               if ( zz <= "88" || zz >= "300") {  document.onmousemove = null;  document.onmouseup = null;    }
              else {  $("#tagDiv").css("flex-basis",zz);  }             
              // 下面是 鼠标松开的时候触发的事件....
              document.onmouseup = function() {  
                document.onmousemove = null;  document.onmouseup = null;   
              };
           }
         };
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

                if ( realMiddle <= "19" || realMiddle >= "500") {  document.onmousemove = null;  document.onmouseup = null;    }
              else {  $("#filenameDiv").css("flex-basis",realMiddle);  }


            document.onmouseup = function() { document.onmousemove = null;  document.onmouseup = null;   };  }
       };

    // 下面是侧边栏的 拖动条. 右边栏目实际宽度= 网页宽度 - 鼠标距离浏览器左边框的的宽度 - 
    // 实际宽度 =  网页宽度 - 鼠标实时值 - 鼠标到拖动条右边的距离.
    // 这个距离怎么算呢...=  按理说...  拖动条宽度也就10..  怎么会有个16的呢... 可能是什么padding 导致的吧..
    lineSide.onmousedown = function(e) {
            var screenWidth   = parseFloat($(window).width() );                           
            console.log("网页宽度=" + screenWidth);
            var MouseClick = (e || event).clientX;			
            console.log("鼠标初始点击值= "+ MouseClick );
                document.onmousemove = function(e) {
                    var realMouse = (e || event).clientX;	
                    var realRightNavbarWith = screenWidth - realMouse - 5;
                    // 这里要考虑. rightNavbar 的padding ... 自己调吧... 
                    console.log("网页宽度-实时鼠标值: "+realRightNavbarWith );
                    $("#rightNavbar").css("flex-basis",realRightNavbarWith); 
                    document.onmouseup = function() { document.onmousemove = null;  document.onmouseup = null;   };  }
        };

});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// 点击大类过滤出对应的标签+文章:  同步进行高亮.
$(".cateNames").click(   function() {
 // console.log( Cate );

    // alert($(window).width());          // 浏览器当前窗口可视区域宽度
    var clickedCateName = $( this ).children('span').text()
    // console.log( clickedCateName );    // 可以获取 jQuery. 
 
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
$(".postNames").click(   function() {
  var  postTagName = $(this).data('tag' );
  var postCateName = $(this).data('cate');
  if ( $(window).width() <= 414 ) {   
      // 进行屏幕宽度的判断. 如果屏幕宽度<= 414 那就支持手机端的js: 隐藏cate&tag&filename栏.
      // 既然隐藏了 就不用设置高亮了..?  下次点击的时候 想要之前的高亮怎么办..
              $("#cateDiv").hide();
               $("#tagDiv").hide();
          $("#filenameDiv").hide();
          $("#rightNavbar").hide();
             $("#lineLeft").hide();
            $("#lineRight").hide();
             $("#lineSide").hide();

   } else {
      $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
      $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
      $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });      
      $(this).addClass('active'); 

      $(".tagNames").hide()
      $("[data-tagcate="+ postCateName +"]").show()      
      $("#Tag"+ postTagName ).addClass('active'); 	
      $("#"+ postCateName).addClass('active'); 	 
   }    

});
// 上面是 大类 标签过滤+高亮


/***/ }),
/* 2 */
/***/ (function(module, exports) {


// lazyload 慢加载. 
// 和网上说的不一样!!!!   至少博客是这样的.
// 必须在 onready function内. 而且必须有个滚动事件触发
// 有可能是我 pjax的 原因.......
// threshold : 200,  距离图片提前200px加载. 
// event : "click"  点击图片加载.
// $("img.lazy").lazyload({ event : "click", });
// onready 内 单行可用!!!!   操 最后少一个逗号都不行!!!!!

$(function(){
  $("#contentDiv").scroll(function() {
    $("img.lazy").lazyload({
      threshold : 200
    });
  });
})


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
















/***/ }),
/* 4 */
/***/ (function(module, exports) {


// 手机端 过滤栏 宽度设置:  cate + tag 固定宽度. filename 剩下宽度.
$(function (){
  // 先判断屏幕宽度 如果<= 414 那就假设设备是手机 那么!!!  文件栏目的宽度 就是 手机宽度 - cata宽度 - tag宽度 - 三个padding宽度.
  if ( $(window).width() <= "414") {
      var screenWidth   = parseFloat($(window).width() );                           
      var CateWidth     = parseFloat($("#cateDiv").css("flex-basis"));
      var TagWidth      = parseFloat($("#tagDiv").css("flex-basis"));
      var FilenameWidth = parseFloat($("#filenameDiv").css("flex-basis"));
      // 原来是200px   加了 parseFloat  就是 200
      var tagMobileWith = screenWidth/2 - CateWidth -12 ;     
      var filenameMobileWith = screenWidth/2 ;
      // alert("手机宽度="+ screenWidth +"大类宽度="+ CateWidth +"标签宽度="+ TagWidth +"原文件宽度="+ FilenameWidth +"后文件宽度="+ filenameMobileWith  );
      // 结果是 414 - 44 - 133 = 237 
      $("#tagDiv").css("flex-basis", tagMobileWith+"px" );        
      $("#filenameDiv").css("flex-basis", filenameMobileWith+"px" );  
      // alert(  $("#filenameDiv").css("flex-basis")  );
      // 再测试一下看看到底有没有改变
    }
});




// 手机端 滚动条高度设置
// cate&tag 屏幕高度-30. fileneme:屏幕高度-30-顶部栏高度.




/***/ }),
/* 5 */
/***/ (function(module, exports) {



// PJAX
// a 是点击元素.  + 内容放到哪里: contnetdiv + 放什么内容进去.
// 顶部左右按钮 模拟contentDiv 上方被隐藏掉的左右按钮.
// 为什么必须模拟contentDiv: 上下篇是pre.ur next.url 这个url是会变的. 
// 使用了 pjax. 只有contentDiv里面的内容是变的.topbarDiv的内容是不变的.
// 所以 topbardiv 里面的 上下篇的url链接也是不变的(也就是只能点击一次下一篇.)
$(function(){
  $("#topbarPre" ).click(function(){  $("#prePost" )[0].click();  });
  $("#topbarNext").click(function(){  $("#nextPost")[0].click();  });
});

//  $(document).pjax("#prePost", '#contentDiv', { fragment: '#contentDiv', timeout:18000}	);
// 这个的话 只有 prepost 这个id 会使用pjax

  $(document).pjax("a", '#contentDiv', { fragment: '#contentDiv', timeout:18000}	);
  $(document).on('pjax:start', function() { NProgress.start(); });
  $(document).on('pjax:end',   function() { NProgress.done(); showSideStructure(); });
  // $(document).on('pjax:end',   function() { NProgress.done(); pajx_loadDuodsuo(); });
  // 多说评论的Pjax重载 每次点击pjax都要执行 .不然要刷新网页才能出现多说....



/***/ }),
/* 6 */
/***/ (function(module, exports) {


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 滚动条高度.  有高度才能有滚动条.
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
      var  xy = getElementTop(filenameUL);
      // console.log(xy);
      var   x = getElementTop(cateDiv);
      var xxyy = xyz - xy;
      // 这里还是直接减去 顶部栏目的50 +  文件名上固定栏目的.18 得了..
          $("#filenameUL").css("height",xxyy)
      // 下面是cate 和 tag 的高度设置..
      var xxyy2 = xyz - x;
          $("#catenameUL").css("height",xxyy2)
          $("#tagnameUL").css("height",xxyy2) 
                //alert("xxyy="+xxyy);
                //alert("xxyy2="+xxyy2);

  }

  // 网页加载后 浏览器窗口大小改变时候的 滚动条 高度设置 
  $(function (){  scrollbarHeight()  });
  // 浏览器窗口大小改变时候 再次改变滚动条高度
  window.onresize= function(){ scrollbarHeight()  };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// document.getElementById('app').innerHTML="这是我第一个打包成功的程序";



__webpack_require__(3);
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
//require("./webpack/js/serviceworker.js");
__webpack_require__(2);








__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!style!css!./test.css\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
(function webpackMissingModule() { throw new Error("Cannot find module \"bundle.js\""); }());


/***/ })
/******/ ]);