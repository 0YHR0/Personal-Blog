---
title: Ch04 Data Structure
date: 2023-10-22
tags:
 - redis
categories:
 - Redis

---

# Advanced



## SDS

+ Redis定义了多种SDS来存放字符串（不同长度用不同的结构体）

![image-20231022225056755](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022225056755.png)

![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022225244098.png)

![image-20231022225655621](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022225655621.png)



## IntSet

+ 在数据量不大的时候，存数字

  ![image-20231022230159657](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022230159657.png)

  ![image-20231022230322489](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022230322489.png)

+ 在添加一个放不下的元素之后升级扩容![image-20231022230948052](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022230948052.png)

+ 会确保元素的唯一，有序

+ 底层采用二分查找、



## Dict

![image-20231022232851627](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022232851627.png)

![image-20231022231944400](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022231944400.png)

+ used有可能大于size的大小，因为可能哈希冲突，一个key对应多个value（*next）
+ union表示v可以是这四种类型中任意一种
+ 为什么需要sizemask？hash的时候对size求余运算 == 和size -1 求与运算 【必须在size是2的n次方的情况下】

![image-20231022232706521](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022232706521.png)

![image-20231022232927033](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022232927033.png)

+ 每次冲突的时候往队首加就可以，否则要遍历好多次

+ rehash![image-20231022234048876](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022234048876.png)
+ ![image-20231022234210142](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022234210142.png)

![image-20231023000923250](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023000923250.png)

+ 由于rehash可能数据量过大，主线程会很慢，所以采用渐进式![image-20231023001401729](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023001401729.png)



## ZipList

![image-20231023110714164](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023110714164.png)

![image-20231023111327107](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023111327107.png)

![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023111725824.png)

![image-20231023112419553](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023112419553.png)

+ 连锁更新问题![image-20231023112835283](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023112835283.png)



![image-20231023113002227](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023113002227.png)





## QuickList

![image-20231023113646216](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023113646216.png)

![image-20231023113826362](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023113826362.png)

![image-20231023113914170](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023113914170.png)

![image-20231023114207740](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023114207740.png)

 

## SkipList

![image-20231023120806383](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023120806383.png)

![image-20231023120904268](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023120904268.png)

![image-20231023120944768](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023120944768.png)



## RedisObject

![image-20231023121303177](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023121303177.png)

+ 编码方式就是用上面哪个数据结构来实现![image-20231023121558062](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023121558062.png)
+ ![image-20231023121723854](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023121723854.png)



## String

![image-20231023140052403](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023140052403.png)

+ EMBSTR：最好字符串不要超过44字节，这样就一共分配64字节，正好是redis申请内存的一个分片大小

![image-20231023135958893](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023135958893.png)



## List

![image-20231023140538722](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023140538722.png)

![image-20231023140908766](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023140908766.png)





## Set

![image-20231023142648721](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023142648721.png)

![image-20231023143218870](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023143218870.png)



![image-20231023143453805](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023143453805.png)





## ZSet

![image-20231023144109371](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023144109371.png)

![image-20231023144311886](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023144311886.png)

+ 但是内存占用太高了

![image-20231023145938382](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023145938382.png)







## Hash

![image-20231023150330077](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023150330077.png)

![image-20231023150714988](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231023150714988.png)





## 过期策略

![image-20231024152511167](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024152511167.png)



![image-20231024154117403](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024154117403.png)

+ 用了另一个dict来存，key和之前的一样，val存的是过期时间

![image-20231024154639276](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024154639276.png)

![image-20231024154618214](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024154618214.png)



![image-20231024155228722](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024155228722.png)

![image-20231024160646479](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024160646479.png)



## 淘汰策略

![image-20231024161105148](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024161105148.png)

![image-20231024161357971](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024161357971.png)

![image-20231024161854294](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024161854294.png)

![image-20231024162501570](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024162501570.png)





## 分片

![image-20231024172420853](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024172420853.png)



## 缓存

![image-20231024172845892](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024172845892.png)



## 为什么不用redis做消息队列

## ![image-20231024175654217](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024175654217.png)

![image-20231024173410144](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024173410144.png)



## redis备份

AOF

![image-20231024173704538](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024173704538.png)

![image-20231024173815591](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024173815591.png)



## 主从

![image-20231024174855942](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024174855942.png)



## 容灾

![image-20231024175224816](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024175224816.png)



![image-20231102190157109](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102190157109.png)







