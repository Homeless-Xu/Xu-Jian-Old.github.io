---
layout: post
title:  readyState
tags: JSON/AJAX
categories: Web
---

## onreadystatechange 事件

**请求发送后. 需要根据服务器的响应来执行对应任务.**

**readyState 状态改变就会触发onreadystatechange 事件**


存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。

注释：onreadystatechange 事件被触发 5 次（0 - 4），对应着 readyState 的每个变化。



## readyState
存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
- 0: 请求未初始化
- 1: 服务器连接已建立
- 2: 请求已接收
- 3: 请求处理中
- 4: 请求已完成，且响应已就绪

## status
- 200: "OK"
- 404: 未找到页面



**当 readyStatue 等于4 且状态是200 时表示响应已就绪**
**当 readyStatue 等于4 且状态是200 时表示响应已就绪**



	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
	document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	}
	  }




## Callback 函数



**callback 函数是一种以参数形式传递给另一个函数的函数。**































