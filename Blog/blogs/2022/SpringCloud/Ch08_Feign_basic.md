---
title: Ch08 Feign basic
date: 2022-04-16
tags:
 - Java
 - Spring Cloud
 - Feign
categories:
 - Spring Cloud
---

# Ch08 Feign basic

![image-20220416225236245](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220416225236245.png)

Feign是一个声明式的http客户端，官方地址：https://github.com/OpenFeign/feign

其作用就是帮助我们优雅的实现http请求的发送，解决上面提到的问题。

![image-20210714174918088](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714174918088.png)





## 使用

Fegin的使用步骤如下：

### 1）引入依赖

我们在order-service服务的pom文件中引入feign的依赖：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```



### 2）添加注解

在order-service的启动类添加注解开启Feign的功能：

![image-20210714175102524](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714175102524.png)



### 3）编写Feign的客户端

在order-service中新建一个接口，内容如下：

```java
package cn.itcast.order.client;

import cn.itcast.order.pojo.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("userservice")
public interface UserClient {
    @GetMapping("/user/{id}")
    User findById(@PathVariable("id") Long id);
}
```



这个客户端主要是基于SpringMVC的注解来声明远程调用的信息，比如：

- 服务名称：userservice
- 请求方式：GET
- 请求路径：/user/{id}
- 请求参数：Long id
- 返回值类型：User

这样，Feign就可以帮助我们发送http请求，无需自己使用RestTemplate来发送了。

修改order-service中的OrderService类中的queryOrderById方法，使用Feign客户端代替RestTemplate：

![image-20210714175415087](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714175415087.png)



Feign自动集成了Ribbon

![image-20220416225645206](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220416225645206.png)



