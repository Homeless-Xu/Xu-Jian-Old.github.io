---
layout: post
title:  ServiceWorker
tags: 缓存
categories: Web
---

## 参考资源
[‼️MDN Service Worker API 详解 CN‼️][1]
[‼️★★★★★实例参考★★★★★‼️][2]
[‼️参考实例2 ‼️][3]
[参考资源1][4]
[缓存最佳实践 EN][5]


## 更新SW.js


开发者工具: → application → service workers → update on reload 打勾就可以了!!!!!!!!!







否则 土办法:

先修改sw.js 文件.
然后关闭所有有关页面(127.0.0.1)
重新打来 127.0.0.1
去 开发工具 application → 看 received time


如果更新了缓存文件.要使得缓存变更: 
必须先改变 sw.js里的内容. 
然后关闭本地所有这个网页的页面. 重新载入才能看到更新



## ServiceWorker 简介

服务工作者(Service workers) 本质上充当位于Web应用程序之间，以及浏览器和网络（如果可用）的代理服务器。

它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资产是否驻留在服务器上采取适当的行动。
他们还将允许访问推送通知和后台同步API。









ServiceWorker 提供很多新的能力. 
使得web app 拥有native app 相同的离线体验.消息推送体验.


service worker是一段脚本，与web worker一样，也是在后台运行。
作为一个独立的线程，运行环境与普通脚本不同，所以不能直接参与web交互行为。native app可以做到离线使用、消息推送、后台自动更新，
service worker的出现是正是为了使得web app也可以具有类似的能力。




## ServiceWorker 功能:

1. 后台消息传递
2. 网络代理，转发请求，伪造响应
3. 离线缓存
4. 消息推送
5.  … …  












## 浏览器支持:

Firefox 44+
Chrome  43+
opera   34+


## 使用前提: HTTPS

**如果使用Service Worker,开发者可以拦截连接、修改与过滤响应，权限非常强.**
**所以只有https站点才可以使用service worker，当然localhost是一个特例。**

尽管在部署期间可以通过localhost来使用Service Worker，
但是在网络中的某个公开网站上正式运行时需要安装及使用HTTPS协议。

开发者可以只在使用HTTPS协议的页面上注册Service Worker，这样可以确保浏览器接收到的Service Worker在网络上没有被篡改。
如果开发者想要在服务器中使用HTTPS协议，需要为服务器获取并安装一个TLS证书。







## 查看当前运行 service worker
激活成功之后，打开chrome://inspect/#service-workers
谷歌开发者工具 → application → service worker 也可以查看.

## 使用方法简介

1. 安装
2. 激活
3. 监听 fetch和message事件.
4. 销毁
> 是否销毁由浏览器决定，如果一个service worker长期不使用或者机器内存有限，则可能会销毁这个worker




## ServiceWorker 缓存文件实例
### 一: 成功注册 Service Worker
1.  web 根目录先建立一个 serviceworker.js
内容可以暂时留空(不影响注册). 下面会补充进去
文件名任意.但是文件名必须和下面的.register('serviceworker.js')一致.

2. js脚本添加下面代码进行注册  
	这个只要是js脚本都可以.会自动运行下面的代码就可以.一般onready.
	if (navigator.serviceWorker) {
	    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
	        console.log('service worker 注册成功');
	    }).catch(function (err) {
	        console.log('servcie worker 注册失败')
	    });
	}

注册了serviceworker.js作为当前路径下的service worker。


### 写serviceworker.js代码。

在一个新的service worker被注册以后，首先会触发install事件，
在service-workder.js中，可以通过监听install事件进行一些初始化工作，或者什么也不做。
因为我们是要缓存离线文件，
所以可以在install事件中开始缓存，但是只是将文件加到caches缓存中，
真正想让浏览器使用缓存文件需要在fetch事件中拦截

1. 下载 polufill.js  
	给不支持serviceworker的浏览器提供支持.
