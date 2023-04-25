---
title: Ch01 Mybatis
date: 2019-12-09
tags:
 - Java
 - Spring
categories:
 - Spring Cloud
---

# Mybatis



mybatis层配置

**mybatis.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <properties resource="database.properties"></properties>
    <!-- 配置日志-->
    <settings>
        <setting name="logImpl" value="STDOUT_LOGGING"/>
    </settings>

    <typeAliases>
        <package name="com.yang.pojo"/>
    </typeAliases>

    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <!--配置数据源-->
            <dataSource type="POOLED">
                <!--配置驱动-->
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url"
                          value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--    指定其他mapper文件的位置,用于查找sql语句
        从target/classes开始的目录
        可以写多个mapper
-->
    <mappers>
        <mapper resource="com/yang/dao/StudentDao.xml"/>
    </mappers>
</configuration>
```



**database.properties**

```properties
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/ssm?serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false
jdbc.username=root
jdbc.password=123456
```



mapper文件：![image-20230425185003551](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185003551.png)



dao接口：

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185015574.png" alt="image-20230425185015574" style="zoom:33%;" />



service层组合dao：

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185028908.png" alt="image-20230425185028908" style="zoom:33%;" />