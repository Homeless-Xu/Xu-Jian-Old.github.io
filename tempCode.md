{% raw %}

// tag 排序 加载时候的默认值...



$(function tagDeafultFilter(){
	var tagDeafult = $("#ymlTagSortDefault").text();
    //alert( tagDeafult );

    if      ( tagDeafult == "abc" )  { tagAbcfilter();  }
    else if ( tagDeafult == "num" )  { tagNumfilter();  }
    else                            { tagTimefilter(); }

});








	<script>

	  var posts = [
		{% for post in site.posts %}
		  {
			"title": "{{ post.title }}",
			"categories": "{{ post.categories }}",
			"url": "{{ post.url }}"
		  }
		  {% unless forloop.last %},{% endunless %}
		{% endfor %}
	  ]; 

	console.log( posts );
	</script>








// open links(do not need pjax) in new tab.
// 正文 也就是 所有的post 会有各种链接. 这里需要过滤.
//	var afterPjax = function() {
//		$('#contentDivDiv').find('a').filter(function() { return this.hostname != window.location.hostname; }).attr('target', '_blank');
//	};
//	afterPjax();
// 这才是最关键的 . 特别是 后面那个 fragment 参数...



	

	



/*





	// 定义变量???  来获取 html里面的数据.			
	var catt =  $(".catt").data('catefi');
	 // console.log("catt: "+catt);

	var catefilter = $(".cateLI").data('catefilter');
	  // console.log("catefilter: "+catefilter);

	var filenameDiv = $('#filenameDiv')


	// 最外层div开始. 过滤所有的 链接 a .. 主要的是 filenameDiv下的链接. 
	// 如果 这些链接不 包含 本博客 链接 前面的固定部分. 那么就把这些链接设置成 在blank 在新窗口打开.
	var afterPjax = function() {
			$('#bigDiv').find('a').filter( function(){
					return this.hostname != window.location.hostname;	
				}).attr('target','_blank');
		};

	afterPjax();

	// 这个是 进度条
	$(document).on({
		'pjax:click': function(){  	NProgress.start();  },
		'pjax:end':   function(){   NProgress.done();   }
	  });

	// 这个是 pjax 主要部分..  那个区域的 ....
	$(document).pjax("#filenameDiv", '#contentDiv', 
		{ fragment: '#contentDiv', timeout:3000}
	  );	

	
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////	




// 点击大类 对 filename 进行flex 自定义排序.这个函数 ...   大体应该和 filenameDiv 默认时候的自定义排序差不多的..
function cateFilenameFlex() {
	$ (".blog-list-container4").each(function( index ) {
		   // console.log( index + ": " + $( this ).text()   );               
		   // console.log( index + ": " + $( this ).children("span").text() + $( this ).children("span").text().length )
		   // 上面 获取整个元素的内容.  下面获取子元素span. 
			var orderValue = $( this ).find('span').text();
			var orderLength = $( this ).find('span').text().length;
			if ( orderLength != "0" ) {
				//console.log( orderValue );
				//console.log( $(this ).css("order") );
				$(this ).css("order", orderValue); 
					//console.log( $(this ).css("order") );
				}
		});

}



<ul id="cateDivFlex" class="CLcateDivFlex" style="overflow: scroll;" >	
{% for someCate in site.categories %}
    {% assign cateClicked = someCate | first %}    
    {% assign catePosts = someCate | last %}
    <!-- 下面的class/id 是给大类排序用的 -->
        <li style="order: 100; padding-bottom:5px;"; class="cate-status" id="{{cateClicked}}" style="width: 90%, background-color:red;";> 
           <a href onclick="catefilter('{{ cateClicked }}'); return false;" >			
            {{ cateClicked }}<sup>{{catePosts | size }}</sup>
           </a>
        </li>
    
{% endfor %}
</ul>





<!-- ----------------------------------------------------------------------------------------------- -->
<!-- 	filenameDiv1 显示所有文章 默认的时间顺序 + flex自定义排序 ✔︎ -->
	<div class="blog-list-container" id="all-container" ; style="overflow: scroll;">
		<ul class="blog-list" ; id="filenameDivFlex" style="display: flex ; flex-direction: column">
		{% for post in site.posts reversed %}
			<li style="order: 219"  class="fileNameFlexOrder" id="{{post.title}}";  >
			  <a href="{{ post.url }}" 
			  	 onclick="filenameActiveCT('{{post.tags}}', '{{post.categories}}'); filenameActiveThis(); catefilterPart('{{ post.categories }}');" >
	         	 <i class="fa fa-angle-double-right" aria-hidden="true"></i>			  
			 	 {{ post.title }} 
			  <sup class="fileNameDate hidden">{{ post.date | date: "%Y-%m-%d" }}</sup></a>
			</li>
		{% endfor %}
		</ul>
	</div>

<!--   -->
<!-- ----------------------------------------------------------------------------------------------- -->

<!-- filenameDiv2  某标签下的文章-->
	{% for tag in site.tags %}
		{% assign t = tag | first %}      <!--   这是第一个 标签 -->
		{% assign posts = tag | last %}   <!--   这是 所有文章 -->	
	<div class="blog-list-container2 hidden" id="{{ t }}-container">
	  <ul class="blog-list" id="overflowHeighr2" style="display: flex ; flex-direction: column; overflow: scroll;" >
	    {% for post in posts reversed %}
	      {% if post.tags contains t %}
	          <li >
	            <a href="{{ post.url }}" onclick="filenameActiveCT('{{post.tags}}', '{{post.categories}}'); filenameActiveThis();"
	            style="order: 219" class="blog-list-container22"  id="{{ post.title }}-tag" >
	            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
	          	{{ post.title }}
	          <sup class="fileNameDate hidden">{{ post.date | date: "%Y-%m-%d"  }}</sup></a>
	        </li>
	      {% endif %}
	    {% endfor %}
	  </ul>
	</div>
	{% endfor %}

<!-- ----------------------------------------------------------------------------------------------- -->
<!-- filenameDiv3: 	某大类下的所有文章. -->
{% for CatePosts in site.categories %}
	{% assign CateName = CatePosts | first %} 
	{% assign Cateposts = CatePosts | last %}
	<div class="blog-list-container3 hidden" id="{{CateName}}-filenames" style="display: flex ; flex-direction: column; overflow: scroll;" >	
		{% for zz in Cateposts  reversed %}
	    	{% if zz.categories contains CateName %}
					<li style="order: 219"; class="blog-list-container4" id="{{zz.title}}-filename" >
			    	  <a href="{{zz.url}}" onclick="filenameActiveCT('{{zz.tags}}', '{{zz.categories}}'); filenameActiveThis();">
						<i class="fa fa-angle-double-right" aria-hidden="true"></i>
							{{zz.title}}
						<sup class="fileNameDate hidden">{{ zz.date | date: "%Y-%m-%d" }}</sup></a>
					</li>
	      {% endif %}
	  {% endfor %}
	</div>  	
{% endfor %}	









/*

// 这个函数 传入的变量是 cateDiv 里面的 点击某个分类时候的 分类名:   cateClicked
function catefilter(cateClicked) { showTagsandPosts(cateClicked); delRows(); setActiveCate(cateClicked); }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  选取遍历 catediv 下的 所有li  然后给选定的大类 添加active  点击大类也要清楚 tagDiv 下的所有active....
function setActiveCate(cateClicked) {
	// 清除所有大类高亮+设置某个大类
	$("#cateDiv li").each( function() {  	$(this).removeClass('active');        });
	$("#"+ cateClicked).addClass('active');
	$("#"+ cateClicked +"-num").addClass('active');
	// console.log( $("#"+ cateClicked) )
	// 下面是清楚 tagDiv 的active 
	$("#tagDiv li").each( function() {  	$(this).removeClass('active');  	});
	// 下面是清除 filename 的高亮
	$("#filenameDiv li").each( function() {  	$(this).removeClass('active');  	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 点击大类 过滤出对应的tag 和 filename..  这里  也要进行yml 默认tag 排序的判断
function showTagsandPosts(cateClicked) {
	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");       //$(".tagsDiv1-allTags").css("display","none");
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");
	$("#"+ cateClicked +"-cate").attr("class","tagDiv2-catetags");         // 把这个元素的class 改成 ... 没有hidden的.
	// 下面是 filenameDiv 的 
	$(".blog-list-container").attr("class","blog-list-container hidden");
	$(".blog-list-container2").attr("class","blog-list-container2 hidden");
	$(".blog-list-container3").attr("class","blog-list-container3 hidden");
	$("#"+ cateClicked +"-filenames").attr("class","blog-list-container3");   		
}	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 根据元素的 内容长度 来删除 空行. 这里要用 正则式 进行筛选. 而不是长度. 正则式要筛选出来 而不是删除...
// function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
function delRows() {
		$(".delEmptyrow-C").each(  function(index){
			var thisALLText = $(this).text();
			var thisSpanText = $(this).find("span").text();
			var textSpanLength =　 $(this).find("span").text().length ;
			//console.log(thisSpanText+"标签长度"+textSpanLength);
			if ( $(this).find("span").text().length == 0 )	{	$(this).attr("class","delEmptyrow-C hidden");	}
		});
	}

// 上面是 cate 过滤
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 tag 过滤

function filter(tag) {
  setActiveTag(tag);
  showfilenameDiv2(tag);
  tagFilenameFlex();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showfilenameDiv2(tag){	
	if( tag == "allPosts") {
			// 显示 div1 就可以了... 隐藏div2 div3
			$(".blog-list-container").attr("class","blog-list-container");
			$(".blog-list-container2").attr("class","blog-list-container2 hidden");	
			$(".blog-list-container3").attr("class","blog-list-container3 hidden");	
			$("#cateDiv li").each( function() {  	$(this).removeClass('active');        }); // 移除 cateDiv    下所有的 active...
		}
	else{
			// 先隐藏 div1 ,这个div是要一直隐藏的.
			$(".blog-list-container").attr("class","blog-list-container hidden");
			// 再隐藏 div2 全部 .这里有 每个标签下的各自的文章.只需要显示某个标签就行
			$(".blog-list-container2").attr("class","blog-list-container2 hidden");
			// 这里 也要排错 div3... 不然你点过大类下某个标签.这里会残留
			$(".blog-list-container3").attr("class","blog-list-container3 hidden");
			// 最后显示 div2 下符合条件的id . 
			$("#"+ tag + "-container").attr("class","blog-list-container2");
		}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  选取遍历 tagdiv 下的 所有li  然后给选定的大类 添加active. tag 有好几个的.
function setActiveTag(tag) {
	// 显示所有标签是时候 要去除cate + tag + filename的 所有高亮
	$("#tagDiv li").each( function() {  	$(this).removeClass('active'); 	});       // 移除tagDiv      下所有的 active... 
	$("#filenameDiv li").each( function() {  	$(this).removeClass('active'); 	});   // 移除filenameDiv 下所有的 active... 
	$("#"+ tag +"-item").addClass('active');    // 默认情况 排序1 下的 active
	$("#"+ tag +"-item2").addClass('active');   // 默认情况 排序1 下的 active
	$("#"+ tag +"-item3").addClass('active');   // 默认情况 排序1 下的 active
	$("#"+ tag +"-cate22").addClass('active');   //  大类过滤出来的 active
}
// 这里只解决了默认情况下的 active...  大类下 还是不行??
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tagFilenameFlex() {
	$ (".blog-list-container22").each(function( index ) {
	   // console.log( index + ": " + $( this ).text()   );               
	   // console.log( index + ": " + $( this ).children("span").text() + $( this ).children("span").text().length )
	   // 上面 获取整个元素的内容.  下面获取子元素span. 
		var orderValue = $( this ).children('span').text();
		var orderLength = $( this ).children('span').text().length;
		if ( orderLength != "0" ) {
			//console.log( orderValue );
			//console.log( $(this ).css("order") );
			$(this ).css("order", orderValue); 
				//console.log( $(this ).css("order") );
			}
	});
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 下面是 file过滤


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 显隐 文件时间
function fileNameDate() {
  // console.log( $(".fileNameCustonOrder").css("display")   );
  // 判断 某元素显示隐藏状态. 显示:block  隐藏:none
  var fileNameSortNumStatus = $(".fileNameDate").css("display");
    if ( fileNameSortNumStatus ==  "none" ) {
         $("#filenameDivDate").removeClass("fa fa-eye-slash")  ;
         $("#filenameDivDate").addClass("fa fa-eye");
         $(".fileNameDate").removeClass("hidden");
       } else {
         $("#filenameDivDate").removeClass("fa fa-eye")  ;
         $("#filenameDivDate").addClass("fa fa-eye-slash");
         $(".fileNameDate").addClass("hidden");
       }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 点击某个文件名 高亮: 文件名+ 对应tag + 对应cate ....用 onclick 传入文件名 ...然后取消所有active 然后设置某个active...
function filenameActiveCT( afileTag,afileCate ) {
	setActiveCate(afileCate);   // 必须先设置大类高亮. 因为大类高亮会清除所有的 tag/filename 高亮. 在cateFilter 里.
	setActiveTag(afileTag);     // 第二个执行   函数在tagfilter里
}

function filenameActiveThis () {
	var selector = '#filenameDiv li';
	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 点击文件名. 显示出该文件名类下的所属 tag.. 类似点击某大类.. 这里只需要显示改大类下的标签就可以. 不用显示该大类的 文章....
function catefilterPart( afilename ) {
	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags hidden");
	//$(".tagsDiv1-allTags").css("display","none");
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");
	$("#"+ afilename +"-cate").attr("class","tagDiv2-catetags"); 
	// 把这个元素的class 改成 ... 没有hidden的.
		
delRows();  //这个是 cateFilter.js 下的 删除空行的 函数..

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 显示所有标签和文章
function showAllTagsandPosts () {
	$(".tagsDiv1-allTags").attr("class","tagsDiv1-allTags");               //  默认所有标签时间排序
	$(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden"); 	   //  大类过滤出来的 tag
	// 下面是 filenameDiv的if过滤 
	$(".blog-list-container").attr("class","blog-list-container");
	$(".blog-list-container2").attr("class","blog-list-container2 hidden"); 
	$(".blog-list-container3").attr("class","blog-list-container3 hidden"); 
	// 显示所有标签是时候 要去除cate + tag + filename的 所有高亮
	$("#cateDiv li").each( function()     { $(this).removeClass('active'); });
	$("#tagDiv li").each( function()      { $(this).removeClass('active'); });
	$("#filenameDiv li").each( function() { $(this).removeClass('active'); });
}







*/





