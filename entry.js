// js 文件引入
  require("./webpack/js/0filter&highlight.js");
  require("./webpack/js/4iconfont.js");
  require("./webpack/js/5mobile.js");
  require("./webpack/js/7structurebar(pjax).js");
  // pjax 必须和这个放一起.. 分开就是不行  奇怪了... 应该是模块的原因
  require("./webpack/js/9btn.js");
  require("./webpack/js/9dragbar.js");
  require("./webpack/js/9ES6-scroll.js");
  require("./webpack/js/9lazyload.js");
  require("./webpack/js/9serviceworker.js");
  require("./webpack/js/9showAll(eye).js");
  // require("./webpack/js/firebase.js");


// require import 区别.
/*
两个都是模块导入. 都不是webpack发明的. 都不能直接用于浏览器.	
于是 webpack 需要 通过 loader (babel) / plugin 将其转义 使得可以用于浏览器.

require 是 nodeJS 的 属于 commonJS 一部分.
import ES2015(也就是es6) 里的新模块规范
	
*/










// SASS 文件引入(import的子sass 写在main.sass中)
require("!style-loader!css-loader!sass-loader!./webpack/sass/main.sass");
// CSS 文件引入
//require("!style-loader!css-loader!./css/main.css");












///// Misc

// document.getElementById('app').innerHTML="这是我第一个打包成功的程序";



// var colors = require('colors'); console.log('Hello,'.red, 'npm!'.green);  






// console.log("Hello, world!")






//var $ = require('jquery');
//$('body').html('Hello');


// import $ from 'jquery';
//$('body').html('Hello');



