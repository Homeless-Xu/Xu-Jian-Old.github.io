

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
