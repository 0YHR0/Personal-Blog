---
title: Ch17_RunningTime
date: 2021-04-10
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink



---

# RunningTime

![image-20220528202722926](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202722926.png)

![image-20220528202729469](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202729469.png)

![image-20220528202736409](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202736409.png)

![image-20220528202746414](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202746414.png)

![image-20220528202755918](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202755918.png)

![image-20220528202809843](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202809843.png)

```java
map(new TweetKeyValue()).setParallelism(2);
```

也可以全局指定并行度。

```java
env.setParallelism(4);
```

三个位置可以配置并行度

1. flink配置文件中

2. 代码里

3. flink任务提交时

优先级：

代码>提交>配置文件

代码里算子单独设置优先级高于全局设置优先级



### **任务链**

合理的设置并行度

- 减少本地通信的开销
- 减少序列化和反序列化

把多个算子合并为一个task，原本的算子成为里面的subtask

满足任务链需要以下条件：

- 算子具有相同并行度(具有相同的分区数)
- 算子属于one-to-one

**one-to-one**：stream维护着分区以及元素的顺序（比如source和map之间）。这意味着map 算子的子任务看到的元素的个数以及顺序跟 source 算子的子任务生产的元素的个数、顺序相同。map、fliter、flatMap等算子都是one-to-one的对应关系。

**Redistributing**：stream的分区会发生改变。每一个算子的子任务依据所选择的transformation发送数据到不同的目标任务。例如，keyBy 基于 hashCode 重分区、而 broadcast 和 rebalance 会随机重新分区，这些算子都会引起redistribute过程，而 redistribute 过程就类似于 Spark 中的 shuffle 过程。

并行度不同的算子之前传递数据会进行重分区，Redistributing类型的算子也会进行重分区。

当然还可以禁止掉合成任务链：

1.  单个算子不参与合成任务链

   ```java
   .disableChaining()
   ```

2.  从单个算子开启一个新的任务链

   ```java
   .startNewChain()
   ```

3.  全局不合成任务链

   ```java
   env.disableOperatorChaining()
   ```



![image-20220528203002169](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528203002169.png)