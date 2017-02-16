---
layout: post
title: Webpack-CSS✔︎
tags: React
categories: Tooles
---



## CSS ✔︎

### 安装css-loader 和 style-loader
	npm install css-loader style-loader --save-dev
npm 不行就 用 cnpm
这时就可以看到 package.json 多了 两个 
	  "devDependencies": {
	"css-loader": "^0.26.1",
	"style-loader": "^0.13.1",
	"webpack": "^2.2.1"
	  },
安装方式有很多种.
你也可以package.json 添加对应的依赖名.然后运行 npm install 一样的效果.



### entry.js 里加载CSS 文件
添加一个css 文件.  main.css
	body {
	background: red;
	}

然后修改 entry.js 原文不变. 添加:
	require("!style-loader!css-loader!./main.css");

继续编译
	webpack entry.js bundle.js
刷新页面.背景颜色就变了.

### 然后去header 删除引用的main.css
因为 webpack 以及把你内联到html代码中了.
所以css 就可以忽略不引用.









## SASS ✔︎

流程简介:
先用 sass-loader 把main.sass 转成 main.css
再用 css-loader 加载 main.css
最后 style-loader 把main.css 提取出来 整合到 html中.


1. 安装相应loader
	cnpm install sass-loader less-loader node-sass --save-dev
	// sass-loader 需要 搭配 node-sass一起安装

2. 修改webpack 配置(下面含有js的配置.)
		module: {
		  loaders: \[
		  // JS-ES6
		{
		  test:   /\.js/,
		  loader: 'babel',
		  include: \_\_dirname + '/entry.js',
		  include: \_\_dirname + '/js',
		},
		  
		// LESS
		{
		  test: /\.less$/,
		  loader: 'style!css!less'
		},
		  
		// SASS
		{
		  test: /\.scss$/,
		  loader: 'style!css!sass'
		} 
		  ],


3. require 中引入:
	require("!style-loader!css-loader!sass-loader!./main.sass");


4. main.sass 中的 @import
这里 jekyll 必须注意. 
jekyll 默认sass 是放在 `_sass` 文件夹下的.
如果你要用 webpack 来处理 import里的sass文件.
就必须 不能用带有 下划线的文件夹名. jekyll 会特殊处理的.
只要随便改个名字就可以.




































