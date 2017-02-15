---
layout: post
title:  ready()&Onload()
tags: jQuery1
categories: JS
---


**页面加载完成有两种事件:**  
- *ready: 文档结构 加载完成(不包含图片 等 非文本文件).*
- *onload: 所有文件都加载完成*

<br>  

ready() 函数: 当ready时间发生时 执行里面的代码.

- 标准语法: `$(document).ready(function)`
- 简化语法: `$().ready(function)`
- 最简用法: `$(function)`


<br>


例子:
	$(document).ready(function(){
	    alert("ready");
	});
	
	$().ready(function(){
	    alert("ready");
	});
	
	$(function(){
	    alert("ready");
	});
	












































































































































