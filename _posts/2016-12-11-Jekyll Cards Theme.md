---
layout: post
title:  Jekyll Cards Theme
tags: Jekyll
categories: Blog
---

### Jekyll Carsd Theme Template - [Demo][1] (示范模板)

**The Theme features (特点):** 

- Gulp
- Stylus (Jeet, Rupture, Kouto Swiss)
- Live Search
- Offcanvas Menu
- SVG icons
- Very very small and fast!
- Shell Script to create posts
- Tags page
- Series page
- About Me page
- Feed RSS
- Sitemap.xml
- Color Customization
- Info Customization

### Basic Setup

1. [Install Jekyll][2]
2. Fork the [Will Jekyll Template][3]
3. Clone the repo to location that you just forked.
4. Edit `_config.yml` to personalize your site.
5. Check out the sample posts in `_posts` to see examples for assigning categories and tags, and other YAML data.
6. Read the documentation below for further customization pointers and documentation.


### Site and User Settings

You have to fill some informations on `_config.yml` to customize your site.

~~~
# Site settings
description: A blog about lorem ipsum dolor sit amet
baseurl: "" # the subpath of your site, e.g. /blog/
url: "http://localhost:3000" # the base hostname & protocol for your site 

# User settings
username: Lorem Ipsum
user_description: Anon Developer at Lorem Ipsum Dolor
user_title: Anon Developer
email: anon@anon.com
twitter_username: lorem_ipsum
github_username:  lorem_ipsum
gplus_username:  lorem_ipsum
disqus_username: lorem_ipsum
~~~
{: .language-ruby}

### Header Name

To use the power of CSS Content and media query, the header name is defined on [src/styl/\_header.styl](). Change to your prefered name.

### Color customization

  
All color variables are in `src/styl/variable`.  
To change the main color, just set the new value at `main` assignment. Another colors are for texts and the code background color.



---

### Theme Colors
自定义主题颜色.  
修改theme-color.styl文件就可以 添加自己的颜色.  
比如 第七行 下面加 青色.  
`post-aqua: #00FFFF,`
`post-orange: #FFA500,`

然后新建.md  
main-class: ‘aqua’

这就把 标记名字改了. 实际颜色没改 原因未知.


Every post has a main color that is defined on [src/styl/\_theme-colors.styl](). Just create a new color with the prefix `post-` and define your main-class: 'css' and color: '#2DA0C3' on every post you create.


### Creating posts

You can use the `initpost.sh` to create your new posts. Just follow the command:

```
./initpost.sh -c Post Title
```

The new file will be created at `_posts` with this format `date-title.md`.



---

### Front-matter  头部信息
每新建一篇文章(blog), 都需要把 特别的头信息.放到新文章中.  

<b style="margin-left:-4rem;"> Example: </b>
~~~
layout: post
title: "Falando sobre RSCSS"
date: 2016-02-07 18:48:16
image: '/assets/img/rscss/rscss.png'
description: 'Escrevendo CSS sem perder a sanidade. Aprenda uma metodologia que pode salvar muitas dores de cabeça.'
main-class: 'css'
color: '#2DA0C3'
tags:
- css
- metodologia
- frontend
categories:
twitter_text: 'Escrevendo CSS sem perder a sanidade.'
introduction: 'Escrevendo CSS sem perder a sanidade. Com essa introdução, Rico St. Cruz o criador chama a atenção de todos sobre uma metodologia melhor para se escrever CSS.'
~~~
{: .language-ruby}




[1]:	http://willianjusten.com.br/cards-jekyll-template
[2]:	http://jekyllrb.com
[3]:	https://github.com/willianjusten/will-jekyll-template/fork
