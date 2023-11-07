---
title: Ch01 Basic
date: 2020-11-21
tags:
 - Zookeeper
categories:
 - Zookeeper
---

#  Zookeeper概述

- Zookeeper是一个基于观察者模式设计的分布式服务管理框架，主要是文件系统+通知机制![img](https://api2.mubu.com/v3/document_image/a61a59d1-c184-4df5-b715-aed25b1885e2-14899999.jpg)

- Zookeeper的数据结构：

  - 可以看作一棵树，所有的节点ZNode都能用路径唯一标识，每个Znode默认存储1Mb的数据![img](https://api2.mubu.com/v3/document_image/4832a203-eb8d-46c6-8124-885ce23afbf6-14899999.jpg)

- Zookeeper提供的功能：

  - 统一命名服务
    - 对应用，服务进行统一命名，如：域名是很多ip的命名

  - 统一配置管理

    - 要求：

      - 一般要求在一个集群中，所有的节点的配置信息都是一致的，如Kafka集群

      - 对配置文件修改后，希望能快速同步到各个节点上

    - 实现：

      - 将配置文件写到一个Znode上

      - 各个客户端服务器监听这个Znode

      - 一旦Znode的数据发生修改，zookeeper通知各个客户端的服务器

  - 统一集群管理

    - 要求：
      - 根据节点的实时状态做出一定的调整

    - 实现：

      - 可将这些节点信息写入Znode

      - 监听这些Znode来获取他的实时变化

  - 服务器动态上下线
    - 客户端能实时洞察到服务器的上下线变化

  - 软负载均衡
    - Zookeeper记录每台服务器的访问数，让访问数最少的服务器处理最新的客户端请求