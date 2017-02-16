---
layout: post
title:  书:JavaScript DOM
tags: JS
categories: JS
---



本书范围: Html5 ajax js jQuery

DOM document object model  文档对象模型.

Ajax 技术 基于 dom and js.

本书观点: 永远不要假设 Ajax/js 一定可用.
有人会屏蔽js... 


jQuery , 解释了 为什么要使用库,
以及使用库 为什么能节省时间 精力.




js 是一种程序设计语言. 但是不是专门写给程序员的. 主要是给web设计师的.




**本书构成: 代码 & 概念**
代码是 思想和概念的体现.


*没人能把 一种程序语言的所有语法和关键字都记住.  
 不清楚的 查阅参考书就解决了.*




本书的目的是 理解DOM 脚本编程技术背后的思路和原则.

创建图片库页面的脚本.
创建动画效果的脚本
丰富页面元素呈现效果的脚本.

不要仅仅复制 粘贴 
更重要的是理解代码背后的 How and Why

CSS 只要改一个文件 就能改变整个网页的视觉效果.
DOM 有着同样的威力.

能力越大责任越大.



每个浏览器 都能 查看源代码. view source 



Web 标准: 一般人 都是 HTML CSS 其实DOM也是.
可以利用DOM 给文档增加交互能力.
就像CSS 给文档增加样式一样.



JS 使网页具有交互能力的程序设计语言.

ECMA 欧洲计算机制造协会.


java 理论上可以部署在任何环境.
js 倾向于只应用在 web浏览器.


js 是一种脚本语言. 只能通过Web浏览器 去完成一些操作.
因为 js 需要web浏览器 进行解释和执行.
所以也没有c++等那些语言用途广泛.
不过这种相对的简单性 也是js的长处.比较容易学习和掌握.


而不能像普通的程序一样 独立运行.





js  能操控浏览器.
调整浏览器 窗口高度 宽度 位置等属性.
这种 设定浏览器属性的方法可以看做 BOM 浏览器对象模型




## DOM
 世界对象模型:
汽车 房子 树 ... 普通人肯定能理解.
应为 大家对这些事物有相同的 认识.

大家对抽象的世界对象模型 有着基本的共识:
才能用非常简单的话表达处复杂的含义 并得到对方的理解.

网页也是一样.
js 预先定义了 images and forms 等术语
我们才能在js脚本里 引用 image..
这样js 才能理解 我们要干什么.




DOM 是一种 API (应用编程接口)

API: 一组得到有关各方共同认可的 基本约定
摩尔斯码.国际时区,化学元素表....
不同领域中的标准,使得人们更加方便的交流合作.

软件编程中  存在很多不同的语言,但是目的基本是一致的.
这也是人们 需要api的原因.
一旦掌握了某个标准.就可以把它应用在不同的环境中.


**DOM 一个与系统平台 和 编程语言无关的接口**
程序可以通过这个接口. 动态的访问和修行文档的内容 结构 样式.


*程序语言分类:解释型 & 编译型.*

- 编译型语言: Java / C++ 等语言
	需要一个 编译器(compiler)
	*编译器: *
	一种程序.能把java等 高级语言编写出来的源代码翻译成直接在计算机上执行的文件



- 解释型语言: JS
	只需要解释器.
	JS: Web browser 就能完成 解释和执行的工作.



编译型语言 如果代码有错误, 在代码编译阶段 就能被发现,
解释型语言 如果代码有错误,只能在 解释器执行有代码时才能被发现.

编译型语言 往往 速度更快.可移植性更好.但是学习曲线陡峭.

js 虽然入门简单. 但是能完成许多相当复杂的编程任务.



**语法:**
英语是一种 解释型语言.
只要遵循英语的语法规则, 我们想表达的思想就能被正确的解读.
这些语言结构方面的各项规则 就是 语法.



语句: statement
类似句子. 脚本的基本单位.

英语要求 每个句子 必须 大写字母开头, 句号结尾.
JS 没那么严格.只要把各语句放在不同的行上就能分隔他们.
*如果要把多条语句放在一行内, 那就必须用 分号 来分隔.*

建议: 每条语句末尾 都加上一个 分号. 良好的编程习惯.





单行注释: 
`//` ... js风格注释  单行注释建议都使用这个.
\<!-- ... --\>   这个是html 风格的注释.


多行注释: `/*`  ...   `*/`






#### 变量 variable

日常生活中, 有些东西是 固定不变的. 有些则会发生变化.

姓名 生日 不变
心情 年龄 随时间变化.

会变化的东西 称为 变量 Variable


假设有个 变量 mood (心情的意思)
可以把此刻的心情存放到这个变量中.
不管变量的值是 happy 还是 sad
它的名字始终是 mood. 我们可以随时改变这个值.


把值 存入变量的操作 叫 赋值: assignment
mood = "happy" ;
age = "33"

警告框中显示变量值:

alert(mood);
alert(age);


js 允许直接对变量赋值.而无需事先声明(类似介绍 declare ).
很多别的语言是不允许的.
虽然不强制声明. 但是 提前声明变量是一种好习惯. 还是别偷懒了.

var mood;
var age;
可以一次声明多个变量:  var mood, age;

还可以 声明和赋值 一次性完成:
var mood = "happy";
var age = 33;

var mood = "happy", age = 33;
// 这个是最有效率的做法.  一行就够了.

JS  名字 都是区分大小写的.
Mood mood 没有任何关系.是两个变量.





JS变量名:
字母+数字+美元符号+下划线.
下划线很实用.可以代替空格...

最好的方法是. 后面的单词 用大写字母开头.
var myMood = "happy"


*js 变量中不能包括 空格&标点符号*
var my mood = "happy"  ❌






#### 数据类型:
mood 的值是 一个 字符串
age 的值 是一个数
是两种不同类型的数据,

有些语言在声明变量的同时还必须声明数据类型. 这叫类型声明: typing

强类型语言:strongly typed 必须明确类型声明的语言
弱类型语言:weakly typed 可以在任何阶段 改变变量的数据类型

var age = "thirty three";
age = 13;

这语句在 强类型语言中是非法的 但是在 js中完全没有问题

*js 并不在意 变量的值是一个 字符串 还是一个数*








**字符串: **
必须在引号内.
字符: 字母 数字 标点 空格 ....


转义:
单引号内 要输出单引号 用反斜杠 来转义
`var mood = 'don\'t ask'`
双引号内 要输出双引号 也用反斜杠
`var height = "about 5'10\" tall "`

