---
title: Ch05 ConfigureProperties
date: 2021-08-13
tags:
 - Java
 - Spring
categories:
 - Springboot


---

可以读取properties文件中的配置并进行绑定，**prefix中不能有大写字母！！！**

![image-20230425175548244](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175548244.png)

![image-20230425175555320](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175555320.png)

测试：

![image-20230425175606575](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175606575.png)



如果在使用第三方类的配置绑定功能，类中没有@Component，那么可以用以下方式：

![image-20230425175617416](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175617416.png)



开启配置绑定功能，并把People注册到容器中

![image-20230425175629735](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175629735.png)



出现如下错误：

![image-20230425175640017](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175640017.png)



在pom.xml中增加如下依赖

```xml
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>
```

