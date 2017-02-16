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

