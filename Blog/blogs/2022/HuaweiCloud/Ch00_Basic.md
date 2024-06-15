---
title: Ch00_Basic
date: 2024-04-27
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud


---

# Basic



![image-20240427111732455](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111732455.png)![image-20240427111800143](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111800143.png)

+ 同质化：标准化





## 计算

#### 虚拟化

![image-20240427111855723](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111855723.png)![image-20240427111918654](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111918654.png)

![image-20240427112117517](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427112117517.png)

#### 容器

![image-20240427112014670](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427112014670.png)![image-20240427112026452](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427112026452.png)



华为云应用

![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427112045475.png)



## 网络

![image-20240427110512841](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427110512841.png)

+ 路由器一般也可以当作网关来使用
+ VLAN虚拟网络
+ 网络设备
  + 路由器
  + 二层交换机![image-20240427110706212](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427110706212.png)
  + 三层交换机：
    + 数据中心内部不同网段需要通信，由于二层路由器的端口有限，且路由速度较慢，所以要三层交换机来完成数据中心内部不同网段的通信![image-20240427110829065](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427110829065.png)
    + 专为ip设计的，接口类型简单，拥有非常强的二层包处理能力
  + 网卡
    + 虚拟网卡![image-20240427111132935](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111132935.png)
      + 一般在企业中用虚拟交换机![image-20240427111352348](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111352348.png)
        + 可以对流量进行监控
        + OVS：OPenV Switch 标准虚拟交换机
        + EVS：增强虚拟交换机，网络转发性能得到增强
        + DVS：分布式虚拟交换机
          + 因为一般虚拟交换机都要在每个物理服务器上都配置一个，但是DVS可以横跨多台物理服务器
      + 桥接和NAT区别：![image-20240427111252719](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111252719.png)
        + NAT会对包做网路地址转换，可以一定程度上解决IPV4地址不足的问题以及更安全
  + 华为云应用![image-20240427111704914](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427111704914.png)





## 存储

![image-20240427134835804](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427134835804.png)

+ 块存储：存储和计算是通过总线，在一台服务器上![image-20240427135107528](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427135107528.png)
+ ![image-20240427135303173](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427135303173.png)
+ 文件存储：![image-20240427135420385](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427135420385.png)
+ 对象存储：![image-20240427135740167](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427135740167.png)
  + 因为文件夹里还能嵌套文件夹，导致层级多了之后，他的检索速度特别慢
+ 存储和计算分离![image-20240427135909466](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427135909466.png)
+ ![image-20240427140250799](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427140250799.png)

![image-20240427140434075](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427140434075.png)