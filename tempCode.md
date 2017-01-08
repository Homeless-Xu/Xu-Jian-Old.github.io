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







