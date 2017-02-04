---
layout: post
title: "API-Google Search"
tags: API
cateories: Web
---



Google Customer Search Api
可以搜索图片和文字信息，并以Json的形式返回结果


*使用步骤: *





1. [Google API管理器][1] 创建项目 → 启用 → 获得 API 密钥 AIzaSyCYTDZBFGBjBn8aSU8zj0OhID-7hCVeyAM
2. 创建 [自定义搜索引擎][2] 
3. 创建成功:有三个选项. `获取代码` 这个就是js脚本. 都不用你写.Google 帮你写好了....
放到body里面就可以.


输入关键词进行搜索，包括API方式、公开网址方式


[https://cse.google.com/cse/publicurl?cx=001697365603300566497:7rh2t2\_q2s4][3]



pages
分页信息，展示在页脚
results
搜索到的items





*如何使用自定义搜索引擎*

- 第一种方式直接将第二节中的代码拷贝出来，并嵌入到自己web页面中；
- 第二种方式是分析自定义搜索引擎请求的url结构和请求方式，然后去构造搜索的url，模拟请求获取查询结果。
 模拟请求:

[http://pan.baidu.com/pcloud/album/file?album\_id=1717011941890722332&uk=520531535&fsid=198987471126416][4]


[https://pan.baidu.com/pcloud/album/file?album\_id=5117572557546986448&uk=2164806424&fsid=1054756329586933][5]

[https://www.google.com/url?q=https://pan.baidu.com/wap/share/home%3Fuk%3D4013028528%26third%3D1&sa=U&ved=0ahUKEwjt0dDf8q\_QAhVLEbwKHUYRA\_gQFggEMAA&client=internal-uds-cse&usg=AFQjCNF4-x8xRIK4NhXT7rE6vX4HZSlctA][6]

通过分析，搜索引擎搜索请求的url为：

https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered\_cse&num=10&hl=zh\_CN&prettyPrint=false&source=gcsc&gss=.com&sig=0c3990ce7a056ed50667fe0c3873c9b6&cx=搜索引擎ID&q=数学&sort=&googlehost=www.google.com

url主要参数分析：
• cx：搜索引擎ID
• q：搜索关键
• sort：搜索结果排序方式
构造上面这种模式的url，采用GET的方式去请求，会得到如下返回的json数据，json数据包含了搜索结果以及附带属性（搜索结果总数等）。如下图所示。






[1]:	https://console.developers.google.com/apis/dashboard?project=bbs-india
[2]:	https://cse.google.com/cse/all
[3]:	https://cse.google.com/cse/publicurl?cx=001697365603300566497:7rh2t2_q2s4
[4]:	http://pan.baidu.com/pcloud/album/file?album_id=1717011941890722332&uk=520531535&fsid=198987471126416
[5]:	https://pan.baidu.com/pcloud/album/file?album_id=5117572557546986448&uk=2164806424&fsid=1054756329586933
[6]:	https://www.google.com/url?q=https://pan.baidu.com/wap/share/home?uk=4013028528&third=1&sa=U&ved=0ahUKEwjt0dDf8q_QAhVLEbwKHUYRA_gQFggEMAA&client=internal-uds-cse&usg=AFQjCNF4-x8xRIK4NhXT7rE6vX4HZSlctA