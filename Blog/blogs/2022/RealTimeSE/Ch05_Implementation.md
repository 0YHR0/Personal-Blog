---
title: Ch05 Implementation
date: 2022-12-29
tags:
 - RealTimeSE
categories:
 - RealTimeSE
---

# Implementation

- Overview![img](https://api2.mubu.com/v3/document_image/26250a42-991b-4b4b-8ff4-c390dd83394f-14899999.jpg)

- 高内聚，低耦合https://blog.csdn.net/walid1992/article/details/73278304![img](https://api2.mubu.com/v3/document_image/69ab2ab0-0830-4c70-9594-c8bf1f25fc78-14899999.jpg)

- Develop platform 和 Target platform不一样：会导致每个平台都要自己的编译器

- Buliding 代码的过程

  

  - micro-controller：多了分配地址空间，把机器码的地址映射到实际地址空间![img](https://api2.mubu.com/v3/document_image/4da13dfd-2e64-44c2-88b6-5e6b7d78e62e-14899999.jpg)

- 两个task之间通信，把数据的指针放到队列中![img](https://api2.mubu.com/v3/document_image/32fced8c-14f2-4f8f-893a-e7fc0433613e-14899999.jpg)

- Timer：hard timer， soft timer![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/a243f395-4dab-4785-b462-802e67324f71-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/35b41917-1383-4b80-9ee3-4086db3e7461-14899999.jpg)