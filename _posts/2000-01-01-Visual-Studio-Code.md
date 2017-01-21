---
layout: post
title: Visual-Studio-Code
tags: VSC
categories: Tool
---

[官方说明文档 en][1]

[掘金 非常详细教程][2]


[官方插件平台][3]


## JS调试



~~~
Notice the type is set to node and the program to start is set to /src/server/app.js (choose your path accordingly). It will also stop upon entry, so you can debug on the first entry point to the app.js. This is important when you want to see how the node server is being started.
~~~
{: .language-ruby}




1. 打开 js文件.
2. 按 F5
3. 修改name 成文件夹名字
4. 修改program成 要调试的js文件名字
5. debug → 打断点 ....
6. 浏览器 打开 



~~~
"name":"Launch helloworld",
"type":"node",
"program":"examples/helloworld/bin/www",
~~~
{: .language-ruby}

[1]:	https://code.visualstudio.com/docs/languages/html
[2]:	https://gold.xitu.io/entry/56ffa8e55bbb50004da42ad0
[3]:	https://marketplace.visualstudio.com/vscode