// 这个文件是给排序用的.  cateDiv + tagDiv + filenameDiv 名称排序.


// cateDiv 大类文件数量排序: 也就是隐藏 默认的 custom 排序div 显示num排序div
function cateNumfilter() {
  $("#cateDivFlex").attr("class","CLcateDivFlex hidden");
  $(".CLcateDiv1-numberSort").attr("class","CLcateDiv1-numberSort");
}




// 下面是 cateDiv 下的 custom 自定义排序.  和onready.js 几乎一样...
function cateCustomfilter(){		
  //console.log( $("#ymlCateName").text() );
  var xx= $("#ymlCateName").text();
  //console.log(xx);
  // 成功取到 cateDiv 下的 yml 里的自定义数据(字符串...)   → Web-1,Misc-2,-3
  var yy = xx.split(",")
  // console.log(yy);
  // 用split 把字符串 通过指定的分割符号 变为 数组  → ["Web-1", "Misc-2", "-3"]
  //console.log(yy.length);   // 取得数组的长度,用于循环
  for (i=0; i<yy.length; i++) {
           // alert(yy[0]); 
           // 这个会显示出 第一个数据  Web-1.
          // 把这个数据再次分割. 用 - 作为分隔符
          var temp = yy[i].split('^');
              //alert(temp[0]); 
              //alert(temp[1]);
              var tempName = temp[0];
              var tempOrder = temp[1];

          $("#"+ tempName ).css("order",tempOrder); 

          // 然后这个 Web就可以拿来 作为 cateDiv 里面对应的id了. 把这个id 的 flex order 改成 数字.
          // 这里顺序就修改成功了....
          // 下面就是怎么实现 一载入就 修改顺序....
      }

    $(".CLcateDivFlex").attr("class","C.cateDivFlex");
    // 处理加载主页时候. 会闪的问题...  先隐藏掉默认排序... 等js排序好之后再显示就可以了..
    $(".CLcateDiv1-numberSort").attr("class","CLcateDiv1-numberSort hidden");
    // 隐藏掉 num排序的div
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 tagDiv 的排序..


// 字母排序: →     隐藏 time + num div... ; 显示abcdiv   这里还要隐藏 tag 过滤出来的那个div
function tagAbcfilter(){

    $(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");        //隐藏 tag过滤出来的某类下的标签 
    $("#all-tagsContainer").attr("class","tagsDiv1-allTags hidden");       //隐藏 time div
    $("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //隐藏  num div
    $("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort");           //显示  abc div
}

// Time 排序: → 隐藏abc + num ; 显示time
function tagTimefilter(){
    $(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");        //隐藏 tag过滤出来的某类下的标签   
    $("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //隐藏  num div
    $("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //隐藏  abc div
    $("#all-tagsContainer").attr("class","tagsDiv1-allTags");              //显示 time div    
}

// 数量排序: → 隐藏 abc + time ; 显示num 
function tagNumfilter(){
    $(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");        //隐藏 tag过滤出来的某类下的标签   
    $("#all-tagsContainer").attr("class","tagsDiv1-allTags hidden");       //隐藏 time div    
    $("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //隐藏  abc div
    $("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort");         //显示  num div
}





