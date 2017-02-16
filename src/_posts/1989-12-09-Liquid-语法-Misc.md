---
layout: post
title: Liquid-语法-Misc
tags: Liquid
categories: Blog
---



## case 

Block tag its the standard case...when block




## cycle 
- Cycle is usually used within a loop to alternate between values, like colors or DOM classes.


## for 
- for循环block


## if 
如果  条件语句


## unless 
除非 和if 相反
- Mirror of if statement




## 对象:
告诉 liquid 将在页面的什么位置显示内容
*对象 和 变量 都包含在 双重花括号中.*




传统意义上的*模板变量*. 用双大括号包围.
**Jekyll 将文件中解析出来的各种内容. 通过模板变量注入给展示层.**

{% raw %}
{{ page.title }}      // 这个就表示 页面的标题：
{% endraw %}


### Filters
Filters 写法和效果都可以类比于 Shell 中的 Pipe 模式。
输出的变量，通过管道符传递进行链式处理。
Jekyll 官方扩展了一批 Liquid Filters 配合 Liquid Objects，便于实现博客系统。如：博客的排序、日期的格式化等。

	{% raw %}
	{{ "/my/fancy/url" | append: ".html" }}
	{% endraw %}


## 过滤器
过滤器可以改变对象的输出.
被用在输出中 用| 分割. 类似linux 的管道..

	{% raw %}
	{{ "/my/fancy/url" | append: ".html" }}
	{% endraw %}

## 引入文件: 

	{% raw %}
	{% include filename %}
	{% endraw %}


*所有模板都可以使用全局变量 site 和 page.*

- site 变量: 包含该网站所有可以接触得到的内容和元数据(meta-data)
- page 变量: 包含的是当前渲染的page或post的所有可以接触得到的数据


*对于网站的布局，一般会写成模板的形式*
这样对于写实质性的内容时，比如文章，只需要专心写文章的内容，然后加个标签指定用哪个模板即可。

对于内容，指定模板了模板后,我们可以称 *内容是模板的儿子*



	{% raw %}
	在模板中引入 儿子内容:  {{ content }}
	
	 在儿子中,指定父节点模板:
	---
	layout: post
	---
	{% endraw %}












