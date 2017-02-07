# [CMS-Jekyll][1]

> 大类: 不能有英文的.; (可以有:-)不然不能过滤出对应标签&文章.  
> 标签: 不能有下划线; 不能有空格(有空格就是多标签了.本主题不支持)


![主题预览高清图][image-1]
![Mac Ulysses 标签设置参考图][image-2]

## 排序实例:(主题重点)  
   所有排序都是按照 文件名上的时间排序. 时间越旧拍越上面.
	> 大类下的 所有文件名都是一个年份的才有效.  
	> 如果一个大类 有些文件名的年份不一样.那大类会自动选择最早年份的那个文章来排序大类.
有三个大类: cate1, cate2, cate3


	|-- Cate1
	|   |--  Tag11
	|          |-- post111 → 2000-01-01-post111.md
	|          |-- post112 → 2000-01-02-post112.md 
	|          |-- post113 → 2000-01-03-post113.md
	|   |--  Tag12
	|          |-- post121 → 2000-02-01-post121.md
	|          |-- post122 → 2000-02-02-post122.md
	|          |-- post123 → 2000-02-03-post123.md
	|   |--  Tag13
	|          |-- post131 → 2000-03-01-post131.md
	|          |-- post132 → 2000-03-02-post132.md
	|          |-- post133 → 2000-03-03-post133.md
	|
	|-- Cate2
	|   |--  Tag21
	|          |-- post211 → 2010-01-01-post211.md
	|          |-- post212 → 2010-01-02-post212.md
	|          |-- post213 → 2010-01-03-post213.md
	|   |--  Tag22
	|          |-- post221 → 2010-02-01-post221.md
	|          |-- post222 → 2010-02-02-post222.md
	|          |-- post223 → 2010-02-03-post223.md
	|   |--  Tag23
	|          |-- post231 → 2010-03-01-post231.md
	|          |-- post232 → 2010-03-02-post232.md
	|          |-- post233 → 2010-03-03-post233.md
	|-- Cate3 
	|   |--  Tag31
	|          |-- post311 → 2016-01-01-post311.md
	|          |-- post312 → 2016-01-02-post312.md
	|          |-- post313 → 2016-01-03-post313.md
	|   |--  Tag32
	|          |-- post321 → 2016-02-01-post321.md
	|          |-- post322 → 2016-02-02-post322.md
	|          |-- post323 → 2016-02-03-post323.md
	|   |--  Tag33
	|          |-- post331 → 2016-03-01-post331.md
	|          |-- post332 → 2016-03-02-post332.md
	|          |-- post333 → 2016-03-03-post333.md

## 排序结果:

	Cate1 Tag11 post111
	Cate2 Tag12 post112
	Cate3 Tag13 post113
	      Tag21 post121
	      Tag22 post122
	      Tag23 post123
	      Tag31 post131
	      Tag32 post132
	      Tag33 post113
	            post211
	            post212
	            post213
	            post221
	            post222
	            post223
	            post231
	            ......
				  


## 建议排序方法:
* 每个大类一个年份.
* 每个标签一个月份.
* 每篇文章一个日期.
* 文章很多还可以用时分秒.
> 这个是最简单的自定义排序方法!!!

## Done (主要功能)

* [x] 三级标签过滤: Categories → Tags → fileName 
* [x] 三级标签排序: 时间越旧排越上面.
* [x] 手写拖动条 + 手写滚动条 + Nprogress加载进度条 + PJAX
* [x] 自动高亮1: 点击文章自动高亮对应 Tags & Categories.
* [x] 自动高亮2: 文章滚动 自动高亮右侧文件结构栏对应标题
* [x] 文件结构栏: 支持过滤出 h2-h5 (h1是文章标题.这里不显示)
* [x] 文件结构栏: 锚点跳转.点击标题 跳转到文章对应位置
* [x] 文件名栏: 显隐文件时间.方便排序
* [x] Service Worker 缓存启用 (废弃 manifest缓存 )




## Done (次要功能)
* [x] 谷歌网站统计分析 + SSL/HTTPS + 图片七牛CDN
* [x] 博客分类那里添加meta标签 可以优化SEO
* [x] 阿里iconfont 代替 fontawesone
* [x] Github + Coding 双线部署
* [x] Github Star 集成(可以显示项目star数量)
* [x] Flex + absolute 布局
* [x] 发布主题到 Rubygems
* [x] 顶栏前后篇pjax按钮( 绑定contentDiv链接实现 )
* [x] 代码中文详细注释
* [x] SEO 小优化: 
* [x] 404页面.
* [x] 顶部三级导航条
* [x] 右下角回到顶部按钮
* [x] 移动端界面适配




## ToDo
* [ ] service worker 缓存.
* [ ] 移动端 滚动条溢出.
* [ ] firebase 对话功能.
* [ ] JS 上下键 控制高亮光标.
* [ ] 多主题切换/多布局切换
* [ ] SASS
* [ ] 搜索功能
* [ ] 代码高亮
* [ ] SEO优化
* [ ] 网页性能优化
* [ ] 左右抽屉显隐效果 留白问题...
* [ ] 在线编辑功能??
* [ ] 开放UGC???
* [ ] 最爱文章?
* [ ] 文章预览?
* [ ] 移动端左右滑动
* [ ] URL 自动链接



