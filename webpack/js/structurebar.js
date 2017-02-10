
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

