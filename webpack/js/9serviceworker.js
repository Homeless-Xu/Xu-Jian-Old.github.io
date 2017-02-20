$(function(){
  if (navigator.serviceWorker) {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
          console.log('service worker 注册成功');
      }).catch(function (err) {
          console.log('servcie worker 注册失败')
      });
  }
});




// Service-Worker 文件缓存. 注册成功. 也是激活的 但是不知道怎么用.........