## issues
- 左右拖动 会选中文字.....





### Gitpages 主题安装方法 (Mac) :
1. fork 我的主题到你的github. 并重命名该项目.名字格式参考:Xu-Jian.github.io
	 不管什么办法. 新建一个github项目. 把我主题所有文件弄到你项目里面.然后把项目重命名 用户名..github.io 格式

2. 下载该项目到本地电脑(一般放桌面).

3. 电脑安装jekyll 环境(全局模式/不需要cd到特定文件夹);  
	    \> 安装好全局环境: 系统可以认识jekyll命令. 但是文件夹还是不能进行jekyll命令操作,必须进行下一步.  
	    一个电脑只需安装一次.(已经安装过就跳过这步).  
	    - `sudo gem install jekyll bundler`  
	        这里其实安装了两个: jekyll & Bundler

4. 终端cd到 下载的文件夹里面:  
	    - `jekyll new . --force`  
	      这个是不覆盖原来内容的命令.如果是空的文件夹 可以使用:`jekyll new .`  
	        这里的 . 是当前文件夹的意思  
	    - `bundle install`  
	        这步会帮你安装各种依赖文件  
	    - `bundle exec jekyll serve`  
	        这步开启本地预览: 打开浏览器 http://localhost:4000  有内容就对了.  
5. 将文档保存（修改）为「日期 + 标题」的模式，如：「2015-04-27-Like-Kissing.md」. 
6. 将 md 文档放到 `_posts` 文件夹里. 再去刷新浏览器的本地预览 就能看到变化了.  
7. GitHub for Mac 客户端 commit 和 sync，稍等片刻新添加的博文就会自动发布到博客里啦.  
8. 浏览器输入 Xu-Jian.github.io  (把xu-jian 改成你自己的github账户名) 能看博客效果.  






## jekyll Tips ★★★★★
- 渲染所有文件
`bundle exec jekyll serve`
- 忽略文件更新
`bundle exec jekyll serve --unwatch`
默认文章一旦改变就重新生成的,当你1000+文章时候 生成一次得好久 还耗费电脑资源!!!
- 渲染指定数量文件
`bundle exec jekyll serve --limit_posts 15`
> 创建主题时.如果文件多 会很耗时.
- 指定端口预览
`bundle exec jekyll serve --port 3999`
> 开启多个本地预览时候用

- 批量修改文件名
> 如:每个大类都是一个年份.把某个大类的所有文章都改成一个年份.可以实现自定义排序

- 批量修改文件内容: 如改标签/大类
> 改大类名非常方便啊
  coda2软件 →  查找功能 → 打开post文件夹  →查找 categories: Blog 替换成 categories: Blogs

- jekyll博客文件结构
	只要看 `_layouts` 文件夹里面的 default.html.
	再结合 `_includes` 文件夹里面的内容就可以知道了.
	> default.html 会用 inclide 语法包含一些 `_includes`文件夹里面的文件.




## 主题个性化定制

### `_config.yml` 主要配置文件:
- 修改书签栏上显示的标题: title
- 修改博客顶栏的邮箱: email
- 修改博客顶栏 github 主页链接: githubHomeURL
- 修改博客顶栏 github readme链接: githubReadmeURL
- 修改博客顶栏 codePen 链接: `codePen_url`


### 增删博客顶部的图标(链接):
- 增加: 自己搜阿里的 iconfont
- 删除: `_includes` → topbar.html → 看注释就会了
- 链接: topbar.html 里直把href 改成你自己的也可以.

### 大类/标签/文件 默认宽度
main.css → #cateDiv / #tagDiv / #fileNameDiv → 修改 flex-basis: ???px;


### 改大类/标签/文件 背景颜色
main.cs 
这里要注意下 拖动条的颜色.
拖动条有点宽(容易拖动啊)由是左右两部分组成的.
修改背景颜色 记得这里也一起改掉.
总的 3条拖动条:
- 标签拖动条: lineLeft-left, lineLeft-right
- 文章拖动条: lineRight-left, lineRight-right
- 文章结构条: lineSide-left, lineSide-right


### 右下角的三个小图标
default.html → arrowNav div下 → 绝对定位


### favicon 书签图标

	<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
自己放一个 png到博客根目录就可以了.

### 自定义域名
CNAME 文件，
如果有独立域名请修改该文件；
如果没有，则删掉该文件；


### Github Star 按钮(左上角)
topbar.html → 找ID= githubstar → 按照注释改.



### service worker 缓存
默认开启所有除了 CDN 的文件. 包括 main.css man.js
如果你修改了 css 文件. 
必须改 sw.js 文件 (比如加减个空格,只要sw.js文件有变化 就会重新载入缓存.你的css文件的变化也能生效了.)
更新缓存 要关闭本地浏览器中 所有和这个页面有关的页面..  再重新加载.






## 版权 MIT
[各版权区别][2]

使用本主题请先Star.




[1]:	https://0214.help
[2]:	http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html

[image-1]:	http://oduizitoj.bkt.clouddn.com/2017-02-05-Screen%20Shot%202017-02-05%20at%2019.29.58.png "主题预览高清图"
[image-2]:	http://oduizitoj.bkt.clouddn.com/2017-02-05-Screen%20Shot%202017-02-05%20at%2017.06.06.png "Mac Ulysses 标签设置参考图"