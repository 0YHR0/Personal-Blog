---
title: Lab 02
date: 2022-06-18
tags:
 - OS
categories:
 - OS


---

# Lab 02

- memory descriptor是task struct的一部分，用来描述给一个进程的内存分配![img](https://api2.mubu.com/v3/document_image/3620fdae-61c3-4e0a-bf68-bee80761dc05-14899999.jpg)

- Memory descriptor包含些什么：

  

  - kernel线程的memory-struct是null

  - 当几个线程共用一个进程的内存空间（创建子进程时，传递CLONE_VM参数）时，mm_users会增加

  - 共用内存空间的线程退出时：![img](https://api2.mubu.com/v3/document_image/0dedaedb-5ecc-44ce-9c13-3339339865fa-14899999.jpg)

  - mm_count一般都是1，除了kernel操作改内存空间时会+1![img](https://api2.mubu.com/v3/document_image/56d64d31-8e9c-496f-a0bc-16747a55d84a-14899999.jpg)

  - ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/63a1841a-49b5-49b8-8d37-316fd03a69de-14899999.jpg)