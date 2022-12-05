---
title: Ch05 BasicDataType
date: 2019-09-13
tags:
 - JS
categories:
 - JS
---

# BasicDataType

+ String

- Number
- Boolean
- Undefined： 没声明
- Null：没赋值

在使用Number时注意强制类型转换，如ParseInt（）

任何变量都用var声明，可以把一个函数赋值给一个变量：

```js
var a = function (b) {
    alert(b);
}
a(666);
```

数组：可以混合存所有数据类型，数组中可以存数组，也就是二维数组，也可以放类，函数

数组索引：-1表示最后一个， -2表示倒数第二个

```js
var arr = new Array();
var arrr = [];//更简单的创建数组的方式
var num = [1,2,3,4,"a"];//可以在创建数组的时候就赋值
arr[0] = 10;
arr[1] = 20;
arr[2] = "aaa";
alert(arr.length);//获取数组的长度，同时也可以设置数组的长度
arr.length = 4;
alert(arr);//可以直接输出数组的内容
```

数组常用方法：

```js
var num = [1,2,3,4,"a"];
var len = num.push("abbb","ccc");//可以往数组末尾添加元素，返回数组的长度
var lenth = num.unshift("xxx",666);//可以往数组头部添加元素，返回数组的长度
var last = num.pop();//删除并返回数组的最后一个元素
var first = num.shift();//删除并返回数组的第一个元素
alert(num);
alert(first);
```

slice：

```js
var arr = [1,2,3,4,"aa","bb"];
/*
起始索引包括，结束索引不包括
 */
var re = arr.slice(0,2);//返回第一个，第二个元素组成的数组
alert(re);
```

splice：

```js
var arr = [1,2,3,4,"aa","bb"];
arr.splice(1,2,"xxx");//表示删除元素，并向该位置添加新的元素
//参数1：起始索引位置  参数2：删除的数量  参数3：添加的新元素
alert(arr);
```

数组去重：

```js
var arr = [1,2,6,"a",5,1,2,2,7,"a","a","b"];
for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
alert(arr);
```

![image-20220529214003359](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529214003359.png)

数组自定义排序方法：

```js
//使用回调函数,返回值为1则为交换元素
arr.sort(function(a, b) {
    if(a > b) return 1;
    else if (a < b) return -1;
    else return 0;
})
alert(arr);
```

函数调用![image-20220529214037466](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529214037466.png)