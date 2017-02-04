---
layout: post
title:  jQuery增删Class属性
tags: 增删Class属性
categories: JS
meta: 修改Class属性
---

## 增加一个class：
`$(".default").addClass("hover_s");`

## 移除一个class：
`$(".default").removeClass("default ");`
        
## 修改一个class：
- 方法一: 先删除再增加 / 先增加后删除
- 方法二: 直接设置成你想要的class
	`$(". default ").attr("class", "hover_s")`