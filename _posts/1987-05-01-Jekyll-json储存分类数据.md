---
layout: post
title: Jekyll-json储存分类数据
tags: JSON/AJAX
categories: Web
---

## `_data` 文件夹
可以储存一些常用数据.免得每篇文章都重复一次.
比如把 每篇文章的各种信息 都储存到一个json文件中.
这样只需要生成一次. 而不是每篇文章里面都生成一遍.



## 目的:
遍历所有的文章.
每篇文章的标题,URL,所属标签,所属大类,时间.都储存到json 变量中.  

给每个标签/大类一个自己名字的id → 用来筛选 被点击标签/大类下的所有文章.




## 1. 遍历出全部文章的 所有数据


\~\~
{% raw %}
[
  {% for post in site.posts %}
	{
	  "title"    : "{{ post.title | escape }}",
	  "category" : "{{ post.category }}",
	  "tags"     : "{{ post.tags | join: ', ' }}",
	  "url"      : "{{ site.baseurl }}{{ post.url }}",
	  "date"     : "{{ post.date }}"
	} {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
{% endraw %}
~~~
{: .language-ruby}





## 2. 把获得的json 给一个变量??


用liquid把数据转为json
然后用 capture 捕获.储存到一个变量中.
下面就可以用这个变量了....






或者是 储存到本地的 data 数据中? 


要么用 js  要么哟liquid来实现. 






直接写一个 json 文件. 


~~~
---
layout: null
---
[
  {% for post in site.posts %}
	{
	  "title"    : "{{ post.title | escape }}",
	  "category" : "{{ post.category }}",
	  "tags"     : "{{ post.tags | join: ', ' }}",
	  "url"      : "{{ site.baseurl }}{{ post.url }}",
	  "date"     : "{{ post.date }}",
	  "content"  : "{{ post.content | strip_html | strip_newlines }}"
	} {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
\~\~\~
{: .language-ruby}




然后这个文件里面  就有了 所有的数据..








## JSON 转换
将 Hash / 数组 格式的字符串转换为 JSON

{% raw %}
{{ site.data.projects | jsonify }
{% endraw %}





## 生成文章列表数据的json模板
 
首先，生成文章列表数据的json模板
（记得保存的是json格式的文件）：

	{% raw %}
	---
	layout: nil
	---
	
	[
	{% for post in site.posts %}
	  {"title":"{{post.title}}", 
	  "url":"{{site.url}}{{post.url}}", 
	  "date":"{{ post.date | date:'%Y-%m-%d' }}", 
	  "tags":[{% for tag in post.tags %}"{{tag}}"{% if forloop.last == false %} ,{% endif %}{% endfor %}]}
	  {% if forloop.last == false %},{% endif %}{% endfor %}
	]
	{% endraw %}



