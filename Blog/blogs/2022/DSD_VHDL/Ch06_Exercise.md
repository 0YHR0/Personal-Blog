---
title: Ch06 Exercise
date: 2023-01-01
tags:
 - FPGA
 - VHDL
categories:
 - VHDL
---

# 

## 取std_logic的绝对值

![image-20230102105553371](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230102105553371.png)

+ 第一位不取



## Johnson counter

![image-20230104121727813](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104121727813.png)



## GRAY COUNTER

![image-20230104121753348](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104121753348.png)

![image-20230104122038643](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104122038643.png)

![image-20230104122113898](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104122113898.png)

![image-20230104122204137](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104122204137.png)

![image-20230104122308280](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104122308280.png)





## latch

![image-20230104211441785](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104211441785.png)

+ process 3 会产生latch
+ 只有simulation会有区别（会一直循环，不能跑），synthesis不会有区别（sensitive list不会影响synthesis）
+ sesitive list多写的话会让simulation变慢
+ 也可以这么写![image-20230104212406033](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104212406033.png)





![image-20230104220752116](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104220752116.png)

+ proc 3只有1个Flipflop
+ proc 4有两个Flipflop，因为tmp在使用之前没有赋值，所以综合的时候会把他作为一个记忆元件（memory element），所以tmp也会编程一个Flip-flop





![image-20230111124908521](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111124908521.png)

