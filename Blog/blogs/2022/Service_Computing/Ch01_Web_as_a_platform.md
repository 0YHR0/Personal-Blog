---
title: Ch01 Web as a platform
date: 2021-10-28
tags:
 - Service
 - Service Computing
categories:
 - Service Computing

---

# Web as a platform

+ Browser-->network-->Web server-->Data source
+ TP-Monitor (Transaction Processing Monitor)
  + Presentation server: 获取输入，生成请求
  + Control flow server
  + Transaction server
  + Security![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a75b2832-bf78-4a98-90a9-073ee53fff26-14899999.jpg)
  + Reliable：要把请求写在一个事务中，这样事务回滚的时候请求不会丢失，可以再执行一次![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9a150e10-60d7-4d27-9c83-db24f5df9a8a-14899999.jpg)
+ Service：是一个web address提供的功能，是24小时运行的
+ Service Oriented Computing (SOC)：The compute paradigm behind services
  + E.g. “distributed computing” is such another paradigm
+ Service Oriented Architecture (SOA)：An architectural style to realize SOC
  + E.g. “client/server” 
+ Web Service Technology (WS* and REST)：A standard- and technology stack supporting SOA
  + E.g. “stored procedures”, “Web browser/server”,… support the client/server style
+ 请求者先发起一个请求，服务发现组件会发现所有可用的服务，再选出一个服务给请求者提供服务![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6019e968-5f99-4ceb-b4c7-3ce087ee4a4e-14899999.jpg)
  + 服务先注册，然后用户可以发现服务，然后用户可以绑定服务
+ Service bus![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/bce2faa9-7377-4c81-9cfb-56ffcc4d9e55-14899999.jpg)
+ Manageable resource提供两个接口：<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a152e7c2-615b-469b-ba0d-b99bd4f3551e-14899999.jpg" alt="img" style="zoom: 25%;" />
  + manageability interface 可以用来管理，监视资源，并且可以接入管理系统
  + Resource Interface 用来提供可用的资源
  + sensor是用来监视属性的，effector是用来改变属性的![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/569e3a0d-161a-4fa6-8718-92bc1fe95049-14899999.jpg)
+ MAPE loop自主计算的核心，对资源的监视，分析，计划和执行，以保证资源不会崩，比如自动负载均衡<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e57ef7fa-55ad-4f81-8126-150f250acabf-14899999.jpg" alt="img" style="zoom: 25%;" />
+ 通过work flow描述了service的调用顺序![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/87149fdd-ddc9-47b6-9579-0643b54794dc-14899999.jpg)
