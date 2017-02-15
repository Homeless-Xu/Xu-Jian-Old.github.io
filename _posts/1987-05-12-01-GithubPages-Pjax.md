---
layout: post
title:  GithubPages-Pjax
tags: JSON/AJAX
categories: Web
---


怎么可能不执行呢... 
jquery-pjax demo 好像不是用gitpage建立的...





	$(function(){
	$('a[data-pjax]').pjax()
	$("#time").text(new Date())
	});





## github 不支持 jquery-pjax.
静态网站 是不支持 jquery-pjax 的!!!!!
静态网站 是不支持 jquery-pjax 的!!!!!
静态网站 是不支持 jquery-pjax 的!!!!!

你需要服务端的配合才能使用  jquery-pjax!!!!



## 变通办法(不需要服务器后端的任何处理...)....

[另一种  pjax...][1]


### 优点

通过ajax 来抓取  github上的内容.

然后用 pushState 更新url....





[1]:	https://github.com/MoOx/pjax