建议全部用 双引号来包住 字符串



**数值:**
无所谓正负/整数,小数点.  默认类型就是浮点数 floating-point number
var temperature = -2.3333



**布尔值 Boolean**
只有两个可选值 true / false

假设需要这样一个变量.
如果我在睡觉 这个变量储存一个值
如果我没睡觉 这个变量储存另一值
 
可以用字符串类型把变量 赋值 sleeping / not sleeping
但是 用布尔类型 是一个更好的选择.

var sleeping = true;



从某种意义来说. 
计算机程序 就是与 布尔值打交到.
所有电子电路 只能识别 和 使用 布尔值: 电路中有电路 电路中没有电流

重要的是 只能取两种值的一种..


布尔值 不是 字符串. 千万不能用 引号.
false 和 'false' 是两码事

var married = true;
把 变量married 设置为 布尔值 true 

var married = "true"
把 变量married 设置为 字符串 "true"




**数组 Array**


字符串.数值,布尔值  都是标量 scalar
标量: 任意时刻 只能有一个值.

如果要用一个变量来储存一组值: 那就要数组 array

数组: 用一个变量 表示 一个值的集合.
集合中的每个值 都是这个数组的一个元素 element 


可以用 
变量 beatles 来保存 Beatles 乐队全体四位成员的姓名.


声明数组的同时 还可以 指定元素的个数
也就是这个数组的长度. length

var beatles = Array(4);
如果无法预知元素个数 可以不写个数:
var beatles = Array();


向数组中 添加元素 称为 填充 populating 
填充数组是 不仅要给出新元素的值 还要给出新元素的存放位置.
这个位置 就是这个元素的下标. index
下标必须用 方括号.

`beatles[0] = "join";`
0 开始 很多人不习惯. 但是这就是规则.
可以通过下标值 还获得元素的 名称.

这样填充麻烦.
相当简单的: 在声明的同时 进行填充 这时候只要逗号隔开元素 就可以.
`var beatles = Array["john", "Paul", "George", "Ringo" ];`
这样会自动分配下标. 0 1 2 3 ...
其实 array 可以省略:
`var years = [1992, 1993, 1994, 1995 ];`

还可以混类型
`var names =["Xu", 1989, false ];`

数组还能包含其他数组:

`var lennon = ["john", 1994, false ];`
`var betales = [];`
`betales[0] = lennon;`

想要获取数组里面的值 要用更多的 `[]`

`beatles[0][0]` 的值是 john
`beatles[0][1]` 的值是 1994
`beatles[0][2]` 的值是 false

这是一种 相当强大的 存储和获取信息的方式.



**关联数组`[]`**
赋值的时候 可以自定义下标. 不使用默认的 0 1 2....

var lennon = Array();
`lennon["name"] = "john";`
`lennon["year"] = 1989;`
`lennon["living"] = false;`

用字符串 来 代替默认的下标.
这种代码更有可读性. 当不是一个好习惯.不推荐.
推荐使用对象.



**对象 Objject {}**
类似数组. 使用一个名字 表示一组值.
对象的 每个值都是对象的一个属性.

前面的数组 也能创建成下面这个对象.

var lennon = Object();
lennon.name = "john";
lennon.year = 1989;
lennon.living = false;
→ 
var lennon = {name:"john", year:1989, living:false };
不使用方括号 和下标来获取属性.
而是 类似css 的类 .通过点号 来获取属性.

用对象来代替传统的数组, 就可以用元素名字来引用他们.而不是下标.
大大提高了 脚本的 可读性能.

现在 建一个新的数组 beatles . 用 上面的 lennon对象来填充它的第一个元素.
`var beatles = Array();`
`beatles[0] = lennon;`

现在 用  `beatles[0].name` 就可以得到 john
上面只是 把 lennon 声明成对象.
也可以同时把 beatles 也声明成对象的.

var beatles = {};
beatles.vocalist = lennon;
现在 
beatles.vocalist.name → "john"
beatles.vocalist.year → 1989
beatles.vocalist.living → false




#### 操作 operation
要用js 做一些有用的工作.还需要能够进行计算和处理数据,
也就是完成一些操作. operation


#### 基本操作符:
加减乘除.  没一种都必须 借助相应的 操作符 operator才能完成.

赋值: `=`
加法: `+`
减法: `-`
乘法: `*`
除法: `/`


变量可以包含操作:
`var total = (1 + 4) * 5;`

year = year + 1;  → year++;

+号 比较特殊:
alert("10" + 20 ); → 1020
alert(10 + 20 ); → 30

字符串+数字 → 更长的字符串.
数字+数字 → 求和


`+=`
一次完成: 加法和赋值

var year = 2016;
var message = "This year is ";
message += year;
alert(message);

→ This year is 2016



#### 条件语句
脚本真正的威力 体现在 可以根据各种条件 作出决策.


if () {
 else
}



条件 必须放在 if () 里.
*条件的求值结果永远是一个布尔值* 只能是 true / false.
{} 里面的语句. 只有条件求值是 true 才会执行.

{} 并不是一定要的. 如果只有一条语句.可以不写{}.
写了可以增加脚本的可读性.
`if (1 > 2) alert("This world has gone mad!");`




#### 比较操作符.
有许多 几乎只能在 条件语句里执行的 操作符号.
\< \> \>= \<= 
== 等于比较两个值 是否相等. (并不表示严格的相等)
会认为空字符串 与 false 含义相同
=== 全等:不仅比较值, 还比较变量类型.
这里 空字符串就不等于 false了.  
boolean和string 可不是一种类型
!= 不等于.

var myMood = "Happy";
var yourMood = "Bad";
if (myMood = yourMood) {
  alert("We both feel the same.");
}

// 这个意思是 把变量yourMood的值 给 myMood. 这个条件的值是永远正确的.

var myMood = "Happy";
var yourMood = "Bad";
if (myMood == yourMood) {
  alert("we both feel the same ")
}






#### 逻辑操作符 逻辑与:&& 逻辑或:|| 逻辑非: !

比如要检查某个变量的值是不是在 5-10 之间.
我们需要两次比较操作.
1. 判断变量 是否 \>= 5
2. 判断变量 是否 \<= 10
这两次比较可以 组和成一个.

if (num \>= 5 && num \<= 10) {
  alert("The number is in the right range.");
}


逻辑非: 就一个 !号.
作用: 布尔值取反.
如果 一个逻辑操作 返回的布尔值是 true 
逻辑非 就能把它取反 变成 false


if ( !(1 \> 2) ) {
alert("no pain no gain");
}



