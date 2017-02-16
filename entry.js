// js 文件引入
  require("./webpack/js/0filter&highlight.js");
  require("./webpack/js/5mobile.js");
  require("./webpack/js/7structurebar(pjax).js");
  // pjax 必须和这个放一起.. 分开就是不行  奇怪了...
  require("./webpack/js/9btn.js");
  require("./webpack/js/9dragbar.js");
  require("./webpack/js/9ES6-scroll.js");
  require("./webpack/js/9lazyload.js");
  //require("./webpack/js/9serviceworker.js");
  require("./webpack/js/9showAll(eye).js");




// SASS 文件引入(import的子sass 写在main.sass中)
require("!style-loader!css-loader!sass-loader!./webpack/sass/main.sass");
// CSS 文件引入
//require("!style-loader!css-loader!./css/main.css");












///// Misc

// document.getElementById('app').innerHTML="这是我第一个打包成功的程序";














//var $ = require('jquery');
//$('body').html('Hello');


// import $ from 'jquery';
//$('body').html('Hello');



