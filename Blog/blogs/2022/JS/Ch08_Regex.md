---
title: Ch08 Regex
date: 2019-10-05
tags:
 - regex
categories:
 - JS
---

# Regex

```js
var i = new RegExp("a");//第一个参数为正则表达式，第二个参数为匹配模式
//匹配模式中“i”为忽略大小写，“g”为全局匹配模式，可以返回所有符合正则的字符串
var reg = /a/i;//快捷创建正则表达式方法
reg = /a | b///表示a或者b，也可以表示为[ab],字母表示为[a-z]
//[^ab]除了ab
//^表示以什么开头，$表示以什么结尾
var str = "ab";
str.split(reg);//可以用正则表达式拆分字符串
str.search(reg);//可以根据正则表达式搜索字符串，返回第一个找到的索引，如果是全局匹配则返回一个数组
str.match(reg);//可以根据正则表达式提取出来匹配到的字符串，如果是全局匹配则返回一个数组
str.replace(reg, "new");//把一个字符串中符合正则表达式的替换为新字符串
//第一个参数为正则表达式，第二个参数为替换的字符串，不会影响原字符串，返回一个新的字符串
alert(reg.test(str));//可以检查字符串中是否含有某个字母
```

详细语法： https://www.jb51.net/article/72044.htm