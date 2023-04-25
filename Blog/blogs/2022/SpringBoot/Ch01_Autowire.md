---
title: Ch01 Autowire
date: 2021-04-17
tags:
 - Java
 - Spring
categories:
 - Springboot

---

**1.1、依赖管理**

- 父项目做依赖管理

```xml
依赖管理    
<parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.3.4.RELEASE</version>
</parent>

他的父项目
 <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>2.3.4.RELEASE</version>
  </parent>

几乎声明了所有开发中常用的依赖的版本号,自动版本仲裁机制
```

+ 开发导入starter场景启动器

```xml
1、见到很多 spring-boot-starter-* ： *就某种场景
2、只要引入starter，这个场景的所有常规需要的依赖我们都自动引入
3、SpringBoot所有支持的场景
https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-starter
4、见到的  *-spring-boot-starter： 第三方为我们提供的简化开发的场景启动器。
5、所有场景启动器最底层的依赖
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
  <version>2.3.4.RELEASE</version>
  <scope>compile</scope>
</dependency>
```

+ 可以修改默认版本号

1、查看spring-boot-dependencies（一级一级依赖往上找）里面规定当前依赖的版本 用的 key。 2、在当前项目里面重写配置

```xml
<properties>
        <mysql.version>5.1.43</mysql.version>
    </properties>
```



![image-20230425174320183](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174320183.png)

![image-20230425174331846](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174331846.png)

![image-20230425174344074](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174344074.png)

![image-20230425174407641](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174407641.png)

![image-20230425174424818](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174424818.png)





# **按需配置**

虽然springboot会把127个场景的所有自动配置在启动时默认全部加载，最终会按需配置：

得益于springboot的条件装配：例如

![image-20230425174457789](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174457789.png)



在没有导入依赖之前这些配置文件都不会生效，所以我们只需要导入想要的依赖，配置文件就可以自动生效

springboot会默认在底层配好所有的组件，但是如果用户配好了，以用户的优先:

源码中使用了@ConditionalOnMissingBean



**修改底层配置原理：**

![image-20230425174511610](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174511610.png)