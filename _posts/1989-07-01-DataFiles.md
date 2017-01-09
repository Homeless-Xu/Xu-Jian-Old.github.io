---
layout: post
title: DataFiles
tags: Jekyll-DataFiles
categories: MyTheme
---


*Jekyll 虽然无法像动态网站程序一样读取数据库，但它提供了一种读取静态数据的方式:Jekyll Data Files。*


我们可以在 Jekyll Data Files 中使用 YAML, JSON 或 CSV 格式的文件，实现类似动态配置的效果。这些数据会被解析成变量 
`site.data.your_data` 在 Liquid 模板中使用。