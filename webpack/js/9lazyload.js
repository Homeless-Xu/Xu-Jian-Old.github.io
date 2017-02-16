


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

