---
title: Ch00 Install
date: 2020-11-21
tags:
 - Zookeeper
categories:
 - Zookeeper

---

#  安装环境

- 用Vmware起三台虚拟机，并安装sun的jdk

  - 注意：系统自带的OpenJDK 只包含最精简的jdk源码，平时我们在windows上开发的一般都是用sun的JDK，所以要卸载重装

  - 在官网下载要的jdk版本rpm包https://www.oracle.com/java/technologies/downloads/#java8

  - 卸载自带的OpenJDK：

    - 查看安装了哪些jdk：rpm -qa |grep java

    - 进入root: su

    - 卸载所有带openJDK的包：rpm -e --nodeps xx(xx是带Openjdk的包名)

    - 从本机使用ftp（如Xshell）上传下载的jdk源码，一般上传到Download文件夹

    - 进入Download文件夹，并安装jdk：rpm -ivh xx（xx是文件名）

    - 使用java --version查看是否安装成功![img](https://api2.mubu.com/v3/document_image/5dd01949-3794-4a8f-a6e9-5f2ffa4fa902-14899999.jpg)

- 安装zookeeper：

  - 在/opt下创建一个文件夹module，把zookeeper安装包放到其中

  - 在/opt下创建一个文件夹install，用来安装软件

  - 在module中运行：tar -zxvf apache-zookeeper-3.5.7-bin.tar.gz -C /opt/install 表示把zookeeper安装到install目录下

  - 在/opt/install目录下把zookeeper改个名字：mv apache-zookeeper-3.5.7-bin/ zookeeper-3.5.7

  - 在安装路径下的conf中找到zoo-sample.cfg，这是zookeeper配置文件，并修改名字为zoo.cfg

  - 打开zoo.cfg![img](https://api2.mubu.com/v3/document_image/f50a5658-b72b-452c-8ad3-fc2f8a275dbf-14899999.jpg)

  - dataDir不能放在temp中，因为linux系统中定期会对临时数据清理，一般在安装路径下新建一个文件夹zkData用来存放数据，并把它更新到配置文件中

- 启动zookeeper：

  - 先启动服务端：bin/zkServer.sh start

  - 可以用jps -l 进行进程访问，看看启动成功了没有

  - 再启动客户端进行访问：bin/zkCli.sh、

  - 查看zookeeper的状态：bin/zkServer.sh status

  - 关闭zookeeper服务：bin/zkServer.sh stop

- 配置参数：

  - zoo.cfg中的参数：

    - tickTime: 2000     【通信心跳时间，单位是毫秒】![img](https://api2.mubu.com/v3/document_image/2ac3731d-e831-4ca3-a30d-f2419e0f304a-14899999.jpg)

    - initLimit=10    【 LF初始通信的时限，如果在建立通信时10次心跳后还没有反应，则判断对方挂了】![img](https://api2.mubu.com/v3/document_image/bef4c97e-2397-4ff4-835f-62d2cad2e8c1-14899999.jpg)

    - syncLimit=5 【LF同步通信时限】![img](https://api2.mubu.com/v3/document_image/ed6a5d59-87f2-4888-b733-fe3a4a8eaae6-14899999.jpg)

    - dataDir【保存Zookeeper中的数据】

    - clientPort = 2181【客户端连接端口，通常不做修改】

# 