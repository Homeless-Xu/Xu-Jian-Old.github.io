---
layout: post
title: "fontawesone"
tags: fontawesone
categories: Web
---



如果你的网站一共只需要用到5个图标，那么你只需要将这5个图标的字体文件和相关的css下载下来就可以用了。如果你想使用iconfont的CDN服务的话，你都不用下载，直接将这几个图标添加到你自己的项目中，然后在你的网站里面引用一个CSS文件就可以了。
再反观Font Awesome，哪怕你只是要用到2个图标，你都必须要把所有文件都下载下来才能使用。而上面也说了，仅SVG就194KB大了，还有其他几个字体文件加起来一共有400+KB，这还是没有算上同样好几十KB的CSS文件。

[http://www.iconfont.cn/plus][1]


---




*Using CSS*
1.  Copy the entire font-awesome directory into your project.
2.  In the \<head\> of your html, reference the location to your font-awesome.min.css.\<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"\>
3.  
  
[最好示例][2]

[示例 链接2 ][3]

## 用 fa-stack 作为外层标签 进行组合
stack 堆栈的意思...

如果想要将多个图标组合起来，使用 fa-stack 类作为父容器， fa-stack-1x 作为正常比例的图标， fa-stack-2x 作为大一些的图标。还可以使用 fa-inverse 类来切换图标颜色。您可以在父容器中 通过添加 大图标 类来控制整体大小。

~~~
        <span class="fa-stack fa-lg">
            <i class="fa fa-square-o fa-stack-2x"></i>
            <i class="fa fa-search fa-stack-1x"></i>
        </span>
~~~
{: .language-ruby}



需要使用CSS前缀 fa ，再加上图标名称。 Font Awesome是为使用内联元素而设计的。我们通常更喜欢\<i\>，因为它更简洁。 但实际上使用\<span\>才能更加语义化。例如



## 配合 bootstrap 有非常漂亮的外观  [示范链接][4]



## 等宽图标
**可以使用 fa-fw 可以为图标设置相同的宽度**

## 组合图标
~~~
<span class="fa-stack fa-lg">
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-twitter fa-stack-1x"></i>
</span>
~~~
{: .language-ruby}



	<a class="btn btn-danger" href="#">
	  <i class="fa fa-trash-o fa-lg"></i> Delete</a>
	<a class="btn btn-default btn-sm" href="#">
	  <i class="fa fa-cog"></i> Settings</a>
	
	<a class="btn btn-lg btn-success" href="#">
	  <i class="fa fa-flag fa-2x pull-left"></i> Font Awesome<br>Version 4.1.0</a>
	
	<div class="btn-group">
	  <a class="btn btn-default" href="#"><i class="fa fa-align-left"></i></a>
	  <a class="btn btn-default" href="#"><i class="fa fa-align-center"></i></a>
	  <a class="btn btn-default" href="#"><i class="fa fa-align-right"></i></a>
	  <a class="btn btn-default" href="#"><i class="fa fa-align-justify"></i></a>
	</div>
	
	<div class="input-group margin-bottom-sm">
	  <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span>
	  <input class="form-control" type="text" placeholder="Email address">
	</div>
	<div class="input-group">
	  <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
	  <input class="form-control" type="password" placeholder="Password">
	</div>
	
	<div class="btn-group open">
	  <a class="btn btn-primary" href="#"><i class="fa fa-user fa-fw"></i> User</a>
	  <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
	    <span class="fa fa-caret-down"></span></a>
	  <ul class="dropdown-menu">
	    <li><a href="#"><i class="fa fa-pencil fa-fw"></i> Edit</a></li>
	    <li><a href="#"><i class="fa fa-trash-o fa-fw"></i> Delete</a></li>
	    <li><a href="#"><i class="fa fa-ban fa-fw"></i> Ban</a></li>
	    <li class="divider"></li>
	    <li><a href="#"><i class="i"></i> Make admin</a></li>
	  </ul>
	</div>
	

例子:
[http://www.yinhecn.com/1tool/fontawesome/examples.html][5]






[→ FontAwesome 教程链接(cn) ←][6]

### Font Awesome 作用:  给网站添加各种漂亮精致的色彩图标.  

- 可缩放的矢量图标，高度自定义(大小,颜色,阴影)
	- [Font-Awesome: 示例博客][7]
	- [Font-Awesome: Offical-Website (en)][8]
	- [Font-Awesone: Github][9]


### Font Awesome 优点:
- 矢量图形, 无限缩放, 免费, 不依赖JS, 支持主流框架
	- CSS 控制样式,自定义图标颜色,大小,阴影, 支持Retina 屏幕.


### 使用方法:

其实就是一个 css 文件.  用 \<link\> 在HTML Head标签里 引入就行.
- 可以用在线的 CDN 链接.

~~~
<link href="http://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
~~~    
{: .language-ruby}


- 也可下载现成的 font-awesome.min.css到本地使用.

~~~
<link href="/desktop/font-awesome.min.css" rel="stylesheet">
~~~     
{: .language-ruby}


- 只要添加如下代码格式. 改名下名字就可以换图标了.[官方: 找图标名称][10]

~~~
<i class="fa fa-weixin"></i>
~~~
{: .language-ruby}



--- 

### MD 实际例子(只适合 Ulysses.):

*`~` → 源代码:被两个波浪号包围: 会被jekyll 当成html代码来执行而不是显示 ← `~` *

`~<link href="http://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">~`  
.md 文件也是要加载fontAwesome 之后才能显示图标的..  这行必须加上.  
整个.md 文件 只要加载一次这个就可以了... 位置无所谓...


<link href="http://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">  

`~<i class="fa fa-weixin"></i>~` → 微信图标:  <i class="fa fa-weixin"></i>  
`~<i class="fa fa-coffee"></i>~` → 咖啡图标:  <i class="fa fa-coffee"></i>  



**图标大小 & 颜色 & 固定宽度 & 浮动 & 反转 & 旋转 & 叠加... 看官网使用教程.**


fa-lg比常规图标大33%,

<i class="fa fa-camera-retro fa-lg"></i> fa-lg
`<i class="fa fa-camera-retro fa-lg"></i> fa-lg`

<i class="fa fa-camera-retro fa-2x"></i> fa-2x
`<i class="fa fa-camera-retro fa-2x"></i> fa-2x`

<i class="fa fa-camera-retro fa-3x"></i> fa-3x
`<i class="fa fa-camera-retro fa-3x"></i> fa-3x`

<i class="fa fa-camera-retro fa-4x"></i> fa-4x
`<i class="fa fa-camera-retro fa-4x"></i> fa-4x `

<i class="fa fa-camera-retro fa-5x"></i> fa-5x
`<i class="fa fa-camera-retro fa-5x"></i> fa-5x`


<br>

---


**等宽图标 → fa-fw **    *需要调节 padding 时候 有用!!!*

  <a class="list-group-item" href="#"><i class="fa fa-home fa-fw fa-3x " aria-hidden="true"></i>&nbsp;  </a>
`<i class="fa fa-home fa-fw fa-3x " aria-hidden="true"> </i> `


  <a class="list-group-item" href="#"><i class="fa fa-book fa-fw fa-3x" aria-hidden="true"></i>&nbsp;  </a>
`<i class="fa fa-book fa-fw fa-3x" aria-hidden="true"> </i> `


  <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw fa-3x" aria-hidden="true"></i>&nbsp;  </a>
`<i class="fa fa-pencil fa-fw fa-3x" aria-hidden="true"> </i> `


  <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw fa-3x " aria-hidden="true"></i>&nbsp;  </a>
`<i class="fa fa-cog fa-fw fa-3x " aria-hidden="true"> </i> `


<br>

---

** 图标边框(fa-border) & 图标移动(pull-right/left)**

<i class="fa fa-tag  pull-right"></i>fa fa-tag pull-right: →  图标在右边  <br/> <br />

<i class="fa fa-tag fa-2x pull-left "></i>
  <p> fa fa-tag fa-2x pull-left: → 2x图标在左边</p> <br />

<i class="fa fa-search fa-3x pull-right fa-border"></i>
  <p>fa fa-search fa-3x pull-right fa-border:我的图标三倍大小,图标在右边,且有边框</p> <br />



---

**列表图标 → fa-ul fa-li**

<ul class="fa-ul">
  <li><i class="fa-li fa fa-check-square"></i>List icons</li>
  <li><i class="fa-li fa fa-check-square"></i>can be used</li>
  <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
  <li><i class="fa-li fa fa-square"></i>in lists</li>
</ul>

~~~
    <ul class="fa-ul">
      <li><i class="fa-li fa fa-check-square"></i>List icons</li>
      <li><i class="fa-li fa fa-check-square"></i>can be used</li>
      <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
      <li><i class="fa-li fa fa-square"></i>in lists</li>
    </ul>
~~~
{: .language-ruby}



<br>

---
**Animated Icons **  动画 (旋转设置图标.)

在less里面定义
spin的速度是linear(匀速),一圈2s
pulse分为八步,一圈时间1S

<li> <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
<span class="sr-only">fa-spin</span> </li>
	<i class="fa fa-cog fa-spin fa-3x fa-fw"></i><span class="sr-only">


<li><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
<span class="sr-only">fa-spin</span> </li>
	<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">


 <li><i class="fa fa-spin fa-2x  fa-arrow-right"></i> fa-arrow-right:匀速旋转,2s一圈</li>
	<i class="fa fa-spin fa-2x  fa-arrow-right"></i>

<li><i class="fa fa-spin fa-2x fa-spinner fa-pulse"></i>fa-spinner: 一圈分为八次转完,时间1S</li>
	<i class="fa fa-spin fa-2x fa-spinner fa-pulse"></i>


<br>

---
**旋转图标 fa-rotate ** 

- fa-rotate:来控制旋转的度数
- fa-flip:两个参数来控制水平和垂直 

&nbsp;
 <ul>
<li><i class="fa fa-hand-o-up  "></i>手: 默认</li>
<li><i class="fa fa-hand-o-up fa-rotate-90 "></i>手: 90度</li>
<li><i class="fa fa-hand-o-up fa-rotate-180 "></i>手: 180度</li>
<li><i class="fa fa-hand-o-up fa-rotate-270"></i>手: 270度</li>
<li><i class="fa fa-hand-o-up fa-flip-horizontal "></i>手: 水平(90%)</li>
<li><i class="fa fa-hand-o-up fa-flip-vertical "></i>手: 垂直(180%)</li>
  </ul>

  
&nbsp;

~~~
    <i class="fa fa-hand-o-up  "></i>手:默认状况
    <i class="fa fa-hand-o-up fa-rotate-90 "></i>手:旋转90度
    <i class="fa fa-hand-o-up fa-rotate-180 "></i>手:旋转180度
    <i class="fa fa-hand-o-up fa-rotate-270"></i>手:旋转270度
    <i class="fa fa-hand-o-up fa-flip-horizontal "></i>手:水平(90%)
    <i class="fa fa-hand-o-up fa-flip-vertical "></i>手:垂直(180%)
~~~
{: .language-ruby}


<br>

--- 
**Stacked Icons 叠加**

<span class="fa-stack fa-lg">
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-twitter fa-stack-1x"></i>
</span>
fa-twitter on fa-square-o

<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
</span>
fa-terminal on fa-square<br>






<div class="icon-test-lise">
  <h1>堆叠图标:合并图形</h1>
  <ul>
<li>
  <span class="fa-stack">
<i class="fa fa-stack-2x  fa-bookmark-o"></i>
<i class="fa fa-stack-1x  fa-child"></i>
  </span>随便找的两个图标合成
</li>
<li>
  <span class="fa-stack">
<i class="fa fa-stack-2x  fa-lemon-o"></i>
<i class="fa fa-stack-1x  fa-chain "></i>
  </span>随便找的两个图标合成
</li>
<li>
  <span class="fa-stack">
<i class="fa fa-stack-2x fa-wheelchair"></i>
<i class="fa fa-stack-1x fa-transgender-alt"></i>
  </span>随便找的两个图标合成
</li>
<li>
  <span class="fa-stack fa-2x">
<i class="fa fa-stack-1x  fa-comment"></i>
<i class="fa fa-stack-2x  fa-linux"></i>
  </span>随便找的两个图标合成
</li>
<li>
  <span class="fa-stack fa-3x">
<i class="fa fa-stack-1x   fa-chain"></i>
<i class="fa fa-stack-2x  fa-circle-o "></i>
  </span>随便找的两个图标合成
</li>
<li>
  <span class="fa-stack fa-lg">
  <i class="fa fa-circle fa-stack-2x"></i>
  <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
</span>随便找的两个图标合成
</li>
  </ul>
</div>



- fa-stack作为父,组合子元素生成的对象;可使用规格参数
	- fa-stack-2x 作为背景的栈,要大于显示图形的栈
	- fa-stack-1x 作为背景栈内部的内容,所以要小于背景栈
	- fa-inverse 用来反转图标颜色,生成可见图标组



<br>

---

**Bootstrap 3 Examples**


<a class="btn btn-danger" href="#">
  <i class="fa fa-trash-o fa-lg"></i> Delete</a>
<a class="btn btn-default btn-sm" href="#">
  <i class="fa fa-cog"></i> Settings</a>

<a class="btn btn-lg btn-success" href="#">
  <i class="fa fa-flag fa-2x pull-left"></i> Font Awesome<br>Version 4.6.3</a>

<div class="btn-group">
  <a class="btn btn-default" href="#">
<i class="fa fa-align-left" title="Align Left"></i>
  </a>
  <a class="btn btn-default" href="#">
<i class="fa fa-align-center" title="Align Center"></i>
  </a>
  <a class="btn btn-default" href="#">
<i class="fa fa-align-right" title="Align Right"></i>
  </a>
  <a class="btn btn-default" href="#">
<i class="fa fa-align-justify" title="Align Justify"></i>
  </a>
</div>

<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span>
  <input class="form-control" type="text" placeholder="Email address">
</div>
<div class="input-group">
  <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
  <input class="form-control" type="password" placeholder="Password">
</div>

<div class="btn-group open">
  <a class="btn btn-primary" href="#"><i class="fa fa-user fa-fw"></i> User</a>
  <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
<span class="fa fa-caret-down" title="Toggle dropdown menu"></span>
  </a>
  <ul class="dropdown-menu">
<li><a href="#"><i class="fa fa-pencil fa-fw"></i> Edit</a></li>
<li><a href="#"><i class="fa fa-trash-o fa-fw"></i> Delete</a></li>
<li><a href="#"><i class="fa fa-ban fa-fw"></i> Ban</a></li>
<li class="divider"></li>
<li><a href="#"><i class="fa fa-unlock"></i> Make admin</a></li>
  </ul>
</div>











## fontawesone 动画

CSS3 Animate动画模组》随套随用搭配jQuery效果更佳


以前实现动画. 需要 用 js 
现在 用 css 3 就可以了....


也有现成的css 动画文件. 加载就可以实现了...

[https://daneden.github.io/animate.css/][11]




[http://www.htmleaf.com/css3/css3donghua/201511072756.html][12]
具体链接.



[http://l-lin.github.io/font-awesome-animation/][13]

[http://l-lin.github.io/font-awesome-animation/][14]


	下载一个 动画的.css
	<link rel="stylesheet" href="/fontawesome/css/font-awesome-animation.css" >




Step1: 引入对应CSS文件  
首页要添加Font Awesome的CSS样式文件。
\<link rel="stylesheet" href="font-awesome.min.css"\>
\<link rel="stylesheet" href="font-awesome-animation.min.css"\>


Step2: 给图标添加动画样式，动画样式请看演示页，这里我使用了faa-spin，这时动画还不可以动的。
\<i class="fa fa-spinner faa-spin"\>\</i\>

Step3: 触法动画1，添加一个animated的Class，这时图标可动起来了，无限循环。
\<i class="fa fa-spinner faa-spin animated"\>\</i\>

Step4: 触法动画2，通过鼠标经过后才有动画效果，鼠标移
开就会立即停止。  
和上面一样，也是添加一个animated-hover的Class即可。
\<i class="fa fa-spinner faa-spin animated-hover"\>\</i\>



*faa-spin 是旋转*

animated 是无限循环
animated-hover 是鼠标放上去 无限循环

**faa-fast 快**
**faa-slow 慢**



[1]:	http://www.iconfont.cn/plus
[2]:	http://www.qingzz.cn/fontawesome_ref
[3]:	http://caibaojian.com/fontawesome/examples.html
[4]:	http://www.yinhecn.com/1tool/fontawesome/examples.html
[5]:	http://www.yinhecn.com/1tool/fontawesome/examples.html
[6]:	http://fontawesome.dashgame.com/
[7]:	http://hjking.github.io/
[8]:	http://fontawesome.io/
[9]:	https://github.com/FortAwesome/Font-Awesome
[10]:	http://fontawesome.io/icons/
[11]:	https://daneden.github.io/animate.css/
[12]:	http://www.htmleaf.com/css3/css3donghua/201511072756.html
[13]:	http://l-lin.github.io/font-awesome-animation/
[14]:	http://l-lin.github.io/font-awesome-animation/