---
layout: post
title: MD解析器kramdown
tags: Jekyll
categories: Blog
---

markdown 原始的解析器是 用 perl写的. 很早就不维护了..
所以出现了很多语言新的解析器.
Perl, JS, Ruby,PHP, Python

你选择的语言 决定了你能支持哪些特性和能使用哪些库
MD 有很多版本有不同的功能:

## 所有版本都支持的特性:

**代码围栏**
能够简单地在Markdown中添加代码是开发者添加的最好的功能之一。
允许你用 三个 ...  或者三个 波浪号 把代码围起来.


## 语法高亮
添加代码块是很棒的，但是默认Markdown的解释器将会将代码使用
`<code> 和 <pre></pre>` 标记简单的包裹起来，这将使文本以一种预定格式和固定宽度字体格式显示。一些实现可以通过允许您指定旁边的刻度标记语言改善这一点，并可能包括一个分析器，可以自动让你选择不同的色彩款式，并指定语言代码编写，这样的颜色是更有意义的。

有些支持不嵌入到解析器，而是依赖于其它的库如[highlight.js]()


## 元数据
比如 jekyll 的  yml 


## URL 自动链接
这些简单的扩展让你的文字中出现的URL通过分析器会自动转换为链接。这种功能的确很方便实用，像GFM这样的实现版本，无需额外的工作即可使链接可以点击，使得写文档更简单。


## 脚注和其他链接类型
脚注允许你把你文档的参考文献创建一个链接放置在Markdown页面底部。这不同于放置在文章内容中的普通链接。这允许用户在一个单独的部分，浏览所有的相关链接，有时会很有帮助。



## GFM 特性
任务列表
它增加了任务列表标记使您可以创建复选框旁边的内容来模拟一个任务列表清单。

- [ ]() 运行 `> npm-install` 安装项目依赖
- [X]() 通过Mac的terminal或是PC上的Gitbash安装 gulp.js 运行Gulp命令 `> npm install -g gulp` 
- [ ]() 运行Gulp命令行`> gulp` 












#### Markdown 有很多版本,就像汉语有很多方言:
- Maruku,Redcarpet,Kramdown…  
	> 依次解析速度越来越快,数量级的差距.非常明显

- Github Pages (2016):只支持 kramdown (功能更加强大)

功能太多也没必要.会ulysses基本操作就可以了.
别的 用源代码实现.
---

## Ulysses:                   {#ID1}

- enter 回车: 换段落.
- shift+enter: 才是换行

**.md 文件也能运行 Html代码.**
> 不是只有.html 才能运行 各种html标签的.


--- 

**源代码 VS 代码块**

- 源代码: 在html中 显示代码的执行结果.
- 代码块: 在html中 显示代码本身.并不会去执行.
	> 比如你想要给.md 文件 加个 font-awesome的图标.
	- 就得 先引用font-asesome的CDN 
		- 再写图标的代码.



**换行:**
- shift enter  不是回车键.
- 一行后面加两个以上的空格也能实现换行.

> 正常写完 一篇markdown 一切都完美.  
> 但是一旦 jekyll 生成网页就变了.  
> 这是因为 github pages 是由 html & markdown 共同造成的.
> - Markdown保留换行符
> - HTML 把换行转换成空白符。

**加空行:**  
上一行行尾:加两个空格.  
下一行输入 `&nbsp;`  (空格的意思) → 就生成一空行了.


**第二段落:**  
上行尾:两空格. 再按下 回车键.


---

**分割线**
- 三个 `---` 或者 `***`.
- 分割线上下要空行才有效.

---




#### Markdown 基本元素:  block & span

- Block-level 块级元素:
	- 单独成一段.上下都是空行隔开
		- 如:标题/段落/列表/大块代码  
			block 和 block 是不能并列排在一起的

- Span-level 内联元素:
	- 就是成分的修饰.
		- 如强调, 粗体, 连接等.  
			可以在文本中间出现. 比如 行内代码.

#### Kramdown 新增功能:
*header ID*
文章内部跳转功能: 也是锚功能.

*脚注 footnote*
注释的一种

*链接 title :*
支持链接title(停留会显示), 在链接后空格再加"titlename". 支持自动链接,链接地址用\<link address\>即可.
另外, 可以支持将链接在别的地方定义:[linkname](): link, 而原来则变为[showname]()[linkname](), 如果显示名字和定义链接名字一致,可以直接[linkname]()



*Abbreviations 缩略语*
就是html的abbr. 鼠标移到相关缩写词上面会出现词义解析. 在文档任意位置*[word](): explanation 即可.*



---

#### 代码区域 / Code block & Rouge 语法高亮
  
代码区域的上下用连续的三个`~~~`包围  

	.post-content li {padding: .6rem 0; ulmargin-bottom: 0  }


↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	.post-content li {padding: .6rem 0;  ulmargin-bottom: 0 }  



> 高亮方法2: Liquid组件也能实现代码高亮. 没rouge方便而已.  


---


#### 图像解决办法:
Md 最大的不便 就是不能直接添加图片.

解决办法用外链接.
iPic 可以自动把你图片传到七牛,
然后还能自动给你复制外链地址到剪切板




**折叠代码 **
一行代码太长,默认不会自动分行的.

	h5{     background-color: rgba(255, 255, 0, 0.2);background-image: url(Web-Pic/totoro-900x900.png);padding: 2px;background-attachment: fixed;































