---
layout: post
title: Webpack-js
tags: React
categories: Tooles
---




现在浏览器用的都是es5.
但是es6 更好用. 更好写.
babel 是转码器..把代码 从es6 转成 es5.

	// 转码前
	input.map(item => item + 1);
	
	// 转码后
	input.map(function (item) {
	  return item + 1;
	});


比如 es6 的箭头函数. 现在没得到广泛支持. babel把它转为 普通函数 就能在现在的js环境执行了.




## 配置文件 .babelrc
配置文件放在项目根目录.
使用babel的第一步 就是配置这个文件.

配置文件: 设置转码规则 和 插件.

	{
	  "presets": [],
	  "plugins": []
	}


### preset: 转码规则
先选一个进行安装. 再把安装的 写到配置文件中
1. 先安装
	ES2015转码规则
	$ npm install --save-dev babel-preset-es2015
	  
	react转码规则
	$ npm install --save-dev babel-preset-react
	  
	ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
	$ npm install --save-dev babel-preset-stage-0
	$ npm install --save-dev babel-preset-stage-1
	$ npm install --save-dev babel-preset-stage-2
	$ npm install --save-dev babel-preset-stage-3


2. 添加到配置文件中
		 {
		"presets": \[
		  "es2015",
		  "react",
		  "stage-2"
		],
		"plugins": \[]
		  }








