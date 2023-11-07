---
title: Ch02 consistent hashing
date: 2023-02-01
tags:
 - Distributed Transaction
categories:
 - Distributed Transaction


---



# 一致性哈希算法

设计思路非常巧妙的[负载均衡](https://www.zhihu.com/search?q=负载均衡&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})策略——一致性哈希算法.



### 无状态服务

针对于无状态服务，对应的负载均衡流程是要简单很多的. 比如我们可以采用[轮询算法](https://www.zhihu.com/search?q=轮询算法&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})（RR，Round Robin）、[加权轮询算法](https://www.zhihu.com/search?q=加权轮询算法&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})（WRR，Weighted Round Robin）、[平滑加权轮询算法](https://www.zhihu.com/search?q=平滑加权轮询算法&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})（SWRR，Smoth Round Robin）实现集群内各节点对请求流量的平均分配.



 SWRR 的工作原理：

1. **初始化参数**：SWRR 初始化每个后端服务器的权重和一个附加参数（通常为零）。
2. **请求分发**：对于每个请求，SWRR 选择服务器时，考虑服务器的权重和附加参数。权重决定了每个服务器被选择的频率，而附加参数确定了服务器在当前周期内的选择次数。附加参数每次选择服务器时递增。
3. **平滑调整**：随着每次选择，附加参数逐渐增加。一旦某个服务器的附加参数达到阈值（通常等于其权重），则该服务器被选择并重置附加参数为零。这确保了每个服务器的选择次数平滑地分布。
4. **周期性重置**：SWRR 通常在一个周期结束时，将所有服务器的附加参数重置为零，以开始下一个周期。这可以确保权重的平滑分配在周期内保持稳定。

SWRR 的优点包括：

- 平滑权重分配：SWRR 通过动态调整附加参数，确保权重的平滑分配，避免了传统 WRR 算法的权重分配不平衡问题。
- 适应性：SWRR 可以根据服务器性能的变化自动调整权重分配，从而更好地应对服务器负载变化。



### **有状态服务**

指的是一类本身需要通过内存或磁盘实现状态数据存储的服务. 比如数据库、[消息队列](https://www.zhihu.com/search?q=消息队列&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})等组件都属于有状态服务.

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107111041915.png" alt="image-20231107111041915" style="zoom:33%;" />



针对于这类服务，由于其存储了状态数据，因此在对集群进行

+ 横向分治（为防止[单点故障](https://www.zhihu.com/search?q=单点故障&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})而对数据进行[冗余备份](https://www.zhihu.com/search?q=冗余备份&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})）时，需要考虑数据的一致性问题；
+ 纵向分治（为提高集群整体性能上限，不同节点各自分担部分数据存储工作，共同构成[全集](https://www.zhihu.com/search?q=全集&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})）时，需要明确数据与所从属节点之间的映射关系.

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107112751825.png" alt="image-20231107112751825" style="zoom:33%;" />





**然而对于有状态服务而言，倘若存在纵向[分治策略](https://www.zhihu.com/search?q=分治策略&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})，那么我们就需要维护好状态数据与所从属之间的映射关系. 一旦集群发生扩缩容，节点数量发生变更，对应的映射关系就需要发生变化，对应的状态数据就要发生迁移，这会是一个很复杂且笨重的流程.** 而咱们今天所探讨的一致性哈希算法，且核心价值正是为了有效地降低有状态服务集群扩缩容流程的数据迁移成本.



###  纵向分治

我们知道，对于单个[服务节点](https://www.zhihu.com/search?q=服务节点&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})而言，受限于自身的硬件条件，会存在对应于某个水平的[性能瓶颈](https://www.zhihu.com/search?q=性能瓶颈&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413}). 倘若完全局限于[单兵作战](https://www.zhihu.com/search?q=单兵作战&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})的思路，那么这个节点本身的瓶颈就会成为整个系统的天花板.

但是倘若我们引入了纵向分治的策略，那么这块天花板就还能有提高的空间.

打个比方，已知总工作量为 100，倘若我们只让一个人参与工作，那么这个人需要承担的工作量就是 100；倘若我们让 10 个人参与协作，对工作进行[平均拆分](https://www.zhihu.com/search?q=平均拆分&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})，每个人负责其中的一小部分，那么每个人需要承担的工作量就大约是 100/10 = 10.

**当然，在真实场景中，这种纵向分治的策略无法在性能上带来这种线性的提升效率，因为在多人协作时，难免在边界分配、交接工作、结果聚合等环节会存在效率的损耗. 但即便如此，这种纵向扩容分治的思路也能在很大程度上减轻每个独立节点所需要承担的工作强度，因此能够提高整个系统的性能上限.**

我们可以通过哈希散列的方式实现数据的纵向分治，基于[哈希函数](https://www.zhihu.com/search?q=哈希函数&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})的离散性，保证每个节点分配的数据量均可能趋于平均：

在写数据的 set 流程中：

+ 根据数据的 key 取 hash 值
+ hash 值对节点数量取模，得到其所属的节点 index
+ 将数据写入到对应 index 的节点中

在读数据的 get 流程中：

+ 根据数据的 key 取 hash 值
+ hash 值对节点数量取模，得到其所属的节点 index
+ 从 index 对应的节点中读取数据

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107114131531.png" alt="image-20231107114131531" style="zoom:33%;" />



### 带权分治

在实际场景中，不同[节点](https://www.zhihu.com/search?q=节点&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})的性能可能存在差距. 我们希望做到能者多劳，让性能好的节点多完成一些任务，性能差的节点少承担一些工作. 此时，我们可以给每个节点设置一个[权重值](https://www.zhihu.com/search?q=权重值&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})，用于反映其性能水平的强弱.

接下来我们可以设置一条[水平轴](https://www.zhihu.com/search?q=水平轴&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})，每个节点根据其权重值大小在轴上占据对应的比例分区. 接下来每当有数据到来，我们都会根据数据的 key 取得 hash 值并对水平轴的总长度取模，找到其在水平轴上的刻度位置，再根据该刻度所从属的分区，推断出这笔数据应该从属于哪一个节点.

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107114445024.png" alt="image-20231107114445024" style="zoom:33%;" />



### 数据迁移

有状态服务所存在的痛点问题：[集群扩缩容](https://www.zhihu.com/search?q=集群扩缩容&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})时存在的数据迁移流程.

**换言之，一旦集群需要执行扩缩容流程，集群节点数量变更后，原有的映射关系就会被破坏. 为了继续维护这份映射规则，我们需要执行数据迁移操作，将旧数据迁移到能够满足新映射关系的对应位置. 这必然会是一个很重的迁移流程，涉及影响的范围是全量的旧节点.**

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107114749933.png" alt="image-20231107114749933" style="zoom: 33%;" />





## 一致性哈希

### 哈希环

我们首先构造出一个哈希环（Hash Ring）：

- 哈希环是一个首尾衔接的环
- 起点位置数值为 0
- 终点位置数值为 2^32，与 0 重合
- 环上每个刻度对应一个 0~2^32 - 1 之间的数值

哈希环的构造图如下所示：

<img src="C:\Users\YHR\AppData\Roaming\Typora\typora-user-images\image-20231107115300016.png" alt="image-20231107115300016" style="zoom:25%;" />

#### 节点入环

接下来，每个节点需要在哈希环中找到找到属于自己的位置. 入环的方式是，针对于节点的[标识键](https://www.zhihu.com/search?q=标识键&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413}) index 取 hash 值，然后使用该 hash 值对 2^32 取模，最后得到的结果就是该节点在哈希环上对应的位置.

遵循上述流程，我们可以依次把集群中的各个节点加入哈希环中.



#### 数据出/入环

在读数据与写数据的流程中，核心是要找到与这笔数据所归属的节点 index，这里我们采取的方式是：

- 对数据的 key 取[哈希值](https://www.zhihu.com/search?q=哈希值&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})
- 哈希值对哈希环长度（2^32） 取模，找到在哈希环上的位置
- 接下来一步是关键. 我们会沿着节点在哈希环上的位置顺时针往下（包括位置本身），找到第一个节点，作为数据所归属的节点

这里需要注意的是，哈希环是首尾相连的，因此倘若来到 2^32 - 1 的位置都没找到目标节点，则需要从 0（2^32）开始接着向后检索.

按照上述流程，只要在哈希环中至少存在一个节点，难么就一定能为每笔数据找到在哈希环中所应从属的节点.

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107115736476.png" alt="image-20231107115736476" style="zoom:25%;" />



### 数据迁移

引入哈希环之后，在数据与节点映射规则上没有传统方案来得那么直观，但是在数据迁移流程中，这种环状结构的优势就能体现出来了.



#### 新增节点

**背景：**原本集群存在存在 A、B、C、D、E、F 六个节点，已分别添加到[哈希换](https://www.zhihu.com/search?q=哈希换&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})中，位置如下图所示.

**变量：**此时需要新增一个节点 G，经过哈希散列和[取模运算](https://www.zhihu.com/search?q=取模运算&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})后，节点 G 在哈希环上的位置位于 B 与 C 之间，我们把位置关系记为 B-G-C

**下面是对新增节点流程的梳理：**

- 找到节点 G 顺时针往下的第一个节点 C
- [检索节点](https://www.zhihu.com/search?q=检索节点&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413}) C 中的数据，将从属于 (B,G] 范围的这部分数据摘出来，迁移到节点 G
- 节点 G 添加入环

至此，新增节点场景下的数据迁移动作完成.

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107115931914.png" alt="image-20231107115931914" style="zoom:25%;" />



#### 删除节点

**背景：**原本集群中存在 A、B、C、D、E、F、G 七个节点，均已添加到哈希环中

**变量：**现在需要删除其中的节点 G，且节点 G 在哈希环上位于节点 B、C 之间.

**下面是删除节点的执行流程：**

- 找到 G 顺时针向下的第一个节点 C
- 将 G 中的全量数据迁移至节点 C
- 从哈希环中移除节点 G

至此，删除节点场景下的数据迁移操作完成.

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107120052730.png" alt="image-20231107120052730" style="zoom:25%;" />



#### 负载均衡

那么聊到这里方案是否就已经严丝合缝，不存在任何问题了呢？答案是否定的.

每个节点进入哈希环时，所属的位置是根据节点 index 取哈希，并进一步对哈希环长度（2^32） 取模后得到的.



我们知道，**哈希具有离散的性质，能保证在输入内容不同时，输出结果会均匀地散布在输出域范围之内. 然而这种所谓的“离散”和“均匀”是建立在数据样本足够大的情况下，倘若集群节点数量很少，那么就很可能出现节点位置分布不均匀的情况.**



如下图所示，倘若在哈希环中仅存在 A、B、C 三个节点，其中 A-B、C-A 的相对距离都很短，但是 B-C 的相对距离则很远. 在这种情况下就会导致，在节点 A 和节点 B 中只能分配到少陵的数据，而绝大部分的数据都会被集中分配到节点 C 中.



**产生上述问题的根本原因在于，各个节点分配到的数据量，其实取决于其和上一个节点之间相对距离的长短.**

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107120430889.png" alt="image-20231107120430889" style="zoom:25%;" />



#### 虚拟节点

负载均衡问题，在一致性哈希算法中给出的应对策略是虚拟节点路由的方案.

前面我们提到，**哈希散列本身是具有离散性的，节点数据分配不均的问题通常只会发生在集群节点数量较少的情况下. 那么，倘若我们采用某种手段，将节点数量放大，那么更大的数据样本就自然而然地能够弥合或者缩小这部分误差所产生的影响，进一步突显出哈希函数的离散性质.**



虚拟节点策略正是这样来做的：

- 我们定义出“真实节点”和“虚拟节点”两个概念：
- 真实节点：集群中的各个节点，是物理意义上存在的[服务器节点](https://www.zhihu.com/search?q=服务器节点&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})
- 虚拟节点：真实节点进入哈希环时使用的一系列代理节点，是逻辑意义上的代理节点
- 对于各个真实节点，我们指定一个策略，确定其虚拟节点的个数，比如放大一定的倍数. 需要注意的是，虚拟节点越多，那么未来可能抢占到的数据量就越大
- 我们需要维护好一个[路由表](https://www.zhihu.com/search?q=路由表&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})，建立好每个虚拟节点与真实节点的映射关系
- 我们使用虚拟节点作为真实节点的代理，将所有虚拟节点添加到哈希环中
- 在数据出、入哈希环时，使用虚拟节点进行数据的抢占和关联，流程同上一小节
- 每当找到一笔数据所从属的虚拟节点时，通过路由表，找到其所映射的真实节点，然后返回真实节点的 index

基于以上流程，只要我们合理设置好真实节点到虚拟节点之间数量的放大倍数，那么最终位于哈希环上的代理节点的数量就会足够多，这一系列节点在哈希环上的位置就会越均匀，负载均衡的效果就会越好.

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107120759445.png" alt="image-20231107120759445" style="zoom: 33%;" />



#### 带权分治

**我们可以根据各个节点的性能水平，为其设置一个不同的权重值，最终这个权重值会作用在真实节点与虚拟节点之间的数量放大过程中，这样我们就能保证性能强的节点拥有更高数量的虚拟节点，未来就有能力抢占到更多的数据.**



## 总结

一致性哈希的技术原理，涉及的技术要点如下

- 一致性哈希算法是一种适用于有状态服务的负载均衡策略
- 一致性哈希算法[数据结构](https://www.zhihu.com/search?q=数据结构&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3192868413})由一个首尾衔接的哈希环组成：
- 节点入环时，通过取哈希并对环长度取模，确定节点所在的位置
- 数据入环时，通过取哈希并对环长度取模，然后找到顺时针往下的第一个节点，作为操作的目标节点
- 一致性哈希最大的优势是，在集群节点数量发生变更时，只需要承担局部小范围的数据迁移成本
- 一致性哈希中可以通过虚拟节点路由的方式，提高负载均衡程度，并能很好地支持带权分治的诉求





ref: https://www.zhihu.com/question/334239552/answer/3192868413



# 