// 这个文件是给排序用的.  cateDiv + tagDiv + filenameDiv 名称排序.
// cateDiv 大类文件数量排序: 也就是隐藏 默认的 custom 排序div 显示num排序div
  function cateNumfilter() {
    $("#cateDivFlex").attr("class","CLcateDivFlex hidden");
    $(".CLcateDiv1-numberSort").attr("class","CLcateDiv1-numberSort");
  }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    $("#alltagsContainer").attr("class","tagsDiv1-allTags hidden");        //隐藏 time div
    $("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //隐藏  num div
    $("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort");           //显示  abc div
}

// Time 排序: → 隐藏abc + num ; 显示time
function tagTimefilter(){
    $(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");        //隐藏 tag过滤出来的某类下的标签   
    $("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort hidden");  //隐藏  num div
    $("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //隐藏  abc div
    $("#alltagsContainer").attr("class","tagsDiv1-allTags");               //显示 time div    
}

// 数量排序: → 隐藏 abc + time ; 显示num 
function tagNumfilter(){
    $(".tagDiv2-catetags").attr("class","tagDiv2-catetags hidden");        //隐藏 tag过滤出来的某类下的标签   
    $("#alltagsContainer").attr("class","tagsDiv1-allTags hidden");        //隐藏 time div    
    $("#tagDiv1-letterSort").attr("class","tagDiv1-letterSort hidden");    //隐藏  abc div
    $("#tagDiv1-numberSort").attr("class","CLtagDiv1-numberSort");         //显示  num div
}







  <style>
        #forkongithub a{background:#111;color:#fff;
        text-decoration:none;font-family:arial,sans-serif;text-align:center;
        font-weight:bold;padding:5px 40px;font-size:0.5rem;line-height:1rem;
        position:relative;transition:0.5s;}

        #forkongithub a:hover{background:#c11;color:#fff;}

        #forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#fff;}
        #forkongithub a::after{bottom:1px;top:auto;}

        @media screen and (min-width:80px){
            #forkongithub{position:fixed;display:block;top:0;right:0;width:150px;overflow:hidden;height:150px;z-index:9999;}
            #forkongithub a{width:66px;position:absolute;top:30px;right:-30px;
                transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);
                box-shadow:4px 4px 10px rgba(0,0,0,0.8);}}
    </style>
    <span id="forkongithub"><a href="https://github.com/Xu-Jian/Xu-Jian.github.io" target="'_blank">Fork me</a></span>



