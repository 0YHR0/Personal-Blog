---
title: Ch09 Date
date: 2019-10-06
tags:
 - Date
categories:
 - JS
---

# Date class

Data每次new的时候都会获取当前最新的时间，并且会显示时区

```js
var date = new Date();
var data1 = new Date("12/01/1999 11:10:59");//不传参数默认当前时间，传了参数就会显示参数的时间
/*
   日期格式：月/日/年 时:分:秒
   年份务必写完整
 */
alert(data1.getDay());//返回星期几 0-6 周日是0
alert(data1.getDate());//返回几月份
// alert(date);
var i = Date.now();//获取当前时间的时间戳：从1970年1.1开始到当前时刻的毫秒数，可以用来测试代码的执行效率
```

