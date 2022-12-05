---
title: Ch06 Nacos 配置中心
date: 2022-04-16
tags:
 - Java
 - Spring Cloud
 - Nacos
categories:
 - Spring Cloud


---

# Ch05 Nacos配置中心

Nacos除了可以做注册中心，同样可以做配置管理来使用

![image-20220415112632146](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220415112632146.png)

除了统一配置管理，还能实现服务的热更新，不用每次都重启服务

### 在nacos中添加配置文件

如何在nacos中管理配置？

![image-20210714164742924](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714164742924.png)

然后在弹出的表单中，填写配置信息：

![image-20210714164856664](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714164856664.png)



> 注意：项目的核心配置，需要热更新的配置才有放到nacos管理的必要。基本不会变更的一些配置还是保存在微服务本地比较好。



### 从微服务拉取配置

微服务要拉取nacos中管理的配置，并且与本地的application.yml配置合并，才能完成项目启动。

但如果尚未读取application.yml，又如何得知nacos地址呢？

因此spring引入了一种新的配置文件：bootstrap.yaml文件，会在application.yml之前被读取，流程如下：

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/L0iFYNF.png)

1）引入nacos-config依赖

首先，在user-service服务中，引入nacos-config的客户端依赖：

```xml
<!--nacos配置管理依赖-->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```

2）添加bootstrap.yaml

然后，在user-service中添加一个bootstrap.yml文件，内容如下：**这里一定要把application.yml中的重复配置删掉**

```yaml
spring:
  application:
    name: userservice # 服务名称
  profiles:
    active: dev #开发环境，这里是dev 
  cloud:
    nacos:
      server-addr: localhost:8848 # Nacos地址
      config:
        file-extension: yaml # 文件后缀名
```

这里会根据spring.cloud.nacos.server-addr获取nacos地址，再根据

`${spring.application.name}-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}`作为文件id，来读取配置。

本例中，就是去读取`userservice-dev.yaml`：

![image-20210714170845901](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714170845901.png)



3）读取nacos配置

在user-service中的UserController中添加业务逻辑，读取pattern.dateformat配置：

![image-20210714170337448](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714170337448.png)



### 配置热更新

我们最终的目的，是修改nacos中的配置后，微服务中无需重启即可让配置生效，也就是**配置热更新**。



要实现配置热更新，可以使用两种方式：

#### 方式一

在@Value注入的变量所在类上添加注解@RefreshScope：

![image-20210714171036335](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714171036335.png)



#### 方式二

使用@ConfigurationProperties注解代替@Value注解。这样就可以不用refreshScope了

在user-service服务中，添加一个类，读取patterrn.dateformat属性：

```java
package cn.itcast.user.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Data
@ConfigurationProperties(prefix = "pattern")
public class PatternProperties {
    private String dateformat;
}
```



在UserController中使用这个类代替@Value：

![image-20210714171316124](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714171316124.png)

如果在配置类中报错的话：![image-20220415235004161](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220415235004161.png)

在该模块的pom.xml文件里面加入：

```xm
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>
```

![image-20220415235139895](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220415235139895.png)



## Nacos配置共享

其实微服务启动时，会去nacos读取多个配置文件，例如：

- `[spring.application.name]-[spring.profiles.active].yaml`，例如：userservice-dev.yaml

- `[spring.application.name].yaml`，例如：userservice.yaml

而`[spring.application.name].yaml`不包含环境，因此可以被多个环境共享。



