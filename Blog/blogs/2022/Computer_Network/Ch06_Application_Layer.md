---
title: Ch06 Application Layer
date: 2018-10-15
tags:
 - network
categories:
 - Computer_network


---

# Ch06 Application Layer

## 域名协议DNS(Domain Name System)

### 作用

把域名解析为IP地址。例如打得开QQ(可以直接用IP地址登陆)，打不开网络可能是域名问题。

8.8.8.8 是google的DNS服务器，222.222.222.222是电信的DNS服务器，能够用来帮忙解析域名地址。

### 域名

+ 根 .

+ 顶级域名 com, edu, net,cn,org,gov

+ 二级域名 91xueit, inhe，例如91xueit.com是全球唯一的域名。

+ 三级域名 dba，例如www.dba.91xueit.com

Ping或nslookup能得到IP地址。或者直接输入网址。

## 动态主机配置系统DHCP(同一个网段)

1. 静态IP地址

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image1.png)

2. 动态IP地址

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image2.png)

3. DHCP客户端请求IP地址的过程

我的理解这是一个动态IP地址的请求和分配过程。客户机在网中发广播请求地址，目标IP是4个255，目标MAC地址是全FF。DHCP收到后，会从地址池里选一个给客户机。如果网络中有2个DHCP服务端且都给了反馈，此时计算机还需要返回一个数据通知他选择了谁提供的地址。另一个DHCP客户端发现没要他的，于是收回他提供的。从这个角度看，网络中不能有太多的DHCP服务端。

4. DHCP服务器的安装

必须是固定的IP地址。释放命令为ipconfig /release

5. DHCP跨网段配置IP地址

需要DHCP配IP地址的计算机，需要在他所在的网络的路由器的网关上配置IPhelper address，再访问到DHCP。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image3.png)

## 文件传输协议FTP(File Transfer Protocol)

### FTP使用的两个TCP连接

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image4.png)

FTP的连接方式包括控制连接和数据连接。每上传/下载一个文件就会建立一个会话。

控制连接：标准端口为21，用于发送FTP命令信息。

数据连接：标准端口为20，用于上传/下载数据。

### FTP数据连接(上图的TCP数据连接)

涉及到主动模式和被动模式

1. 主动模式：FTP客户端告诉FTP服务器(的21端口)它在使用什么端口侦听，然后FTP服务器(的20端口)主动地和FTP客户端的这个端口建立连接。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image5.png)

2. 被动模式：FTP服务器端打开在指定范围内的某个新的端口(例如1089端口)并且进行侦听，被动地等待客户端发起连接。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image6.png)

综上，在有防火墙的情况下，如果使用被动模式，防火墙不得不开很多端口来监听。因此应该使用主动模式来进行数据连接，并在防火墙开21和20端口。

### FTP传输模式

文本模式：ASCII模式，以文本序列传输数据。

二进制模式：Binary模式，以二进制序列传输数据。

## 远程终端协议telnet

默认使用TDP23端口。

## 远程桌面协议RDP(Remote Desktop Protocol)

## 超文本传输协议HTTP(Hyper Text Transfer Protocol)

通过这个协议访问网站。

### 万维网www(World Wide Web)

1. www提供分布式服务

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image7.png)

2. 统一资源定位系统URL(Uniform Resource Locator)

有点像地址。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image8.png)

网站的标识有多种方式，不同的端口，不同的IP地址，不同的域名(主机头)来区分。

### 使用web代理服务器访问网站

内网其它主机不能通过路由访问Internet，只能由web代理(在同一个网段里)访问外网，然后内网其它主机访问这个web代理来实现上网功能。如果web代理在外网，反而速度更慢。

1. 节省内网访问Internet的带宽(便于访问内容变化不大的网站)。

2. 绕过防火墙访问外网。例如访问某个禁止的网站A，但是假如通过在与A同一个网络中的web代理，就可以访问该网站。

3. 通过web代理避免被跟踪。

## 电子邮件(SMTP, POP3, IMAP)

SMTP发, POP3和IMAP是收。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image9.png)