[polyfill.js 文件下载. 下载好后重命名. 放到网站根目录][6]

2. serviceworker.js
	importScripts("serviceworker-cache-polyfill.js");
	var CACHE\_NAME="my-site-cache-v1";
	//我们想要缓存的文件
	var urlsToCache=[
	'/',
	'/styles/main.css',
	'/script/main.js'
	];
	  
	//为安装设置回调函数
	self.addEventListener("install",function(event){
	//执行安装过程
	event.waitUntil(
	caches.open(CACHE\_NAME).then(function(cache){
	console.log("被打开的缓存");
	return cache.addAll(urlsToCache);
	})
	);
	});
在我们的回调函数中，我们需要执行以下步骤：
.   打开一个缓存
.   缓存我们的文件
.   确认是否所有的请求是否被缓存




此处你可以看见我们使用我们想要的缓存名来调用caches.open方法，在此之后我们调用cache.addAll方法并且传入我们的文件数组。event.waitUntil方法采用一个Promise对象作为参数并且被用来观察安装时间以及是否成功。
如果所有的文件被成功缓存，Service Worker将被成功安装。如果任何文件被下载失败，将导致安装失败。这可以使你确保所有文件被成功缓存，但也意味着你必须对需要在安装时进行缓存的所有文件进行小心确认。文件越多缓存失败，从而导致Service Worker安装失败的可能性也越大。
此处只是一个示例，你可以在install事件中执行其他处理或避免设置install事件处理函数。







### serviceworker.js 实例2
	var cacheFiles = [
	    'css/main.css',
	    'js/main.js'
	];
	self.addEventListener('install', function (evt) {
	    evt.waitUntil(
	        caches.open('my-test-cahce-v1').then(function (cache) {
	            return cache.addAll(cacheFiles);
	        })
	    );
	});



首先定义了需要缓存的文件数组cacheFile，然后在install事件中，缓存这些文件。  
evt是一个InstallEvent对象,继承自ExtendableEvent，其中的waitUntil()方法接收一个promise对象，直到这个promise对象成功resolve之后，才会继续运行service-worker.js。  
caches是一个CacheStorage对象，使用open()方法打开一个缓存，缓存通过名称进行区分。  
获得cache实例之后，调用addAll()方法缓存文件。
这样就将文件添加到caches缓存中了，想让浏览器使用缓存，还需要拦截fetch事件




3. 拦截fetch事件

	// 缓存图片
	self.addEventListener('fetch', function (evt) {
	    evt.respondWith(
	        caches.match(evt.request).then(function(response) {
	            if (response) {
	                return response;
	            }
	            var request = evt.request.clone();
	            return fetch(request).then(function (response) {
	                if (!response && response.status !== 200 && !response.headers.get('Content-type').match(/image/)) {
	                    return response;
	                }
	                var responseClone = response.clone();
	                caches.open('my-test-cache-v1').then(function (cache) {
	                    cache.put(evt.request, responseClone);
	                });
	                return response;
	            });
	        })
	    )
	});


首先检缓存中是否已经缓存了这个请求，
如果有，就直接返回响应，就减少了一次网络请求。

否则由service workder发起请求，这时的service workder起到了一个中间代理的作用。

service worker请求的过程通过fetch api完成，得到response对象以后进行过滤，查看是否是图片文件，如果不是，就直接返回请求，不会缓存。
如果是图片，要先复制一份response，原因是request或者response对象属于stream，只能使用一次，之后一份存入缓存，另一份发送给页面。  
这就是service worker的强大之处：拦截请求，伪造响应。fetch api在这里也起到了很大的作用。
 
service worker的更新很简单，只要service-worker.js的文件内容有更新，就会使用新的脚本。但是有一点要注意：旧缓存文件的清除、新文件的缓存要在activate事件中进行，因为可能旧的页面还在使用之前的缓存文件，清除之后会失去作用。
 
