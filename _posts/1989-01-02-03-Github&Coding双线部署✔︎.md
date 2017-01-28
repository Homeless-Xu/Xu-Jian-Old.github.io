---
layout: post
title: Github&Coding双线部署✔︎
tags: 博客部署
categories: Jekyll
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

