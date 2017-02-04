---
layout: post
title: Jekyll+Github-Pages
tags: JSON
categories: Jekyll
---


**本地写markdown，然后push到github，就成了博客**

1. 把自己的github page Clone 下到本地:  
	Xu-Jian.github.io

2. cd 到本地的 Xu-Jian.github.io 目录.  
	`cd /Users/v/Desktop/Xu-Jian.github.io/`

3. 给 github-pages 建立jekyll必要的文件和目录.  
	`jekyll new . --force`  
	// 这个是不覆盖原来内容的命令.  
	如果是空的文件夹 可以使用:  
	`jekyll new .`  
	*. 必须要:当前目录的意思*

4. 本地预览: `jekyll server`  
	Jekyll会在后台开启了一个小型的web服务器  
	到浏览器 输入http://localhost:4000 即可访问网站。


5. 用自己喜欢的工具 上传到 github

 6. 浏览器 Xu-Jian.github.io  就能看到jekyll默认界面了.


### 学github pages .
最好的办法 就是 clone 别人的代码.看懂别人的代码. 修改成自己喜欢的.



jekyll-bootstrap中的jekyll不是一个博客软件，只是一个（博客）解析引擎，会把已经编写好的页面模版解析出来，呈现一个个可访问的页面，详细可看jekyll官方文档。而bootstrap可以理解为：别人已经写好，具有blog雏形的简易blog开源系统框架，拿来即可使用。


搭建个人blog实际上就是上面所说的，把托管在Github上的jekyll-bootstrap框架clone下来，然后替换上面搭建个人主页的repository根目录下所有的文件。


Jekyll Bootstrap 简化了使用Jekyll搭建Blog的过程，通过官方教程, 填入你自己的GitHub USERNAME ，就可以生成个性化的安装命令，你可以很快搭建起自己的Blog。

