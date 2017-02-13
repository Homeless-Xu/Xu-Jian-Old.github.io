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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(11)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/.0.26.1@css-loader/index.js!./../node_modules/.5.0.1@sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!./../node_modules/.0.26.1@css-loader/index.js!./../node_modules/.5.0.1@sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

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
/* 3 */
/***/ (function(module, exports) {

// 显示文章结构侧边栏
function showSideStructure(){
  var MDh1 = $("#pageContent h1").text();
    // 获取 当前文章内的 h1
    //console.log("MDh1= " +MDh1);
  $("#MDh1 li").each( function(){    $(this).remove();         });
    // 首先点击文件名 删除清空所有现有的 li
  var titleNum = $("#pageContent h2,h3,h4,h5,h6 ").length;
    // console.log(titleNum );
    // 这里 所有的 title数量就出来了. 下面进行循环. 给每个title 一个 index; 
  $("#pageContent h2,h3,h4,h5,h6 ").each( function(){
    var MDTagContent = $(this).text(); 
    var htmlTagName = $(this).get(0).tagName ;
    var navbarIndex = $(this).index();
      // console.log( MDTagContent,navbarIndex);
      // 这里的 index 虽然不知道问什么 不是连续的 .... 没关系. 只要把这个index 的值 给文章的标签对应的id就可以了....
      //$(this).attr("name",navbarIndex);
    $(this).append("<a name='" + navbarIndex +"'></a>");
      //<a href="url">Link text</a>
      // if ( htmlTagName == "H1" ) { $("#MDh1").append("<li style='text-align: center'>"+ MDTagContent +"</li>");  }
         if ( htmlTagName == "H2" ) { $("#MDh1").append(                                    "<li><a href='#"+navbarIndex+"'>"+ MDTagContent +"</li>"); } 
    else if ( htmlTagName == "H3" ) { $("#MDh1").append(                        "<li>&nbsp;&nbsp;<a href='#"+navbarIndex+"'>"+ MDTagContent +"</li>"); } 
    else if ( htmlTagName == "H4" ) { $("#MDh1").append(            "<li>&nbsp;&nbsp;&nbsp;&nbsp;<a href='#"+navbarIndex+"'>"+ MDTagContent +"</li>"); }
    else if ( htmlTagName == "H5" ) { $("#MDh1").append("<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#"+navbarIndex+"'>"+ MDTagContent +"</li>"); }
    else    { $("#MDh1").append(            "<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#"+navbarIndex+"'>"+ MDTagContent +"</li>"); }
  });
  $("#lineSide").show();
}







// 文章滚动 高亮对应的标题
$("#contentDiv").scroll(   function() { 
  var PositiveDisc = [];
  $("#pageContent h2,h3,h4,h5,h6 ").each( function(){
      var MDTagContent = $(this).text(); 
      var MDTagIndex = $(this).index(); 
      var titleToTopDisc = $(this).offset().top;
      // console.log( titleToTopDisc, MDTagContent);
      // 这些值 有正负. 取第所有的输出 
        if ( titleToTopDisc >= 0 ) {
          // console.log( titleToTopDisc, MDTagContent,MDTagIndex);
          // 如果 offset是大于零的.  也就是在屏幕中间以及下面的..  取出来放到数组中. 
          // 然后取整个数组第一个值.这个title肯定是在屏幕中的... 把这个标题设置成高亮就可以了.
          PositiveDisc.push(MDTagIndex);
        }
  });
  // console.log( PositiveDisc );
  // console.log( PositiveDisc[0] );
  // 高亮这个标签. 
  var firstPositive = PositiveDisc[0];
  $(".CSMDh1 li").removeClass('active'); 
  $("[href='#"+firstPositive+"']").parent().addClass('active'); 
});





// 网页刷新的时候 也要重新显示目录结构
// 如果是主页就不显示. 如果是其他页就显示目录结构
$(function (){ 
  var WebURL = window.location.pathname;
  if ( WebURL == "/") {}
  else { showSideStructure();  }
});




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
$(document).on('pjax:end',   function() { 
	NProgress.done(); 
	showSideStructure();   
	});



// $(document).on('pjax:end',   function() { NProgress.done(); pajx_loadDuodsuo(); });
// 多说评论的Pjax重载 每次点击pjax都要执行 .不然要刷新网页才能出现多说....
// hljs.initHighlightingOnLoad();  highlight 高亮.


















/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 滚动条高度.  有高度才能有滚动条.
function scrollbarHeight(){
      function getElementTop(element){
      let actualTop = element.offsetTop;
      let current = element.offsetParent;
      while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
          }
      return actualTop;
     }
      // xyz是 浏览器的高度; xy是 filenameDiv 距离浏览器上边距的距离;  x 是 CateDiv 和 tagDiv 的距离.(这两个 水平的)
      // 设置 fileDiv 高度
      let xyz = document.documentElement.clientHeight;
      let  xy = getElementTop(filenameUL);
      // console.log(xy);
      let   x = getElementTop(cateDiv);
      let xxyy = xyz - xy;
      // 这里还是直接减去 顶部栏目的50 +  文件名上固定栏目的.18 得了..
          $("#filenameUL").css("height",xxyy)
      // 下面是cate 和 tag 的高度设置..
      let xxyy2 = xyz - x;
          $("#catenameUL").css("height",xxyy2)
          $("#tagnameUL").css("height",xxyy2) 
                //alert("xxyy="+xxyy);
                //alert("xxyy2="+xxyy2);

  }

  // 网页加载后 浏览器窗口大小改变时候的 滚动条 高度设置 
  $(function (){  scrollbarHeight()  });
  // 浏览器窗口大小改变时候 再次改变滚动条高度
  window.onresize= function(){ scrollbarHeight()  };


	
	var arrow = x => x*x;
	console.log("ES6 箭头函数测试 "+arrow);              // 这个 直接显示 函数... 
	console.log(arrow(2));           // 输出  4
	console.log(arrow(3));           // 输出  9






/***/ }),
/* 6 */
/***/ (function(module, exports) {

// 顶部左边 显隐按钮
$(function button(){
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



// 顶部右边 文章结构栏目显示按钮
$("#topbarStructureToggle").click( function(){ 
  if ($("#rightNavbar").css("display") == "none" ) {
          $("#rightNavbar").show(100);
          $("#lineSide").show(100);
     } else {
          $("#rightNavbar").hide(100);
          $("#lineSide").hide(100);
     }

});






// 右下角 左右上方向键
// 左按钮设计.隐藏顺序 cate>tag>filename.   $('#userNav').hide('slide',{direction:'left'},1000);
function toLeft() {
  if      ( $("#cateDiv").css("display") != "none" ) {   $("#cateDiv").hide(  100);   } 
  else if ( $("#tagDiv").css("display") != "none"  ) { $("#tagDiv").hide(    100); $("#lineLeft").hide(  100); }
  else    { $("#filenameDiv").hide( 100); $("#lineRight").hide( 100); }
}

 
function toRight() {
  if ( $("#filenameDiv").css("display") == "none" )  {  $("#filenameDiv").show(100); $("#lineRight").show(100);  } 
  else if ( $("#tagDiv").css("display") == "none" )  { $("#tagDiv").show( 100);      $("#lineLeft").show( 100);  }
  else    { $("#cateDiv").show(100);  }
}

function toTop() { $("#contentDiv").scrollTop(0);  }



$("#leftBtn").click(  function() { toLeft();  } );
$("#rightBtn").click( function() { toRight(); } );
$("#toTopBtn").click( function() { toTop();   } );


   
// 实体键盘控制
$(document).keydown(function(event){ 
        if (event.keyCode == 37){   toLeft();   }
   else if (event.keyCode == 39){   toRight();  } 
   else if (event.keyCode == 38){   toTop();    } 
  }); 
});
























/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

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






/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

//////////// js 文件引入
__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);
// pjax 必须和这个放一起.. 分开就是不行  奇怪了...
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(5);
__webpack_require__(8);
//require("./webpack/js/9serviceworker.js");
__webpack_require__(9);


__webpack_require__(4);







////// css 文件引入
__webpack_require__(0);















///// Misc

// document.getElementById('app').innerHTML="这是我第一个打包成功的程序";









// css 成功引入
//require("!style-loader!css-loader!./css/main.css");




//var $ = require('jquery');
//$('body').html('Hello');


// import $ from 'jquery';
//$('body').html('Hello');





/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Ubuntu Mono\",Verdana,Arial,Helvetica,sans-serif; }\n\nli {\n  list-style: none; }\n\na {\n  text-decoration: none;\n  color: black; }\n\nsup {\n  color: red;\n  float: right;\n  font-size: 0.7em; }\n\n.active {\n  background-color: yellow; }\n\n#bigDiv {\n  height: 100%; }\n\n/* 这里必须用 100%  而不能用100vh. 不然会在safari 网页放大缩小的时候有问题. */\n#arrowNav {\n  width: 90px;\n  height: 30px;\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n\n.hidden {\n  display: none !important;\n  visibility: hidden !important; }\n\n#allCateTagPostBtn {\n  padding: 0px;\n  margin: 0px; }\n\n.sortBtn {\n  width: 30px;\n  height: 30px;\n  flex-grow: 1;\n  flex-shrink: 0; }\n\n/*-----------------------------------* *  滚动条设置.\n *\\*----------------------------------- */\n/* 强制隐藏滚动条. 不知为什么会有滚动条... */\nhtml {\n  overflow: hidden; }\n\n/* 既可以滚动 .又不显示滚动条. */\n#catenameUL::-webkit-scrollbar, #tagnameUL::-webkit-scrollbar, #filenameUL::-webkit-scrollbar, #rightNavbar::-webkit-scrollbar, #pageContent::-webkit-scrollbar, #contentDiv::-webkit-scrollbar {\n  display: none; }\n\n#tagnameUL, #filenameUL {\n  overflow-x: hidden; }\n\n#OuterFilenameUL {\n  position: relative;\n  overflow: hidden; }\n\n/* 设置filenameDiv 排序按钮的间距+位置.   这里还要实现居中.. 居中就靠 transform 来实现了 .相对自身大小 来偏移... */\n#filenameDiSearch {\n  position: absolute;\n  left: 0%;\n  top: 0; }\n\n#allCateTagPostBtn {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translate(-50%, 0); }\n\n#filenameDivDate {\n  position: absolute;\n  right: 0%;\n  top: 0; }\n\n#topbarDiv {\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(210, 52, 219, 0.18); }\n  #topbarDiv i {\n    padding-top: 3px;\n    padding-bottom: 3px; }\n\n#Div {\n  display: flex;\n  position: absolute;\n  top: 30px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px; }\n\n/* 这个是上下布局的重点. top/bottom 同时用 还要用 absolute;  还必须用 left+right */\n.cateNames, .tagNames, .postNames {\n  padding: 2px 0; }\n\n/*-----------------------------------* *  博 客 主 体\n *\\*----------------------------------- */\n#cateDiv {\n  flex-basis: 83px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  max-width: 300px;\n  min-width: 14px;\n  position: relative;\n  background-color: rgba(92, 47, 125, 0.34);\n  padding: 0px 4px 4px 4px;\n  display: relative; }\n\n#tagDiv {\n  flex-basis: 100px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  max-width: 300px;\n  min-width: 48px;\n  position: relative;\n  background-color: rgba(212, 117, 204, 0.53);\n  padding: 0px 0px 4px 4px;\n  display: relative; }\n\n#filenameDiv {\n  flex-basis: 219px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  max-width: 1450px;\n  min-width: 188px;\n  background-color: pink;\n  position: relative;\n  padding: 4px 0px 4px 0px;\n  display: relative; }\n\n#contentDiv {\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 5px;\n  background-color: rgba(161, 203, 55, 0.3);\n  flex-basis: 150px;\n  overflow: scroll; }\n\n#pageContent {\n  overflow-x: scroll;\n  word-wrap: break-word;\n  word-break: normal; }\n\n#rightNavbar {\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: 100%;\n  flex-basis: 90px;\n  font-size: 0.8em;\n  padding: 0px;\n  background-color: rgba(127, 127, 127, 0.13);\n  overflow-x: hidden;\n  overflow-y: scroll;\n  white-space: nowrap; }\n\n@media screen and (max-width: 414px) {\n  #cateDiv, #tagDiv {\n    display: none;\n    flex-basis: 88px; }\n  .cateSup, .tagSup {\n    display: none; }\n  #lineLeft, #lineRight, #lineSide {\n    display: none !important; }\n  /*-- 未知原因. lineSide 一定要强制隐藏... 不然有个 display:block .....-- */\n  #filenameDiv, #rightNavbar, #arrowNav, #donate, #githubReadme, #githubHome, #GithubStar {\n    display: none; }\n  #filenameDivDate {\n    position: absolute;\n    right: 6%;\n    top: 0; } }\n\n@media screen and (max-width: 700px) {\n  #cateDiv, #tagDiv {\n    display: none;\n    flex-basis: 88px; }\n  .cateSup, .tagSup {\n    display: none; }\n  #lineLeft, #lineRight, #lineSide {\n    display: none !important; }\n  /*-- 未知原因. lineSide 一定要强制隐藏... 不然有个 display:block .....-- */\n  #filenameDiv, #rightNavbar, #arrowNav, #donate, #githubReadme, #githubHome, #GithubStar {\n    display: none; }\n  #filenameDivDate {\n    position: absolute;\n    right: 6%;\n    top: 0; } }\n\n.lineFlex {\n  display: flex;\n  height: 100%;\n  width: 10px; }\n\n.lineInDiv {\n  flex-basis: 2px;\n  height: 100%;\n  background-color: gray;\n  margin-left: auto;\n  margin-right: auto; }\n\n#lineLeft {\n  width: 10px;\n  height: 100%;\n  cursor: col-resize; }\n\n#lineLeft-left {\n  flex-basis: 50%;\n  height: 100%;\n  background-color: rgba(212, 117, 204, 0.53); }\n\n#lineLeft-right {\n  flex-basis: 50%;\n  height: 100%;\n  background-color: pink; }\n\n#lineRight {\n  width: 10px;\n  height: 100%;\n  cursor: col-resize; }\n\n#lineRight-left {\n  flex-basis: 50%;\n  height: 100%;\n  background-color: pink; }\n\n#lineRight-right {\n  flex-basis: 50%;\n  height: 100%;\n  background-color: #e3f0c3; }\n\n#lineSide {\n  width: 10px;\n  height: 100%;\n  cursor: col-resize; }\n\n#lineSide-left {\n  flex-basis: 50%;\n  height: 100%;\n  background-color: #e3f0c3; }\n\n#lineSide-right {\n  flex-basis: 50%;\n  height: 100%;\n  background-color: rgba(127, 127, 127, 0.13); }\n\n#topbarLeft, #topbarRight {\n  flex-basis: 150px; }\n\n/*三级导航栏简介:\n * 一级: 网页显示             → 手机 resume 邮件\n * 二级: 一级栏上鼠标悬浮显示   → 鼠标悬浮resume上: 简历预览, 简历下载\n * 三级: 二级栏上鼠标悬浮显示   → 鼠标悬浮简历下载上: DOC格式下载,PDF格式下载\n *\n * <div class=\"navbox\">\n *    <ul class=\"clearfix\">\n *        <li><a href=\"#\">左箭头图标</a></li>\n *        <li><a href=\"#\">手机图标</a></li>\n *        <li><a href=\"#\">(Resume)</a>\n *            <ul class=\"subnav\">\n *                <li><a href=\"#\">简历预览</a></li>\n *                <li><a href=\"#\">简历下载</a>\n *                    <ul class=\"threenav\">\n *                        <li><a href=\"#\">DOC格式下载</a></li>\n *                        <li><a href=\"#\">PDF格式下载</a></li>\n *                    </ul>\n *                </li>\n *            </ul>\n *        </li>\n *        <li><a href=\"#\">邮件图标</a></li>\n *        <li><a href=\"#\">右箭头图标</a></li>\n *    </ul>\n * </div> */\n/*一级导航栏 外观设置 */\n.navbox {\n  height: 30px;\n  display: inline-block; }\n  .navbox > ul > li {\n    float: left;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    font-size: 16px; }\n  .navbox ul li a {\n    display: block;\n    cursor: pointer;\n    height: 30px; }\n    .navbox ul li a:hover {\n      text-decoration: none;\n      background: #00bfff; }\n\n/*一级导航栏 内容外观设置: 默认列表是垂直显示的.这里用 float:left 把它弄成水平显示 */\n/*一级导航栏 内容默认样式+鼠标悬浮样式. */\n/*默认隐藏二级菜单: 也就是隐藏鼠标悬浮到一级导航栏上会显示出来的内容 */\n.subnav {\n  display: none; }\n\n/*鼠标悬浮到一级导航栏上会显示二级菜单的内容, 这个关系有点复杂..大概就是如果鼠标悬浮在一级导航某项上 那么 二级菜单subnav 就显示出来 */\n.navbox ul li:hover .subnav {\n  display: block; }\n\n/* 二级菜单显示的位置. 相对于一级菜单显示 */\nsubnav > li {\n  position: relative; }\n\n/* 三级菜单显示的位置. 相对于二级菜单显示 */\n.threenav {\n  position: relative;\n  left: 100%;\n  top: -30px; }\n\n.subnav, .threenav {\n  display: none; }\n\n.subnav li:hover .threenav {\n  display: block; }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n  overflow: hidden;\n  font-size: 25px;\n  padding: 2.5px; }\n\n.iconfont {\n  font-family: \"iconfont\";\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n  padding-left: 20px; }\n\n.gh-btn, .gh-count {\n  padding: 4px 4px 2px 4px;\n  height: 16px !important;\n  margin-top: 3px;\n  color: #333;\n  text-decoration: none;\n  text-shadow: 0 1px 0 #fff;\n  white-space: nowrap;\n  cursor: pointer;\n  border-radius: 3px; }\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
(function webpackMissingModule() { throw new Error("Cannot find module \"bundle.js\""); }());


/***/ })
/******/ ]);