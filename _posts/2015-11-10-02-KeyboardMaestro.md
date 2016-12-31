---
layout: post
title:  KeyboardMaestro
tags: 键盘工具
categories: -Appes
---


Ulysses: 快捷键实现快速代码高亮方法:





A Very Powerful 自动化软件.
有着极其丰富的触发条件. trigger
和被触发动作 action..

### 经典功能:
变量 Variable


---

### 输出钥匙串内密码.


- KM: Keyboard Maestro 
- KA: OS X Keychain Access 钥匙串 


1. 先设置好钥匙串.
	> 里面密码的名字: SHLibrary-wifi

2. KM里设置一个变量. LibraryPwd
	> KM: 能把这个变量 对应到钥匙串里面的具体某个密码.

3. 用 Action里的 input by pasting .输出这个变量
	> 也就是输出密码了.

4. 设置一个触发条件: → ;shlib

以后按触发键 就能输出密码了. 这个密码还不经过剪切板...
非常安全...




KM 里面的变量 就有对KA的支持.
这样 可以避免密码暴露在剪切板中.
整个密码传输过程都被封装在函数里...
从而保证密码输入过程的安全..

KA 是原生的密码管理工具.... 可靠性比第三方好.

![][image-1]

---

### 一键 关闭Chrome 浏览器下方 下载状态栏

此Marco的作用：

1. 按下快捷键时，会记下鼠标当前位置，
2. 点击当前窗口右下角 自定义一定的偏移量.
3. 将鼠标还原到之前位置。
4. 释放 temp这个变量


具体设置 看图片
![][image-2]





[image-1]:	http://oduizitoj.bkt.clouddn.com/2016-09-24-Screen%20Shot%202016-09-24%20at%2017.39.15.png
[image-2]:	http://oduizitoj.bkt.clouddn.com/2016-09-24-Screen%20Shot%202016-09-24%20at%2017.29.29.png