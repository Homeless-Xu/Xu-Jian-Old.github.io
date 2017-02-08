---
layout: post
title: RubyGems→Gem  
tags: 工具
categories: Web
---

国内，由于防火长城对Amazon S3的封锁，可能需要更换软件源才能正常使用Gem进行安装。



## 包管理器 简介
各种包管理器就是帮你安装管理软件的.

- Win: qq软件管家, 360软件管家...
- Mac: appstore, homeBrew ...
- Linux: apt-get, yum, npm, gem


## RubyGems 简介

Ruby 的一个包管理器.
jekyll 是ruby写的,安装发布jekyll主题可以用这个管理器.(非必要...)



## Gem 命令:


### 查看 gem版本
	gem -v

### 列出可用的 gem
	gem list --remote

### 搜索 gem
	gem search STRING --remote

### 安装 gem
	gem install mygem

### 卸载 gem
	gem uninstall mygem
	
### 下载但不安装 gem
	gem fetch mygem

### 列出已安装 gem
	gem list --local










