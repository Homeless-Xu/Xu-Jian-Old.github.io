---
layout: post
title: GDT-Timeline分析✔︎
tags: 💯GDT
categories: Tooles
---

## 网站性能: 加载&执行 性能
加载性能通过 Network 开分析
执行性能: 内存泄漏


**web 高性能开发指南 非常经典书籍**
**web 高性能开发指南 非常经典书籍**
**web 高性能开发指南 非常经典书籍**





## Timeline 分区
从上到下.分别是  时间轴精简版; 时间轴完整版; 内存信息;

### 时间轴精简版
时间轴(从左到右).



### 时间轴完整版 (主要)
区域1 的完整版. 更加详细.精准. 一般都在这个区域进行.

每个请求都是一行!!!!! 
**点击每个请求. 下方Bottom-up 处都有这个事件的详细: 加载+执行+渲染 信息**
**点击每个请求. 下方Bottom-up 处都有这个事件的详细: 加载+执行+渲染 信息**
**点击每个请求. 下方Bottom-up 处都有这个事件的详细: 加载+执行+渲染 信息**

任何请求 都是先下载.然后看情况是执行/还是渲染. 这里可以看出该请求下载/渲染各自花了多少时间,对你的性能分析非常有用.

比如:  nprogress.css : loading 150ms  scripting 750ms ...
可以看出 趋势 执行是花了 绝大部分时间的, 而不是网络的问题....

再比如: main.css : loading 150ms  , scripting 750ms...
你要优化的话当然是优化css性能了... 当然css压缩下什么的 还能少点加载时间. 但重点就是优化css.









这里的每一种颜色的横条 都有自己独特的意义.

loading   → 蓝色 → 加载事件
scripting → 黄色 → 脚本事件
rendering → 紫色 → 渲染事件
panting   → 蓝色 → 绘制事件






每一次事件的触发都伴随着一系列的变化:
html 的重新渲染.
界面的 重新布局
视图重绘.

每个事件的发生都会引起一系列的变化.
比如 内存的占用.















### 内存板块 (5种)

JS Heap    蓝色   内存消耗.
Documents  橙色   dom文档数
Nodes      绿色   dom的节点数目
Listeners  黄色   元素绑定的事件数



























### 区域4



Timeline 是用来记录和分许应用在运行时所有的活动情况.
**用来排查应用性能瓶颈的最佳工具.**
**Tips:避免浏览器插件对分析过程产生影响，建议在隐身模式下进行分析。**




1. 首先看 底部的 彩色圆球
这里写出了 颜色代表的意思.

- 文件加载时间.
- js文件执行时间
- css文件渲染时间


2. 横条 那里看哪个柱子最长(代表时间花的最多)
3. 看最长柱子的颜色. 可以看出来是到底是 加载还是js运行还是css渲染花了很多时间.
31. 如果是加载耗时. 那就...优化网络? 或者使用CDN..
32. 如果是 js 运行时间长. 可能需要优化js代码
33. 如果是 css 渲染时间长 就优化css...




\*\*最好先在本地测试  这样可以避免网络方面的问题.网络优化最后弄..










然后看 CSS / JS 加载时间... 有效东西是要css/js加载之后才显示主页的?












这个是加载时间. 还是运行时间!!!

下载资源.
处理DOM
页面布局渲染
屏幕绘制元素等等 的时间.






*强烈建议在浏览器隐身模式下使用这个工具，并且禁用一切无关的插件，因为这些插件会影响测试的结果。*



目前大多数的显示器的刷新频率是60Hz，那么我们页面的绘制频率能达到60帧每秒是最好的，
因为软件帧和硬件的刷新频率一致的话，页面能给人非常流畅的感觉，否则就会感觉到很卡，
这样我们大概有16.6ms（1000/60）来完成每一帧的呈现，
*这就是很多人说的“16.6ms”优化。*





*找性能瓶颈最佳工具: Timeline*
Tips:为了避免浏览器插件对分析过程产生影响，建议在隐身模式下进行分析。



- 蓝色(Loading)：网络通信和HTML解析
- 黄色(Scripting)：JavaScript执行
- 紫色(Rendering)：样式计算和布局，即重排
- 绿色(Painting)：重绘
- 灰色(other)：其它事件花费的时间
- 白色(Idle)：空闲时间




FPS:  红色段.  longframe  代表帧速没达到60 会卡. 