在初次使用service worker的过程中，也遇到了一些问题，下面是其中两个




4. 问题1. 运行时间




service worker并不是一直在后台运行的。
在页面关闭后，浏览器可以继续保持service worker运行，也可以关闭service worker，这取决与浏览器自己的行为。
所以不要定义一些全局变量，例如下面的代码
	var hitCounter = 0;
  
	this.addEventListener('fetch', function(event) {
	  hitCounter++;
	  event.respondWith(
	    new Response('Hit number ' + hitCounter)
	  );
	});


返回的结果可能是没有规律的：1,2,1,2,1,1,2….，原因是hitCounter并没有一直存在，如果浏览器关闭了它，下次启动的时候hitCounter就赋值为0了
这样的事情导致调试代码困难，当你更新一个service worker以后，只有在打开新页面以后才可能使用新的service worker，在调试过程中经常等上一两分钟才会使用新的，比较抓狂。





5. 问题2. 权限太大

当service worker监听fetch事件以后，对应的请求都会经过service worker。
通过chrome的network工具，可以看到此类请求会标注：from service worker。
如果service worker中出现了问题，会导致所有请求失败，包括普通的html文件。
所以service worker的代码质量、容错性一定要很好才能保证web app正常运行。













## fetch 事件
fetch api与XMLHttpRequest相比，更加简洁，并且提供的功能更全面，资源获取方式比ajax更优雅。
兼容性方面：chrome 42开始支持，对于旧浏览器，可以通过官方维护的polyfill支持。




在页面发起http请求时，service worker可以通过fetch事件拦截请求，并且给出自己的响应。  
w3c提供了一个新的fetch api，用于取代XMLHttpRequest，与XMLHttpRequest最大不同有两点：
     \1. fetch()方法返回的是Promise对象，通过then方法进行连续调用，减少嵌套。ES6的Promise在成为标准之后，会越来越方便开发人员。
      2. 提供了Request、Response对象，如果做过后端开发，对Request、Response应该比较熟悉。前端要发起请求可以通过url发起，也可以使用Request对象发起，而且Request可以复用。但是Response用在哪里呢？在service worker出现之前，前端确实不会自己给自己发消息，但是有了service worker，就可以在拦截请求之后根据需要发回自己的响应，对页面而言，这个普通的请求结果并没有区别，这是Response的一处应用。
下面是在http://www.sitepoint.com/introduction-to-the-fetch-api/中，作者利用fetch api通过fliker的公开api获取图片的例子，注释中详细解释了每一步的作用：




	/* 由于是get请求，直接把参数作为query string传递了 */
	var URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=your_api_key&format=json&nojsoncallback=1&tags=penguins';
  
	function fetchDemo() {
	  // fetch(url, option)支持两个参数，option中可以设置header、body、method信息
	  fetch(URL).then(function(response) {
	    // 通过promise 对象获得相应内容，并且将响应内容按照json格式转成对象，json()方法调用之后返回的依然是promise对象
	    // 也可以把内容转化成arraybuffer、blob对象
	    return response.json();
	  }).then(function(json) {
	    // 渲染页面
	    insertPhotos(json);
	  });
	}
  
	fetchDemo();








### message 事件

页面和serviceWorker之间可以通过posetMessage()方法发送消息，发送的消息可以通过message事件接收到。
这是一个双向的过程，页面可以发消息给service worker，service worker也可以发送消息给页面，由于这个特性，可以将service worker作为中间纽带，使得一个域名或者子域名下的多个页面可以自由通信。
















## 使用方法详解


1. body 加入下面js代码来判断是否支持 serviceWorker.

	<script>
	if (navigator.serviceWorker) {
	// 注册Service Worker scope表示作用的页面的path
	// register函数返回Promise
	navigator.serviceWorker.register('./service-worker.js', {scope: './'}) 
	.then(function (registration) {
	console.log(registration);
	})
	.catch(function (e) {
	console.error(e);
	})
	} else {
	console.log('Service Worker is not supported in this browser.')
	}
	</script>


