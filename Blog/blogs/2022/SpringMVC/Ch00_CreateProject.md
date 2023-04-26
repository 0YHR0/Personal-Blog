---
title: Ch00 CreateProject
date: 2020-01-06
tags:
 - Java
 - Spring
categories:
 - SpringMVC

---

# 

![image-20230426145822098](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426145822098.png)



**SpringMVC构建步骤：**

**1. 新建web应用**

**2. 加入web依赖：**

​    spring-webmvc依赖（mvc框架依赖），servlet依赖

**3. 声明springmvc核心对象：DispatcherServlet.**

1) DispatcherServlet是一个servlet对象（父类是servlet）

   2) DispatcherServlet是一个前端控制器（front Controller）

   3）作用：

​        1. 在Servlet的init()方法中创建springmvc中的容器对象

​        2. 作为Servlet，接受请求

**4. 创建jsp发起请求**

**5. 创建一个普通的类，作为控制器使用，代替之前的servlet**

   1）在类的上面加入@controller注解

   2）在类中定义方法，在方法的上方加入@RequestMapping注解

​         方法处理请求相当于doGet  doPost

**6.创建一个作为结果的jsp页面**

**7. 创建springmvc的配置文件（spring配置文件一样）**

   1）声明组件扫描器，指定@controller所在的包名

   2）声明视图解析器对象

**8. 使用逻辑试图名称**![image-20230426145907843](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426145907843.png)

![image-20230426145916540](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426145916540.png)

图为SpringMVC的一个较完整的流程图，实线表示SpringMVC框架提供的技术，不需要开发者实现，虚线表示需要开发者实现。

**简要分析执行流程：**

1. DispatcherServlet表示前置控制器，是整个SpringMVC的控制中心。用户发出请求，DispatcherServlet接收请求并拦截请求。

我们假设请求的url为 : http://localhost:8080/SpringMVC/hello

如上url拆分成三部分：

1）http://localhost:8080服务器域名

2）SpringMVC：部署在服务器上的web站点

3）hello表示控制器

通过分析，如上url表示为：请求位于服务器localhost:8080上的SpringMVC站点的hello控制器。

2. HandlerMapping为处理器映射。DispatcherServlet调用HandlerMapping,HandlerMapping根据请求url查找Handler。

3. HandlerExecution表示具体的Handler,其主要作用是根据url查找控制器，如上url被查找控制器为：hello。

4. HandlerExecution将解析后的信息传递给DispatcherServlet,如解析控制器映射等。

5. HandlerAdapter表示处理器适配器，其按照特定的规则去执行Handler。

6. Handler让具体的Controller执行。

7. Controller将具体的执行信息返回给HandlerAdapter,如ModelAndView。

8. HandlerAdapter将视图逻辑名或模型传递给DispatcherServlet。

9. DispatcherServlet调用视图解析器(ViewResolver)来解析HandlerAdapter传递的逻辑视图名。

10. 视图解析器将解析的逻辑视图名传给DispatcherServlet。

11. DispatcherServlet根据视图解析器解析的视图结果，调用具体的视图。

12. 最终视图呈现给用户。



# **步骤：（原理）**

**1. 确保项目中有springmvc依赖**

![image-20230426145959525](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426145959525.png)

由于IDEA的问题，依赖有时候不会自动添加进去，所以需要我们手动添加，在project structure中新建一个lib目录并添加依赖

![image-20230426150017217](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426150017217.png)



**2. 在web.xml中配置控制器DispatcherServlet:**

![image-20230426150035083](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426150035083.png)



**3.编写Spring配置文件：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
<!--    配置处理器映射器-->
    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"></bean>
<!--    配置处理器适配器-->
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"></bean>
<!--    配置视图解析器  模板引擎: Thymeleaf Freemarker...-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
<!--        配置jsp的前缀后缀，前缀后面必须加/-->
        <property name="prefix" value="/WEB-INF/jsp/"></property>
        <property name="suffix" value=".jsp"></property>
    </bean>
    

