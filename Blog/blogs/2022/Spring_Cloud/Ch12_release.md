---
title: Ch12 release
date: 2022-04-17
tags:
 - Java
 - Spring Cloud
 - release
categories:
 - Spring Cloud


---



## 前言

我们都知道，在IT公司中，如果要发布新版本的话，需要考虑上线的安全性与稳定性。传统的方法是先停机，然后做新版本发布，最后重新上线。但我们都知道，这样做会导致服务中断，可能会造成业务丢失，从而造成损失。

所以我们通常会使用一些不会造成服务中断的发布方式，即边发布新版本，边提供服务，使得发布过程变得较为平滑。

常用的发布方式有：蓝绿发布、红黑发布、滚动发布、灰度发布(金丝雀发布)三种。

 

## 蓝绿发布

蓝绿发布中，一共有两套系统。一套运行旧版本应用，被称为“绿色”；一套运行新版本应用，被称为“蓝色”。两套系统均功能完善，并且正在运行的系统，只是系统版本和对外服务情况不同。正在对外提供服务的老系统是绿色系统，新部署的系统是蓝色系统。

![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1222542-20220524131100289-1347188984.png)

两套系统互不干扰，我们可以单独对蓝色系统进行调试，而不影响绿色系统提供服务。

在蓝色系统调试好后，可将流量导至蓝色系统，进行用户测试；若出现问题，则切回绿色系统。

在用户测试没问题后，升级绿色系统。

### 特点

1）蓝绿部署的目的是**减少发布时的中断时间**、**能够快速撤回发布**。

2）两套系统没有耦合的时候才能百分百保证不干扰。

### 注意事项

蓝绿发布是发布方式中的一种，需要根据特定情况进行选择。蓝绿部署能够简单快捷实施的前提假设是目标系统是非常内聚的，如果目标系统相当复杂，那么如何切换、两套系统的数据是否需要以及如何同步等，都需要仔细考虑。

当你切换到蓝色环境时，需要妥当处理未完成的业务和新的业务。如果你的数据库后端无法处理，会是一个比较麻烦的问题；

- 可能会出现需要同时处理“微服务架构应用”和“传统架构应用”的情况，如果在蓝绿部署中协调不好这两者，还是有可能会导致服务停止。
- 需要提前考虑数据库与应用部署同步迁移 /回滚的问题。
- 蓝绿部署需要有基础设施支持。
- 在非隔离基础架构（ VM 、 Docker 等）上执行蓝绿部署，蓝色环境和绿色环境有被摧毁的风险。

 

## 红黑发布

与蓝绿部署类似，红黑部署也是通过两个集群完成软件版本的升级。当前提供服务的所有机器都运行在红色集群 Group1 中，当需要发布新版本的时候，具体流程是这样的：

先申请一个黑色集群 Group2 ，在 Group2 上部署新版本的服务；
等到 Group2 升级完成后，我们一次性地把负载均衡全部指向 Group2 ；
把 Group1 集群从负载均衡列表中删除，并释放集群 Group1 中所有机器。这
这样就完成了一个版本的升级。可以看到，与蓝绿部署相比，红黑部署获得了两个收益：一是，简化了流程；二是，避免了在升级的过程中，由于只有一半的服务器提供服务，而可能导致的系统过载问题。但同样也存在全量升级对用户的影响问题，也带来了一个新的问题，就是发布过程中需要两倍的服务器资源。



相比蓝绿发布将机器分为两拨，滚动发布会分得更细。每次只升级一小部分机器，然后滚动升级，最终完成全部升级。

![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1222542-20220524131126550-263055875.png)

### 特点

1）这种部署方式相对于蓝绿部署，更加节约资源——它不需要运行两个集群、两倍的实例数。我们可以部分部署，例如每次只取出集群的20%进行升级。

2）回滚困难。

### 滚动发布注意事项

1）滚动发布没有一个确定可行的环境。蓝绿部署我们知道老版本是可行的，但是滚动发布不行。

2）修改了现有环境。

3）回滚困难。举个例子，在某一次发布中，我们需要更新100个实例，每次更新10个实例，每次部署需要5分钟。当滚动发布到第80个实例时，发现了问题，需要回滚，这个回滚却是一个痛苦，并且漫长的过程。

4）有的时候，我们还可能对系统进行动态伸缩，如果部署期间，系统自动扩容/缩容了，我们还需判断到底哪个节点使用的是哪个代码。尽管有一些自动化的运维工具，但是依然令人心惊胆战。

5）因为是逐步更新，那么我们在上线代码的时候，就会短暂出现新老版本不一致的情况，如果对上线要求较高的场景，那么就需要考虑如何做好兼容的问题。

 

## 灰度发布（金丝雀发布）

灰度发布，也叫金丝雀发布。是指在黑与白之间平滑过渡的一种发布方式。AB test就是一种灰度发布方式，让一部分用户继续用A，一部分用户开始用B，如果用户对B没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到B上面来。灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度，而我们平常所说的金丝雀部署也就是灰度发布的一种方式。

具体到服务器上, 实际操作中还可以做更多控制，譬如说，给最初更新的10台服务器设置较低的权重、控制发送给这10台服务器的请求数，然后逐渐提高权重、增加请求数。一种平滑过渡的思路, 这个控制叫做“流量切分”。

关于金丝雀发布这个名字的来源，可以参考以下故事：

```none
17世纪，英国矿井工人发现，金丝雀对瓦斯这种气体十分敏感。空气中哪怕有极其微量的瓦斯，金丝雀也会停止歌唱；而当瓦斯含量超过一定限度时，虽然鲁钝的人类毫无察觉，金丝雀却早已毒发身亡。当时在采矿设备相对简陋的条件下，工人们每次下井都会带上一只金丝雀作为“瓦斯检测指标”，以便在危险状况下紧急撤离。
```

![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1222542-20220524131212279-964155131.png)

过程:

1）准备好部署各个阶段的工件，包括：构建工件，测试脚本，配置文件和部署清单文件。

2）将“金丝雀”服务器部署进服务器中, 测试。

3）从负载均衡列表中移除掉“金丝雀”服务器。

4）升级“金丝雀”应用（排掉原有流量并进行部署）。

5）对应用进行自动化测试。

6）将“金丝雀”服务器重新添加到负载均衡列表中（连通性和健康检查）。

7）如果“金丝雀”在线使用测试成功，升级剩余的其他服务器。（否则就回滚）

 

## A/B测试

顾名思义，上面三个都是发布策略，而A/B是个测试策略。二者侧重点不同，发布策略主要关注新系统的程序bug和隐患，而测试策略主要关注新旧版本之间的使用对比，关注实际效果，如转化率、订单情况等。

A/B测试时，线上同时运行多个版本的服务，这些服务通常会有一些体验上的差异，譬如说页面样式、颜色、操作流程不同。相关人员通过分析各个版本服务的实际效果，选出效果最好的版本。

![image](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1222542-20220524131225360-899762802.png)



ref:

 https://www.cnblogs.com/young233/p/16305217.html

https://blog.csdn.net/m0_58181788/article/details/124781903