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