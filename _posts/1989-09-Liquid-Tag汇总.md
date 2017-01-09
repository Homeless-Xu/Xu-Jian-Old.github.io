---
layout: post
title: Liquid-Tag汇总
tags: Liquid-Tag汇总
categories: MyTheme
---


## 标签 Tag: 执行语句
~~~
join       用特定的字符将数组连接成字符串输出

assign    为变量赋值 类似 var . 

capture   用捕获到的文本为变量赋值
comment   注释语句
cycle     通常用于在某些特定值间循环选择，如颜色、DOM类
include   将另一个模板包进来，一般在 _includes 目录中
raw       禁用范围内的 Tag 命令，避免语法冲突

if        if/else 语句
unless    if 语句的否定语句

for       循环语句
case      条件分支语句 case…when…

~~~
{: .language-ruby}



### Tags


Tags 主要用于 提供逻辑功能和控制流.
liquid 自带的tags 大多是 控制流和变量相关的.
**Tags 实际上可以用作增加新的标签，作为逻辑功能函数的感觉。**

Jekyll 就有一种扩展是通过扩展 Liquid Tags 来实现。

~~
{% raw %}
{% if user %}
  Hello {{ user.name }}!
{% endif %}
{% endraw %}
~~~
{: .language-ruby}





## 标签:
为模板提供 逻辑 和流程控制.
*标签中的标记不会产生任何可见文字*
也就是说你可以:
- 为变量赋值
- 创建条件语句
- 创建循环语句
但是这些liquid 逻辑在生成的页面中是不可见的..
只有用双重花括号里面的 内容才会输出.


## 标签分类
- 流程控制
- 迭代器
- 变量赋值

