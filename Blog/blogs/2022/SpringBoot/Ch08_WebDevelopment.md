---
title: Ch08 Web Development
date: 2021-08-18
tags:
 - Java
 - Spring
categories:
 - Springboot
---

# **静态资源访问**

![image-20230425180449561](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180449561.png)

![image-20230425180458096](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180458096.png)

![image-20230425180514633](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180514633.png)

**欢迎页支持**

![image-20230425180531075](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180531075.png)



**自定义Favicon**

网站图标

![image-20230425180542716](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180542716.png)



**静态资源配置管理**

![image-20230425180554008](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180554008.png)

![image-20230425180600837](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180600837.png)



# **请求参数处理**

![image-20230425180628950](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180628950.png)

controller

![image-20230425180654951](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180654951.png)

![image-20230425180708083](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180708083.png)



![image-20230425180724253](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180724253.png)



在controller中可传参数类型：

![image-20230425180740972](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180740972.png)



其中@CookieValue可以使用Cookie类型接受信息。

@RequestAttribute 是用来获取域属性，一般都是请求转发时其他controller往里面设置的属性

@MatrixVariable，矩阵变量是绑定路径的，所以必须{path}，使用；标记

一般矩阵变量是用在禁用cookie的情况下，要访问sessioin，重写路径，添加jsessionid时用到![image-20230425180753688](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180753688.png)



手动开启方式：在@Configuration类中自己写一个配置类

![image-20230425180806747](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180806747.png)



如果一个请求中有多个矩阵变量，并且名字相同，那么就要用绑定的路径进行区分：

![image-20230425180818018](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180818018.png)



![image-20230425180849346](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180849346.png)

相当于给map，model里面添加数据，就是给request域中添加数据。

由于springboot把请求参数封装成pojo对象底层是用了很多converter，所以我们可以自定义converter。

如：把请求中的参数...?pet = "dog,3"封装成3岁的狗

还是自定义一个WebMvcConfig类，重写其中的方法：

![image-20230425180904967](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180904967.png)

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180912424.png" alt="image-20230425180912424" style="zoom:33%;" />

![image-20230425180939614](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180939614.png)