★★★★★  大类名和标签名 必须不能重复....比如说有个标签叫aa 你就不能创建一个叫aa 的大类..........
★★★★★  文件名也不能重复.. 比如不同标签下 使用了一个文件名....



✔︎

排序方法: ✔︎
	 大类: 自定义排序. yml 文件里修改.
	 标签: 
	 	- 默认按照文件名上的时间顺序排列... 时间越早越上面.
		- 也提供按照标签名排序:
	 文章: 默认按照文件名上的时间倒序排列... 时间越新越上面.  
	

标签 也得提供. 按照标签名字排序:
标签 还得提供. 自定义排序....
	     

✔︎






---










功能简介:



布局:   分类/标记/文件名/文件内容


功能: 
1. 点击分类:  筛选出相关的文件名 + 筛选出相关的标记.   点击标记 再次筛选文件名.
2. 点击标记: 筛选出相关的文件名.
3. 点击文件名 -> 显示主要内容.

功能1: 实现方法:
  1.1 首先 列出 所有的 分类名称.

	1.2 点击分类名称 筛选出相关的文件名.....  还要把这个文件名 显示到相应的地方..
	
	
	
	
	
	
	
	
	
	
	只要点击文件名 .是自动会在 内容栏显示的 .这个不需要你操心.
	最多弄个 pjax
	
	
	
	
	
	
	全局变量 是不能在.js 文件中用的 ...
	估计只能在 模板文件中使用.... 
	
	
	
	
	siblings 
	查找每个 p 元素的 所有类名为 selected 的所有同胞元素....
 $("p").siblings(".selected")


	
	siblings() 获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的。

	
	
	
	
	
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




