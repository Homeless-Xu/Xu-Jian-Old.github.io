

// 滚动条高度.  有高度才能有滚动条.
// 这里用函数计算的话. 手机端 会有问题.取值=0.  还是直接减去得了. 一个 -30 . 一个-20
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
      

  let xyz = document.documentElement.clientHeight;
  // xyz是 浏览器的高度; 
  let  xy = getElementTop(filenameUL);
  // xy是 filenameUL 距离浏览器上边距的距离(因为多了一个显示所有的横条);  
   console.log("filenameUL 到浏览器顶部距离"+xy)
  let   x = getElementTop(cateDiv);
  // x 是 CateDiv 和 tagDiv 的距离.(这两个同一水平线的)
  let xxyy = xyz - 50;
  // 这里还是直接减去 顶部栏目的50 + 
 
 
  $("#filenameUL").css("height",xxyy)
 
  // 下面是cate 和 tag 的高度设置..
  //let xxyy2 = xyz - x;
  let xxyy2 = xyz - 30;
      $("#catenameUL").css("height",xxyy2)
      $("#tagnameUL").css("height",xxyy2) 
            //alert("xxyy="+xxyy);
            //alert("xxyy2="+xxyy2);
}


// 网页加载后 浏览器窗口大小改变时候的 滚动条 高度设置 
$(function (){  scrollbarHeight()  });

// 浏览器窗口大小改变时候 再次改变滚动条高度
window.onresize= function(){ scrollbarHeight()  };






// 下面是 es6 功能测试.
	var arrow = x => x*x;
	console.log("ES6 箭头函数测试 "+arrow);              // 这个 直接显示 函数... 
	console.log(arrow(2));           // 输出  4
	console.log(arrow(3));           // 输出  9




