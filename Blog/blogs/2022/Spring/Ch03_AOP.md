---
title: Ch03 AOP
date: 2019-08-02
tags:
 - Spring
 - Java
categories:
 - Spring

---

# AOP

底层使用动态代理实现:

![image-20230425184123612](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184123612.png)

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184141623.png" alt="image-20230425184141623" style="zoom:33%;" />

![image-20230425184157253](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184157253.png)



![image-20230425184211673](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184211673.png)

![image-20230425184221117](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184221117.png)



aspectj:在编译器或类加载的时候植入，不会创建一个全新的类

加入maven依赖：

```xml
<dependency>
   <groupId>org.aspectj</groupId>
   <artifactId>aspectjweaver</artifactId>
   <version>1.9.7</version>
</dependency>
```

使用aop步骤：

要代理的方法必须放在接口里，除非使用cglib（通过子类）

1. 被代理的类：

![image-20230425184255055](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184255055.png)

2. 切面类：![image-20230425184312988](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184312988.png)
3. xml配置文件：![image-20230425184324641](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184324641.png)



**注意使用接口类接受bean**

![image-20230425184336133](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184336133.png)



前置通知在方法执行之前被执行

后置通知在方法执行之后被执行（无论发不发生异常都会执行），还不能访问方法运行的结果

+ 返回通知：可以获取运行的结果：

![image-20230425184349409](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184349409.png)

+ 异常通知：可以访问到异常:![image-20230425184406033](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184406033.png)
+ 环绕通知：类似于动态代理:![image-20230425184420890](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184420890.png)



切面优先级：

可以通过注解@order设置，值越小，优先级越高

![image-20230425184432314](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184432314.png)



可以使用@PointCut来声明切入点表达式：一般方法体内不写内容

后面其他通知直接引用切入点表达式来声明方法名

![image-20230425184443263](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184443263.png)



用xml配置文件来配置aop：

![image-20230425184452594](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184452594.png)



aop：config中必须包含pointcut和aspect

https://blog.csdn.net/u014785687/article/details/76861150