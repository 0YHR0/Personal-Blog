---
title: Ch03 Advanced
date: 2023-11-02
tags:
 - DB
categories:
 - DB


---

# Mysql运维架构设计



+ 用MHA来监控有单点的问题，解决方案是用Orchestrator，是开源的mysql高可用，拓扑的可视化管理工具，检测，故障转移的组件，有UI界面，在此场景下也可以作为mysql的配置中心

![image-20231102192840450](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102192840450.png)

![image-20231102193336114](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102193336114.png)

![image-20231102193521663](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102193521663.png)

+ 在挂的时候千万不能自动切换，因为会有数据不一致性的问题