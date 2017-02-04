---
layout: post
title:  jQuery-增/删/有无Class属性✔︎
tags: Class
categories: JS
---



## 增加属性
	$('#test').addClass('a')

	
	function addClass(elem, className) {
	  if(elem.classList) {
	    elem.classList.add(className);
	  } else {
	    elem.className += ' ' + className;
	  }
	}
	addClass(document.getElementById('test'), 'a');





## 删除属性
	$('#test').removeClass('a');
	

	function removeClass(elem, className) {
	  if(elem.classList) {
	    elem.classList.remove(className);
	  } else {
	    elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	  }
	}
	

	removeClass(document.getElementById('test'), 'a');



## 有无属性
	$('#test').hasClass('a')
	

	function hasClass(elem, className) {
	  if(elem.classList) {
	    return elem.classList.contains(className);
	  } else {
	    return new RegExp('(^| )' + className + '( |$)', 'gi').test(elem.className);
	  }
	}
	

	hasClass(document.getElementById('test'), 'a');

