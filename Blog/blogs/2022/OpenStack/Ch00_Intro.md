---
title: Ch00 Intro
date: 2023-02-04
tags:
 - OpenStack
 - Cloud
categories:
 - OpenStack
---

![image-20230204170107425](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230204170107425.png)

![image-20230204170127270](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230204170127270.png)

![image-20230206222840273](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230206222840273.png)

![image-20230206223159999](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230206223159999.png)

![image-20230206230251407](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230206230251407.png)

![image-20230206230646189](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230206230646189.png)





# Nova

![image-20230208181116198](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208181116198.png)

![image-20230208181154015](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208181154015.png)

+ 当一些简单的API到达nova的时候，比如开启或者关闭某个虚拟机，就会直接调用compute
+ 如果复杂的API到达的时候，会先调用conductor
+ Hyperviser是真正执行动作的

![image-20230208183904501](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208183904501.png)

![image-20230208184124236](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208184124236.png)

+ region比如东北区，华北区
+ AvailabilityZone：比如在宝山区的几个数据机房，断电会同时不能提供服务
+ Host aggregate：比如计算能力强的主机组，或者内存比较大的主机组

![image-20230208184824311](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208184824311.png)

![image-20230208185055685](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208185055685.png)



# Cinder

![image-20230208185218011](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208185218011.png)

![image-20230208185722444](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208185722444.png)

![image-20230208190204119](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208190204119.png)

![image-20230208190341730](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208190341730.png)

![image-20230208190545158](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208190545158.png)



# Neutron

![image-20230208191433665](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208191433665.png)

![image-20230208191731136](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208191731136.png)

![image-20230208192445078](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208192445078.png)

![image-20230208192914367](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208192914367.png)

![image-20230208193151848](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230208193151848.png)



https://www.bilibili.com/video/BV1aQ4y117hd?p=8&spm_id_from=pageDriver&vd_source=1a7c0e12ae4c11965d82c6b8edcbdf0f 



+ TRILI  storware (not free)
+ backup for vm: Raksha
