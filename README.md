# 浏览器要求:
浏览器推荐: Chrome >> Firefox >> Safari;   
不支持 IE8-; IE9+ 未测试.
> 主题核心过滤功能使用 HTML5 的 data属性.

# CMS-Jekyll: 
> 大类: 不能有英文的.; (可以有:-)不然不能过滤出对应标签&文章.  
> 标签: 不能有下划线_; 不能有斜杆/;不能有空格(有空格是多标签.本主题不支持)

## CMS-Jkeyll-Theme Demo:   <a href="https://www.0214.live">0214.live</a>

## CMS-Jkeyll-Theme Preview:
<img src="http://oduizitoj.bkt.clouddn.com/2017-02-20-ScreenShot.jpeg">



## Done (主要功能)

* [x] 三级标签过滤 & 统一时间排序: Categories → Tags → fileName 
* [x] 拖动条 + 滚动条 + Nprogress进度条 + PJAX
* [x] 自动高亮:  点击文件名自动高亮并过滤出对应 Tags & Categories.
* [x] 文件结构栏: 文章滚动自动高亮标题(h2-h5), 并实现锚点跳转.
* [x] Service Worker 缓存 (废弃 manifest缓存 )
* [x] Webpack (SASS & ES6 & CSS内联)
* [x] 启用 Lazyload 


## Done (次要功能)
* [x] Git: Github + Coding 双线部署; Github Star数集成
* [x] 谷歌网站统计分析 + SSL/HTTPS
* [x] 所有平台 icon 图标适配 
* [x] 文章可添加meta标签来优化SEO
* [x] 阿里iconfont 代替 fontawesone
* [x] 发布主题到 Rubygems
* [x] 顶栏前后篇 pjax按钮 ( 绑定contentDiv链接实现 )
* [x] 移动端界面适配
* [x] 404页面.



## ToDo
* [ ] 首页文件列表模块化主题+预览(card-theme)
* [ ] gzip压缩
* [ ] JS 上下键 控制高亮光标.
* [ ] 多主题切换/多布局切换
* [ ] 搜索功能(谷歌CES搜索)
* [ ] 左右抽屉显隐效果 留白问题...
* [ ] 在线编辑功能??
* [ ] 开放UGC???
* [ ] 最爱文章?
* [ ] 移动端左右滑动
* [ ] URL 自动链接
* [ ] 前后篇 高亮设置.
* [ ] 文章分享功能
* [ ] 白噪声功能.
* [ ] require.js 按需加载..
* [ ] 文章阅读进度条.
* [ ] 三级导航条



## 待定功能
* [ ] 侧边栏: 首次点击文章显示.  然后隐藏掉... 手动开启
* [ ] 文章浏览时间, 浏览量, 字数统计
* [ ] 文章分享功能.



## GiveUP
* [ ] 七牛CDN加速 (域名必须备案! HTTPS 还要上传证书信息.... )
* [ ] CDN 请求合并 (CDNJS.com 需年费..)
* [ ] Firebase 数据库(聊天功能. 被墙.实在慢.寻找国内替代)




## issues
- 左右拖动 会选中文字.....







## 项目架构

.
├─ webpack/                    # Webpack 目录  
├─ _site/                      # jekyll build 默认生成的所有文件都在这里.也就是我们看到的网页文章(每篇文章一个html)  
├─ node_modules/               # 就是因为这个文件夹才 必须新建个 src 文件夹. 不然jekyll build.就会处理这个文件夹. 耗时30+秒. 不能忍!!!  
├─ src/                        # jekyll build 所需要的文件都在这个. 这个文件夹非常重要.  
│   ├─ assets/                 # 放置需要经由 Webpack 处理的静态文件  
│   ├─ components/             # 组件（COMPONENT）  
│   ├─ redux/                  # Redux 一箩筐  
│   │   ├─ actions/            # （ACTION）  
│   │   ├─ reducers/           # （REDUCER）  
│   │   ├─ store/              # （STORE）  
│   ├── routes/                # 路由（ROUTE）  
│   ├── services/              # 服务（SERVICE，用于统一管理 XHR 请求，这是从 Vue Demo 中直接复制过来的）  
│   ├── utils/                 # 工具库（UTIL）  
│   │   ├─ HoC/                # 高阶组件（HOC，全称 Higher Order Component）  
│   │   ├─ mixins/             # 混合（MIXIN）  
│   ├── views/                 # 路由视图基页（VIEW）  
│   │   ├─ layout/             # 全局布局  
│   ├── app.js                 # 启动文件  
│   ├── index.html             # 静态基页  
├── _config.yml                # jekyll 的配置文件  
├── CNAME                      # 博客自定义域名设置  
├── entry.js                   # webpack 入口文件  
├── Gemfile                    # jekyll build 需要  
├── Gemfile.lock               # jekyll build 需要  
├── jekyll-theme-CMS-2.2.2.gem # 主题发布到 Gemruby 需要文件  
├── jekyll-theme-CMS.gemspec   # 主题发布到 Gemruby 需要文件  
├── package.json               # npm 配置文件  
├── README.md                  # 项目的 readme 文件  
├── webpack.config.js          # webpack 配置  




## 排序实例:(主题重点)  

   - 所有排序都是按照_Posts里文件名的时间排序. 时间越旧拍越上面.  
	 > 一个类下的 这个类下的所有文件名都是一个年份的有效.    


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
根目录CNAME 文件(注意文件没有后缀的).
如果有独立域名请修改该文件；  
如果没有，则删掉该文件；  


### Github Star数图标

topbar.html → 找ID= githubstar → 按照注释改.
由于国内网络环境.这个严重影响加载.不建议开启.


### service worker 缓存
默认开启所有除了 CDN 的文件. 包括 main.css man.js
如果你修改了 css 文件.要查看修改后效果. 最简单的就是清空浏览器缓存.再重新加载.





## 版权 MIT

