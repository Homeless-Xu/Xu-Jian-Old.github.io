# [CMS-Jekyll](https://0214.help)

> 大类: 不能有英文的.; (可以有:-)不然不能过滤出对应标签&文章.
> 标签: 不能有下划线; 不能有空格(有空格就是多标签了.本主题不支持)

![](http://oduizitoj.bkt.clouddn.com/2017-02-03-Screen%20Shot%202017-02-03%20at%2014.04.34.png)

## 主题重点
* 所有排序都是按照 文件名上的时间排序. 时间越旧拍越上面.

## 建议排序方法:
* 每个大类一个年份.
* 某大类下的每个标签一个月份.
* 某标签下的每篇文章一个日期.



## Done (主要功能)
* [x] Flex + absolute 上下布局
* [x] 手写拖动条 + 手写滚动条 + Nprogress加载进度条 + PJAX
* [x] 三级标签过滤: Categories → Tags → fileName 
* [x] 三级标签排序: 时间越旧拍越上面.
* [x] 自动高亮1: 点击文章自动高亮对应 Tags & Categories.
* [x] 自动高亮2: 文章滚动 自动高亮右侧文件结构栏对应标题
* [x] 文件结构栏: 支持过滤出 h2-h5 (h1是文章标题.这里不显示)
* [x] 文件结构栏: 锚点跳转.点击标题 跳转到文章对应位置
* [x] 谷歌网站统计分析 + SSL/HTTPS + 图片七牛CDN

## Done (次要功能)
* [x] 发布主题到 Rubygems
* [x] Github + Coding 双线部署
* [x] 移动端界面适配
* [x] 404页面.
* [x] 部分SEO
* [x] 代码中文详细注释
* [x] 右下角回到顶部按钮
* [x] 阿里iconfont 代替 fontawesone


## ToDo
* [ ] JS 上下键 控制高亮光标.
* [ ] SASS
* [ ] 缓存
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

## issues
- 左右拖动 会选中文字.....


## 主题安装方法 (Mac)
两种情况: 
- 已安装jekyll 也就是换主题   (本文介绍)
- 未安装jekyll 也就是全新安装 (看官方首页文档)





## Mac jekyll 环境安装(可选): 
一个电脑只需安装一次.(已经安装过就跳过这步) 
1. `sudo gem install jekyll bundler`
	
	jekyll & Bundler 安装成功后:
	可以 在终端 执行 jekyll 命令来使用了.
	两种方法:
	新建一个 jekyll 博客.
	或者直接clone别人的blog, 之后把别人的文章删掉就好了


2. `bundle install`
	   安装依赖的 gem。
	> 报错的话 可能没有安装bundle [官网]
	> `gem install bundler` 

3. `bundle exec jekyll serve`




## *Jekyll 开启本地预览 分两种情况:*
- 空白文件夹 下建立 jekyll → 看jekyll 官网的快速指南.
- 非空文件夹 下建立 jekyll → 如使用别人的主题. 需要使用  `jekyll new . --force`


### 空白文件夹安装步骤:

''  $ gem install jekyll bundler
''  $ jekyll new my-awesome-site
''  $ cd my-awesome-site
''  $ bundle exec jekyll serve
''  → Now browse to http://localhost:4000


### 非空文件夹安装步骤 /  3-jekyll 主题安装详细教程

- clone [本问主题链接 到本地桌面]. 文件夹名称: theme (建议直接clone成品.模板有点问题.)
- 打开终端: `sudo gem install jekyll`  (可选:只需装一次 这个是全局的...) 
- cd 进入 theme 文件夹.  `jekyll new . --force`
- `bundle install`
- `bundle exec jekyll serve`
- 打开浏览器 http://localhost:4000  有内容就对了.
	 这个主题比较特别. 浏览器宽度足够才会自动展开左边的 栏目.











### 主题本地预览:
1. Clone 本主题 下载到本地电脑.
2. 终端 cd 到下载解压后的文件夹.
3. 终端运行 `jekyll new . --force`
>这里的. 是当前文件夹的意思
4. 终端运行 `bundle exec jekyll serve`




## jekyll Tips

- 渲染指定数量文件
`bundle exec jekyll serve --limit_posts 15`
> 创建主题时.如果文件多 会很耗时.

- 指定端口预览
`bundle exec jekyll serve --port 3999`
> 开启多个本地预览时候用











## 版权 MIT
[各版权区别](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

使用本主题请先Star.



