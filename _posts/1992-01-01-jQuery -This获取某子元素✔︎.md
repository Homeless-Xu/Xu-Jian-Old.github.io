---
layout: post
title:  jQuery -This获取某子元素✔︎
tags: This
categories: JS
---


	<li>
	    <span></span>
	    <sup></sup>
	</li>




`var xx = $( this ).children('span').text()`
可以提取出 span 而不要 sup的内容.





this是Javascript语言的一个关键字。
它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。比如，

*那就是this指的是，调用函数的那个对象。*



