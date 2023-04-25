---
title: Ch02 Spring
date: 2019-12-19
tags:
 - Java
 - Spring
categories:
 - Spring Cloud

---

# Spring 层

连接池：![image-20230425185144360](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185144360.png)



记得要把配置文件放在同一个上下文中，不然要用import引入

**Dao层Bean配置**

spring-dao.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd">

<!--    1. 关联数据库配置文件-->
    <context:property-placeholder location="classpath:database.properties"/>
<!--    2. 使用连接池-->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"/>
        <property name="jdbcUrl" value="${jdbc.url}"/>
        <property name="user" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>

        <!--连接池参数-->
        <!--初始化申请的连接数量-->
        <property name="initialPoolSize" value="8"/>
        <!--超时时间-->
        <property name="checkoutTimeout" value="3000"/>
        <!--连接的最大空闲时间，如果超过这个时间，某个数据库连接还没有被使用，则会断开掉这个连接如果为0，则永远不会断开连接-->
        <property name="maxIdleTime" value="30"/>
        <!--最大的连接数量-->
        <property name="maxPoolSize" value="100"/>
        <property name="minPoolSize" value="5"/>
        <property name="maxStatements" value="200"/>
        <property name="acquireRetryAttempts" value="2"/>
    </bean>


<!--    3. sqlsessionFactory-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"></property>
<!--        绑定mybatis配置文件-->
        <property name="configLocation" value="classpath:mybatis-config.xml"></property>
    </bean>

<!--    4. 配置dao接口扫描包，动态的实现DAO接口可以注入到Spring容器中-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
<!--        注入sqlSessionFactory-->
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"></property>
<!--        要扫描的dao包-->
        <property name="basePackage" value="com.yang.dao"></property>
    </bean>

</beans>
```



**Service层Bean配置：（事务注入）**

spring-service.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd">

<!--    自动扫描包-->
    <context:component-scan base-package="com.yang.service"/>

<!--    将所有的业务类注入到spring，可以通过配置或者注解实现-->
    <bean id="StudentService" class="com.yang.service.StudentServiceImpl">
        <property name="studentDao" ref="studentDao"></property>
    </bean>

<!--    声明式事务配置-->
    <bean id="TransactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
<!--        注入数据源-->
        <property name="dataSource" ref="dataSource"/>
    </bean>

<!--    aop事务支持-->

</beans>
```

