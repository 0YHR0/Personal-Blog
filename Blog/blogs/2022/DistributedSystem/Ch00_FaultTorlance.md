---
title: Ch00 Fault tolerance
date: 2022-05-12
tags:
 - Distributed System
categories:
 - Distributed System

---

# Fault tolerance



## 三个问题：

+ Byzantine agreement：拜占庭问题

  + 一个节点有个初始值（设定的进攻时间）

  + agreement：所有其他正确的节点的值最终必须是一样的（同时进攻）

  + validity：所有其他正确的节点的值必须跟初始值一样（在设定的进攻时间进攻）

  + Termination：所有正确节点最后都会有个值，不能一直是undefined

+ Consenses problem：共识问题

  + 所有正确的节点有个初始值

  + agreement：所有正确的节点的值最终必须是一样的

  + validity：如果所有正确的节点的初始值相等，那么最后所有正确的节点的值必须跟初始值一样

  + Termination：所有正确的节点最后都会有个值

+ Interactive Consistency：

  + 所有的节点都有一个初始值

  + 所有正确的节点最后都会维护一个数组，里面是所有节点的值

  + 如果是正确的节点，那么数组中的值必须相同

  + 如果是不正确的节点，那么数组中的值可以是任意的

+ 这三个问题是等价的，因为只要有一个算法，都能应用到其他问题上

  + 比如Consenses problem是Interactive Consistency的一个特例

  + 比如把解决byzantine agreement的算法在每个node上执行一遍，就可以解决Interactive consistency



## Synchronous system

所有的消息发送，接受，respond都有一个maximum time

结果：

- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/19933174-3971-4a6f-b6c7-8d0d12f8c874-14899999.jpg)

+ 因为asynchronous system无法判断一个node是挂了还是回复的慢，还是故意不回复，因为他没有消息的maximum time，所以在有failure的时候，不能做到agreement

+ byzantine failure：只要小于(n-1)/3个（下取整）节点fault，都是可以达成agreement的，比如10个里面最多3个



## 针对非拜占庭问题，而是一部分节点crash了的算法：

- <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1ae9af88-0d43-4879-a0a5-3c8f627d99d0-14899999.jpg" alt="image" style="zoom: 33%;" />

+ 每个节点都把自己收到的值放到V集合中，并广播出去，然后把V中最多的那个值作为最终的值



## Byzantine fault torlance：

- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/9f14b983-9205-4cee-b7b7-ecf0af90464f-14899999.jpg)
- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/16f94082-64b4-43c2-a8a8-bec257844ddd-14899999.jpg)

+ 节点数量小于等于3倍的fault节点的时候，不能解决

+ 并且拓扑图中必须有2f + 1 个connection

+ 口头协议算法实现：

- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/e3c3acd2-5229-46e7-beb0-5aa2368791d8-14899999.jpg)

+ 这种方法会造成消息指数级增长，一个node会给其他node发消息，并且把自己收到的所有消息发给剩下的node

- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/54254ade-02c1-4ded-95fa-2d7858db21c3-14899999.jpg)

- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/01eca918-e7e4-4709-9896-826638e19285-14899999.jpg)

  + 询问其他节点7发的消息是什么，得知7发的是5，0

  + 询问其他节点5发的消息是什么，得知5发的是0

+ The EIG algorithm

+ Phase king algorithm:可以少发送信息，但是可以承受的错误节点更少

- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/537af968-ff19-4da7-88db-a29f4a0a3185-14899999.jpg)
- ![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/8b343bb4-bf7d-4854-bcd9-452db6e6e124-14899999.jpg)