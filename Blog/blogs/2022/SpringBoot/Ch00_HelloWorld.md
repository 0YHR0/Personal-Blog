---
title: Ch00 HelloWorld
date: 2021-04-16
tags:
 - Java
 - Spring
categories:
 - Springboot
---

# Hello World

尚硅谷笔记：https://www.yuque.com/atguigu/springboot

+ SpringBoot2 必须 java8以上，maven3.3以上

**新建项目：**

+ 导入依赖：

+ 父工程为springboot

+ 依赖为web开发

```xml
<parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.3.4.RELEASE</version>
    </parent>


    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

    </dependencies>
```



创建主方法：

![image-20230425170228688](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425170228688.png)



编写一个controller，接收/hello请求，并返回一个字符串（类似	springMVC）

![image-20230425170244335](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425170244335.png)



**（专门用来返回字符串的controller可以用@RestController注解来修饰）**

**springboot简化配置，所有的配置都可以写在一个配置文件中：resource文件夹下的application.properties,可以参考官方文档**

**例如修改端口：**

![image-20230425170259047](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425170259047.png)



**springboot简化部署，不用像以前一样打包成war包，再部署到tomcat上，可以直接打包成jar包，并使用cmd运行：**

**在maven依赖中加入：**

![image-20230425170321700](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425170321700.png)

```xml
<build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

**如果起不来，记得取消掉cmd的快速编辑模式**

![image-20230425170349576](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425170349576.png)



运行：

![image-20230425170405409](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425170405409.png)



linux运行项目：

![image-20230425170416423](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425170416423.png)