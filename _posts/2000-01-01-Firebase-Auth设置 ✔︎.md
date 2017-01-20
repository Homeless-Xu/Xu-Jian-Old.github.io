---
layout: post
title: Firebase-Auth设置✔︎
tags: Ⓦ-Firebase
categories: Tool
---

提供很多种丹尼尔高亮方式. 免得用户再去注册账户的麻烦…


## Github 验证


控制面板 → 左边 Authentication → 提供商: github → 启用 → 设置客户端ID/密钥

### 获取客户端ID+密钥

去github 注册个 OAuth 应用就可以获得.
[Github OAuth应用注册网址][1]

注册时候 需要把 firebase github验证开启 弹出框下面的 网址 填写到 github 注册应用界面的 回调URL里.


您可以将 GitHub 身份验证集成到您的应用中，
**让您的用户可使用自己的 GitHub 帐户进行 Firebase 身份验证。**




您可以将 GitHub 身份验证集成到您的应用中，让您的用户可使用自己的 GitHub 帐户进行 Firebase 身份验证。 您可以使用 Firebase SDK 实施登录流程，或者手动实施 GitHub OAuth 2.0 流程，并将得到的访问令牌传输至 Firebase，从而集成 GitHub 身份验证。




## 登录网页设置

你需要有个... 登录html页面啊.不然怎么登录..

然后还要 有个数据库 不然用户信息存到哪...








[1]:	https://github.com/settings/applications/