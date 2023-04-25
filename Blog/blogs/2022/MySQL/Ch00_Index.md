---
title: Ch00 Index
date: 2019-12-07
tags:
 - DB
categories:
 - DB

---

# Index

**索引是帮助mysql高效获取数据的排好序的数据结构**

​       **所有的数据是存在磁盘上的，当查找到了之后，会加载到内存里**

- 二叉树
- 红黑树
- hash表：不常用，因为单值查找比较快，而范围查找不能实现
- B-tree

联合索引：按照字段逐个比较

一般都用b树或b+树

- 二叉树：不平衡

- 红黑树（是一种平衡二叉树）：由于一个节点只能存一组数据，还是开销太大

- b树（多叉平衡树）：一个节点可以存放多个数据，数据索引从左到右依次递增![image-20230425105018405](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105018405.png)

- b+树：key值有冗余（如图，15不止一个），只有在叶子节点才存放value

  ​	 每一个节点大小是固定的，不把数据存在非叶节点的原因是能使其存储更多的key值

  ​     多了横向指针，目的是在范围查找的时候速度更快，一次定位之后就可以查找![image-20230425105127062](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105127062.png)

- mysql存储引擎（表级别，非数据库级别）：

  - InnoDB索引实现：表数据文件本身就是按照b+树组织的一个索引文件（ibd）

  + 聚集索引，叶节点本身就包含了完整的数据记录

  + InnoDB一定要有主键，而且推荐整型自增型主键，为什么不使用uuid

![image-20230425105228310](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105228310.png)

- mylSM索引实现：索引文件（MYI）和数据文件（MYD）是分离的（非聚集）
  + 叶节点存放数据所在地址

![image-20230425105414854](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105414854.png)

![image-20230425105516062](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105516062.png)

非主键索引存储的是name以及主键的id，主键索引存储的是一行数据

先查name索引，后查主键索引

![image-20230425105556642](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105556642.png)