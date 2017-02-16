---
layout: post
title: Webpack-jekyll
tags: React
categories: Tooles
---

作为开发人员. 应该不会有人把 所有css/js 都写到一个超大的main.css/main.js 文件里的. 应该会自然而然把文件拆分成更小更分散的模块.

当你要发布的时候.就需要把这个分散的模块.编译成单个文件(有利于网页速度加载).

这时候就可以让webpack帮你自动把分散的文件自动打包成单个文件. 而不是你手动的去复制粘贴成单个文件....






## css 问题
不是所有的 css 都是需要用到的...
好比 网页最终显示的css 只有一个.
按照优先级等等来最终觉得显示效果.
但是你写css的时候 肯定是写了很多css的.
这个就是多余的...

如果你用 js 把css内联进html .这时候内联进去的css 就是最终显示的css. 会删除一些用不到的...
这里会有极大的精简效果....





这时候 就需要 一个 文件依赖列表.

这样一来 你很可能 引入一些多余的css.
这个是





## webpack ui
webpack 最终都是为了让你在编写模块的时候 更加精准的引入依赖.



UI 不仅包含 js css 图片 还有字体....
所以就有了 loader.
使用require 语法. 能让你引用任何依赖. 而不仅仅是一个单纯的js文件.


让程序更加智能的生成bundle.css
一个 基于 html 真正使用到的css
(就像你用谷歌开发工具看 css 属性.很多是灰色的!!! 这些就是无用的css.)




















博客用到webpack的无非就是 css js.


## CSS SASS
目的: 把css 内联到 html 中.

### jekyll SASS.
 任何位置新建一个 main.sass
这个main.sass文件必须 两行三横线开头
这样才会在main.sass位置 自动生成一个main.css

main.sass 
css 代码管理:
也需要把各部分的css文件独立成小文件.这样才好管理&修改.
所以 main.sass 可以分成 很多xx.sass
这些xx.sass 必须放在jekyll 根目录的 `_sass` 文件夹下.
然后 通过. main.sass 的import 来引入.




### webpack SASS
目的: 把sass 转为 css 再把css内联到html.

由于jekyll build的时候会自动把 main.sass 变成 main.css.
webpack 只能在 build 之前运行....
所以. webpack sass 的话. 要禁止 jekyll 默认的sass功能.
也就是把main.sass 文件首部的两行--- 去掉.
这样jekyll 就不会处理这个文件了. 
让 webpack 来处理.


css 只需. css-loader 和 style-loader.

sass 需要: sass-loader 和 css-loader 和 style-loader
	npm install --save-dev sass-loader css-loader style-loader node-sass
	
	
	
	
	
	
	module: {
	        loaders: [
	            {
	                test: /\.jsx?$/,
	                loaders: [ 'babel' ],
	                exclude: /node_modules/
	            },
	            {
	                test: /\.scss$/,
	                loaders: [ 'style', 'css', 'sass' ]
	            }
	        ]
	    },















## js
目的: 所有js 合并成一个js(减少http请求数量)

最终要求:
js 文件尽量少. 可以减少请求数.加快网页速度.
所以有必要把所有自己写的js 写在一个main.js文件中.
(引用的 jquery 等等 另说.....)
但是. 如果把所有的js都放进一个文件. 就不容易修改了.
至少要在一个几百上千行的main.js中找到你要修改的那个部分很难...  
这里就可以用上 webpack了.
你写js的时候 还是把js可以分成很多小的js文件.
然后只要运行下 webpack 打包命令.
就可以把你 所有的js 打包成一个 js.
这样 js代码管理&性能 问题就完美解决了.
