---
title: Ch06 Mongodb Sharded
date: 2022-11-18
tags:
 - MongoDB
 - DB
categories:
 - MongoDB


---

# 分片集群-Sharded Cluster

## 分片概念

分片（sharding）是一种跨多台机器分布数据的方法， MongoDB使用分片来支持具有非常大的数据集
和高吞吐量操作的部署。

换句话说：分片(sharding)是指将数据拆分，将其分散存在不同的机器上的过程。有时也用分区
(partitioning)来表示这个概念。将数据分散到不同的机器上，不需要功能强大的大型计算机就可以储存
更多的数据，处理更多的负载。

具有大型数据集或高吞吐量应用程序的数据库系统可以会挑战单个服务器的容量。例如，高查询率会耗
尽服务器的CPU容量。工作集大小大于系统的RAM会强调磁盘驱动器的I / O容量。

有两种解决系统增长的方法：垂直扩展和水平扩展。

垂直扩展意味着增加单个服务器的容量，例如使用更强大的CPU，添加更多RAM或增加存储空间量。可
用技术的局限性可能会限制单个机器对于给定工作负载而言足够强大。此外，基于云的提供商基于可用
的硬件配置具有硬性上限。结果，垂直缩放有实际的最大值。

水平扩展意味着划分系统数据集并加载多个服务器，添加其他服务器以根据需要增加容量。虽然单个机
器的总体速度或容量可能不高，但每台机器处理整个工作负载的子集，可能提供比单个高速大容量服务
器更高的效率。扩展部署容量只需要根据需要添加额外的服务器，这可能比单个机器的高端硬件的总体
成本更低。权衡是基础架构和部署维护的复杂性增加。

MongoDB支持通过分片进行水平扩展。



## 分片集群包含的组件

MongoDB分片群集包含以下组件：

+ 分片（存储）：每个分片包含分片数据的子集。 每个分片都可以部署为副本集。
+ mongos（路由）：mongos充当查询路由器，在客户端应用程序和分片集群之间提供接口。

+ config servers（“调度”的配置）：配置服务器存储群集的元数据和配置设置。 从MongoDB 3.4开
  始，必须将配置服务器部署为副本集（CSRS）。

下图描述了分片集群中组件的交互：![image-20221118122125933](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122125933.png)

27018 if mongod is a shard member；
27019 if mongod is a config server member



两个分片节点副本集（3+3）+一个配置节点副本集（3）+两个路由节点（2），共11个服务节点。

![image-20221118122224001](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122224001.png)



### Compass连接分片集群

![image-20221118122420089](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122420089.png)

![image-20221118122427034](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122427034.png)



### SpringDataMongDB连接分片集群
Java客户端常用的是SpringDataMongoDB，其连接的是mongs路由，配置和单机mongod的配置是一
样的。
多个路由的时候的SpringDataMongoDB的客户端配置参考如下：

```yml
spring:
#数据源配置
data:
mongodb:
# 主机地址
# host: 180.76.159.126
# 数据库
# database: articledb
# 默认端口是27017
# port: 27017
#也可以使用uri连接
# uri: mongodb://192.168.40.134:28017/articledb
# 连接副本集字符串
# uri:
mongodb://180.76.159.126:27017,180.76.159.126:27018,180.76.159.126:27019/article
db?connect=replicaSet&slaveOk=true&replicaSet=myrs
#连接路由字符串
uri: mongodb://180.76.159.126:27017,180.76.159.126:27117/articledb
```

