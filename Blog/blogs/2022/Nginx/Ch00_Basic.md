---
title: Ch00 Basic
date: 2023-10-07
tags:
 - Nginx
categories:
 - Nginx


---

# 

## Nginx进程

![image-20231021113256789](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021113256789.png)

+ master是主进程负责读取和验证配置文件，以及管理worker进程
+ worker进程就是nginx的工作进程，负责处理实际的请求![image-20231021113731165](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021113731165.png)



#### Ubuntu安装nginx

```sh
sudo apt install nginx
sudo nginx -t //查看配置文件位置

```



nginx.conf中![image-20231021114503075](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021114503075.png)

+ 第一行表示根目录所在的文件夹
+ 第二行表示匹配的文件
+ 修改配置文件之后，要重新加载```nginx -s reload```
+ ![image-20231021122404978](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021122404978.png)



## 正向代理

![image-20231021125407577](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021125407577.png)

+ 代理的是客户端



## 反向代理

![image-20231021125431212](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021125431212.png)

+ 代理的是服务端
+ 负载均衡实例

conf文件中，在http块中写：![image-20231021125733655](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021125733655.png)

![image-20231021125829840](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021125829840.png)

+ 也可以加权重![image-20231021125923430](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021125923430.png)
+ 也可以用ip_hash，表示会根据客户端的ip来哈希，保证同一个客户端访问的一直是同一个服务器，解决了session的问题![image-20231021130040835](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021130040835.png)
+ 自动使用https，但是自签证书，具体百度![image-20231021130622747](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021130622747.png)



### 虚拟主机

+ 在一台服务器上·部署多个站点

+ 在配置文件中，每个server块是一个虚拟主机
+ 复制一个server块到新的文件中（主配置文件最后一行会自动读取所有的配置文件）![image-20231021182147866](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231021182147866.png)