---
title: Ch02 Bully Algorithm
date: 2022-05-27
tags:
 - Distributed System
categories:
 - Distributed System
---

# Bully Algorithm

- Bully算法是一种霸道的集群选主算法，选举原则是“长者”为大，即在所有活着的节点中，选取ID最大的节点为leader。

- 节点可以挂掉，但是消息传输必须可靠并且同步（所以可以计算出最大消息来回时间，T=T(process) + T(transmit)），集群中的每个节点均知道其他节点的ID（唯一）

- 有三种类型的消息：

  - election message：to call elections

  - answer message: to vote

  - coordinator message: to announce own as a coordinator

- 选举条件：

  - 集群初始化

  - 主节点故障或与其他节点失去联系，并且被其他节点发现

  - 任意一个比当前主节点 ID 大的新节点加入集群

  - 某个节点从故障中恢复，但是收到了比他id小的vitory消息

- 选举基本过程：

  - 初始化时，网络环境正常，节点也无故障的情况下，集群中的每个节点都会判断自己的ID是否是当前活着的所有节点ID的最大的，如果是，则直接向其他节点发送Victory消息，宣誓自己为Leader

  -  当主节点发生故障或其他原因导致重新选主时，如果当前节点发现自己的ID不是当前活着的节点中ID最大的，则向比自己ID大的所有节点发送Election消息，并等待回复Alive消息。

  - 在给定的时间范围内，本节点如果没有收到其他节点回复的Alive消息，则认为自己成为Leader，并且向其他节点发送Victory消息。  如果接受到比自己ID大的节点的Alive消息，则人家比你大，老老实实的等待Victory消息吧，若此时没有收到victory消息，则表示id比自己大的节点挂了，则自己可以成为leader。

- 选举过程：![img](https://api2.mubu.com/v3/document_image/e4ad4588-0415-4f8d-97d5-6c4cdaade882-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/17780b53-dc5c-4114-99e1-0a8167f2f4ef-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/19776849-9537-4bf8-a4cf-7a3da5f5c724-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/b7879f53-ad43-40d3-a03f-dceb438459e4-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/46c73b14-b605-4947-aed3-282a53a2bd15-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/a5a77059-6bf3-4d07-aa88-6923732c3735-14899999.jpg)

- ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/e2e89742-8d10-4bd1-a64e-ef4ecc25d772-14899999.jpg)