2. 创建一个 service-worker.js

	importScripts('js/cache-polyfill.js'); // cache 扩展
	  
	var CACHE\_VERSION = 'app-v1'; // 缓存文件的版本
	var CACHE\_FILES = [ // 需要缓存的页面文件
	'/',
	'images/background.jpeg',
	'js/app.js',
	'css/styles.css'
	];
	  
	  
	self.addEventListener('install', function (event) { // 监听worker的install事件
	event.waitUntil( // 延迟install事件直到缓存初始化完成
	caches.open(CACHE\_VERSION)
	.then(function (cache) {
	console.log('Opened cache');
	return cache.addAll(CACHE\_FILES);
	})
	);
	});
	  
	self.addEventListener('activate', function (event) { // 监听worker的activate事件
	event.waitUntil( // 延迟activate事件直到
	caches.keys().then(function(keys){
	return Promise.all(keys.map(function(key, i){ // 清除旧版本缓存
	if(key !== CACHE\_VERSION){
	return caches.delete(keys[i]);
	}
	}))
	})
	)
	});
	  
	self.addEventListener('fetch', function (event) { // 截取页面的资源请求
	event.respondWith( // 返回页面的资源请求
	caches.match(event.request).then(function(res){ // 判断缓存是否命中
	if(res){  // 返回缓存中的资源
	return res;
	}
	requestBackend(event); // 执行请求备份操作
	})
	)
	});
	  
	function requestBackend(event){  // 请求备份操作
	var url = event.request.clone();
	return fetch(url).then(function(res){ // 请求线上资源
	//if not a valid response send the error
	if(!res || res.status !== 200 || res.type !== 'basic'){
	return res;
	}
	  
	var response = res.clone();
	  
	caches.open(CACHE\_VERSION).then(function(cache){ // 缓存从线上获取的资源
	cache.put(event.request, response);
	});
	  
	return res;
	})
	}








## Service Worker 生命周期


http://7tszky.com1.z0.glb.clouddn.com/FnDKaEExj8-US06Q9FqlBBLqx0jz


1. 安装 install
2. 激活 activate 后进入正常工作状态.
3. 当它负责的页面在浏览器被打开. 就会对页面的请求进行处理.  
	其他情况下.处于暂停状态 不占用内存和cpu





## 检测是否生效
开发工具 → 网络请求 → from serviceWorker 就生效了.


## Chrome serviceWorker 调试工具
1. 看正在运行的 serivce worker：chrome://inspect/#service-workers


2. ervice Worker调试（查看console.log输出,也可注销worker）


3. 隐藏的Resources查看选项,开启步骤如下
2. 进入 chrome://flags 开启 ‘Enable DevTools Experiments’.
3. 打开DevTools， 进入 Setting \> Experiments , 连续按shift键6下
4. 在DevTools的Resources页面里就能看到刚被开启的隐藏功能：




## 总结
Service Worker是继web Worker后又一个新的线程，
这个线程比web worker独立得更彻底，可以在页面没有打开的时候就运行。

作为一个页面与服务器之间中间层，
Service Worker可以捕获它所负责的页面的请求，并返回相应资源，这使离线web应用成为了可能。这也是Service Worker被提出的一个重要目的。

虽然现在支持的浏览器和平台还不多，而且还在试验阶段，但已被W3C制定规范。




[1]:	https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API
[2]:	https://gold.xitu.io/entry/58908cb51b69e600596dff4d
[3]:	https://75team.com/post/lifecycle.html#toc-681
[4]:	http://imweb.io/topic/56592b8a823633e31839fc01
[5]:	https://jakearchibald.com/2016/caching-best-practices/
[6]:	https://github.com/dominiccooney/cache-polyfill/blob/master/index.js