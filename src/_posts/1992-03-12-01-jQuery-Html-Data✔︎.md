---
layout: post
title:  jQuery-Html-Data✔︎
tags: HTML-Data
categories: JS
---

**作用: 给html元素设置额外属性. js/css 里可以获取该额外属性的值.**

## 语法:

key:     储存数据的名称.  String类型 
value:   添加新的数据值.  Object类型 
element: 要存储数据的DOM对象


`$.data( key )`                  返回某个data名的值
`$.data( key,value )`            给某个data名 设置新的值
`$.data( element, key, value )`  在指定元素上存取额外的数据. 




	<script>
	  $("div").data("test", { first: 16, last: "pizza!" });
	  // 给元素添加额外属性.
	
	  $("span:first").text($("div").data("test").first);
	  $("span:last").text($("div").data("test").last);
	  // 获取额外属性的值
	</script>




## HTML 设置
`<article data-parent="cars"></article>`

## 返回HTML里附加数据的值:
`$(selector).data(name)`

## 储存数据到HTML附加属性里
`jQuery.data( element, key, value )`
 存储任意数据到指定的元素,返回设置的值。



## jQuery.data( element, key )
返回用jQuery.data(element, name, value)储存在元素上的相应名字的数据，或者元素上完整的数据存储

## 实例1:
### 给元素附加数据. 然后取回数据.
	$("#btn1").click(function(){
	  $("div").data("greeting", "Hello World");
	});
	
	$("#btn2").click(function(){
	  alert($("div").data("greeting"));
	});



## 实例2:
### 给一个元素设置多个附加值. 并获取数据\*\* 
	jQuery.data(document.body, 'foo', 52);
	jQuery.data(document.body, 'bar', 'test');
	
	alert(jQuery.data( document.body, 'foo' ));
	alert(jQuery.data( document.body ));


## 实例3
	$('.tagsLink').on('click', '.tagLink', function(){
	    var tagName = $(this).data('filter');
	    console.log(tagName);
	    // 这里点击哪个标签名 就会输出哪个标签名...如AJAX
	    console.log( $('.tagLink') );
	
	});


