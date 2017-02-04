# [CMS-Jekyll](https://0214.help)
> 标签: 不能有下划线; 不能有空格(有空格就是多标签了.本主题不支持)

![](http://oduizitoj.bkt.clouddn.com/2017-02-03-Screen%20Shot%202017-02-03%20at%2014.04.34.png)

## 主题重点
* 所有排序都是按照 文件名上的时间排序. 时间越旧拍越上面.

## 建议排序方法:
* 每个大类一个年份.
* 某大类下的每个标签一个月份.
* 某标签下的每篇文章一个日期.


## 功能简介:
* 四级目录: Categories → Tags → fileName → fileStructure
* 点击文件自动高亮对应 Tags & Categories.
* 右下角按钮: 回到网页顶部; 左右方向键 显隐分类.
* 代码里有详细中文说明.非常适合前端入门


## Done
* [x] Flex+absolute 布局
* [x] 大类/标签/文件名 过滤+排序+自动高亮
* [x] 提取+自动高亮对应文件结构+文件结构锚点跳转
* [x] 拖动条+滚动条+加载进度条
* [x] 谷歌网站统计分析 + SSL + 部分CDN
* [x] 404页面.
* [x] 部分SEO
* [x] pjax


## ToDo	:


* [] SASS
* [] 缓存
* [] 搜索功能
* [] 代码高亮
* [] SEO优化
* [] 网页性能优化
* [] 左右抽屉显隐效果 留白问题...
* [] 在线编辑功能??
* [] 开放UGC???
* [] 最爱文章?
* [] 文章预览?
* [] 移动端适配

## issues
- 左右拖动 会选中文字.....


## 主题使用(Mac)
两种情况: 
已安装jekyll 也就是换主题
未安装jekyll 也就是全新安装




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






[官方入门文档-全新安装必看]

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








## 版权 GPL
[各版权区别](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

使用本主题请先Star.