*TTFB ( Time To First Byte) *

是最初的网络请求被发起到从服务器接收到第一个字节这段时间，  
它包含了TCP连接时间，发送HTTP请求时间和获得响应消息第一个字节的时间。



*Cache Read: 缓存读取* 从浏览器缓存中读取内容或者304响应的时间。


*Connect: 连接时间*
是创建TCP连接到服务器或者代理服务器所花费的时间，如果一个包含SSL的安全的HTTPS连接存在，Keep-Alive链接经常被用到，以避免多次重复的连接WEB服务器。
  
*Send*
是发送HTTP请求到服务器的时间，而且这个时间取决与发送请求的数据量的大小，
例如，长的发送时间是由于用 PSOT方式上传文件造成的。
\*  
Wait: 等待时间\* 等待服务器响应消息的空闲时间，这个值包括网络延迟和服务器处理请求的时间。

*Receive: 接收时间*
从服务器读取响应消息的时间。这个值可以受到请求消息内容的大小，网络带宽和是否使用了HTTP压缩。


*Blocked: 闭塞时间*
包括所有的过程之前的时间（像，cache对比）和等待网络链接的时间，
IE在每个主机名（像 http://www.microsoft.com/）下最多只创建两个当前的网络连接，
而且要排队等待直到这个网络链接可用，通常，闭塞时间影响网页中图片加载时间的重要因素。









*idle 时间很高  有5s+....*







[https://segmentfault.com/a/1190000003991459][1]


页面性能分析.


而Chrome DevTools的Timeline则正是用来记录和分析应用在运行时所有的活动情况，它是用来排查应用性能瓶颈的最佳工具。



## Timeline工具栏介绍
Timeline工具会详细检测出在Web应用加载的过程中时间花费情况的概览，
包括下载资源、
处理DOM事件、
页面布局渲染、
向屏幕绘制元素等。
你可以通过分析Timeline得到的事件、框架和实时的内存用量，找出应用的性能问题。




## 底部圆球
不同的颜色表示不同的事件.
某种颜色的区块越长. 说明该事件耗时越长.

蓝色(Loading)：   网络通信和HTML解析
黄色(Scripting)： JavaScript执行
紫色(Rendering)： 样式计算和布局，即重排
绿色(Painting)：  重绘
灰色(other)：     其它事件花费的时间
白色(Idle)：      空闲时间



## 顶部的 横条. mode view
可能会有红色区块: 说明在对应事件上执行的时间可能存在性能问题.






## 事件汇总


loading 事件:

~~~
Parse HTML  浏览器执行HTML解析
Finish Loading  网络请求完毕事件
Receive Data    请求的响应数据到达事件，如果响应数据很大（拆包），可能会多次触发该事件
Receive Response    响应头报文到达时触发
Send Request    发送网络请求时触发
~~~
{: .language-ruby}




Scripting事件
~~~
Animation Frame Fired   一个定义好的动画帧发生并开始回调处理时触发
Cancel Animation Frame  取消一个动画帧时触发
GC Event    垃圾回收时触发
DOMContentLoaded    当页面中的DOM内容加载并解析完毕时触发
Evaluate Script A script was evaluated.
Event   js事件
Function Call   只有当浏览器进入到js引擎中时触发
Install Timer   创建计时器（调用setTimeout()和setInterval()）时触发
Request Animation Frame A requestAnimationFrame() call scheduled a new frame
Remove Timer    当清除一个计时器时触发
Time    调用console.time()触发
Time End    调用console.timeEnd()触发
Timer Fired 定时器激活回调后触发
XHR Ready State Change  当一个异步请求为就绪状态后触发
XHR Load    当一个异步请求完成加载后触发
~~~
{: .language-ruby}


Rendering事件
~~~
Invalidate layout   当DOM更改导致页面布局失效时触发
Layout  页面布局计算执行时触发
Recalculate style   Chrome重新计算元素样式时触发
Scroll  内嵌的视窗滚动时触发
~~~
{: .language-ruby}


Painting事件
~~~
Composite Layers    Chrome的渲染引擎完成图片层合并时触发
Image Decode    一个图片资源完成解码后触发
Image Resize    一个图片被修改尺寸后触发
Paint   合并后的层被绘制到对应显示区域后触发
~~~
{: .language-ruby}





















[1]:	https://segmentfault.com/a/1190000003991459