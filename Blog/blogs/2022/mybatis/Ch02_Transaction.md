---
title: Ch02 Transaction
date: 2019-10-21
tags:
 - Java
 - Mybatis
categories:
 - Mybatis
---

# Transaction

![image-20230426005049632](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005049632.png)



mybatis默认执行sql语句是手工提交事务模式，在insert，delete，update后需要提交事务

![image-20230426005115686](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005115686.png)

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005127331.png" alt="image-20230426005127331" style="zoom:33%;" />



直接用java创建对象加入数据库：

![image-20230426005149250](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005149250.png)



如果id要用default那就不在dao的xml文件中设置：

![image-20230426005203726](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005203726.png)