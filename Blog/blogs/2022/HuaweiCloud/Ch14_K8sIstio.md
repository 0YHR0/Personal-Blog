---
title: Ch14 K8s Istio
date: 2024-11-19
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud
---

# K8s Istio

# Istio整体架构

![image-20241111213529491](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241111213529491.png)

+ Galley 是 Istio 的配置验证、提取、处理和分发组件。它确保 Istio 的配置符合规则，并将正确的配置信息传递给其他组件。

 

---

 

### xDS（eXtensible Discovery Service）简介

+ xDS 是一组用于发现和配置代理（如 Istio 中的 Envoy）的协议。它提供了一种标准化的方式来动态地向代理传递配置信息，包括服务发现、路由规则、监听器配置等。这些协议允许控制平面（如 Istio 中的 Pilot）与数据平面代理（Envoy）进行通信，以实现对代理行为的灵活控制。

 

#### Pilot 作为 xDS 服务器的角色

+ 服务发现（LDS - Listener Discovery Service）：
  + Pilot 作为 xDS 服务器，通过 LDS 向 Envoy 代理提供监听器（Listener）的配置。监听器定义了 Envoy 如何接收和处理传入的网络连接。例如，Pilot 可以告诉 Envoy 在某个特定端口（如 8080 端口）上监听 HTTP 请求，并根据请求的目标服务将其路由到相应的后端服务实例。这种服务发现功能对于动态环境中的微服务架构至关重要，因为服务的位置和端口可能会随着时间变化，Pilot 能够确保 Envoy 始终拥有最新的监听器配置。

+ 路由发现（RDS - Route Discovery Service）：
  + RDS 协议用于 Pilot 向 Envoy 传递路由规则。这些路由规则决定了如何将传入的请求路由到不同的后端服务。例如，Pilot 可以配置 Envoy 将带有特定 HTTP 头（如/api/v1路径）的请求路由到一个新的服务版本，而将其他请求路由到旧版本。这使得可以在不修改服务代码的情况下实现灰度发布、金丝雀部署等复杂的流量管理策略。Pilot 作为 xDS 服务器，会根据用户定义的流量管理策略和服务发现信息，通过 RDS 向 Envoy 发送精确的路由配置。

+ 集群发现（CDS - Cluster Discovery Service）
  + CDS 协议用于 Pilot 向 Envoy 提供集群（Cluster）配置信息。在 Istio 中，集群代表一组具有相同功能的后端服务实例。Pilot 通过 CDS 告诉 Envoy 哪些服务实例属于同一个集群，以及如何与这些集群进行通信。例如，Pilot 可以为 Envoy 配置一个包含多个微服务实例的集群，包括实例的地址、端口、健康检查策略等信息。这有助于 Envoy 进行负载均衡和故障转移操作，确保请求能够被正确地发送到可用的服务实例。

+ 端点发现（EDS - Endpoint Discovery Service）
  + EDS 是 Pilot 用于向 Envoy 提供更详细的端点（Endpoint）信息的协议。端点是指具体的服务实例，在集群中可以有多个端点。Pilot 通过 EDS 让 Envoy 了解每个集群中的具体端点位置和状态。例如，当一个新的服务实例被添加到集群或者一个旧的实例出现故障时，Pilot 会通过 EDS 及时更新 Envoy 的端点信息，使得 Envoy 能够调整其负载均衡策略，避免将请求发送到不可用的端点。

 

---

 

## 管理面

 

### Pilot基本架构

![image-20241119212645605](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212645605.png)

 

+ xDS Generator 是 Pilot 内部的一个重要功能模块。它基于用户定义的各种配置源（如 Istio 的 CRD - Custom Resource Definition，像 VirtualService、DestinationRule 等）和系统的服务发现信息来生成 xDS 协议相关的配置。这些配置是最终通过 xDS Server 发送给 Envoy 代理的内容。

 

 

### Citadel基本架构

![image-20241119212729261](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212729261.png)

 

 

### Gally基本架构

![image-20241119212739579](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212739579.png)

 

 

 

### Pilot-Agent基本架构

![image-20241119212749578](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212749578.png)

+ 代理应用健康检查是通过app prober来做的，把k8s的一些readness等探针，转发给app，依赖probe的自动重写

