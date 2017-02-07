---
layout: post
title: Github技巧
tags: -Git
categories: Tool
---


## 精准分享单行关键代码


比如你有一个文件里的某一行代码写得非常酷炫或者关键，想分享一下。
可以在url后面加上
`#L`行号
比如，点击下面这个url：
	https://github.com/AlloyTeam/AlloyTouch/blob/master/alloy_touch.js#L240
你便会跳到alloytouch.js的第240行. 并高亮那行.


## 精准分享多行关键代码

	https://github.com/AlloyTeam/AlloyTouch/blob/master/alloy_touch.js#L39-L45

跳转+高亮 39-45行!!!






## HTML 嵌入 Github

也就是显示 项目有多少星星

	 <iframe src="//ghbtns.com/github-btn.html?user=alloyteam&repo=alloytouch&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>

user和repo改成你想要展示的便可以


改变按钮大小的话... ...





## 设置 项目语言
如上图所示，github会根据相关文件代码的数量来自动识别你这个项目是HTML项目还是Javascript项目。
这就带来了一个问题，比如AlloyTouch最开始被识别成HTML项目。
因为HTML例子比JS文件多。怎么办呢？gitattributes来帮助你搞定。在项目的根目录下添加如下.gitattributes文件便可，


文件内容
	*.html linguist-language=JavaScript
主要意思是把所有html文件后缀的代码识别成js文件。




