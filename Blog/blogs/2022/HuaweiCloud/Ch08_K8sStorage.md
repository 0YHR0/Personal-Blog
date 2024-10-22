---
title: Ch07_K8s storage
date: 2024-10-12
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud




---



# K8s Storage


## K8s容器存储能力简介

![image-20241015223408638](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223408638.png)

## K8s PV/PVC/SC/DP

![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223408638.png)

![image-20241015223454531](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223454531.png)


### 静态卷/动态卷

![image-20241015223502944](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223502944.png)

![image-20241015223510244](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223510244.png)

![image-20241015223518588](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223518588.png)

![image-20241015223533680](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223533680.png)

![image-20241015223545578](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223545578.png)

![image-20241015223600084](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223600084.png)

![image-20241015223608041](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223608041.png)



## 华为云Everest架构

![image-20241015223622893](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223622893.png)

![image-20241015223715588](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223715588.png)

![image-20241015223734824](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223734824.png)


---
05
---


## StorageClass工作原理

![image-20241015223758360](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223758360.png)

![image-20241015223817533](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223817533.png)

![image-20241015223828382](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223828382.png)

+ 动态卷的创建过程中StorageClass会指定使用那个provisionor


## K8s中存储相关的组件

![image-20241015223839116](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223839116.png)

+ AD controller：主要负责存储卷的 Attach（挂载）和 Detach（卸载）操作。当 Pod 需要使用某个存储卷时，AD Controller 确保存储卷被正确地挂载到运行该 Pod 的节点上。如果 Pod 被调度到不同的节点，它也负责将存储卷从原来的节点卸载并挂载到新的节点上
	+ 操作范围主要集中在存储卷与节点的关联操作上，关注存储卷在不同节点之间的挂载和卸载
	+ 运行在 Kubernetes **控制平面**上，作为 Kubernetes 控制器管理器的一部分运行
	+ 例如，当一个使用持久化存储卷的 Pod 从一个节点迁移到另一个节点时，AD Controller 会协调存储系统和节点，使得存储卷能够在新节点上可用
+ kubelet Volume Manager：负责在节点上具体管理和操作存储卷。它接收来自 API Server 的指令，并在本地节点上执行存储卷的挂载、卸载、格式化等操作
	+ 操作范围局限于单个节点上，关注本地节点上存储卷的具体管理和操作细节
    + 运行在每个 Kubernetes 节点上的 kubelet 组件中
    + 比如，kubelet Volume Manager 会根据 Pod 的配置信息，将指定的存储卷挂载到 Pod 所在的容器文件系统中，使得容器可以访问存储卷中的数据。
+ Volume Plugin 的实现就是后面CSI介绍


## 云原生存储

![image-20241015223849299](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223849299.png)


## CSI存储架构

![image-20241015223909784](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223909784.png)

+ 分为控制控制面（通过Deployment部署）和数据面（通过DaemonSet部署）

### CSI存储接口解读

![image-20241015223934638](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223934638.png)

### 自研CSI插件的构建思路

+ VA：Volume attachment是控制块存储设备的attach/detach的操作逻辑对象
+ CSI接口调用流程：对应动态卷的创建，绑定过程

![image-20241015223949211](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015223949211.png)

### CSI插件注册流程

![image-20241015224005758](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015224005758.png)


## FlexVolume向CSI迁移
+ FlexVolume是之前的动态卷创建方式，在K8s后续版本中会日落（移除）

![image-20241015224017820](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015224017820.png)

![image-20241015224027541](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015224027541.png)

![image-20241015224038357](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015224038357.png)

![image-20241015224047426](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241015224047426.png)