#slide {
    position: absolute;
    left: -100px;
    width: 100px;
    height: 100px;
    background: blue;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
}

@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}






	
	HTML:

<div class="containerDiv">
    <div class="clickMe"></div>
    <div class="collectionTitle" id="{{collection.title}}"></div>
</div>



JAVASCRIPT:

jQuery(window).load(function(){
    jQuery('div.clickMe').click(function(){
        var collectionTitle = jQuery(this).siblings('div.collectionTitle').attr('id');
        alert(collectionTitle);
    });
});
	
	
	
	
	
	
jQuery(document).ready(function(){
    var assignedCity = jQuery.cookie('somecookie');
    jQuery('span#cityassigned').text("\{\{ assign cityassigned = assignedCity \}\}");
});
I've tried multiple variations of this - using .html() instead of .text, removing the escapes from the string, etc.

Basically what I need to do is check all available tags against "assignedcity" -- if there's a match, display a DIV; otherwise do not. But the only place assignedCity can be found is within jQuery. Help!




#1. you do understand that Liquid renders, and that gives you the DOM which is HTML. After that you can kick in with Javascript on the client
liquid 提供的是 DOM . 可以用 js 来获取?




#2. as Liquid renders, capture the interesting stuff you want in Javascript structures. Liquid offers up everything you need, including tags as JSON, so life is easy
要捕获么  capture ..  tags 已经把你封装成 json 了??



