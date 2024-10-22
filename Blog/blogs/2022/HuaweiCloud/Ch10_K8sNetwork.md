---
title: Ch10 K8s Network
date: 2024-10-21
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud


---

# K8s 网络


## 网络概念

![image-20241022213424711](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213424711.png)

+ vSW：虚拟交换机
+ Overlay网络，也就是虚拟网络：通过软件来实现一些请求的转发
+ 传统网络：每个网络设备上都有自己的控制面，是一个分布式的概念
+ SDN网络：有一个中心控制器，有全局视图
+ Docker网络（CNM）：docker0是docker里面连同docker和主机的网桥设备
+ K8s网络（CNI）：并没有用docker自己的网络


## K8s网络对互通性的要求
+ 3点

![image-20241022213439381](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213439381.png)


## K8s网络模型：Overlay组网模型

![image-20241022213453546](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213453546.png)


## K8s网络模型：二层组网模型
+ 由于广播域，广播风暴的影响，规模受限
+ 二层组网，地址也会耗尽

![image-20241022213633130](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213633130.png)

## K8s网络模型：三层组网模型
![image-20241022213700912](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213700912.png)


## K8s Service负载均衡
### IPTables
![image-20241022213713272](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213713272.png)
### IPVS
![image-20241022213726793](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213726793.png)
+ 南北向流量：通常指的是从外部客户端（如用户的电脑、移动设备等）进入 Kubernetes 集群，或者从 Kubernetes 集群流向外部客户端的流量。
+ 东西向流量：是指在 Kubernetes 集群内部不同的 Pod 之间、服务之间或者其他内部组件之间的流量。
+ IPVS 的大部分功能是在 Linux 内核空间实现的，这使得数据包的处理更加高效。内核空间的处理避免了频繁的用户空间和内核空间切换，减少了系统开销。
+ 相比之下，iptables 的规则处理涉及更多的用户空间和内核空间的交互，尤其是在处理大量规则和高流量的情况下，性能可能会受到影响。

### eBPF
![image-20241022213740571](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213740571.png)


# 华为云CCE Yangtse网络模型
![image-20241022213752206](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213752206.png)

![image-20241022213806980](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213806980.png)

+ ENI（Elastic Network Interface，弹性网络接口）：是一种虚拟网络接口，可以附加到云服务器实例上，为实例提供网络连接能力。
+ Trunk port（中继端口）：Trunk port 是一种用于在交换机之间或交换机与路由器之间传输多个 VLAN（虚拟局域网）流量的端口。它允许不同 VLAN 的数据帧通过同一个物理端口进行传输，通过在数据帧中添加 VLAN 标记来区分不同的 VLAN。
	+ 例如，在企业网络中，一台交换机上的 Trunk port 可以连接到另一台交换机，使得多个 VLAN 的用户可以在不同的交换机之间进行通信。
    + 通过 Trunk port，可以将多个 VLAN 的流量整合到一个物理连接上，减少网络中的线缆数量和设备端口的使用。
    + 灵活性和可扩展性：方便地添加或删除 VLAN，而无需对物理网络进行大规模的重新布线。
+ VF：Virtual Function（虚拟功能）
	+ VF 允许将物理网卡的资源虚拟化为多个独立的虚拟网络接口，每个 VF 可以分配给不同的虚拟机或容器使用。
	+ 这样可以提高网络性能，减少虚拟化带来的网络开销，因为虚拟机或容器可以直接访问虚拟网络接口，而无需经过软件层面的虚拟化层。




# Ingress Controller
![image-20241022213834108](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213834108.png)

![image-20241022213843269](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213843269.png)

+ 也有选主的过程，每个ingress-nginx controller的pod里面有两个容器：
	+ operator： watch api server里面的一些secret，configmap等资源对象，生成nginx的配置文件
    + 只有成为leader的controller才有能力更新ingress的资源状态

# CNI接口/插件

![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213851738.png)

+ 依赖于容器运行时
+ ipam是地址管理能力配置插件，表示从图中子网里面选择一个地址分配给容器

![image-20241022213914655](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213914655.png)

![image-20241022213927364](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213927364.png)

+ 不同的CNI插件完成了CNI标准规范里面不同的能力
+ 通过CNIchaining可以组合起来，比如除了基础功能，需要用到cilium里的eBPF方案
+ 个人经验：少用多开源社区或者多厂商的方案，因为对商用来说后续运维和升级会是一个问题，还是更倾向于归一化的处理


# 最佳实践
![image-20241022213937997](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213937997.png)
![image-20241022213947640](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213947640.png)

+ 用securityGroup实现网络隔离的方案

![image-20241022213959897](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022213959897.png)
+ 源地址保持：网络流量经过各种网络代理、负载均衡器或者服务转发的过程中，尽可能地保留原始请求的源 IP 地址信息。
	+ 可追溯性：对于安全和审计目的，能够明确知道请求真正的发起源是非常重要的。
    + 正确的访问控制：许多基于源 IP 的访问控制策略（如防火墙规则、网络访问限制）依赖于准确的源 IP 信息。如果源 IP 在网络转发过程中丢失或者被错误地修改，这些访问控制策略可能无法正常工作，导致安全漏洞或者错误地阻止合法访问。
    + 应用程序行为适配：某些应用程序需要获取真实的源 IP 地址来进行特定的业务逻辑，如日志记录、用户行为分析、地理定位等。例如，一个 Web 应用可能希望根据用户的真实源 IP 地址来统计不同地区的访问量。

+ 时延异常产生的原因：svcA通过外部ELB，在再通过ingress访问svcB，
+ 在svcB回包的时候，在节点内发应答报文的时候，发现源地址就在本集群内，甚至源地址和目的地址是同一个容器实例，就短路在集群内部。
+ 导致连接状态不匹配，访问的源地址是一个service地址，但回包的时候变成了一个pod的地址，就会造成丢包，反复重传
+ 解决办法：
	+ 可以使用一些反亲和的策略，让两个服务不部署在同一个节点上
    + 或者把ELB源地址保持的功能关闭

![image-20241022214012238](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241022214012238.png)
+ 内核中不管tcp还是udp，接受到报文的时候有socket buffer的概念
+ 普罗等业务监控是用户进程调receive/send之间的时间
+ 所以报文到达socket接受队列，排队的计算时间没有算上，所以会有差距
+ 原因是容器的规格配置的过小，和以前虚机的处理能力不匹配