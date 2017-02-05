---
layout: post
title:  Jekyll-Theme
tags: Jekyll
categories: Blog
--- 

### A beautiful Theme

Author: Willian Justen. [Theme Link][1]  
&nbsp;


~~~
<hr>
~~~
{:.language-ruby}


## 主题使用:

- 下载 / Clone 到本地

- 修改 config.yml
*  主要修改baseurl属性和markdown属性。*

**把根目录改成空**
`baseurl: "" # the subpath of your site, e.g. /blog/`

不然的话 jekyll server 之后 
你得用 [http://127.0.0.1:4000/+你baseurl 后面的路径才能访问][2]


~~~
layout: post
title: "How to Use"
date: 2016-05-08 20:35:48
image: '/assets/img/'
description: 'How to use this template 33'
main-class: 'misc'
color: '#7AAB13'
tags:
- misc
- jekyll
categories:
twitter\_text: 'How to use this template 33'
introduction: 'How to use this template 33'
~~~
{:.language-ruby}




\@: Jekyll 主题
 
主题网站:


[Jekyll Themes][3]  Jekyll Blog Themes 精选


[Start Bootstrap][4] 主题博客的主站
制作精良的 Jekyll 主题。优质主题已在前述清单里推荐，分别为 Clean Blog 及 Business Casual。




最好自己做.


别人的普遍太丑. 探索很累 也花时间...

用别人的主题 . 自己就对jekyll 文档结构不太熟悉.不能自己修改.

html css js 前端知识的不足 也会浪费时间...





*主题包括*
• 博客界面截图
• 创作者个人信息
• 主题描述
• 个人评分
• 可访问的博客站点地址 Live Demo
• 可直接 Fork 和配置的 GitHub 仓库源码地址。



Description：有题图的博客主题。布局简约，页面显示清晰，加载速度快，移动端适配友好。



有动态效果的博客主题。界面优雅，页面模块多样。略微复杂，加载稍慢。


大图作为博客整个背景的主题。有不错的图片展示框。博文输出功能可能有小状况，需自己调配后才能用。


 简约风格，偏重博客标题的展示。加载速度蛮快。






** Jelyll 自定义主题**

主题设计很简单:  
*首页+归档+关于+链接页面.*


修改 config.yml file.


• 站点信息: 例如站点标题、描述、关键字等 SEO 相关，默认 URL 链接和 RSS 链接。
• 菜单: 想要自定义菜单，排序？都可以。
• 作者信息: 包括邮箱，简介，详细介绍等。
• 社交: 因为每一个社交图标，都是 Font-Awesome 字体，所以需要先了解下每个图标的名字。
• 友情链接: 可以定义很多项，最后在 Links 页面出现。
• 谷歌分析: 只要输入您的 UA 就可以。
• 评论: 两种评论系统可以选择，disqus 和 duoshuo。


title 网页标题. 
emai 自己的邮箱
description: 网站描述
baseurl  根目录
markdown: kramdown
theme: minima.








* 响应式设计，多终端可以查看博客哦。*



*添加 Category 和 Tag 功能。*























































































[1]:	http://jekyllthemes.org/themes/cards-jekyll-template/
[2]:	http://127.0.0.1:4000/
[3]:	http://jekyllthemes.org/
[4]:	https://startbootstrap.com/template-categories/all/