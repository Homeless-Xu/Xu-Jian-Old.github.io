---
layout: post
title:  jQuery-修改CSS属性✔︎
tags: CSS
categories: JS
---

语法: `css('name', 'value')`



## 修改多个 CSS 属性
	<!-- HTML结构 -->
	<ul id="test-css">
	    <li class="lang dy" ><span>JavaScript </span></li>
	    <li class="lang"    ><span>Java       </span></li>
	    <li class="lang dy" ><span>Python     </span></li>
	    <li class="lang"    ><span>Swift      </span></li>
	    <li class="lang dy" ><span>Scheme     </span></li>
	</ul>
	
	<!-- JS -->
	
	$('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');
