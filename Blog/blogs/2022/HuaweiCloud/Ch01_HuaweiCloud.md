---
title: Ch01_HuaweiCloud
date: 2024-04-27
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud
---



# HuaweiCloud



# 计算云服务



+ 一个region包含多个available zone（可用区）![image-20240427213343882](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427213343882.png)

![image-20240427213615268](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427213615268.png)



### IAM

![image-20240427215823671](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427215823671.png)





### BMS裸金属

![image-20240427225328606](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427225328606.png)

![image-20240427225903909](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240427225903909.png)





# 网络云服务

### VPC



![image-20240501225203207](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240501225203207.png)



![image-20240501225750378](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240501225750378.png)

![image-20240501225929709](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240501225929709.png)

+ 同一个vpc下的不同子网是默认互通的

![image-20240502145714348](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502145714348.png)

+ 对等连接：同region下不同vpc的连接![image-20240502150113486](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502150113486.png)
+ 云链接：不同region下不同vpc的连接



![image-20240502145940486](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502145940486.png)

![image-20240502150602038](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502150602038.png)





### ELB

![image-20240502194819773](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502194819773.png)





![image-20240502200006262](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502200006262.png)



![image-20240502200409525](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502200409525.png)







### VPN

![image-20240502202215642](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502202215642.png)

+ 在要通的两个服务器分别建vpn网关，远端网关可以先随便，最后等对面的网关跳出来了再写，远端子网必须正确

+ 可以使两个不同region下的不同vpc的云主机互通

  

![image-20240502202400578](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502202400578.png)



### NAT



![image-20240502204809036](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502204809036.png)

![image-20240502205347535](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502205347535.png)

![image-20240502205519213](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502205519213.png)

![image-20240502205703270](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502205703270.png)





# 存储云服务



### EVS



![image-20240502211709617](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502211709617.png)



![image-20240502212018072](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502212018072.png)

+ 快照和备份不一样
  + 备份会完整拷贝所有的数据
  + 快照只会记录某个时间点修改的数据![image-20240502212906156](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502212906156.png)
  + ![image-20240502212959498](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502212959498.png)

![image-20240502212432037](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502212432037.png)





### 三副本

![image-20240502213122683](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240502213122683.png)





### OBS

![image-20240503123405080](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503123405080.png)



![image-20240503124218843](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503124218843.png)

![image-20240503124233918](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503124233918.png)



![image-20240503124356887](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503124356887.png)



![image-20240503124556859](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503124556859.png)



### SFS

![image-20240503190512539](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503190512539.png)



![image-20240503185729144](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503185729144.png)



![image-20240503185854161](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503185854161.png)







# 云数据库

![image-20240503192753691](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503192753691.png)



![image-20240503192857893](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503192857893.png)

![image-20240503192912278](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503192912278.png)



![image-20240503193015259](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503193015259.png)



![image-20240503193446568](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503193446568.png)

![image-20240503193459381](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503193459381.png)



### DDS

![image-20240503193835369](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503193835369.png)

![image-20240503193942068](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503193942068.png)



![image-20240503194230902](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503194230902.png)





# 安全类云服务

### HSS

![image-20240503210447072](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503210447072.png)



+ 主机安全



### WAF



![image-20240503210427459](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503210427459.png)

![image-20240503210712737](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503210712737.png)

+ 对客户端流量的筛选，类似防火墙



![image-20240503210934319](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503210934319.png)



### DEW

![image-20240503211012293](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503211012293.png)



![image-20240503211117654](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503211117654.png)





![image-20240503211826911](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503211826911.png)







### IAM

![image-20240503211911119](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503211911119.png)



![image-20240503212150267](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503212150267.png)





# CDN

![image-20240503212623175](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503212623175.png)



![image-20240503212933709](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503212933709.png)



![image-20240503213118599](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503213118599.png)



![image-20240503213144479](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503213144479.png)



![image-20240503213328048](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503213328048.png)



![image-20240503213413625](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240503213413625.png)







# 运维基础

### 云审计（CTS）

![image-20240504210010188](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504210010188.png)

![image-20240504210124664](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504210124664.png)

![image-20240504210340296](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504210340296.png)

+ 可以配置模板，当一些事件发生的时候，可以通过短信，邮件等通知





### 云监控（CES）

![image-20240504212202062](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504212202062.png)



![image-20240504212445661](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504212445661.png)



![image-20240504213102399](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504213102399.png)

+ 需要在ECS里面安装一个agent，然后CES才能看到一些指标





### 云日志（LTS）

![image-20240504215405893](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504215405893.png)



![image-20240504215923003](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504215923003.png)



![image-20240504220854949](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240504220854949.png)







