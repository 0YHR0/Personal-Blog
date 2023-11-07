---
title: Ch06 Interprocess
date: 2022-06-22
tags:
 - Distributed System
categories:
 - Distributed System
---

# Interprocess+RMI+components+Graph



- events：represent the state changes 

- socket建立方法：![img](https://api2.mubu.com/v3/document_image/c8927a8f-0007-4aee-9a02-d7cb97fc96d8-14899999.jpg)

- stub负责marshing and unmarshing the data![img](https://api2.mubu.com/v3/document_image/aadb3d7c-52e6-49ae-b969-07f8e22a7975-14899999.jpg)

- components放在container中，容器的功能等

- gateway（flooding） Algorithm最小生成树

  

  - 根节点往其他所有节点发消息

  - 若节点收到消息，且没有成为树中的一个节点（没有parent），则认发消息的节点是parent，并把消息传递给除父节点外的其他节点

  - 若节点收到消息，且已经成为树中的一员，他会扔掉这个消息

  - 若一个节点同时受到两个消息，那么随机取一个消息的发送者为parent，并且扔掉另一个消息（如b和c同时发给e）

  - 特点：树的深度取决于每条信号的传输时间

  - 改进算法：

    

    - 节点在发送信息的时候带上到根节点的distance

    - 根节点的distance为0，没有收到消息的distance为正无穷

    - 收到消息后，认distance最小的一个节点为父节点，并且distance+1之后发给除父节点外的其他节点

  - 如果多个节点同时开始最小生成树算法，给每个节点id，在一个节点收到多个节点的message时，取id最大的节点的消息，并且加入这个节点的生成树算法![img](https://api2.mubu.com/v3/document_image/f6d287c1-8e42-44f8-b701-85ee53142186-14899999.jpg)

  - GHShttps://blog.csdn.net/houwanfeimark/article/details/108568819