#3. once the document has loaded, you can use Javascript to peek into your structured data, extract the tags, and do what you want. 




Basically, you're NEVER going to get anything in Javascript into Liquid, that is nonsense. 

Your need here, matching a Tag to a Cookie value is indeed do-able, and simple. Follow that pattern. You will succeed.












要实现 点击 分类 出来 标签:

 下面是 html 里面  code 分类下的标签 <br>
 给这个 div 什么 的 加上 class.
 然后js里 就可以获取 这个具体的值.
 然后用js 修改标签栏的内容 成这个的值...
 
 
 怎么循环呢....
 在liquid里面循环完成 这个值 再给js...就可以了 ...
 



{% for ca in site.categories.code %}
		 {{ ca.tags }}
{% endfor %}







Both of their elements can be acsess by for..in, and the way adding categories and tags are the same. So what's the difference?







{% capture truncated_content %}{{ page.content | truncatewords: 200, '' }}{% endcapture %}

{% if page.content != truncated_content %}
  More than 200 words
{% else %}
  Less or equal to 200 words
{% endif %}



{% assign val = page.content | number_of_words %}
{% if val > 200 %}
 ....
{% endif %}







				<li class="cateLI2" data-catefilter="{{someCate2 | first }}">   
这里的 someCate2 这个也是不能重复的..... ..
这个是什么呢.....




	
	
	
	丫的 html 修改 liquid 变量方法.
	先在html里面  不加{{}}. 
	然后触发js 的时候 再加上 {{}}. 就可以出来你想要的内容了....
	这就需要两个 div 了.
	一个是初始值的...div
	一个是可以修改的....div
	而且要... 一个显示 另外一个 就隐藏...
	
	
	
	var para = $("#para").text();
