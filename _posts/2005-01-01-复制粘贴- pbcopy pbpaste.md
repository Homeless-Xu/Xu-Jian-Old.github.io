---
layout: post
title: "复制粘贴: pbcopy pbpaste"
tags: 脚本
categories: SHELL
---




*pbcopy 接受命令行中的标准输出 作为剪切板的内容.*
*pbpaste 将剪贴板中的内容输出到标准输出.*



读取&写入 系统剪切板的目录. 
支持 Unix管道操作: 
- `ls ~ | pbcopy //  复制所有用户目录下的文件`
- `pbcopy < blog.txt // 复制 blog.txt 里面的内容 而不是blog.txt.`





