---
title: Ch10 CommonMethods
date: 2019-10-07
tags:
 - Date
categories:
 - JS

---

# CommonMethods

```js
var c = Infinity;//表示正无穷

console.log(Number.MAX_VALUE);//输出number类型的最大值

console.log(Number.MIN_VALUE);//表示大于0的最小值

var a1 = "abc";
var a2 = "bcd";
console.log(a1*a2);//结果为NaN，表示not a number，但是使用type of返回值还是number
console.log(typeof a);//输出a的数据类型

console.log(Number.MAX_VALUE);//输出number类型的最大值
console.log(Number.MIN_VALUE);//表示大于0的最小值

var a = parseInt("10.2");//结果为10

console.log("a" in p1);//检查对象中是否含有属性值，原型对象中也可以查到, 注意要加双引号

console.log(p1.hasOwnProperty("age"));//检查对象自身中是否含有属性值，不能识别到原型对象中的属性
```

```js
var str = "aaa,ggg,ff,d.3";
var arr = str.split(",");//分割字符串，并返回一个数组
alert(arr);
```

