---
title: Ch00 Intro
date: 2022-11-20
tags:
 - Kafka
 - MQ
categories:
 - Kafka
---



## 定义

![image-20221120102059015](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120102059015.png)



## Function

传统的消息队列的主要应用场景包括：缓存/消峰、解耦和异步通信。

![image-20221120102350139](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120102350139.png)

![image-20221120102403972](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120102403972.png)

![image-20221120104303607](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120104303607.png)



## 消息队列的两种模式

![image-20221120105508549](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120105508549.png)

+ 一个分区只能由一个消费者消费



## 基础架构

![image-20221120110043918](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120110043918.png)

+ Producer：消息生产者，就是向Kafka broker 发消息的客户端。
+ Consumer：消息消费者，向Kafka broker 取消息的客户端。
+ Consumer Group（CG）：消费者组，由多个consumer 组成。消费者组内每个消
  费者负责消费不同分区的数据，一个分区只能由一个组内消费者消费；消费者组之间互不
  影响。所有的消费者都属于某个消费者组，即消费者组是逻辑上的一个订阅者。
+ Broker：一台Kafka 服务器就是一个broker。一个集群由多个broker 组成。一个
  broker 可以容纳多个topic。
+ Topic：可以理解为一个队列，生产者和消费者面向的都是一个topic。
+ Partition：为了实现扩展性，一个非常大的topic 可以分布到多个broker（即服
  务器）上，一个topic 可以分为多个partition，每个partition 是一个有序的队列。
+ Replica：副本。一个topic 的每个分区都有若干个副本，一个Leader 和若干个
  Follower。
+ Leader：每个分区多个副本的“主”，生产者发送数据的对象，以及消费者消费数
  据的对象都是Leader。
+ Follower：每个分区多个副本中的“从”，实时从Leader 中同步数据，保持和
  Leader 数据的同步。Leader 发生故障时，某个Follower 会成为新的Leader。



未完待续。。。