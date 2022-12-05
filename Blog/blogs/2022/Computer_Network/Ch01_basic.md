---
title: Ch01 Basic
date: 2018-08-03
tags:
 - network
categories:
 - Computer_network
---

# Ch01 Basic

REF:

> 【计算机网络】第一章：计算机网络概述https://blog.csdn.net/iwanderu/article/details/103795715
> 【计算机网络】第二章：物理层https://blog.csdn.net/iwanderu/article/details/103802457
> 【计算机网络】第三章：数据链路层https://blog.csdn.net/iwanderu/article/details/103812828
> 【计算机网络】第四章：网络层https://blog.csdn.net/iwanderu/article/details/103812967
> 【计算机网络】第五章：传输层https://blog.csdn.net/iwanderu/article/details/103812974
> 【计算机网络】第六章：应用层https://blog.csdn.net/iwanderu/article/details/103812980
> 【计算机网络】第七章：网络安全https://blog.csdn.net/iwanderu/article/details/103812986
> 【计算机网络】第八章：Internet上的音频视https://blog.csdn.net/iwanderu/article/details/103813005
> 【计算机网络】第九章：无线网络https://blog.csdn.net/iwanderu/article/details/103813011

局域网：覆盖范围小，自己花钱购买设备， 带宽固定10M 100M 1000M，自己维护，最远100m

广域网：距离远(>100m)，花钱租带宽

internet：ISP是电信运营商internet service producer

自己的机房，对网民提供访问Internet

网站的访问：帧：数据包包括数据+网站和请求端的IP地址；后两部分是目标mac地址和原mac地址，即物理地址，传播过程中一直在变化。

## 数据的请求：

![image-20220529215340550](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529215340550.png)

---

## 数据的返回：

网页上的数据是一块块发送给请求端的，成功接收后会发送反馈信息，此时链路中的缓存可以删掉了。数据接收完成后，会拼接恢复网页。

![image-20220529215351199](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529215351199.png)



## OSI参考模型：

+ 应用层——所有能产生网络流量的程序

+ 表示层——在传输之前是否进行加密 或 压缩 处理，二进制或ASCII码表示

+ 会话层——查木马，看需求端和网站之间的连接

+ 传输层——可靠传输，流量控制，不可靠传输(一个数据包即可，不需要建立会话，例如向DNS查询网站IP地址)

+ 网络层——负责选择最佳路径，规划IP地址(ipv4和ipv6变化只会影响网络层)

+ 数据链路层——帧的开始和结束，还有透明传输，差错校验(纠错由传输层解决)

+ 物理层——定义网络设备接口标准，电气标准(电压)，如何在物理链路上传输的更快



## OSI参考模型对网络排错的意义：

每一层都为上一层提供服务，一旦某一层崩了，上面所有层都崩了，所以排查问题从最上层(物理层)排查；

1. 物理层故障怎么办？查看链接状态，发送和接收的数据包数值；

2. 数据链路层故障怎么办？Mac地址冲突，2个一样的Mac地址同时访问；ADSL(非对称数字用户线路)欠费；两端的接口网速没有协商一致；计算机连接到其它VLAN(虚拟互联网)中。

3. 网络层故障怎么办？配置错误的IP地址，子网掩码，网关；数据有没有通过各个网关到达指定位置；

4. 应用层(合并3层)故障怎么办？应用程序配置问题

![image-20220529215406772](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529215406772.png)



## OSI参考模型和网络安全解决办法：

1. 物理层安全隐患？别人能私自接入你的网络，应该拔掉不用的网线或接口；

2. 数据链路层安全隐患？ADSL账号密码，VLAN，交换机端口绑定Mac地址

3. 网络层安全隐患？路由器上使用ACL(访问控制列表)控制数据包流量；防火墙设置；

4. 应用层安全隐患？应用程序有没有漏洞；![image-20220529215417889](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529215417889.png)



## 计算机网络的性能：

1. 速率，连接在计算机网络上的主机在数字信道上传送数据位数的速率，也称data rate或bit rate(比特率)，单位是b/s, kb/s, Mb/s, Gb/s。和正常理解的网速的关系是除以8.

2. 带宽，数据通信领域中，数字信道所能传送的最高数据率，单位是b/s, kb/s, Mb/s, Gb/s。常见的是Mpbs。

3. 吞吐量，在单位时间内通过某个网络的数据量，单位是b/s, Mb/s。

4. 时延，包括发送时延，传播时延，处理时延，排队时延。发送时延等于数据块长度(bit)除以信道带宽(bit/s). 更快的发送速度意味着波长越短，链路上的数据量更大；更快的传播速度意味着在网线中更快的传播速度。

5. 时延X带宽(时延带宽积)，有多少数据正在线路上。

6. 往返时间(RTT, Round-Trip Time)，从发送方发送数据开始，到发送方收到接收方确认数据的时间。例如ping一下。

7. 利用率，包括信道利用率：有数据通过的时间/总时间

网络利用率：信道利用率的加权平均

网络当前时延D = 网络空闲时时延D0 / (1 - 信道利用率U)