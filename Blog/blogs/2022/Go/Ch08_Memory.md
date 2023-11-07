---
title: Ch08 Memory
date: 2023-08-24
tags:
 - Go
categories:
 - Go
---



# 内存管理

ref ： https://www.zhihu.com/question/439047319/answer/2875425681

![image-20230903162046989](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162046989.png)

+ 操作系统中通常会将虚拟内存和物理内存切割成固定的尺寸，于虚拟内存而言叫作“页”，于物理内存而言叫作“帧”



go语言

![image-20230903161927470](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903161927470.png)

- mheap：全局的内存起源，访问要加[全局锁](https://www.zhihu.com/search?q=全局锁&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2875425681})
- mcentral：每种对象大小规格（全局共划分为 68 种）对应的缓存，锁的粒度也仅限于同一种规格以内
- mcache：每个 P（正是 GMP 中的 P）持有一份的内存缓存，访问时无锁



### page & mspan

（1）page：最小的存储单元.

Golang 借鉴操作系统分页管理的思想，每个最小的存储单元也称之为页 page，但大小为 8 KB

（2）mspan：最小的管理单元.

[mspan](https://www.zhihu.com/search?q=mspan&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2875425681}) 大小为 page 的整数倍，且从 8B 到 80 KB 被划分为 67 种不同的规格，分配对象时，会根据大小映射到不同规格的 mspan，从中获取空间.![image-20230903162123490](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162123490.png)

![image-20230903162222818](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162222818.png)

+ mspan 是 Golang 内存管理的最小单元
+ mspan 大小是 page 的整数倍（Go 中的 page 大小为 8KB），且内部的页是连续的（至少在虚拟内存的视角中是这样）
+ 每个 mspan 根据空间大小以及面向分配对象的大小，会被划分为不同的等级
+ 同等级的 mspan 会从属同一个 mcentral，最终会被组织成链表，因此带有前后指针（prev、next）
+ 由于同等级的 mspan 内聚于同一个 mcentral，所以会基于同一把[互斥锁](https://www.zhihu.com/search?q=互斥锁&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2875425681})管理
+ mspan 会基于 bitMap 辅助快速找到空闲内存块（块大小为对应等级下的 object 大小），此时需要使用到 Ctz64 算法.



### 线程缓存 mcache

![image-20230903162523372](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162523372.png)

+ mcache 是每个 P 独有的缓存，因此交互无锁
+ mcache 将每种 spanClass 等级的 mspan 各缓存了一个，总数为 2（nocan 维度） * 68（大小维度）= 136
+ mcache 中还有一个为对象分配器 [tiny allocator](https://www.zhihu.com/search?q=tiny allocator&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2875425681})，用于处理小于 16B 对象的内存分配



### 中心缓存 mcentral

![image-20230903162832162](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162832162.png)

+ 每个 mcentral 对应一种 spanClass
+ 每个 mcentral 下聚合了该 spanClass 下的 mspan
+ mcentral 下的 mspan 分为两个链表，分别为有空间 mspan 链表 partial 和满空间 mspan 链表 full
+ 每个 mcentral 一把锁



### 全局堆缓存 mheap

+ 对于 Golang 上层应用而言，堆是操作系统虚拟内存的抽象

+ 以页（8KB）为单位，作为最小内存存储单元

+ 负责将连续页组装成 mspan

+ [全局内存](https://www.zhihu.com/search?q=全局内存&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2875425681})基于 bitMap 标识其使用情况，每个 bit 对应一页，为 0 则自由，为 1 则已被 mspan 组装

+ 通过 heapArena 聚合页，记录了页到 mspan 的映射信息

+ 建立空闲页[基数树](https://www.zhihu.com/search?q=基数树&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2875425681})索引 radix tree index，辅助快速寻找空闲页

+ 是 mcentral 的持有者，持有所有 spanClass 下的 mcentral，作为自身的缓存

+ 内存不够时，向操作系统申请，申请单位为 heapArena（64M）

![image-20230903162142652](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162142652.png)





#  对象分配流程

Golang 中，依据 object 的大小，会将其分为下述三类：

![image-20230903163207581](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903163207581.png)

对于微对象的分配流程：

（1）从 P 专属 mcache 的 tiny 分配器取内存（无锁）

（2）根据所属的 spanClass，从 P 专属 mcache 缓存的 mspan 中取内存（无锁）

（3）根据所属的 spanClass 从对应的 mcentral 中取 mspan 填充到 mcache，然后从 mspan 中取内存（spanClass 粒度锁）

（4）根据所属的 spanClass，从 mheap 的页分配器 pageAlloc 取得足够数量空闲页组装成 mspan 填充到 mcache，然后从 mspan 中取内存（全局锁）

（5）mheap 向操作系统申请内存，更新页分配器的索引信息，然后重复（4）.

对于小对象的分配流程是跳过（1）步，执行上述流程的（2）-（5）步；

对于大对象的分配流程是跳过（1）-（3）步，执行上述流程的（4）-（5）步.

![image-20230903163720223](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903163720223.png)