#### 循环语句
if 语句 唯一的不足  就是无法完成重复性 操作.
if 里面的语句 只能执行一次.

要多次执行同一代码块. 必须使用 循环语句.


循环分好几种. 原理是一样的.
只要给定的条件能得到满足. 循环语句里面的代码就不会停.


#### While
类似if.

var count = 1;
while (count \< 11) {
alert (count);
count++;
}

运行的话会看到 alert 对话框 闪现了 10次.
最后count值 是 11



#### do while

while 里面的语句 可能.一次都不执行.因为不满足条件.
但是 有时候 我们希望 不管能不能满足条件 
里面的代码至少执行一次. 这就需要 do while 了.


var count = 1;
do {
  alert (count);
  count++;
}
while (count \< 1);

这里 初始值1 永远不会小于1.
但是 do 后面{}里的代码还是执行了一次.
最终 count 变成2 弹出一次 alert警告框.




#### for 循环
while 循环的一种变体.
只不过代码变得更精简而已.

for 循环的好处是. 循环控制结构更加清晰.
所有有关内容都在 圆括号部分.

for (var count = 1; count \< 11; count++ ) {
  alert (count);
}


for 最常见用途: 
对某个数组里的全体元素进行遍历处理.
往往需要用到 array.length 属性.

`var beatles = Array("john","paul","george","ringo");`
`for (var count = 0 ; count < beatles.length; count++) {`
`alert(beatles[count]);`
`}`

就会输出 四个人的 名字了.








#### 函数 function
一组 允许在你的代码里 随时调用的语句. 
实际上 每个函数都是一个短小的脚本.
*函数需要先定义 再调用*


如果需要多次使用同一段代码,可以把他们封装成一个函数.
避免重复键入 大量的相同内容.

函数真正的威力: 你可以把不同的数据传递给他们.
他们会用这些数据 去完成预定的操作.

传递给函数的数据 称为 参数


