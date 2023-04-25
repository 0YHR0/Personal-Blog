---
title: Ch03 Eureka
date: 2022-04-10
tags:
 - Java
 - Spring Cloud
 - Eureka
categories:
 - Spring Cloud


---

# Ch03 Eureka 注册中心

每次环境变更，ip地址等都有可能会发生改变，所以不能采用硬编码的方式，采用注册中心

![image-20220410212620524](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410212620524.png)



![image-20220410212732724](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410212732724.png)



![image-20220410215612514](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410215612514.png)



## 搭建Eureka Server

#### 单独创建一个微服务，引入依赖, 不用写版本号，已经预先定义好了

```java
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

#### 创建启动类，注意要加enable注解

```java
@EnableEurekaServer
@SpringBootApplication
public class EurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class,args);
    }
}
```

#### 在resource目录下创建一个yml配置文件

```yaml
server:
  port: 10086  #服务端口
spring:
  application:
    name: eureka-server  #服务名称
eureka:
  client:
    service-url:
      defaultZone: http://127.0.0.1:10086/eureka   #集群信息，由于就是自己，就自己的地址
```

eureka也是一个微服务，所以在启动的时候也会把自己注册

访问对应端口号可以看到注册到eureka的实例：

![image-20220410223916060](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410223916060.png)



## 注册服务：成为Eureka client

在要注册的微服务中引入依赖：

```xml
<dependency>
     <groupId>org.springframework.cloud</groupId>
     <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

在微服务中的resource下的application.yml中配置信息：

```yml
server:
  port: 8081
spring:
  application:
    name: order-service  #服务名称
  datasource:
    url: jdbc:mysql://localhost:3306/cloud_user?useSSL=false
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver
mybatis:
  type-aliases-package: cn.itcast.user.pojo
  configuration:
    map-underscore-to-camel-case: true
logging:
  level:
    cn.itcast: debug
  pattern:
    dateformat: MM-dd HH:mm:ss:SSS

eureka:
  client:
    service-url:
      defaultZone: http://127.0.0.1:10086/eureka
```

先启动注册中心再启动微服务即可看见：![image-20220410224931389](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410224931389.png)



给一个服务启动多个实例：![image-20220410225034336](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410225034336.png)

快捷键：ctrl+D



## 拉取服务

1. 修改OrderService代码，让url替换为服务名称

   ```java
   String url = "http://user-service/user/" + order.getUserId();
   ```

2. 在orderService的启动类OrderApplication中的RestTemplate添加负载均衡注解

   ```JAVA
    @LoadBalanced
       @Bean
       public RestTemplate restTemplate(){
           return new RestTemplate();
       }
   ```



![image-20220410230240238](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410230240238.png)