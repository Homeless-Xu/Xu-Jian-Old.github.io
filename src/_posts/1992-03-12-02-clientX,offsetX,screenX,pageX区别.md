---
layout: post
title: clientX,offsetX,screenX,pageX区别
tags: JavaScript
categories: JS
---

![][image-1]

## javascript event对象的clientX,offsetX,screenX,pageX区别

*event.clientX、event.clientY*
鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。IE事件和标准事件都定义了这2个属性

*event.pageX、event.pageY*
类似于event.clientX、event.clientY，但它们使用的是文档坐标而非窗口坐标。这2个属性不是标准属性，但得到了广泛支持。IE事件中没有这2个属性。

*event.offsetX、event.offsetY*
鼠标相对于事件源元素（srcElement）的X,Y坐标，只有IE事件有这2个属性，标准事件没有对应的属性。
*event.screenX、event.screenY*
鼠标相对于用户显示器屏幕左上角的X,Y坐标。标准事件和IE事件都定义了这2个属性





## clientX 事件
返回当前事件被触发时 指针相对于浏览器/窗口的 水平左边.

event.clientX

	<script type="text/javascript">
	function show_coords(event)
	  {
	  x=event.clientX
	  y=event.clientY
	  alert("X coords: " + x + ", Y coords: " + y)
	  }
	</script>



[image-1]:	http://oduizitoj.bkt.clouddn.com/2016-12-06-081508.jpg