+ 为什么要经过代理进行健康检查？因为当sidecar开启严格的健康检查，如果没有代理，会直接被envoy拦截

+ DNSserver：会降低coreDNS的压力，可以为虚拟机上的应用，解析出k8s的服务

 

 

 

 

# 透明的sidecar原理

![image-20241119212801341](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212801341.png)

 

## SideCar基本介绍

+ 手动注入：提供一个pod template模板

+ 自动注入：在应用的pod里面再加一个envoy的pod

 

## SideCar流量拦截

通过iptable，可以通过init container设置

+ 上面入流量，下面出流量

![image-20241119212813648](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212813648.png)

 

## Envoy流量代理流程

![image-20241119212822569](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212822569.png)

 

 

## Envoy流量匹配与转发

![image-20241119212831797](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212831797.png)

 

 

# Istio基本功能实现原理

## 流量治理基本API

![image-20241119212841653](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212841653.png)

![image-20241119212851338](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119212851338.png)





 <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/Knative-%E8%B1%86%E5%8C%85%20(3).png" alt="Knative-豆包 (3)" style="zoom:33%;" />

+ MCP Server对接其他的注册中心

+ Aggregater为xDS server提供istio服务的查询功能，有个查询接口

 ![image-20241119213219449](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213219449.png)

## 路由匹配

![image-20241119213226958](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213226958.png)

 

## 灰度发布

![image-20241119213235064](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213235064.png)

 

 

## 服务网格监控

![image-20241119213242872](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213242872.png)

 

### Metrics

+ envoy中也有一些metrics，但都是连接级别的，没有服务的属性

 

![image-20241119213252590](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213252590.png)

 

 

### Trace调用链

+ 需要应用做一点点改动，通过trace后端

 

![image-20241119213302057](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213302057.png)

![image-20241119213322764](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213322764.png)

![image-20241119213329069](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213329069.png)

![image-20241119213336553](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213336553.png)

![image-20241119213345846](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213345846.png)

 

---

 

## 数据面

 ![image-20241119213443889](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213443889.png)

![image-20241119213451023](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213451023.png)



 

 

### Envoy原理及总体架构

![image-20241119213500462](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213500462.png)

![image-20241119213507339](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213507339.png)

![image-20241119213518297](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213518297.png)



 

 

#### Envoy启动配置及xDS

![image-20241119213631157](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213631157.png)

 

 

#### 实操

+ static_resources是启动的时候手动配置的

+ dynamic_resources是从istio控制面拿到的配置

![image-20241119213541919](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213541919.png)

#### Envoy常用部署模式

![image-20241119213642286](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213642286.png)

 

 

#### Envoy网络及线程模型

![image-20241119213656021](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213656021.png)

 

 

#### Envoy网络及线程模型-共享数据同步

![image-20241119213703999](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213703999.png)



### Envoy网络及线程模型-集群信息更新

![image-20241119213714455](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213714455.png)

 

 

#### Envoy网络及线程模型-网络处理

![image-20241119213723694](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213723694.png)



 

#### Envoy过滤器

![image-20241119213733088](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213733088.png)

 ![image-20241119213743743](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213743743.png)

![image-20241119213853851](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213853851.png)

 

#### EnvoyHTTP请求流程

![image-20241119213901968](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213901968.png)

![image-20241119213913634](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213913634.png)

 

 

#### Envoy问题分析方法

![image-20241119213921110](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213921110.png)

 ![image-20241119213935130](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119213935130.png)

 

## Istio流量治理

 ![image-20241119214002416](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214002416.png)

![image-20241119214010934](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214010934.png)

 

### VirtualService

![image-20241119214019355](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214019355.png)

![image-20241119214033378](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214033378.png)



+ hosts是拦截的目标服务，如果match匹配，转发到match的route里

+ 如果没有匹配到，就根据下面的route的权重来分配

 

---> 生成envoy的配置

![image-20241119214043491](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214043491.png)



 

 

#### 故障注入

注入5秒的时延

![image-20241119214057233](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214057233.png)

![image-20241119214113892](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214113892.png)

 

 

#### Header的更改（包括request和response）

+ 比如对header的增删改查

![image-20241119214123969](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214123969.png)



 

 

### DestinationRule

![image-20241119214132560](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214132560.png)

![image-20241119214149504](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214149504.png)

