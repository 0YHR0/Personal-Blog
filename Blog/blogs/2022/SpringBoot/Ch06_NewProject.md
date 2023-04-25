---
title: Ch06 New project
date: 2021-08-15
tags:
 - Java
 - Spring
categories:
 - Springboot
---

# 新建项目

步骤：

- 引入场景依赖

- - https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-starter

- 查看自动配置了哪些（选做）

- - 自己分析，引入场景对应的自动配置一般都生效了
  - 配置文件中debug=true开启自动配置报告。Negative（不生效）\Positive（生效）

- 是否需要修改

- - 参照文档修改配置项

- - - https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#common-application-properties
    - 自己分析。xxxxProperties绑定了配置文件的哪些。

- - 自定义加入或者替换组件

- - - @Bean、@Component。。。

- - 自定义器 **XXXXXCustomizer**；
  - ......

- 

- **简化开发：**

- **1. Lombok**

- 1. 引入依赖：

     ```xml
     <dependency>
         <groupId>org.projectlombok</groupId>
         <artifactId>lombok</artifactId>
     </dependency>
     ```

- 2. idea安装lombok插件

     - 在实体类上不用写getter，setter方法，可以用@Data代替
     - 全参构造和无参构造也可以用注解代替
     - 还可以重写利用属性重写hashcode和equals方法

     <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175852077.png" alt="image-20230425175852077" style="zoom:33%;" />

  3. 另外，在lombok中还提供日志输出功能：@slf4j，该注解会自动为类注入一个log属性

- ![image-20230425175921754](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175921754.png)

- 

- **2.Jrebel**

- 可以动态热更新项目，但是需要付费

- 

- **3.Spring initializr(项目创建向导)**

- 在创建项目的时候可以自动帮我们引入依赖，搭建好一个springboot的项目框架：

- 想要哪个勾哪个，如Mybatis，redis，web

- ![image-20230425175940056](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175940056.png)

- ![image-20230425175951130](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175951130.png)

- 

- 