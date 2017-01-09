---
layout: post
title: Media Queries
tags: CSS
categories: MWeb
---

**Media Queries能在不同的条件下使用不同的样式，使页面在不同在终端设备下达到不同的渲染效果**


**语法:   `@media 媒体类型 and （媒体特性）{你的样式}`**





## 最大宽度max-width

“max-width”是媒体特性中最常用的一个特性，其意思是指媒体类型小于或等于指定的宽度时，样式生效。

~~~
@media screen and (max-width:480px){
 .ads {
   display:none;
  }
}
~~~
{: .language-ruby}
上面表示的是：当屏幕小于或等于480px时,页面中的广告区块（.ads）都将被隐藏。






## 最小宽度min-width
“min-width”与“max-width”相反，指的是媒体类型大于或等于指定宽度时，样式生效。
~~~
@media screen and (min-width:900px){
.wrapper{width: 980px;}
}
~~~
{: .language-ruby}

上面表示的是：当屏幕大于或等于900px时，容器“.wrapper”的宽度为980px。




## 多个媒体特性使用
当屏幕在600px-900px之间时，body的背景色渲染为“#f5f5f5”，如下所示。


~~~
@media screen and (min-width:600px) and (max-width:900px){
  body {background-color:#f5f5f5;}
}
~~~
{: .language-ruby}




## 设备屏幕的输出宽度Device Width

~~~
<link rel="stylesheet" media="screen and (max-device-width:480px)" href="iphone.css" />
~~~
{: .language-ruby}

上面的代码指的是“iphone.css”样式适用于最大设备宽度为480px，比如说iPhone上的显示，这里的“max-device-width”所指的是设备的实际分辨率，也就是指可视面积分辨率。



## not关键词

`	@media not print and (max-width: 1200px){样式代码}`
上面代码表示的是：样式代码将被使用在除打印设备和设备宽度小于1200px下所有设备中。




## only关键词
`	<link rel="stylesheet" media="only screen and (max-device-width:240px)" href="android240.css" />`
  




  






















断点: 区间的具体分界点

根据场景.设备选择常见的断点.
如320px、360px、414px、640px、736px等


screen 是媒体类型里的一种，CSS2.1定义了10种媒体类型

and 被称为关键字，其他关键字还包括 not(排除某种设备)，only(限定某种设备)

(min-width: 400px) 就是媒体特性，其被放置在一对圆括号中。








~~~
<link rel="stylesheet" type="text/css" href="styleA.css" media="screen and (min-width: 400px)">
~~~
{: .language-ruby}
当屏幕 最小宽度是 400. 也就是要大于400 的时候 
用这个css


~~~
<link rel="stylesheet" type="text/css" href="styleB.css"  media="screen and (min-width: 600px) and (max-width: 800px)">
~~~
{: .language-ruby}
当屏幕 在 600-8-- 之间用这个css












~~~
设备	     屏幕实际显示宽高	         渲染宽度
iPhone 5s	   640 * 1136	            320 * 568
某手机	       1080 * 1920	            360 * 640
iPhone 6 plus  1080 1920 ( 1242 2208)	414 * 736
~~~
{: .language-ruby}







pc 上显示固定布局. 手机才显示移动端布局.

~~~
/* 无论pc和手机都会显示响应式，不满足要求 （736px为iPhone6 plus横屏渲染宽度，但在pc上浏览器缩小到736px时也有效）*/
@media screen and (max-width: 736px) { }
~~~
{: .language-ruby}
移动设备  最大宽度是 736时候 移动端的响应布局才有效.

当移动端 宽度大于736 就用pc布局...






~~~
/*pc上也会显示给手机做的响应式，不满足要求 （添加设备宽）*/
@media screen and (max-width: 736px) and (max-device-width: 1920px) { }
~~~
{: .language-ruby}



~~~
 /* pc chrome浏览器拖动宽高为400*800时(max-width: 414px) and (orientation:portrait)有效，不符合要求；
再拖动宽高为600*500时，screen and (max-width: 736px) and (orientation:landscape)有效，不符合要求。 */
@media screen and (max-width: 414px) and (orientation:portrait), screen and (max-width: 736px) and (orientation:landscape) { }

/* 加上更加严格的横竖屏状态  portrait竖屏 —— landscape横屏 */
@media screen and (max-width: 414px) and (max-device-width: 1080px) and (orientation:portrait),
       screen and (max-width: 736px) and (max-device-width: 1920px) and (orientation:landscape) { }
~~~
{: .language-ruby}








media
