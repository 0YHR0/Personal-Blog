---
title: Ch02 Annotation
date: 2019-07-25
tags:
 - Spring
 - Java
categories:
 - Spring
---

# Annotation

![image-20230425183500643](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183500643.png)

```java
<context:annotation-config></context:annotation-config>
<context:component-scan base-package="com.yang.pojo"></context:component-scan>

```

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183513909.png" alt="image-20230425183513909" style="zoom: 33%;" />

![image-20230425183536262](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183536262.png)



可以使用value指定bean的名字，否则取第一个字母小写的类名）

步骤:

1. 先在要创建bean的class里加入注解：括号里为bean的id

![image-20230425183553122](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183553122.png)

2. 配置文件：要使用到context命名空间，扫描包内所有的class

可以使用属性resource-pattern来指定扫描的资源，如resource-pattern = “repository/*.class”表示只扫描repository下面的包

![image-20230425183612052](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183612052.png)

![image-20230425183622286](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183622286.png)

![image-20230425183630454](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183630454.png)

![image-20230425183643411](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183643411.png)

![image-20230425183651863](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183651863.png)



# 引入外部文件

![image-20230425183735619](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183735619.png)



## Spel表达式

![image-20230425183748402](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183748402.png)



