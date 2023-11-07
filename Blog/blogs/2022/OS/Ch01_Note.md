---
title: Ch01 Note
date: 2023-07-22
tags:
 - OS
categories:
 - OS
---

# 杂记

### 信号量

![image-20230903171158375](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903171158375.png)

# ip

![image-20230911234648391](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230911234648391.png)



![image-20230911234703368](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230911234703368.png)

![image-20230911234955914](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230911234955914.png)

+ 传输层及以上才有端口之分

+   第七层是应用层，为特定类型的网络应用提供了访问OSI环境的手段。应用层确定进程之间通信的性质，以满足用户的需要。常见的协议包括HTTP,HTTPS,FTP,TELNET,SSH,SMTP,POP3等。 

    第六层是表示层，主要处理两个通信系统中交换信息的表示方式。为上层用户解决用户信息的语法问题。包括数据格式交换、数据加密与解密、数据压缩与终端类型的交换。 

    第五层是会话层，在两个结点之间建立端连接。为端系统的应用程序之间提供对话控制机制。此服务包括建立连接是以全双工还是半双工的方式进行设置，尽管可以在第四层中处理双工方式；会话层管理登入和注销过程。 

    第四层是传输层，常规数据传递，为会话层用户提供端到端的可靠、透明和优化的数据传输服务机制。包括全双工或半双工、流量和错误恢复服务；传输层把消息分成若干分组，并在接收端对它们进行充足。

+ 时分多路复用： 

    模拟信号在端局被称作编码解码器(coder-decoder,codec);编码解码器每秒采样8000次(125微秒/次),这种技术被称为脉冲编码调制PCM(pulse code modulation).PCM是现代电话系统的核心. 

### 自旋锁

![image-20230903171248729](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903171248729.png)

+ 不切换状态（就绪--> 等待），因为自旋锁会一直循环

+ ![image-20230905121319560](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905121319560.png)
+ 调度算法： FCFS， SJF（短作业优先，一般是非抢占式的），SRNT(抢占式，最短剩余时间优先)， HRRN（高响应比优先，非抢占） 响应比=（等待时间+要求服务时间）/要求服务时间。故它一定>=1.
+ RR（时间片轮转）
+ 多级反馈队列![image-20230905122735344](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905122735344.png)
+ ![image-20230905122753330](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905122753330.png)
+ https://zhuanlan.zhihu.com/p/374287625 Peterson：进程互斥访问（flag[] + turn）
+ ![image-20230905125303038](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905125303038.png)
+ ![image-20230905125311565](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905125311565.png)
+ PV, 信号量，可以实现互斥（信号量mutex = 1），同步（信号量 = 0）![image-20230905125631998](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905125631998.png)
+ 同步细节： 前操作执行完就释放（V），后操作执行前要申请（P）![image-20230905125831314](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905125831314.png)
+ p操作不能换，mutex一定要在最里层![image-20230905130239233](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905130239233.png)
+ 死锁![image-20230905133334103](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905133334103.png)
+ 银行家算法
+ 可以这样理解：
  已知n个进程还需要的资源数量Need和当前空闲的资源数量Available。
  如果空闲的资源数量Available满足任意一个进程的Need，那就给它用，用完后就可以释放已经分配给该进程的资源Allocation。
  一直这样操作下去，如果能把所有进程都运行完，就是安全的。
  如果不能运行完， 且当前的Available无法满足任意的Need，那就死锁了。
  ![image-20230905132848137](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905132848137.png)
+ ![image-20230905133038099](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230905133038099.png)



### 内存

![image-20230906105005815](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906105005815.png)

![image-20230906121543971](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906121543971.png)

![image-20230906121620337](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906121620337.png)

![image-20230906121735275](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906121735275.png)

![image-20230906122609158](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906122609158.png)

+ 动态分区分配算法![image-20230906122623000](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906122623000.png)

+ kB是2的10次方，每次往上增加都是加2的10次方![image-20230906160544438](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906160544438.png)
+ ![image-20230906170906157](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906170906157.png)
+ ![image-20230906170918987](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906170918987.png)
+ ![image-20230906170936351](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230906170936351.png)



![image-20230912195216828](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230912195216828.png)

![image-20230912195857767](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230912195857767.png)

![image-20230912195907304](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230912195907304.png)

![image-20230912212403996](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230912212403996.png)

![image-20230912212641314](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230912212641314.png)

+ 用户态--> 内核态的三种方式：系统调用（主动），中断，异常（如缺页）

![image-20230912214829200](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230912214829200.png)

![image-20230912215949593](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230912215949593.png)



### 文件

![image-20230913123540138](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913123540138.png)

![image-20230913132923471](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913132923471.png)

![image-20230913133258833](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913133258833.png)

![image-20230913134956317](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913134956317.png)

![image-20230913141716483](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913141716483.png)

![image-20230913142239625](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913142239625.png)

![image-20230913144119181](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913144119181.png)

![image-20230913151159711](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913151159711.png)

![image-20230913151811543](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230913151811543.png)
