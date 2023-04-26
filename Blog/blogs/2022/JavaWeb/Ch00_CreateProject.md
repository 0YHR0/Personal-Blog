---
title: Ch00_CreateProject
date: 2019-05-20
tags:
 - Java
categories:
 - JavaWeb

---

# 创建项目

新建一个webapplication的model

记得勾上这个 webapplication

![image-20230426155043226](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155043226.png)

创建完的目录如下

<img src="C:\Users\YHR\AppData\Roaming\Typora\typora-user-images\image-20230426155055304.png" alt="image-20230426155055304" style="zoom:33%;" />

web目录下存放web工程的资源文件，比如html，css，js等

WEB-INF为受服务器保护的目录，浏览器无法直接访问到这个目录

web.xml是整个动态web工程的部署描述文件，在这里可以配置很多web工程的描述文件

Servlet程序

Fliter过滤器

Listener监听器

Session超时



可以修改时热部署（在更新资源文件时服务器同步更新）

![image-20230426155117475](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155117475.png)





# Tomcat配置项目的路径

Tomcat的核心分为3个部分:

（1）Web容器---处理静态页面；

（2）catalina --- 一个servlet容器-----处理servlet;

（3）还有就是JSP容器，它就是把jsp页面翻译成一般的servlet。

工程一般放在webapps文件夹下

当在访问时不写工程名时，默认访问ROOT工程：http://ip:port

当访问没有资源名时，默认访问index.html页面![image-20230426160147233](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160147233.png)