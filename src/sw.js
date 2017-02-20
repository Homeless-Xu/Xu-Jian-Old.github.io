'use strict';

const version = 'v20170210-11';
const __DEVELOPMENT__ = false;
const __DEBUG__ = false;
const offlineResources = [
//  '/',
  '/offline.html',
  '/offline.svg'
];

// 下面是不缓存域名列表 CDN文件就不要缓存了..
// 去掉前面两斜杆就不缓存了. 有斜杆是缓存的
const ignoreFetch = [
//    /https?:\/\/oduizitoj.bkt.clouddn.com\//,
    'js/main.js',
    'css/main.css',
    'js/bundle.js',
//  /https?:\/\/cdn.bootcss.com\//,
//  /https?:\/\/cdn.bootcss.com\//,
//  /https?:\/\/at.alicdn.com\//,
//  /https?:\/\/www.google-analytics.com\//,
];


//////////
// Install
//////////
function onInstall(event) {
  log('install event in progress.');

  event.waitUntil(updateStaticCache());
}

function updateStaticCache() {
  return caches
    .open(cacheKey('offline'))
    .then((cache) => {
      return cache.addAll(offlineResources);
    })
    .then(() => {
      log('installation complete!');
    });
}

////////
// Fetch
////////
function onFetch(event) {
  const request = event.request;

  if (shouldAlwaysFetch(request)) {
    event.respondWith(networkedOrOffline(request));
    return;
  }

  if (shouldFetchAndCache(request)) {
    event.respondWith(networkedOrCached(request));
    return;
  }

  event.respondWith(cachedOrNetworked(request));
}

function networkedOrCached(request) {
  return networkedAndCache(request)
    .catch(() => { return cachedOrOffline(request) });
}

// Stash response in cache as side-effect of network request
function networkedAndCache(request) {
  return fetch(request)
    .then((response) => {
      var copy = response.clone();
      caches.open(cacheKey('resources'))
        .then((cache) => {
          cache.put(request, copy);
        });

      log("(network: cache write)", request.method, request.url);
      return response;
    });
}

function cachedOrNetworked(request) {
  return caches.match(request)
    .then((response) => {
      log(response ? '(cached)' : '(network: cache miss)', request.method, request.url);
      return response ||
        networkedAndCache(request)
          .catch(() => { return offlineResponse(request) });
    });
}

function networkedOrOffline(request) {
  return fetch(request)
    .then((response) => {
      log('(network)', request.method, request.url);
      return response;
    })
    .catch(() => {
      return offlineResponse(request);
    });
}

function cachedOrOffline(request) {
  return caches
    .match(request)
    .then((response) => {
      return response || offlineResponse(request);
    });
}

function offlineResponse(request) {
  log('(offline)', request.method, request.url);
  if (request.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)) {
    return caches.match('/offline.svg');
  } else {
    return caches.match('/offline.html');
  }
}

///////////
// Activate
///////////
function onActivate(event) {
  log('activate event in progress.');
  event.waitUntil(removeOldCache());
}

function removeOldCache() {
  return caches
    .keys()
    .then((keys) => {
      return Promise.all( // We return a promise that settles when all outdated caches are deleted.
        keys
         .filter((key) => {
           return !key.startsWith(version); // Filter by keys that don't start with the latest version prefix.
         })
         .map((key) => {
           return caches.delete(key); // Return a promise that's fulfilled when each outdated cache is deleted.
         })
      );
    })
    .then(() => {
      log('removeOldCache completed.');
    });
}

function cacheKey() {
  return [version, ...arguments].join(':');
}

function log() {
  if (developmentMode()) {
    console.log("SW:", ...arguments);
  }
}

function shouldAlwaysFetch(request) {
  return __DEVELOPMENT__ ||
    request.method !== 'GET' ||
      ignoreFetch.some(regex => request.url.match(regex));
}

function shouldFetchAndCache(request) {
  return ~request.headers.get('Accept').indexOf('text/html');
}

function developmentMode() {
  return __DEVELOPMENT__ || __DEBUG__;
}

log("Hello from ServiceWorker land!", version);

self.addEventListener('install', onInstall);

self.addEventListener('fetch', onFetch);

self.addEventListener("activate", onActivate);







/* 参考 2

const cacheUrl = [
  '/css/main.css',
  '/js/main.js'
];
const cacheName = 'my-site-cache';

// install阶段
self.addEventListener('install', (event) => {
  console.log('sw event: install');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('open cache');
      return cache.addAll(cacheUrl);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(res => {
    if (res) {
      console.log('match');
      return res;
    }
    return fetch(event.request);
  }));
});



*/








/* 参考示例1: 

importScripts("serviceworker-cache-polyfill.js");
var CACHE_NAME="my-site-cache-v1";
//我们想要缓存的文件
var urlsToCache=[
    '/',
    '/css/main.css',
    '/js/main.js'
];

//为安装设置回调函数
self.addEventListener("install",function(event){
    //执行安装过程
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log("被打开的缓存");
            return cache.addAll(urlsToCache);
        })
    );
});



 */