</beans>
```



**4. 编写controller**

![image-20230426150101892](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426150101892.png)



**5. 在spring配置文件中配置bean**

![image-20230426150114495](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426150114495.png)



**HandlerMapping**：处理器映射器作用：根据【请求】找到【处理器Handler】，但并不是简单的返回处理器，而是将处理器和拦截器封装，形成一个处理器执行链(HandlerExecuteChain)。

DispatcherServlet 拿着执行链去寻找对应的处理器适配器(HandlerAdapter)

为什么要引入适配器？

因为处理器(Handler)有很多种，DispatcherServlet没办法统一管理，所以出现了适配器。

让适配器统一处理Handler，而DispatcherServlet统一处理适配器。





# 使用注解开发springmvc：

1.新建项目，手动在项目设置中新建lib目录，导入maven依赖

2.新建spring配置文件，并在web.xml中配置DispatcherServlet，使其和spring配置文件相关联

**由于maven可能存在资源过滤问题，所以在配置中加入**：

```xml
<build>
<resources>
    <resource>
        <directory>src/main/java</directory>
        <includes>
            <include>**/*.properties</include>
            <include>**/*.xml</include>
        </includes>
        <filtering>false</filtering>
    </resource>
    <resource>
        <directory>src/main/resources</directory>
        <includes>
            <include>**/*.properties</include>
            <include>**/*.xml</include>
        </includes>
        <filtering>false</filtering>
    </resource>
</resources>
</build>
```

注解版SpringMVC配置文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/mvc
       https://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <!-- 自动扫描包，让指定包下的注解生效,由IOC容器统一管理 -->
    <context:component-scan base-package="com.yang.controller"/>
    <!-- 让Spring MVC不处理静态资源 -->
    <mvc:default-servlet-handler />
    <!--
    支持mvc注解驱动
        在spring中一般采用@RequestMapping注解来完成映射关系
        要想使@RequestMapping注解生效
        必须向上下文中注册DefaultAnnotationHandlerMapping
        和一个AnnotationMethodHandlerAdapter实例
        这两个实例分别在类级别和方法级别处理。
        而annotation-driven配置帮助我们自动完成上述两个实例的注入。
     -->
    <mvc:annotation-driven />

    <!-- 视图解析器 -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"
          id="internalResourceViewResolver">
        <!-- 前缀 -->
        <property name="prefix" value="/WEB-INF/jsp/" />
        <!-- 后缀 -->
        <property name="suffix" value=".jsp" />
    </bean>

</beans>
```



Controller编写，可以在一个类中处理多个url

```java
package com.yang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller//这是为了被Spring扫描到
@RequestMapping("//hello")//根据url匹配项目名
public class AnnotationController {
    //根据url找到对应处理方法
    @RequestMapping("h1")// localhost:8080//hello/h1
    public String hello1(Model model){
        model.addAttribute("msg","hello1");
        return "hello";//返回视图的名字，视图解析器会自动解析为/WEB-INF/jsp/hello.jsp
    }

    @RequestMapping("h2")// localhost:8080//hello/h2
    public String hello2(Model model){
        model.addAttribute("msg","hello2");
        return "hello";
    }

}
```





# Create Project

1. 直接创建一个maven空项目，并把src文件夹删除

2. 在项目中创建一个子model，也是maven项目，并且添加web依赖

![image-20230426150315419](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426150315419.png)

3. 在外部项目中添加依赖：

   ```xml
   <dependencies>
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.12</version>
       </dependency>
       <dependency>
           <groupId>org.springframework</groupId>
           <artifactId>spring-webmvc</artifactId>
           <version>5.1.9.RELEASE</version>
       </dependency>
       <dependency>
           <groupId>javax.servlet</groupId>
           <artifactId>servlet-api</artifactId>
           <version>2.5</version>
       </dependency>
       <dependency>
           <groupId>javax.servlet.jsp</groupId>
           <artifactId>jsp-api</artifactId>
           <version>2.2</version>
       </dependency>
       <dependency>
           <groupId>javax.servlet</groupId>
           <artifactId>jstl</artifactId>
           <version>1.2</version>
       </dependency>
   </dependencies>
   ```

   4.配置tomcat服务器

   ref: http://dwz.date/ac27