console.log(para);
$("#para").text("{{site.title}}")

	
	
	-----  
	
	assign 用法:
	
	{% include test_en.html %}


{% assign tpl = "test_en.html" %}{% include {{ tpl }} %}


{% assign lang = "en" %}
	{% capture filename %}
		test_{{ lang }}.html
	{% endcapture %}
{% include {{filename}} %}
	
	
	
	
	
	
	
	layout 指定要使用的放置在 _layouts 文件夹中的布局文件，不带文件名的拓展后缀。
permalink 设定博客文章的链接样式，默认为 /year/month/day/title.html
published 如果不想发布某文章，在构建网站时设定为 false。
category categories 设置文章的一个或多个分类属性。可以通过 YAML list 或者用逗号分隔的字符串来指定。
tags 类似于分类。




----


json 方法:

先生成 json 字符串.  再通过 ja 动态生成html
	
	
var dataStr = '{ {% for tag in site.tags %}{% if tag[0] != site.tags.first[0] %},{% endif %}"{{ tag[0] }}":[{% for post in tag[1] %}{% if post != tag[1].first %},{% endif %}{"url":"{{post.url}}", "title":"{{post.title}}", "date":"{{post.date | date:"%d/%m/%Y"}}"}{% endfor %}]{% endfor %} }',
    data = JSON.parse(dataStr),
    curTag = $.query.get("tag"),
    archieves = data[curTag];
    
    
    
    
