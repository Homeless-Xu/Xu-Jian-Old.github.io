---
layout: post
title: Github&Coding双线部署✔︎
tags: Git
categories: Tooles
---


## 获取 github项目 url
	url = https://github.com/Xu-Jian/Xu-Jian.github.io.git

## 获取 coding项目 url
	url = https://git.coding.net/xx0219/xx0219.coding.me.git

## 修改 Coding项目 url
https:// 后面加上 用户名@ 
	url = https://xx0219@git.coding.net/xx0219/xx0219.coding.me.git


## 编辑 .git/config 文件
其实 .git是个隐藏文件夹. 我一直以为是个文件..... -.-  

用命令添加也好. 还是直接打开本地目录下的 .git/config 也好..  
最终 git/config 变成下面格式就对了.  
其他都不用管,其实就是多了 最下面的4行!!!!  
第一行 all 是名字而已(推送的时候 有好几个选项的.选择这个名字就可以).  
然后就 可以推送了!!!!



	[core]
	bare = false
	filemode = true
	precomposeunicode = true
	logallrefupdates = true
	[core]
	repositoryformatversion = 0
	[remote "Github"]
	url = https://github.com/Xu-Jian/Xu-Jian.github.io.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	
	[remote "Coding"]
	url = https://xx0219@git.coding.net/xx0219/xx0219.coding.me.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	
	[branch "master"]
	remote = origin
	merge = refs/heads/master
	
	[remote "Github&Coding"]
	url = https://github.com/Xu-Jian/Xu-Jian.github.io.git
	fetch = +refs/heads/*:refs/remotes/all/*
	url = https://xx0219@git.coding.net/xx0219/xx0219.coding.me.git


## Push

随便改个文件 → commit → push 
push 肯定有选项的. 
第一次的话.请把 force push 打勾.. 
不然会报错(虽然好像报错也能两边都推送....)

















## 软件: Tower 2.6.0 (MacOS)

## 实现功能:

本地一个git文件夹. 
coding上一个git文件夹. 
github上一个git文件夹.

实现 本地修改. 同时推送到 github 和 coding.



## 步骤简介.

1. 先同步 Coding 和 本地.
2. 再 本地 git 配置文件里加上github的 项目链接就可以了.

现在是 coding上有内容.
GitHub上 没有内容.(就算有也清空它.反正按coding为准)
本地没有内容.

先把coding上的 用 tower clone到本地.


再本地 修改 git config 文件. 
把 git的 链接添加进去.


在随便修改个文件.. 然后推送. 就同步了....





千万不要 手动去 网站上改文件. 要改就本地改.然后推送.
不然 导致同步出错 你有不熟悉git 很麻烦的!!!!!



## config 内容

	[core]
	bare = false
	filemode = true
	precomposeunicode = true
	logallrefupdates = true
	[core]
	repositoryformatversion = 0
	[remote "Github"]
	url = https://github.com/Xu-Jian/Xu-Jian.github.io.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	
	[remote "Coding"]
	url = https://xx0219@git.coding.net/xx0219/xx0219.coding.me.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	
	[branch "master"]
	remote = origin
	merge = refs/heads/master
	
	[remote "Github&Coding"]
	url = https://github.com/Xu-Jian/Xu-Jian.github.io.git
	fetch = +refs/heads/*:refs/remotes/all/*
	url = https://xx0219@git.coding.net/xx0219/xx0219.coding.me.git


你的看着改. 应该是改下url 就可以的.





 1.  tower 先添加 coding 项目.
 选择 respomse
左下角添加.
clone git res....


3. [https://xx0219@git.coding.net/xx0219/xx0219.coding.me.git][1]


然后输入帐号密码.就可以下载了.



然后下载好的文件夹 随便加个文件进去 . 推送 
就提交成功.额...







然后 添加github 的项目



[1]:	https://xx0219@git.coding.net/xx0219/xx0219.coding.me.git