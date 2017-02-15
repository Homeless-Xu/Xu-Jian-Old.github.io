---
layout: post
title: "API-Youtube"
tags: API
cateories: Web
---




[Youtube Data API 文档 (en)][1]  

[Codecademy 解题教程][2]
*请求必须参数: APIkey 或者 OAuth2.0 token.*



显示得到的数据:  `showResponse()`


*Search 详解*
key 该参数是你创建google api应用时产生的密钥，这是必需要有的参数
part 有id和snippet两种选择，在这里我们选择snippet,这也是必需要有的一个参数
q 要查询的关键字，必需参数
maxResults 返回结果个数，这个是可选参数









[https://developers.google.com/youtube/v3/code\_samples/javascript][3]  js 例子.

[Google API 控制台][4]
google 帐号 申请 youtube data api v3 的key先.



`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDEHwe7yxJP3ZPVEYNBCXt6VoMsvtgFCFw&part=snippet&maxResults=1&q=测试`

浏览器输入 获取到的数据: 

	{
	 "kind": "youtube#searchListResponse",
	 "etag": "\"5C5HHOaBSHC5ZXfkrT4ZlRCi01A/fJ4AtDFkDNzOwHP-wpsgKj3NUY8\"",
	 "nextPageToken": "CAEQAA",
	 "regionCode": "JP",
	 "pageInfo": {
	  "totalResults": 228760,
	  "resultsPerPage": 1
	 },
	 "items": [
	  {
	   "kind": "youtube#searchResult",
	   "etag": "\"5C5HHOaBSHC5ZXfkrT4ZlRCi01A/wJh-09nR1HLMggRnCO7K_Au2Gqw\"",
	   "id": {
	"kind": "youtube#video",
	"videoId": "t6kKzPCM9QY"
	   },
	   "snippet": {
	"publishedAt": "2016-11-14T17:51:37.000Z",
	"channelId": "UC9sostjLU78T1jlTihWK8rQ",
	"title": "歼20战机现身中国南方 12架同时测试 一外形变化证性能顶尖 | 出鞘",
	"description": "要说明一架隐身战斗机的性能如何，其实最关键的在于细节。歼-20的一个细节就证明了性能的出众，采用了软管折叠探头模式，就连加油舱盖跟弹舱...",
	"thumbnails": {
	 "default": {
	  "url": "https://i.ytimg.com/vi/t6kKzPCM9QY/default.jpg",
	  "width": 120,
	  "height": 90
	 },
	 "medium": {
	  "url": "https://i.ytimg.com/vi/t6kKzPCM9QY/mqdefault.jpg",
	  "width": 320,
	  "height": 180
	 },
	 "high": {
	  "url": "https://i.ytimg.com/vi/t6kKzPCM9QY/hqdefault.jpg",
	  "width": 480,
	  "height": 360
	 }
	},
	"channelTitle": "WUWU秀",
	"liveBroadcastContent": "none"
	   }
	  }
	 ]
	}



返回的结果是json格式的，我们可以使用简单的正则匹配或者是使用相关语言提供的json解析库进行解析








youtube影片有三種權限，API擷取不同權限影片其彼此間結果有些不同，測試結果如下：
• 公開 　
◦ API可取得影片資訊，且一般User在該影片帳號所有影片列表中看的到該影片
• 非公開 　
◦ API可取得影片資訊，但一般User在該影片帳號所有影片列表中看「不」到該影片，但知道影片網址直接帶影片參數一樣可以觀看影片。
• 私人 　
◦ API不可取得任何資訊，一般User看不到也觀看不了該影片。



執行方式、傳遞參數：

知道API URL之後即可直接測試，一開始我分別使用JQuery的$.ajax與$.post直接傳遞參數到該API URL，但兩種測試結果都失敗都會回傳錯誤訊息，由於距離測試時間有點久遠，詳細錯誤訊息已經不太記得了，只記得好像有類似「需要登入」之類的字眼出現。

礙於直接AJAX到API URL的方式失敗，只好繞道而行，改由$.post搭配php達成。






影片咨询 格式:

`var url = "https://www.googleapis.com/youtube/v3/videos?id=影片ID&key=AIzaSyDEHwe7yxJP3ZPVEYNBCXt6VoMsvtgFCFw&part=snippet";`






[1]:	https://developers.google.com/youtube/v3/docs/
[2]:	https://www.codecademy.com/en/tracks/youtube
[3]:	https://developers.google.com/youtube/v3/code_samples/javascript
[4]:	https://console.developers.google.com/?hl=zh-CN