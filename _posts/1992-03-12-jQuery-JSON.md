---
layout: post
title:  jQuery-JSON
tags: jQuery1
categories: JS
---

API——应用程序接口(Application Programming Interface)是计算机之间相互交流沟通的工具。

当你需要根据服务器返回的数据来动态改变页面的时候，应用程序接口(API)就派上用场了。




许多网站的应用程序接口(API)都是通过一种称为JSON格式的数据来传输的，JSON 是 JavaScript Object Notation的简写。




单个对象类似于：  
{name:'盖伦',advantage:'单挑无敌'}
多个对象类似于：  
[{name:'盖伦',advantage:'单挑无敌'},{name:'诺克',advantage:'上单霸主'}]()


每个对象属性和属性值的组合就是我们经常听到的"键值对(key-value pairs)"。





让我们从之前的猫图API拿取数据吧。

	$.getJSON("/json/cats.json", function(json) {
	  $(".message").html(JSON.stringify(json));
	});












































































































































