---
title: Ch06_Filter
date: 2019-05-30
tags:
 - Java
categories:
 - JavaWeb


---

# Filter

是一个接口，作用是拦截请求，过滤响应

过滤器常见的场景有：

1.权限检查

2.日志操作

3.事务管理.....![image-20230426161442960](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161442960.png)



Example：

要求：在web项目下新建一个admin文件夹，使得里面的文件（html文件，jsp文件等等）只有在用户登录之后才能访问。

由于用户登录后会把登录信息都保存到session域中，所以要检查用户是否登录，可以判断session中是否包含用户的信息即可。

配置web.xml文件

![image-20230426161456326](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161456326.png)





## Filter的生命周期：

1. 构造器方法

2. init初始化方法

​    第1,2步在web工程被创建的时候就被执行

3. doFilter过滤方法

​    第三步每次拦截到请求就会执行

4. destory销毁

​    第4步，停止web工程的时候就会销毁

FilterConfig类：

tomcat每次创建一个filter时，也会创建一个FilterConfig类，用来存放filter配置信息（在init方法中可以在使用）

1. 获取Filter的名称

2. 获取Filter的init-para初始化参数（在web.xml中）

3. 获取servletContext对象![image-20230426161518360](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161518360.png)





## FilterChain

![image-20230426161542522](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161542522.png)

