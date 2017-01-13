---
layout: post
title: 生成文章列表数据的json模板
tags: JSON
categories: Jekyll
---



首先，生成文章列表数据的json模板
（记得保存的是json格式的文件）：

~~
{% raw %}
---
layout: nil
---

[
{% for post in site.posts %}
  {"title":"{{post.title}}", 
  "url":"{{site.url}}{{post.url}}", 
  "date":"{{ post.date | date:'%Y-%m-%d' }}", 
  "tags":[{% for tag in post.tags %}"{{tag}}"{% if forloop.last == false %} ,{% endif %}{% endfor %}]}
  {% if forloop.last == false %},{% endif %}{% endfor %}
]
{% endraw %}
~~~
{: .language-ruby}
