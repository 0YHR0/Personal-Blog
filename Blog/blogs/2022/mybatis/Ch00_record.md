---
title: Ch00 record
date: 2022-10-10
tags:
 - Java
 - Mybatis
categories:
 - Mybatis
---



Mybatis 在使用returning（postgresql）返回值时，可以用select

```java
 @Select("insert into organization(orgid,name,address) values(default,#{metadata.organization.name},#{metadata.organization.address}) returning orgid")
    @Options(flushCache = Options.FlushCachePolicy.TRUE)
    int createDocToOrganization(@Param("metadata") Metadata metadata, @Param("path") String path, @Param("objectId") String objectId);
```



# 数据分页

1. maven依赖

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.2.1</version>
</dependency>
```

2. 在mybatis主配置文件中加入plugins，在environments之前

```xml
<!-- 
    plugins在配置文件中的位置必须符合要求，否则会报错，顺序如下:
    properties?, settings?, 
    typeAliases?, typeHandlers?, 
    objectFactory?,objectWrapperFactory?, 
    plugins?, 
    environments?, databaseIdProvider?, mappers?
-->
<plugins>
    <plugin interceptor="com.github.pagehelper.PageInterceptor">
    </plugin>
</plugins>

```

![image-20230426010348519](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010348519.png)



# Cache 缓存

![image-20230426010408798](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010408798.png)

![image-20230426010419021](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010419021.png)

![image-20230426010432635](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010432635.png)

![image-20230426010442424](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426010442424.png)
