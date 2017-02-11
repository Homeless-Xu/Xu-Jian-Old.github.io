// document.getElementById('app').innerHTML="这是我第一个打包成功的程序";

require("./webpack/js/mainMisc.js");
require("./webpack/js/dragbar.js");
require("./webpack/js/filter&highlight.js");
require("./webpack/js/mobile.js");
require("./webpack/js/pjax.js");
require("./webpack/js/ES6-scroll.js");
//require("./webpack/js/serviceworker.js");
require("./webpack/js/lazyload.js");

// css 成功引入
//require("!style-loader!css-loader!./css/main.css");


// 下面只能成功引入 main.sass  文件里@import 没办法引入!!!!!
require("!style-loader!css-loader!sass-loader!./css/main.sass");






//var $ = require('jquery');
//$('body').html('Hello');


// import $ from 'jquery';
//$('body').html('Hello');