这里还是一样，使用jQuery.query插件获取url中的参数，和上面的<a href="/show_by_tag.html?tag={{ tag[0] }}"> {{ tag[0] }}</a>相对应

标签没有字符集问题，放心使用吧



首先看一下，如何根据标签的字母进行排序

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag | downcase | replace:' ','-' }}
  {% endfor %}
{% endcapture %}
{% assign sorted_post_tags = tags | split:' ' | sort %}
{% for sorted_tag in sorted_post_tags %}
  {% for tag in site.tags %}
    {% assign downcase_tag = tag | downcase | replace:' ','-' %}
    {% if downcase_tag == sorted_tag %}
      <a href="{{ page.url }}#{{ tag[0] }}">{{ tag[0] }}</a>
    {% endif %}
  {% endfor %}
{% endfor %}




还可以根据标签下的文章数量进行排序

{% assign max_tag_count = 0 %}
  {% for tag in site.tags %}
    {% if tag[1].size > max_tag_count %}
      {% assign max_tag_count = tag[1].size %}
    {% endif %}
 {% endfor %}
 {% for i in (1..max_tag_count) reversed %}
    {% for tag in site.tags %}
      {% if tag[1].size == i %}
       <a href="{{ page.url }}#{{ tag[0] }}">
        {{ tag[0] }}<sup>{{ i }}</sup>
      </a>
    {% endif %}
  {% endfor %}
{% endfor %}
    
    
    
    不支持自定义插件等，想要创建标签页和分类页的同学就只能自己动手了。
    
    
    
    
<div class="panel-body">
    { % for post in site.tags.["标签"] % }
    { % include post-list.html % }
    { % endfor % }
</div>
    
    
    
    
    
js 分类功能

显示所有分类 一般都没什么问题. 但是在具体分类页面处理...就困难了.
js 静态的特性. 使得这里处理起来很困难....
参考别人的做法:  选择将文章列表 储存在 json 里面


