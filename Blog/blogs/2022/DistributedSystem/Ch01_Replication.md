---
title: Ch00 Replication
date: 2022-05-20
tags:
 - Distributed System
categories:
 - Distributed System


---

# Replication

- Replication可以带来的好处：

  - performance enhancement：比如，负载均衡到多台服务器上

  - fault-torlance: 比如，有f+1台服务器，f台挂了，还能有一台提供服务

  - availability

- Replication需要实现的点：

  - replication transparency：用户只看到一个logical object，而不是很多个pyhsical object

  - consistency：一致性保证

- replica manager![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/a307bfee-f5aa-4823-bc6a-e05c695f4f9b-14899999.jpg)

- 处理请求的5个阶段：![image](https://api2.mubu.com/v3/document_image/1bc77446-b2a3-4f9b-af67-60cd46dfe71c-14899999.jpg)

- Group communication：把process分成一个一个group，更方便管理，并且可以用multicast，用group address![img](https://api2.mubu.com/v3/document_image/44c9a64c-07df-4300-8a97-41b83ef82374-14899999.jpg)

- process只可以处理在view中的process发出的消息![img](https://api2.mubu.com/v3/document_image/f02e0998-58bf-46b4-bf16-ea9ca388febd-14899999.jpg)

- 分布式系统的一致性https://www.cnblogs.com/hzmark/p/consistency_model.html![img](https://api2.mubu.com/v3/document_image/d854d71b-0ed8-4a33-8f25-5f5d96f487d5-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/7efa0e10-1a16-436a-8d41-7eeaf0446698-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/f051ed14-c92e-40a1-b30b-e22f62114f97-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/73f9a8ab-70cd-44cd-a61d-6d7e0e303ab1-14899999.jpg)

- 例子：

  

  - 不可能linearizable，但是可以是sequential的![img](https://api2.mubu.com/v3/document_image/09300424-5753-438e-ae3d-4aeec363ff60-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/349dda59-bda5-46fd-969b-bc9d7ae5e56a-14899999.jpg)

- 一种解决fault torlance的模型：实现了linearizable consistency，请求只发给primary

  

  - 每个请求带有一个独一无二的id，只有primary接受并且处理这个请求，并且存储结果，如果这个请求已经处理过了，那么re-send他的结果

  - 如果是一个更新操作，那么primary把这个更新发送给其他的backup，让他们更新，backup发回ack来确认收到了更新

  - 通过view-synchronize来得知primary挂了

- Active 模型：请求发给所有的RM![img](https://api2.mubu.com/v3/document_image/0a150abe-2ae9-4dcc-91d4-711089eab660-14899999.jpg)

- gossip 模型：请求发给离自己最近的RM

  

  - data is replicated close to the location of the client

  - RMs periodically exchange ‘gossip’ messages containing updates

  - 执行update和query之前必须先询问其他rm来执行在这之前的update，来做到causal ordering

  - 使用vector timestamps来确保update执行的顺序