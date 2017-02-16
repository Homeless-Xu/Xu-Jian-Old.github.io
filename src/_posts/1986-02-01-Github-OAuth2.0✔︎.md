---
layout: post
title: Github-OAuth2.0✔︎
tags: Git
categories: Tooles
---

## 注册你的应用

**每一个成功注册的 OAuth 应用会有一个唯一的 Client ID 和 Client Secret**
**不要共享你的Client Secret**






### 授权回调URL

如果是用 firebase的话 只要把 firebase 里开启github登录验证 下面自动给你生成的网址 添加到 授权url 就可以了


[Git OAuth应用注册界面 ][1] 除了 授权回调URL 这个 其他内容可以随意填写.

**授权回调URL 是配置OAuth应用最重要的部分.**

*它是 github 在成功认证用户之后 返回的 回调URL*

比如:
本地实例的地址被设置为 http://localhost:4567
所以让我们将回调 URL 填写为 http://localhost:4567/callback。




想用 OAuth 登录应用必须有一个服务器.

用code 与 secret 与OAuth服务器交换token













## 大致过程:


1. 在 github 上建一个 application，  
	设置 Homepage URL(homeUrl)， 和 Authorization callback URL(backUrl)

2. 用户访问 homeUrl 点击登录按钮，  
	浏览器把用户转到 https://github.com/login/oauth/authorize

3. 用户同意对该 app 的授权，  
	github 会把用户转到你原先填的 backUrl，并带上一个code  
	github 应该是根据 homeurl 判断用户在使用哪个 application的

4. 你自己的服务器 接收到这个请求后，  
	用 code 和 application 的 secret id 向 github 换取 token。

5. 你自己的服务器 把 token 放到用户浏览器中?????

6. 然后，用户就可以拿着这个 token 修改用户 github 上的内容了（如果应用包含这个权限了的话）


可以看出，想通过 OAuth2 得到 用户的 token，操作github 上内容。你自己必须有一个服务器来和 github OAuth 服务器通信。
第五步的疑问：可以用浏览器带 token 使用 github api 吗，还是这个也必须由 自己的服务器 来做？






#### 设置 Authorization callback URL(backUrl)
如果用户同意对你app的授权.github 会把用户转到你原先填的 backUrl，并带上一个code（github 应该是根据用户原先所在 url 查找用户在使用那个 application吧？）






2.  用户访问 homeUrl 点击登录按钮，浏览器把用户转到 https://github.com/login/oauth/authorize
3.  如果用户同意对该 app 的授权，github 会把用户转到你原先填的 backUrl，并带上一个code（github 应该是根据用户原先所在 url 查找用户在使用那个 application吧？）。
4.  你自己的服务器 接收到这个请求后，用 code 和 application 的 secret id 向 github 换取 token。
5.  你自己的服务器 把 token 放到用户浏览器中。// TODO: 不太确定??
6.  然后，用户就可以拿着这个 token 修改用户 github 上的内容了（如果应用包含这个权限了的话）
可以看出，想通过 OAuth2 得到 用户的 token，操作github 上内容。你自己必须有一个服务器来和 github OAuth 服务器通信。
第五步的疑问：可以用浏览器带 token 使用 github api 吗，还是这个也必须由 自己的服务器 来做？



[1]:	https://github.com/settings/applications/new