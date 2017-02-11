

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
  $(document).on('pjax:end',   function() { NProgress.done(); showSideStructure(); hljs.initHighlightingOnLoad();  });
  // $(document).on('pjax:end',   function() { NProgress.done(); pajx_loadDuodsuo(); });
  // 多说评论的Pjax重载 每次点击pjax都要执行 .不然要刷新网页才能出现多说....



