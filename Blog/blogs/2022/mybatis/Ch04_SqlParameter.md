---
title: Ch04 Sql参数
date: 2019-10-25
tags:
 - Java
 - Mybatis
categories:
 - Mybatis
---

# Sql参数

**向sql语句中传入多个参数：**

在接口中指定参数

![image-20230426005529902](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005529902.png)

注解中的值必须要和xml文件中一样

![image-20230426005540357](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005540357.png)

![image-20230426005548267](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005548267.png)



![image-20230426005613585](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005613585.png)



![image-20230426005627483](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005627483.png)

![image-20230426005634945](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005634945.png)



# #和$的区别

**#占位符：**

语法格式：#{}

1）mybatis处理这样的占位符是用PrepareStatement，执行效率高，并且可以防止sql注入

2）#{}往往作为列的值使用，一般在等号右侧，#{}位置的值是和数据类型有关的

**$占位符：**

语法格式：${}

1）mybatis处理这样的占位符是用Statement对象，直接把参数和sql语句作为字符串连接起来

2）效率低，安全性不好，有sql注入的风险

3）数据是原样使用的，不会区分数据类型

4）常用表明或者列名，在保证安全的情况下可以使用

用法和#几乎一样，但是必须指定@Param和在拼接String的时候记得加引号，如name='zhangsan'

在order by之后就只能用${}，因为用#的话字符串会自动加引号



# like模糊查询

![image-20230426005915057](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005915057.png)



# 动态SQL

动态sql：同一个dao方法，根据不同的条件可以表示不同的sql语句，主要是where条件有变化

一般在多条件查询的时候使用动态sql

使用mybatis提供的标，实现动态sql的能力：主要 if， where， foreach， sql。

![image-20230426010023211](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010023211.png)

![image-20230426010059025](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010059025.png)

![image-20230426010107569](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010107569.png)

![image-20230426010115519](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010115519.png)

![image-20230426010129333](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010129333.png)

![image-20230426010136734](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010136734.png)

![image-20230426010143086](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010143086.png)



