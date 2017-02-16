---
layout: post
title: Webpack-别名alias
tags: React
categories: Tooles
---



别名 resolve.alias 
把用户的一个请求重定向到另一个路径.

通过修改: webpack.config.js

	  resolve: {
	alias: {
	moment: "moment/min/moment-with-locales.min.js"
	}
	  }

这样待打包的脚本中的 require('moment'); 其实就等价于 require('moment/min/moment-with-locales.min.js'); 

可以为常用模块配置改属性，可以节省编译的搜索时间。

通过别名 可以减少一般的时间.




