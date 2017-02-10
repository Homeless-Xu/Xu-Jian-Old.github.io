
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