var articleList = [{% for post in site.posts %}
		<span style="white-space:pre">	</span>{"title":"{{post.title}}",
			"url":"{{site.url}}{{post.url}}",
	<span style="white-space:pre">	</span>	"date":"{{ post.date | date:'%Y-%m-%d' }}",
			"excerpt": '{{ post.excerpt | strip_html | strip_newlines | truncate:170 }}'
			{% if post.categories != empty %}
			,
			"categories":[{% for category in post.categories %}"{{category}}"{% if forloop.last == false %},{% endif %}{% endfor %}]{% endif %}}
			{% if forloop.last == false %},{% endif %}{% endfor %}];
			
			
			我在这里判断了文章有没有分类，如果没有分类的话，就不添加到这个JSON里了，另外说下post.excerpt：
excerpt 是获取文章的摘要信息，这个信息可以显示在文章列表里面
strip_html 是除去HTML标签，因为摘要里面不需要显示图片之类的，纯文本即可
strip_newlines 是去掉换行符
truncate 这个就是字面意思了，摘要的长度
然后在JS里面去取请求的参数，筛选出需要显示的文章，做法比较常规就不说了。
如果参数中有特殊符号（比如我就有这样的分类名称：cvs||svn）或是中文（比如“分享”），url就用encodeURI函数转义一下：
<a href="javascript:void(window.location.href=encodeURI('/showCategory.html?categoryName={{ category | first }}'))">{{ category | first }}</a>
取的时候用decodeURI函数去取。












todo :

比如 所有的文章列表.  点击某个文件.  先获得这个的文件名. 再获得文件标签 再获得文件大类.
连续执行三个函数不就好了 . 
第一个函数 高亮文件名.
第二个函数 高亮 tag
第三个函数 高亮 cate





实现 点击文件名. 自动高亮 标签 和 大类.
实现方法:


下面处理  点击 所有标签会刷新网页的问题.




先处理 文件名 onclick 的问题. 这里类似于 sql 注入什么的.. 要对文件名进行处理!!!
文件名列表中 要把显示的 处理成.... 字符....  this 也是个问题






[
  {% for item in site.posts %}
    {
      "title": "{{ item.title | xml_escape }}",
      "description": "{{ item.description | xml_escape }}",
      "type": "{{ item.type | xml_escape }}"
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
]










这里 只能用 liquid 定义一个变量. 让后.用for 把值存进这个变量中...  然后想办法取出json 里面的值....

postJson 结构:
	title: 
	url:
	tag:
	cate:
	date:
	class:

	遍历一遍: 把这些都弄到变量中...




tagJson 结构:

	tag:
	文章数量:
	所属大类:
	包含文章:
	遍历一遍: 把这些都弄到变量中...



cateJson 结构:

	cate:
	对应tag
	对应文章
	文章数量.
	遍历一遍: 把这些都弄到变量中...







 下面是i....  手机端的   左边侧栏 高亮代码.


$(".cateNames").click(   function() {
  // alert($(window).width());          // 浏览器当前窗口可视区域宽度
  var clickedCateName = $( this ).children('span').text()
  // console.log( clickedCateName );    // 可以获取 jQuery. 

  if ( $(window).width() <= 414 ) {   
      // 进行屏幕宽度的判断. 如果屏幕宽度<= 414 那就支持手机端的js: 比pc多两步 要先显示tag&filename栏.
      // 这里还要进行判断.如果 已经显示了tag filename 那么就隐藏他们!!
      if( $("#tagDiv").css("display") == "none" ) {
          //显示 tag 和filename
               $("#tagDiv").show()
          $("#filenameDiv").show()
          // 过滤出当前类下的标签和文章
          $(".tagNames").hide()
          $("[data-tagcate="+ clickedCateName +"]").show()
          // 先隐藏所有文件. 显示某类文件
          $(".postNames").hide()
          $("[data-cate="+ clickedCateName +"]").show()
       }else {  
       // 这里 如果是高亮的那就隐藏(按的同一个大类), 如果不是高亮那就过滤出对应的tag
           if ( $(this).hasClass('active') ){
              $("#tagDiv").hide();  
              $("#filenameDiv").hide();    // 隐藏 tag 和 filename 
           } else {
              $(".tagNames").hide()
              $("[data-tagcate="+ clickedCateName +"]").show()
              // 先隐藏所有文件. 显示某类文件
              $(".postNames").hide()
              $("[data-cate="+ clickedCateName +"]").show()             
           }       
       }
      // 手机端的 高亮设置
      var activeStatus = $(this).hasClass('active');
      console.log( activeStatus );
      if (activeStatus) {
        $(this).removeClass('active'); 
        console.log("执行1");   
      } else {
        $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
        $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
        $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });      
        $(this).addClass('active');
        console.log("执行2");
      }
  } else {
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
  }
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
// 这里也要考虑到手机.. 手机上点了文件名 就要隐藏 tag 和 filename 只留 cate
$(".postNames").click(   function() {
  var  postTagName = $(this).data('tag' );
  var postCateName = $(this).data('cate');
  if ( $(window).width() <= 414 ) {   
      // 进行屏幕宽度的判断. 如果屏幕宽度<= 414 那就支持手机端的js: 隐藏tag&filename栏.
      // 既然隐藏了 就不用设置高亮了..?  下次点击的时候 想要之前的高亮怎么办..
               $("#tagDiv").hide()
          $("#filenameDiv").hide()
  
   } else {
      $("#cateDiv li").each(     function() {  $(this).removeClass('active'); });    
      $("#tagDiv li").each(      function() {  $(this).removeClass('active'); });    
      $("#filenameDiv li").each( function() {  $(this).removeClass('active'); });      
      $(this).addClass('active'); 

      $(".tagNames").hide()
      $("[data-tagcate="+ postCateName +"]").show()      
      $("#"+ postTagName ).addClass('active'); 	
      $("#"+ postCateName).addClass('active'); 	 
   }    
});















		<div class="ds-thread" data-thread-key="{{page.id}}" data-title="{{page.title}}" data-url="{{page.url}}"></div>
	<!-- 多说评论框 end -->


	<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
		<script type="text/javascript">
		var duoshuoQuery = {short_name:"0214"};
		(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
		})();
		</script>
	<!-- 多说公共JS代码 end -->



  












