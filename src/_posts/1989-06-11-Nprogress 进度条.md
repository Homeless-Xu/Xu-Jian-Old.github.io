---
layout: post
title:  NProgress 进度条
tags: 主题功能
categories: Blog
---

## Nprogress 简介
NProgress.js是极细的纳米级进度条，用现实的细线条动画让用户看到网页正在发生的事情！

浏览器 切换页面时候的 进度条. 类似 youtube...

NProgress.start() — 显示进度条
NProgress.set(0.4) —设置百分比
NProgress.inc() — 增加一点点
NProgress.done() — 完成进度条


使用方法: [ 官网下载 .js 和 .css; 然后引入 ][1]


### Nprogress语法:
- `NProgress.start();`
- `NProgress.done();`


**使用方法:**
NProgress.start()  — 显示进度条
NProgress.set(0.4) — 设置百分比
NProgress.inc()    — 增加一点点
NProgress.done()   — 完成进度条

*也可以绑定它到 jQuery ajaxStart 和 ajaxStop 事件上*


**实例:**
最简单的 测试方法: 
	$(window).load( function(){  NProgress.start();  });
	$(document).ready( function(){      NProgress.done();  });
	
	$(document).on('page:fetch',   function() { NProgress.start(); });
	$(document).on('page:change',  function() { NProgress.done(); });
	$(document).on('page:restore', function() { NProgress.remove(); });



## 配置插件
通过 minimum 来修改最小百分比。
*NProgress.configure({ minimum: 0.1 });*



*想禁用进度环？设置 showSpinner 为 false*
`  NProgress.configure({ showSpinner: false });`

[1]:	https://github.com/rstacruz/nprogress