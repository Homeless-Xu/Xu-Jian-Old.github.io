---
layout: post
title:  Liquid-语法-collections
tags: Liquid
categories: Blog
---

实验性功能。稳定前 API 可能会改变。


~~~
{% raw %}
申明 Collections
collections:
- my_collection # 名称自定

为 collections 设定属性：
collections:
  my_collection:
    foo: bar

设定默认属性：
defaults:
  - scope:
      path: ""
      type: my_collection
    values:
      layout: page
{% endraw %}
~~~
{: .language-ruby}






**collection 表示所在集合的变量名**








