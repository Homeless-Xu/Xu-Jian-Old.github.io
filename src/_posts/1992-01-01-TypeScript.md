---
layout: post
title: TypeScript
tags: TypeScript
categories: JS
---



## [TypeScript.CN 说明书][1]


TypeScript具有类型系统，且是JavaScript的超集。 
它可以编译成普通的JavaScript代码。 
TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。




程序需要处理 最简单的数据单元:
数字
字符串
结构体
布尔值


#### 布尔值: boolean
true / false 

`let isDone: boolean = false;`



#### 数字: number
TS 里 所有数字都是浮点数. 类型是 number.
支持: 2/8/10/16 进制


\`let binaryLiteral: number = 0b1010;
\`\`let octalLiteral: number = 0o744;
\`\`let decLiteral: number = 6;
\`\`let hexLiteral: number = 0xf00d;
\`


#### 字符串: string
处理 网页/服务器端的 文本数据.

\`let name: string = "bob";
\`\`name = "smith";
\`




#### 数组 Array
两种方法 定义数组.
1. 元素类型后面跟 `[]`
	`let list: number[] = [1, 2, 3];`
2. 使用数组类型: Array\<元素类型\>
	`let list: Array<number> = [1, 2, 3];`


#### 元组 Tuple
一个已知元素数量和类型的数组.给元素类型不必相同.

`let x: [string, number];`
`x = ['hello', 10]; `



#### 枚举 enum
对js 数据类型的 一个补充.

使用枚举类型 可以为一组数值赋予友好的名字.



enum Color {Red, Green, Blue};
let c: Color = Color.Green;
默认从0开始编号.


enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
也可以指定从1开始编号

enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
也可以完全手动编号

*枚举类型便利: 你可以由枚举的值得到它的名字。*

\`enum Color {Red = 1, Green, Blue};
\`\`let colorName: string = Color2;
\`\`
\`\`alert(colorName);
\`



#### 任意值 any
不确定某个变量的类型.
不希望类型检查器对这些值进行检查,就用any 标记

\`let notSure: any = 4;
\`\`notSure = "maybe a string instead";
\`\`notSure = false; // okay, definitely a boolean
\`
`let list: any[] = [1, true, "free"];`
`list[1] = 100;`



#### 空值 void
和 any类型相反. 表示没有任何类型.
当一个函数没有返回值时,你通常会见到其返回值类型是 void


\`function warnUser(): void {
\`\`  alert("This is my warning message");
\`\`}
\`
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
`let unusable: void = undefined;`


#### Null & Underfined




#### Never
那些永远不存在值的类型.

	// 返回never的函数必须存在无法达到的终点
	function error(message: string): never {
	    throw new Error(message);
	}
	
	// 推断的返回值类型为never
	function fail() {
	    return error("Something failed");
	}
	
	// 返回never的函数必须存在无法达到的终点
	function infiniteLoop(): never {
	    while (true) {
	    }
	}






#### 类型断言
你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。




类型断言有两种形式。 
- “尖括号”语法：
	\`let strLength: number = (<string>someValue).length;
	\`- as语法：
	\`let strLength: number = (someValue as string).length;
	\`





#### Let
我们使用let关键字来代替大家所熟悉的JavaScript关键字var

let关键字是JavaScript的一个新概念

很多常见的问题都可以通过使用let来解决，所以尽可能地使用let来代替var吧。




#### 变量声明 let const
let 类似 var, let可以避免一些问题.
const 对let 的增强: 能阻止对一个变量 再次赋值.



#### Var
js  用 var 定义变量

\`var a = 10;
\`
也可以在函数内部定义:

\`function f() {
\`\`  var message = "Hello, world!";
\`\`  return message;
\`\`}
\`

在其他函数内部访问 相同的变量.
	function f() {
	var a = 10;
	return function g() {
	var b = a + 1;
	return b;
	}
	}
	
	var g = f();
	g(); // returns 11;



上面的例子里，
g可以获取到f函数里定义的a变量。 
每当g被调用时，它都可以访问到f里的a变量。 
即使当g在f已经执行完后才被调用，
它仍然可以访问及修改a。




	function f() {
	var a = 1;
	
	a = 2;
	var b = g();
	a = 3;
	
	return b;
	
	function g() {
	return a;
	}
	}
	
	f(); // returns 2


...


#### Let 声明














## 接口





## 函数
函数是 js 应用程序的基础.
帮你实现 抽象层,模拟类,信息隐藏和模块.



*有名字的函数 & 匿名函数.*



\`// Named function
\`\`function add(x, y) {
\`\`  return x + y;
\`\`}
\`\`
\`\`// Anonymous function
\`\`let myAdd = function(x, y) { return x + y; };
\`

在JavaScript里，
函数可以使用函数体外部的变量。 
当函数这么做时，我们说它‘捕获’了这些变量。 

至于为什么可以这样做以及其中的利弊超出了本文的范围，但是深刻理解这个机制对学习JavaScript和TypeScript会很有帮助。


\`let z = 100;
\`\`
\`\`function addToZ(x, y) {
\`\`  return x + y + z;
\`\`}
\`



函数类型: (能自动推算.可以忽略不写)

\`function add(x: number, y: number): number {
\`\`  return x + y;
\`\`}
\`\`
\`\`let myAdd = function(x: number, y: number): number
\`\`{ return x+y; };
\`
函数类型包含两部分：参数类型和返回值类型。





可选参数和默认参数

可选参数必须跟在必须参数后面。







[1]:	https://zhongsp.gitbooks.io/typescript-handbook/content/