简单示范函数
\`function shout() {
\`\`  var beatles = Array("john","paul","george","ringo");
\`\`  for (var count = 0; count \< beatles.length; count++ ) {
\`\`  alert(beatlescount);
\`\`  }
\`\`}
\`
函数作用: 依次弹出 Bearles 乐队成员的名字.

如果要在你脚本里 执行这一动作.
只需要 调用这个函数:
`shout();`





#### 内建函数
比如: alert


需要传入两个参数的函数,会自动得出乘法的结果.

`function multiply(num1,num2) {`
`  var total = num1 * num2;`
`  alert(total);`
`}`

要调用的话:

multiply(10,2);
会立即 弹出一个运算结果 20 的 alert 对话框.

如果这个函数能把 结果 返回给调用这个函数的语句往往会更有用.

函数不仅能以参数的形式接受数据.
还能返回数据.

需要用到 return 语句.


function convertToClesius(temp) {
  var result = temp -32;
  result = result / 1.8;
  return result;
}

这个函数 只有一个参数. 华氏温度.
它将返回一个数字: 摄氏温度.


函数真正的价值 体现在: 
我们可以把函数 当作一种数据类型来使用.
意味着 可以把一个 函数的调用结果 赋值给一个变量.

var tempFahrenheit = 95;
var tempCelsius = convertToCelsius(tempFahrenheit);
alert(tempCelsius);

把华氏 95 转换成 摄氏度.  → 35 





#### 变量的 作用域

使用变量时候 最好先 var 进行声明.

变量 可以是全局的  也可以是局部的
其实 这就是变量的 作用域.scope


全局变量: Global variable
整个脚本有效



局部变量: Global variable
特定函数内有效


全局变量要小心使用. 多了你会忘记 而不小心在不该用的地方引用了全局变量.


*var 可以给函数设置作用域*
使用了 var 那个函数就是局部变量.
没有用 var 那个函数就是全局变量.


` square(num) {`
`total = num * num;`
`return total;`
`  }`
`var total = 50;`
`var number = square(20);`
`alert(total);`

这段代码会导致 全局变量 total的值 发生变化. 最终结果→ 400


本意是让 square(20) 函数计算出的值 400 放回给变量 number
但是 没有把函数内部的 total 变成局部变量.
导致外面那个全局变量 total 的值也变成400了.

`function square(num) {`
`var total = num * num;`
`return total;`
`}`

这样 外面的 total 就变得安全了.!! 不会改变了.




#### 对象 Object
非常重要的数据类型.

包含在对象里的数据可通过两种形式访问. 
属性 property  
方法 method

属性 是隶属于某个特定对象的变量.
方法 只有某个特定对象才能调用的函数.

对象: 一些属性 和方法组合在一起 构成的 一个数据实体.
js属性和方法 都用 点语法来访问.

object.property
object.method()



我们已经会 用 mood age 这些变量 来储存 心情 年龄 之类的值.
对象也能实现
假设对象名字是 person
person.mood
person.age

假如 person 还关联这一些 诸如 walk() sleep() 之类的函数.
这些函数就是 这个对象的方法
person.walk()
person.sleep()

这些属性 和 方法全部集合在一起. 我们就得到了 一个 person 对象.



 让对象 来描述具体某个人. 需要创建一个 对象的实例(instance)

实例 是对象的具体个体.
你我都是人 可以用person来表示.但是每个人都不一样 年龄/性别...
你我都是人这个对象.但是是不同的实例.
创建新实例: 
var xujian = new person;

然后可以用 
xujian.age
xujian.mood



内建对象: native object.

Array 是一个 还有  math对象 date对象...


math 对象的 round 可以把 小数 舍入到最接近的整数..

var num = 7.32;
var num = Math.round(num);
alert(num);


Date 对象:
储存和检索 与日期相关的信息.
提供: getDay(),getHours(),getMonth()等... 




创建data 对象时
js 会自动的 使用当前时间日期 进行初始化.

var currentData = new Date();

var today = currentDate.getDay();
能告诉我们给定日期是 星期几.

内建对象 可以帮助我们快速 简单的完成许多任务.





#### 宿主对象
浏览器 也会提供一个预定好的 对象.
这些就叫 宿主对象 host object 

包括: form image element 等
我们可以通过这些对象获得关于网页上 表单 图像 和各种表单元素的信息



---
上面就是 js 的基础知识. 后续会介绍详细用法.








# DOM

Document 文档
Object 对象
Model


文档: 
创建好网页 加载到浏览器时 DOM 在幕后悄然发生: 它把你编写的网页文档 转换成一个文档对象.




对象:
一个自足的数据集合.
对象属性:与某个特定对象相关联的变量.
对象方法:只能通过某个特定对象取调用的函数.

人类语言: 对象含义不那么明确.几乎可以称任何东西是对象.
程序语言: 对象 含义非常明确.


*三种对象类型:*
- 用户定义对象: user-defined object: 程序员创建.
- 内建对象: native object: js 内置对象: array math date ...
- 宿主对象: bost object 浏览器 内置对象.


window 对象: 最基础的.
对应浏览器窗口本身, 这个对象的属性和方法 叫:BOM 浏览器 对象模型.

BOM 提供了:
window.open
window.blur ..
这种方法 某种程度上要为被到处滥用的 各种弹出窗口和下拉菜单负责.

我们很少和BOM 打交道 . 注意力放在浏览器窗口内的网页内容上

document 主要功能: 处理网页内容.


### M: Model 模型. /map 地图

DOM 代表 加载到浏览器窗口的 当前网页.
浏览器提供网页的地图. 我们通过js取读取这地图.

地图: 必须有 方向. 等高线..比例尺...
要看懂 和 使用地图: 必须知道这些东西的含义和用途.
想要从DOM获得信息. 必须先了解DOM.


*DOM 把一份文档 表示成一棵树/家谱树* 这是理解DOM的关键.

家谱树 本身是一种模型. 
作用是表示一个人类家族的莆系.
使用 parent 父 child 子  sibling 兄弟 等记号来表示关系.
可以把 相当复杂的关系 简明的表示出来:
某人: 即是某些人的父辈. 又是某人的子辈没同时还是另外一人的兄弟.


家谱树模型: 非常适合表示 一份html语言编写出来的文档.



比如: 下面这个非常基本的网页: 购物清单.

what to buy . 特大字体
don not forget to buy this stuff
  - a tin of beans
- cheese
- milk

网页源代码是:
\<html\>
\<head\>
  \<meta charset="utf-8"\>
  \<title\>Shopping List \</tittle\>
\</head\>

\<body\>
  \<h1\> what to buy \</h1\>
  \<p\> do not forget. \</p\>
  \<ul\>
\<li\> a thin of beans
\<li\> cheese
\<li\> milk 
  \</ul\>
\</body\>
\</html\>

把文档 称为 节点树 更准确.

节点: node 网络中的一个连接点.
实现世界: 一切都是原子构成.原子就是节点.

DOM 也是一样. 文档是由节点构成的集合.
节点是 文档树上的 树枝和树叶而已.

#### 节点:

*元素节点:* element node
*文本节点:*  p li
*属性节点:*title  对元素 作出准确的描述.




CSS .
DOM 不是唯一和网页结构打交道的唯一技术.
CSS 也可以告诉浏览器 如何显示一份文档内容.

有时候 只想改变网页中 某个特定元素的样式.不要让其他段落受到影响.
需要使用 Class (.p) / ID (#name) 属性.

Class 可以在任何元素 上加class 属性.

ID 属性 就像一个挂勾. 一头连着文档里面某个元素.
一头连着CSS 表里某个样式.

DOM 也可以使用这中挂钩.





#### DOM 获取元素:  
元素ID,标签名字,类名字.






### 获取&设置 属性
只对 元素节点有效.

getElementById
getElementsByTagName
getElementsByClassName

getAttribute
setAttribute

*这五个非那根发 是 编写 DOM 脚本的基石.*




### JS 图片库 (同一网页,显示不同图片)

一个网页:
  上面是图片名称列表:
  下面是 固定大小的 图片预留窗口.

要实现 点击图片名字 下面的窗口显示 相应的图片.






图片发布到网上由很多方法.
可以把所有图片放到一个网页里.但是如果放的图片很多.网页就会变得很大.
网页代码虽然没有多少 但是图片下载很慢的 ...

所以 给每张图片 新建一个新的网页 就值得考虑.
但是 每张图片一个网页 需花费很多时间.
某个网页应该 方便 从当前图片转到其他图片.

这时候 用js 来创建图片库是最佳的选择.



1. 创建连接清单.
	不要按照顺序排列 可以用 无序列表 来列出那些链接.
	需要按照顺序排列 可以用 有序列表 来列出那些链接.

2. 增加一个 占位符. 随便选一张图片就可以.
3. 点击连接 拦截这个网页的默认行为.
4. 点击连接时, 替换占位符图片链接成对应的链接.


5.  JavaScript 代码.
占位符 图片的链接  替换成要看的图片. 需要改变 src 属性.
用 setAttribute 是最佳的选择.

新建个函数. 取名 
showPic
whichPic 代表一个元素节点.


#### 事件处理函数

鼠标悬停触发动作: onmouseover
鼠标离开触发发作: onmouseout
点击触发:  onclick


this 关键字.
showPic() 需要一个参数.
一个带有 href 属性的 元素节点参数.
当我们把 onclick 函数 嵌入到一个链接中时:
需要把这个链接本身 用作 showPic函数的参数.

This: 含义: 这个对象.
具体到当前的例子. this 表示 这个 a 元素节点.


把这个事件处理函数放到 图片列表中会遇到一个问题.
点击链接的时候 不仅 showPic 函数被调用. 链接点击的默认行为也会被调用. 用户还是会被带到图片查窗口. 这时我们不希望的.
要阻止 这个默认行为.



## 事件函数工作机制
给某个元素添加 事件处理函数后: 一旦事件发生, 相应的js代码 会被执行.
被调用的 js 代码可以返回一个值.
这个值 被传递给那个事件的 处理函数.







#### 同一网页,不同文本

同一网页 显示不同的图片 很常见了.
要实现不同的 文本呢??
用js 和dom 就可以.



#### ChildNodes 属性
一颗节点树上. childNodes 属性可以获取任何一个元素的所有子元素.
包含这个元素 所有子元素的数组.
element.childNodes

把某个文档的 body 元素的全体子元素 检索出来.
1. 用  getElementsByTagName 得到body 元素.
每个文档只有一个 body 元素.所以它是 唯一一个元素:
`var body_element = document.getElementsByTagName("body")[0]`

现在 变量 `body elemnet` 已经指向 那个文档的 body元素.
可以用下面的方法 获取body元素的 全体子元素.
`body_element.childNodes` → 
`document.getElementsByTagName("body")[0].childNodes`

可以精确的查出 body 元素一共有多少个 子元素.
因为 childNodes 属性返回的是一个数组. 数组的length 就是子元素个数.



下面这段小函数 添加到 showPic.js 文件里面:
`function countBodyChildren() {`
`  var body_element = document.getElementsByTagName("body")[0];`
` alert (body_element.childNodes.length);`
\`}
\`
这个函数 弹出一个alert 对话框.显示 body 元素 子元素的总数.

页面加载 就执行这个函数:  onload
window.onload = countBodyChildren;
加到代码 尾部就可以了.






#### nodeType
上面 body 元素 应该只有3个子元素: h1 ul img
可是显示的 原始却远远大于.
因为 文档树的 节点类型 并非只有元素节点的一种.

元素节点的 nodeType 属性值是1
属性节点的 nodeType 属性值是2
文本节点的 nodeTpye 属性值是3
也意味着 可以让函数只对特定类型的节点进行处理.
完全可以编写出一个只处理元素节点的函数.


现在就可以实现. 点击图片名字 换图片. 
还能在图片下面加一行注释. 
让这个注释也随着图片的变化而变化.




#### nodeValue
改变文本节点的值.



#### firstChild & lastChild

数组的 第一个/最后一个 元素.

`node.firstChild === node.childNodes[0]`
`node.lastChild  === node.childNodes[node.childNodes.length-1]`

#### nodeValue
刷新 这段描述.









---


js & DOM 是 非常强大的 组合.
关键是你能否恰到好处的运用他们提供的功能.:



*易用易学 双刃剑*
很容易被人接受. 也往往意味着 缺乏高水平的 质量控制措施.



就像 很多人 不怎么属性 html 基本知识  就能用各种 视图工具创建出各种网站. 后果是 绝大多数网页编写的都很糟糕.甚至不做标记合法性检查.

因此 各浏览器 不得不让自己的浏览器 尽可能宽松的去处理这些网页. 
每种浏览器 都有相当一部分代码是专门用来处理那些 含糊不清的html标记 来猜测 创作者到底想如何呈现网页.



js 语言的生存环境  比 html 严格的多.
如果 js 代码不符合语法规定 . js解释器 (对web应用来说就是 浏览器)
将拒绝执行 并报错.. 尽管如此 现在web还是有很多 低劣的 js代码.


很少一部分能 在js被禁用时候 有相应的安排.
一旦禁用了js 差不多 就是 网页无法访问.... 




没有不好的技术.只有没用好的技术.
flash. 各种问题.. 其实都是由那些 低劣的脚本造成的 不是falsh 本身的错..

flash 制作视频片段 是很好的创意.
但是 视频片段的越来越多.. 网页加载时间  不可避免的 越来越长..


js 也是.
本来是一种能让网页变得 易于访问的技术. 然而也有 降低网站可用性和访问性的坏名声


js 也是
人们只关心自己网页里有没有js代码.
不考虑 那些只是复制粘贴过来的 js函数本身有没有漏洞 以及会不会给网页带来 负面影响.
网上到处是 各种  似是而非的 js网页.
却没人想到应该首先检查下那个现成的js函数 是否需要改进.


js 最臭名的就是.
在打开网页时候 弹出的广告窗口,
所以 不少用户 干脆 禁用了 js.

弹出窗口本身是一个很实用的功能.
解决了网页设计的 一个难题: 如何向用户发送信息..





### 质疑一切
不管你要用 js 改变网页什么行为. 必须 三思.

要用js 先确认, 会对用户的浏览器体验产生什么影响.
最重要的问题: 如果浏览器不支持 js 怎么办.




1. 加载这种额外行为 是否有必要?
\2. 







#### 平稳退化
如果 禁用了js 或者 有些浏览器根本不支持js .
要让 访问者 顺利的浏览你的网站. 就要用 所谓的 平稳退化: 某些功能无法使用,但是 基本的操作还能顺利完成.




只在 绝对必要的情况才使用 弹出窗口.




window.open(url,name,features)

url: 新窗口网址. 省略→空白窗口.
name: 新窗口的名字.可以在代码里通过这个名字 和新窗口进行通信.
features: 新窗口的各种属性. 宽度 高度. 新窗口被启用/禁用的各种浏览器功能(工具条 菜单条 初始显示位置 ...)

原则:  新窗口浏览功能: 少而精.



### js 伪协议
真协议: 用来在 网络直接传递数据包: http ftp ...
伪协议: 一种 非标准化的协议.
js 伪协议 让我们通过一个链接 来调用 js 函数.
不建议使用.





#### 平稳退化 重要性
有人 总是在浏览web时 同时禁用图形 和 js.
你肯定 认为如今 这样的用户非常少见事实奥尔胡斯如此..
但是 这个 访问者 非常重要!! 这就是 搜索机器人: searchbot.

一种 自动化程序.
浏览网页目的: 把各种网页 添加到 搜索引擎的数据库里.
各大搜索 google baidu 都有类似的程序.

目前 只有极少数 搜索机器人能 理解js.
一旦你网页 不能 平稳退化. 你的搜索排名可能下降很严重.

具体到 popUp()函数: 
给js 代码 留退路很简单: 
在链接里把 href 属性 设置为真是存在的url地址.
变成一个有效的链接:

`<a href="http://www.0214.help"      onclick="popUp(this.getAttribute('href'); return false; "> Example </a>`

→
\`\<a href="http://www.0214.help"  
onclick="popUp(this.href; return false;") \> Example</a>"
\`
这个就算 js被禁用了  这个链接也还是能用的.


## CSS
 非常了不起的技术 .可以让人们对网站设计的各方面 作出严格细致的 控制.
CSS 技术并没有 新内容. css 能做到的 table 和 font 等标签 也能做到.
CSS 最大的优点:  帮你把 Web 文档的内容结构(标记) 和版面设计(样式) 分离出来.

真正能从css 获益的方法: 把全部样式 转移到外部文件中去.


如 编写文本的人 只要把文档内容正确的标记出来就可以了

设计网页的人 不需要接触文档. 最多只是添加些类 或者 id 属性.




*网站设计 : 标记良好的内容就是一切. *


挂钩: css 中的 类/id .



绝大多数 浏览器 或多或少 支持 js
绝大多数现代浏览器 对DOM支持 非常不错....
但是 老的浏览器 不一定支持 DOM.
因此: 某些用户的浏览器 就算是支持js的 也不一定能正常工作.




#### 对象检测
检测浏览器对js的 支持程度.  浏览器必须理解这么多js语言才能正常访问这个网站.

就像 有些视频必须成年才能看...


#### 浏览器嗅探
可以通过js 代码 检测出 对方浏览器的 版本 和信息.
但是这个不一定准确.  有些浏览器会把自己报告成另外一种浏览器.
有些浏览器 允许用户任意修改这些信息.

由于浏览器 版本 越来越多...
这个 嗅探版本 就越来越长... .




### 性能考虑
DOM 对脚本性能 会产生很大的影响.

比如 getElementsByTagName("a")
取得所有 a 元素. 这会搜索整个 DOM树...从而找到可能匹配的元素.





#### 合并脚本

各种js  都合并到一个脚本文件中.
可以减少 加载页面时候 发送的 请求数量.
减少请求数量 是性能优化 首先要考虑的.




#### 脚本位置
对初次加载时间有很大的影响.
一般脚本放在 head中.会有问题.

Http 规范: 浏览器 
- 每次从同一个域名 最多只能同时下载两个文件.
- 下载脚本期间. 浏览器不会下载其他任何文件.(即使不同的域名)
所有其他资源都要等脚本加载完毕都才能下载...


把脚本放在 文档尾部, 加载文档时候 load 事件可以执行对文档的 各种操作..





#### 压缩脚本

*压缩后的代码 虽然不容易看懂.但是能大幅减少文件大小*
一般 你需要有两个版本.
一个工作副本. 可以 修改代码  添加注释.
一个精简副本 放在站点上. 加 min.前缀 加以区分.

压缩工具:
谷歌: closure compiler . 






## 图片库 改进版本
优秀的网页设计人员: 总会在每个细节上问自己: 是否还有更好的解决方法.






## 键盘访问 onkeypress
并非所有用户都用 鼠标.

tab 键 下个链接
回车键 打开链接

onkeypress 事件 专门处理键盘事件.
按下任一个键盘都会触发 onkeypress 事件.

要确保 onkeypress 模仿 onclick 事件的行为:
`link[i].onkeypress = likn[i].onclick;`
会把 onclick 所有功能 赋给 onkeypress 事件.
这个函数少用.  其实 onclick 也自到键盘处理已经非常完美. 只是名字取的有误导性而已.






结合 JS 和 CSS
文档里面的挂钩. 完全是可以通用的....




DOM core / html-dom

DOM core : 
getelementbyid
getElementsByTagName
getAttribute
setAttribute

Html-dom:
onclick

document.getelementsbytagname("form") 简化→
document.forms

element.getattribute("src") 简化→ 
element.src

同样的操作  既可以用 DOM core 实现 也可以用 html-dom 来实现
html-dom 代码往往更短.


var source = whichpic.getAttribute("href");  DOM Core
var source = whichpic.href;　  HTML-DOM





*结构与行为 分离程度 越打越好.*




#### document.write  / innerhtml

document.write
把字符串 插入到文档.



##### innerhtml　　　
读写 给定元素里的内容.



DOM 不仅可以获取内容  还能 更新内容.


比如 要插入一段文本到 testdiv元素:
`<div id="testdiv">  </div>`

1. 创建一个新元素.
	`var para = document.createElement("p");`
2. 把这个新元素 插入节点树.
	先把元素 赋给变量.让代码易读
	`var testdiv = document. getElementById("testdiv")`

	`testdiv.appendChild(para);`

现在变量已经存在. 也指向了 新建初来的p元素.
但它 还不是 dom节点树的 组成部分. 它只是js世界里的一个孤儿.
这种就叫  文档碎片: document fragment



#### appendChild
把新建的节点 插入文档树 最简单的方法:
让它称为 某个现有节点的 子节点.




#### createTextNode
createElement 只能创建元素节点.
createTextNode 创建文本节点.


创建一个内容为 hello world 的文本节点:
`document.createTextNode("tello world")`
给新建的节点赋变量
`var txt = document.createTextNode("hello world")`

para.appendChild(txt);







#### inserBefore() / inserAfter() 元素前面后插入新元素
- 新元素
- 目标元素
- 父元素







## ajax

web 应用 涉及大量的 页面刷新. 
点击某链接 → 请求发送回 服务器 → 服务器返回新页面 → 哪怕用户看到的改变只有非常小一部分 也要刷新整个网页.

Ajax 可以做到 只刷新一部分区域.

Ajax 优势: 对页面的请求以 异步方式发送到服务器.
服务器不会用整个页面来响应请求.会在后台处理请求.
同时用户还能继续浏览页面.


就像谷歌地图.





*XMLHttpRequest* Ajax 核心技术.
这个对象 充当浏览器中的 脚本(客户端) 与 服务器之间的 中间人角色.
以往的请求都是由 浏览器发出的.
而js 用过这个对象可以 自己发送请求 同时自己处理响应.



浏览器创建新 http 对象:
var request = new XMLHttpRequest();

XMLHttpRequest 对象由许多方法: 最有用的  open
指定服务器上要访问的文件.
指定 请求类型:  get post send 


	function getNewContent() {
	
	var request = getHTTPObject();
	  if (request) {
	    request.open("GET", "example.txt", "true");
	    request.onreadystatechange = function () {
	// 处理响应
	    if (request.readtState == 4) {
	var para = document.createElement("p");
	var txt=document.createTextNode(request.responseText);
	para.appendChild(txt);
	document.getElementById('new').appendChild(para);
	 }
	
	};
	request.send(nyll);
	  } else 
	    { alert('sorry,your browser do not suppor XMLHttpRequest');}
	
	}
	addLoadEvent(getNewContent);

页面加载完成后  会发起一个 get请求. 
请求与 Ajax.HTML 文件 位于同一目录的 example.txt



onreadystatechange .事件处理函数:
会在服务器 给请求送回响应的时候被触发执行. 
可以根据服务器的 具体响应做相应的处理.

在给 onreadystatechange 指定函数引用时,不要在函数名后面加 括号.



指定了请求目标
明确如何处理响应后 就可以用send 发送请求了.

`request.send(null);`


XMLHttpRequest 多种属性:
浏览器在不同阶段 会更新 readystate属性的值
0 未初始化
1 正在加载
2 加载完毕
3 正在交互
4 完成　 

*值变成4 就可以访问 服务器发回来的数据了.*

访问数据: 
responseText: 保存文本字符串形式的数据
responseXML: 保存 content-tyoe 头部中指定为 text/xml 的数据.

其实是一个  document fragment 对象.

这个例子 
onreadystatechage 事件处理函数 在等 readystate 值变成4后.
就会从 responsetext 属性里取得文本数据.
然后把数据放到一个段落中.
再把段落添加到dom.



Ajax 同源策略.
xml 请求发送的请求 只能访问 与其所在HTML 处于同一个域中的数据.
不能向其他域 发送请求.
Chrome 好像还不能用Ajax访问自己硬盘的本地文件.


### 异步性
脚本在发送 XMLHttpRequest 请求后会继续执行. 不会等待响应返回.




不要用js DOM 把重要内容添加到网页上. 
还是有部分设备是不支持js的.







## CSS DOM
*浏览器网页构成: 结构层 表示层 行为层*

结构层: structural layer . 
有各种 标签 构成. p a h1 ...

表示层: presentation layer 
CSS 负责. 描述网页内容应该如何呈现.

行为层: behavior layer
负责 内容应该如何响应事件这一问题.
js & DOM 的主场.
DOM: 点击文本 显示alert 对话框.




*分离*
所有产品设计活动中,选择最使用的工具去解决问题是最基本的原则.

- HTML 搭建文档结构.
- css 设置文档效果
- dom脚本: 实现文档行为.

重叠区域: 
css :hover 也可以实现文档行为...



### 获取样式
查处某个元素 在浏览器里的显示颜色.











# js 动画效果:
CSS-DOM  让网页元素动起来.

*想随着时间的变化而不断的改变某个元素的样式. 只能使用js*
js 可以安装预设的时间间隔 重复调用一个函数.
这意味着 可以随着时间的推移 不断的 改变某个元素的样式.


动画 是样式 随着时间变化的 完美例子之一.




### 位置: posotion
一般由css 负责.

element {
  position: absolution;
  top: 50px;
  left: 100px;
}

→ == 

element.style.position = "absolute";
element.style.left = "100px";
element.style.top = "50px";


*属性值: *
- static  默认值
按照顺序
- fixed
- relative
这个 可以通过 float属性 从文档的正常显示顺序里面脱离出来.
- absolute
可以放到容器的任何位置.
这个容器 要么是 文档本身.
要么是一个有 fixed/absolute 属性的父元素.
为了防止冲突  top / bottom 最好只选一个. 
left / right 也是只选一个..

比如 有个 p 元素
\<p id="message"\> WOW \</p\>

你可以用一个 js 函数来设置这个元素的位置:

function positionMessage() {
if(!document.getElementById) return false;
if(!document.getElementById("message")) return false;
var elem = document. getElementById("message");
elem.style.position = "absolute";
elem.style.left = "50px";
elem.style.top = "100px";
}

window.onload = posotionMessage;
来完成加载.


要改变位置不难. 只要改变 top / left 的值就可以了.


多改几次 连起来就是动画了...



### 时间 setTimeout
让函数过一定的时间之后才执行.
最好把这个函数 指定一个变量.

variable = setTimeout("function",interval)





function positionMessage() {
if(!document.getElementById) return false;
if(!document.getElementById("message")) return false;
var elem = document. getElementById("message");
elem.style.position = "absolute";
elem.style.left = "50px";
elem.style.top = "100px";
movement = setTimeout("moveMessage()", 5000);
// 五秒之后 再去调用 moveMessage 函数.

}






### 时间递增量
5秒 跳跃 150px 这不算动画.
真正的动画 是一个渐变的过程.而不是 一下子就到目的地的...

moveMessage: 逻辑
1. 获得元素当前位置: 
2. 如果函数已到达目的地 退出这个函数
3. 如果函数没到达目的地 让它向目的地移近一点
4. 过断时间 重复1的步骤....


当前位置:通过查询 元素的 style.top style.left 实现.
var xpos = elem.style.left;
var ypos = elem.style.top;
 
函数被调用后: xpos = 50px  ypos = 100px
两个都是字符串. 下面的代码 需要比较多的 算数比较操作... 要的是数.

parseInt 可以把字符串里的数值 提取出来.
parseInt("39 steps"); → 返回 数值 39 
要放回带小数点的数值:  也就是 浮点数. → parseFloat 



var xpos = parseInt(elem.style.left);
var ypos = parseInt(elem.style.top);


先测试 xpos ypos的值 是否是 目的地的值. 是的话就退出.
if (xpos ==200 && ypos == 100) { return true; }

如果不是 就继续执行下面的代码:

如果 xpos 小于终点 left 加1.
如果 xpos 大于终点 left 减1.

if(xpos \< 200 ) { xpos++; }
if(xpos \> 200 ) { xpos--; } 
if(ypos \< 100 ) { ypos++; }
if(ypos \< 100 ) { ypos--; }

接下来要把 xpos 和 ypos的值 应用到 message 元素的style 里面:
需要把 字符串 px 追加到 两个值的 末尾. 
并 赋值给 left 和 top 属性.

elem.style.left = xpos + "px";
elem.style.top = ypos + "px";

最后需要短暂的停顿(10毫秒) 之后 重复执行这个函数.

movement = setTimeout("moveMessage()",10);





#### 抽象:

moveMessage 只能完成一项 非常特定的任务. 
把一个元素移动到一个特定的位置.
两次移动之间的 停顿时间也是固定的间隔


如果能把常数都改为变量. 灵活性和适用性就会大大的提高.
可以对 moveMessage 函数进行抽象 变得更加通用. 便于 重复使用.




创建新的  moveElement 函数

参数:
- elementID 打算移动元素的 ID 
- finalX 该元素 目的地的 左位置
- finalY 该元素 目的地的 上位置
- interval 两次移动的 间隔时间


function moveElement (elementID,finalX,finalY,interval) {
if (!document.getElementById) return false;
if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);

  var xpos = parseInt("elem.style.left");
  var ypos = parseInt("elem.style.top");

if (xpos == finalX && ypos == finalY) {return true; }

if (xpos \< finalX) { xpos++;}
if (xpos \> finalX) { xpos--;}
if (ypos \< finalY) { ypos++;}
if (ypos \> finalY) { ypos--;}

elem.style.left = xpos + "px";
elem.style.top = ypos + "px";

var repeat = "moveElement('"+elementID+"', "+finalX+", "+finalY+", "+intrtval+")";

moveElement = setTimeout(repeat,interval);

}





### 加速移动
元素 距离目标教远: 每次前进一大步.
元素 距离 目标教近: 每次前进一小步.

1. 算出 元素和 目的地之间的 距离.








### 安全检查

moveElement 函数表现不错. 但是 必须有 left top 样式.
使用函数前  要先 检查 有没有 top/left 这两个 样式属性.
如果 这两个 样式属性 没有被设置: 那么可以退出这个函数,而不是报错.

if (!elem.style.left || !elem.style.top ) { return false; }



另一种方法: 
在 moveElement 函数里面 给top / left 设置一个默认值.
如果left top 属性没有被设置 那么默认值设置成0 .

if (!elem.style.left) {elem.style.left = "0px;" }
if (!elem.style.top) {elem.style.top = "0px; "}








---

# HTML5 简介


### canvas



### 音视频 video audio

mp4 其实是一个 很多东西的容器.
扩展名 mp4 是 基于 quicktime 技术的 mpeg4 打包而成的.
这个容器规定了 不同音频 和 视频在文件中的位置.以及回放等特性.
 avi flv 等等都是这样..


每种格式. 都使用不同的编解码器来编码.
编解码器 决定了浏览器在播放的时候 如何解码.

编解码器的核心 是一个算法. 用于压缩和储存视频.
以减少原始文件的大小.同时也尽可能不损失品质.

视频编解码器: H.264 Theora VP8 ...
音频编解码器: mp3 aac ogg ...

H.264 有个 许可证问题.
编码 h.264 文件不要付费.
解码 h.264 文件 的软件 (浏览器 )就要付费.
所以 不是所有浏览器 都支持各种格式的.

结果就是  没有一种格式 是可以跨浏览器的........

为了保证每个人都能看到视频: 必须制作多种格式的视频!!!
并在 video 元素中 包含进去...

为了确保 HTML5 最大的兼容性: 至少要包含 三个版本:
基于 h.264 和 AAC 的MP4
webM
基于 thora视频和 vorbis 音频的 Ogg文件...

为了保证 不支持HTML5的浏览器.
还要准备 一个  flash  或者 quicktime 插件版 视频...


HTML5 支持的视频功能更多.. 

*自定义控件*
currenttime 返回当前播放位置
duration 返回 当前播放总时长
paused 表示媒体是否暂停
play  播放
pause  暂停
loadeddata
ended 比分完成停止







### 表单

email: 输入电子邮件
url  输入 url
date  输入时间 日期
number 输入 数值
range  生成 滑动条
search 搜索框
tel  输入 电话号码
color  选择颜色.


autocomplete 给文本框 添加 建议提示.
autofocus . 表单元素 自动获得焦点
form 
min max step  在 范围range 和 数值 number 输入框中
pattern 定义一个正则式表达 来验证输入的值
placeholder 文本输入框中 显示 临时性的提示.
required 表示 必填.




# js 库

*库: 可重复使用的 代码包. *

优点:
- 库代码 经过大量用户的测试 和 验证.
- 库 很容易的 与以已有的开发框架 集成.
- 给大多数日常琐碎的 dom 编程工作提供了方便.简洁的方案.
- 每个函数都能节省很多行代码.
- 库很好的 解决了 跨浏览器的问题. 省心.
- 让你专注于最重要的环节. 极大提升效率.

缺点:
- 别人写的 很难了解内部工作机制. 很难调试bug.
- 要用库 就必须集成到脚本中. 加重页面加载负担.占宽带 时间.
- 用多个库: 会造成冲突. 功能重复. 代码重复是不可避免的..



一直强调工作机制的重要性. 而不要停留在问题的表面.
库有很多很多.如果不能理解他们背后的工作机制. 对你对程序 都不是什么好事.







## 选择合适的库.

- 具备你需要的 所有功能.
- 功能是否比你想要的 还多?
功能少不行. 功能太多也不行. 
很多你更不用不到. 但是会加大文件.很影响加载速度

- 是否模块化:
就算模块话了...
一次请求一个大文件 比 多次请求多个小文件 快.

- 支持情况 (后续开发 维护情况)
没人维护 意味着 bug 没人修改. 功能无法改进...

- 有官方文档么?
没文档 让人无所适从.
没文档 说明开发人员不够投入.
- 许可 合适么





## 代表性的库

jQuery . 




## 内容分发网络 CDN content delevery network

*必须 尽可能减少网页文档大小.并让浏览器缓存文件.*

比如 很多站点 要使用同一个库.最好把这个库 托管到一个公共服务器上.


可以解决 分布共享库的问题.
CDN 一个 由服务器组成的网络. 这个网络的用途 分散储存一些公共的内容.
CDN中的 每台服务器 都包含库的 一个副本. 
这些服务器 分布在不同的国家和地区. 以便当地用户能更快的 下载.

浏览器访问 库的时候 用一个 公共的url.
CDN 底层则 通过地理位置最佳. 速度最快的 服务器提供相应的文件.
从而解决系统中的瓶颈问题.

Google 给以下的库 提供了 免费的 CDN服务:
Dojo jQuery ... 


如果你觉得 用google 的 cdn 不保险.
可以再提供一个 后备 \<script\> 标签. 在cdn 不可用的时候可以从服务器下载相应的文件.
方法:
先检测 对象是否存在.
不存在: 加载服务器上的文件








## 语法
$()  很多库 都把这个 当作 选择器方法的简写.

. 连接语法..

$('p').removeClass('classFoo').addClass('classBar')
删除 所有段落中的 类名. 再添加另一个类名.


语法迭代: 方便对元素列表 进行操作的循环.


\`var items = documentl.getelementsdbytagname("li");
\`\`for (var i=0; i \< items.length; i++ ) {
\`\`alert (typeof itemsi);
\`\`}
\`
→ == jQuery each:

$('li').each(function(i){
  alert(typeof this);
});



### 选择元素:

- 带#的ID $('#elementid')
- 带.的类名 $('.element-class')
- 标签名:  $('tag')


### CSS 选择器

`$('*')` 所有元素
$('tag') 所有tag元素
$('taga tagb') → taga 后代的所有元素 tagb
$('taga,tagb,tagc') → 所有 taga tagb tagc 元素.
$('#id')   所有ID 为id的 元素
$('tag#id') 所有ID为id 且 标签为 tag的元素.
$('.className')   类目为 className 的元素
$('tag.className') 类名为 classNmae 标签为tag的元素

`$('tag[attr]')` 所有带 attr 属性的 tag标签.
`$('tag[attr=value]') 所有带 attr 属性等于value的 tag元素.`

`$('tag[attr!=value]')` 所有sttr属性不等于 vlalue 的值.

$('taga \> tagb') a下面所有的 tagb 元素.






## 专有选择器 jQuery
$('tag:even') 选择偶数 .适合突出显示 表格行.
$('tag:odd') 选择奇数个数.
$('tag.last') 最后一个元素.



;input 选择所有文本字段:
type 


...


3.  实用回调数








