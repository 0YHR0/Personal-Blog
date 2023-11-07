---
title: Ch07 Time
date: 2022-06-24
tags:
 - Distributed System
categories:
 - Distributed System

---

# Physical time

- clock skew/时间=drift rate. 如一个表在十天内慢了10秒，skew就是10秒，drift rate就是1sec/day

- Internal synchronization：内部各个时钟的差别不超过bound都可以，都是1970年都行

- External synchronization：必须与精确的时钟差别不超过bound

- Cristian’s algorithm：![img](https://api2.mubu.com/v3/document_image/3dc7d6ba-c7e7-4fae-a15c-6d164a0773d4-14899999.jpg)

- Berkeley algorithm：Internal synchronization

  - master询问每个服务器时间，并且计算平均值（计算的时候包含了自己的时间）

  - 然后把偏移量发给各个服务器（因为可以避免传输时间的误差）

  - fault-torlance：会自动去除明显不对的时间