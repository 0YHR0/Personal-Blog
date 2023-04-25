---
title: Ch00 Create Project
date: 2019-07-09
tags:
 - Spring
 - Java
categories:
 - Spring
---

# Ch00 Create Project



导入maven依赖：

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.3.9</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-jdbc</artifactId>
        <version>5.3.9</version>
    </dependency>

</dependencies>
```

Spring主要特点：IOC：控制翻转（解析xml，用工厂模式，反射创建对象）

​                             DI(依赖注入)是实现IOC的一种方式

​                            service类调用factory类

​                            AOP：面向切面

还有对事务的支持![image-20230425181356610](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181356610.png)