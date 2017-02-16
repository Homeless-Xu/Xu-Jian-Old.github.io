---
layout: post
title: Jekyll在线编辑(todo)
tags: 主题功能
categories: Blog
---

[https://github.com/pizn/eevee][1]

纯前端实现,可以说没有 Server 层.通过 GitHub API 与你在 GitHub 上的代码库取得联系,获取 Project 的文章,完成增删查改的功能.依赖的数据前提:

• GitHub 账号（只在浏览器中记录）
• 基于 Jekyll 创建好的 Pages 项目, 文章存放在 `_posts` 目录下

该项目基于 React + Ant Design + GitHub API 完成。如果你感兴趣，欢迎一起开发，给我提 MR 哦。本地调试方法：
• npm install
• npm run hot-dev-server
• npm run dev

大概就是 人家提供一个网站.
这个网站 需要你git项目的..读写权限!!!!!!!
然后 就能列出 所有的... 项目 
选择一个...
比如: githubpages

然后会列出文件....
选择....
 编辑???  这和直接在github上编辑... 有啥区别....
 或者自己可以用github的 api 来实现....相同的功能...




[1]:	https://github.com/pizn/eevee