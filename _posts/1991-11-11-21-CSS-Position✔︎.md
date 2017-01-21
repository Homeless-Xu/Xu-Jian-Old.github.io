---
layout: post
title:  🔖CSS-Position✔︎
tags: Layout
categories: CSS
---


## 总结
•	Static 普通流布局（Normal flow） ，默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
•	Relative 支持偏移量属性的普通流布局 ，生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
•	Absolute 在容器元素内绝对定位的布局 ，生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
•	Fixed 在显示范围内的绝对定位布局，生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。























## 文档流概念:
html 布局机制就是 文档流模型:
block 块元素 独占一行.
inline 内联元素: 不独占一行




布局必然会用到... position属性.

Position 有一堆值

static
relative
fixed
absolute



## static 不定位 (默认值)
~~~
.static {
  position: static;
}
~~~
{: .language-ruby}

`position: static`的元素 不会被 positioned
`position: 其他值`的元素 才会被 positioned 






## relative 相对定位
单单只有relative属性. 表现和static是一样的.
*除非你加上一些额外的属性:top,right,botton,left.才会偏离位置*

**这个偏移是 相对自己本身的**

*其他元素的位置.不会受到这个元素的影响.*



## fixed 固定定位
相对浏览器定位. 就是页面滚动. 它也不动.
top,right,bottom,left 都可用.

~~~
.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;
  background-color: white;
}
~~~
{: .language-ruby}
这个会在浏览器页面 右下角.显示.
元素的 右边框 靠浏览器最右边.
元素的 底边框 靠浏览器最下边.



## absolute
最困难的情况才用到.. 一般上面的几种方法都能解决了.

与fixed 类似. 但是它不是相对与浏览器.
而是相对于最近的 positioned 元素.
**也就是 相对于最近的. 不是position:static的元素**

~~~
.relative {
  position: relative;
  width: 600px;
  height: 400px;
}
.absolute {
  position: absolute;
  top: 120px;
  right: 0;
  width: 300px;
  height: 200px;
}
~~~
{: .language-ruby}
这个代码 会有形成两个长方形.
第一个大的长方形: 600 x 400
第二个小的长方形: 300 x 200

- 如果大的长方形 是position: static;
那么它的绝对定位子元素会跳过它.直接相对于body进行定位.

- 如果大的长方形 是position: 其他值.
那么就会相对于 大的长方形来定位:

也就是: 小的长方形 右边框靠大的长方形的右边框.
小的长方形的上边框.距离大的长方形的上边框120

**有点难理解.但是 创造优秀布局必须会用**


















