---
layout: post
title: jekyll-Misc
tags: Misc
categories: Blog
---


jekyll & livereload 
自动刷新 网页 
就像 sublime的 liveroad插件一样.

**guard 工具**
同时支持 jekyll 和 livereload两个功能.


1.  jekyll的 根目录 gemfile  里加入  这三个套件.

gem 'guard'
gem 'guard-jekyll-plus'
gem 'guard-livereload'

2. 执行 bundle install
3. 在 my-site 根目录底下 新增一个 Guardfile

guard 'jekyll-plus', :serve =\> true do
  watch /.\*/
  ignore /^\_site/
end

guard 'livereload' do
  watch /.\*/
end

只会 不在执行 jekyll 换成:
guard / bundle exec guard 

可以看到文档修改 自动刷新网页.





**增加  font-awesome 图标.**


`_includes/head.html` 裡面增加 font-awesome 的 CSS
`<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">`

之後就有很多免費的 icon fonts 可以使用了