{% endraw %}






firebase 按钮

  <input id="txtEmail" type="email" placeholder="Email">
  <input id="txtPassword" type="password" placeholder="Password">
  <button id="btnSignUp" > Sign Up </button>
  <button id="btnLogin" > login </button>
  <button id="btnLogOut" style="display: none" > Log Out </button>


firebas js 代码
	$(function (){ 
  // Initialize Firebase 
    const config = {
      apiKey: "AIzaSyCRkzJi6Ir5LIFqQ1HLymzY9GM7MxiMEVM",
      authDomain: "cms-jekyll-71cdf.firebaseapp.com",
      databaseURL: "https://cms-jekyll-71cdf.firebaseio.com",
      storageBucket: "cms-jekyll-71cdf.appspot.com",
      messagingSenderId: "727659745071"
    };
    firebase.initializeApp(config);





  const preObject = document.getElementById('Object')
  const  dbRefObject = firebase.database().ref().child('Object');
 // dbRefObject.on('value', snap => console.log( snap.val())); 
 // 这个是把数据显示到 console 中.   下面是用json格式显示到 pre标签上.
dbRefObject.on('value', snap => {  preObject.innerText = JSON.stringify(snap.val(),null,3);   });





const ulList = document.getElementById('List');
const dbRefList = firebase.database().ref().child('MyAssetes');
dbRefList.on("child_added", snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
  });
dbRefList.on("child_removed", snap => {
    const liRemoved = document.getElementById(snap.key);
    liRemoved.remove();
  });
dbRefList.on("child_changed", snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
});






const textEmail = document.getElementById('txtEmail');
const textPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');

btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword (email,pass);
  promise.catch ( e => console.log(e.messgae));
});

btnSignUp.addEventListener('click', e => {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email,pass);
  promise.catch ( e => console.log(e.messgae));
});

btnLogOut.addEventListener('click', e=> {
  firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) { 
    console.log("成功登录"+firebaseUser);
    btnLogOut.classList.remove('hide');
  }else { 
    console.log('not logged in');
    btnLogOut.classList.add('hide');
  }
})


















});















 