一般和virtual service配合使用

+ virtual service是基于一些策略把流量路由到目标服务

+ destination rule允许用户针对目标服务做一些配置，见图

 

![image-20241119214158053](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214158053.png)

![image-20241119214205302](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214205302.png)

 

每个subset都对应一些标签，也可以对每个subset应用不同的负载均衡策略

+ 可以设置一些连接池配置connectionPool

+ 可以设置outlierDetection，用来故障检测，连续7次5xx错误，就会把某个endpoint驱逐出去，间隔5分钟，基本的注入时间是900秒

 

 

### Gateway

在k8s的边缘有独立生成的envoy

外部的服务也可以使用envoy的能力，因为是sidecar

![image-20241119214216762](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214216762.png)

![image-20241119214238545](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214238545.png)

![image-20241119214246061](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214246061.png)

![image-20241119214256398](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214256398.png)

![image-20241119214305216](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214305216.png)

 

 

## 服务网格监控

![image-20241119214312434](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214312434.png)



 

## Metrics

![image-20241119214318396](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214318396.png)

+ ALPN（Application - Layer Protocol Negotiation）基本概念
  + ALPN 是一种在 TLS（Transport Layer Security）握手过程中协商应用层协议的机制。在网络通信中，当客户端和服务器通过 TLS 建立安全连接时，ALPN 允许双方在 TLS 握手阶段就确定后续要使用的应用层协议，而不是在 TLS 连接建立后再去协商。这样可以提高协议选择的效率，减少额外的往返通信。

 ![image-20241119214345595](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214345595.png)

### Trace

![image-20241119214355041](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214355041.png)

![image-20241119214405647](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214405647.png)

![image-20241119214416655](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214416655.png)

 

### AccessLog

![image-20241119214423869](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214423869.png)

![image-20241119214430466](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214430466.png)





---

---

# 传统微服务架构接入istio方案

### 微服务架构业务解耦的同时带来了极大的复杂度
![image-20241119214619170](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214619170.png)

![image-20241119214635349](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214635349.png)

### 基于网格的服务治理
![image-20241119214641732](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214641732.png)

### 常用微服务框架对比



#### 服务发现 负载均衡

![image-20241119214657658](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214657658.png)



#### 服务熔断
![image-20241119214813336](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214813336.png)

### 问题1：微服务SDK多语言问题
![image-20241119214822288](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214822288.png)

![image-20241119214832088](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214832088.png)


### 问题2：基于SDK的微服务在k8s上运行的服务发现延迟和数据不一致问题
![image-20241119214840427](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214840427.png)

![image-20241119214848774](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214848774.png)

+ pod在迁移过程中，注册中心来不及删除，导致了不一致问题



### 问题3：基于SDK开发的微服务，SDK逻辑升级，所有业务必须重新编译升级

![image-20241119214859500](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214859500.png)

+ 网格升级可以单独升级
![image-20241119214907463](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214907463.png)

### 问题4：在把单体应用微服务化的时候，可能要一把把所有的服务都用sdk重写一遍，不能逐渐升级，否则可能不能服务发现等
![image-20241119214915304](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214915304.png)

![image-20241119214922309](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214922309.png)



## 怎么把微服务框架集成到服务网格
![image-20241119214930971](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214930971.png)

![image-20241119214939998](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214939998.png)

![image-20241119214947410](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214947410.png)

![image-20241119214953956](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119214953956.png)

![image-20241119215001022](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215001022.png)

![image-20241119215006829](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215006829.png)

![image-20241119215112626](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215112626.png)

![image-20241119215122595](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215122595.png)

![image-20241119215132544](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215132544.png)

![image-20241119215140955](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215140955.png)

![image-20241119215148661](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215148661.png)

![image-20241119215200568](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215200568.png)

![image-20241119215206974](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215206974.png)

![image-20241119215214422](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215214422.png)

![image-20241119215222753](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215222753.png)

![image-20241119215230853](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215230853.png)

![image-20241119215240079](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215240079.png)

![image-20241119215247367](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241119215247367.png)



+ springboot的微服务用Istio部署在k8s的情况下，服务发现是用的IstioD，IstioD会与k8s的api server交互，获取K8s中service和endpoint信息，并将这些数据转换为服务网格的配置



