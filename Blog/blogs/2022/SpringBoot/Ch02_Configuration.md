---
title: Ch02 Configuration
date: 2021-06-10
tags:
 - Java
 - Spring
categories:
 - Springboot
---

**@Configuration**



使用@Configuration编写配置文件，可以替代xml进行bean的创建

![image-20230425174606745](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174606745.png)

![image-20230425174620565](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174620565.png)

![image-20230425174631912](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174631912.png)



**Lite模式**

![image-20230425174647492](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174647492.png)



**Full模式**

![image-20230425174658782](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174658782.png)





**最佳实战**

+ 配置 类组件之间无依赖关系用Lite模式加速容器启动过程，减少判断

+ 配置类组件之间有依赖关系，方法会被调用得到之前单实例组件，用Full模式

  ![image-20230425174718994](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174718994.png)



扩展：

![image-20230425174749600](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174749600.png)



**@Import**

![image-20230425174800429](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174800429.png)

![image-20230425174811606](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174811606.png)



测试：

![image-20230425174824627](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174824627.png)

![image-20230425174832982](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174832982.png)

![image-20230425174843561](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174843561.png)



main函数测试：

![image-20230425174856663](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174856663.png)



**解决@Configuration文件加载顺序问题：**

参考：https://blog.csdn.net/xiaofeilong2016/article/details/103681468

先在resource/META-INF目录下添加：文件spring.factories（若没有META-INF文件夹，则需要先添加）

```java
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.yang.boot.config.SecondConfig,\
com.yang.boot.config.MyConfig
```

再设置优先级：

![image-20230425174928409](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425174928409.png)