---
title: Ch01_Traditional
date: 2020-12-31
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink
---

# Traditional Processing structure



### 传统架构

![image-20220528195009665](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528195009665.png)

**实时性好，但做不了高并发**

![image-20220528192822034](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528192822034.png)

**ETL**-->Extract-Transform-Load的缩写，用来描述将[数据](https://baike.baidu.com/item/数据/5947370)从来源端经过抽取（extract）、[转换](https://baike.baidu.com/item/转换/197560)（transform）、加载（load）至目的端的过程。

**可以处理高并发，但实时性不行**



### 流处理

![image-20220528195028231](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528195028231.png)

修改或扩展十分麻烦，要修改两套系统

![image-20220528195039136](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528195039136.png)

![image-20220528195048897](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528195048897.png)

spark是从批处理演变过来，不是真正的流处理



