---
title: Ch01_Request
date: 2019-05-26
tags:
 - Java
categories:
 - JavaWeb


---

# Request

![image-20230426155417944](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155417944.png)

![image-20230426155425590](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155425590.png)

![image-20230426155437019](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155437019.png)

[Post请求和get请求的区别： https://blog.csdn.net/zlczsw/article/details/91046081](https://blog.csdn.net/zlczsw/article/details/91046081)

## Ajax & Form

https://blog.csdn.net/xiaolulululululu/article/details/78641124



## HttpServletRequest

只要每次有请求进入tomcat服务器，tomcat都会把这些信息解析好封装到Request对象中，然后传递到service方法（doget，dopost）中。

我们可以通过HttpServletRequest类获取请求的所有信息。

常用方法：

URL=协议+ip+端口+URI

![image-20230426155641697](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155641697.png)



注意获取多个值：

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("URI--->" + request.getRequestURI());
    System.out.println("URL--->" + request.getRequestURL());
    System.out.println("client ip --->" + request.getRemoteHost());
    //获取请求头中的某个值
    System.out.println("header--->" + request.getHeader("User-Agent"));
    //获取参数
    System.out.println("username--->" + request.getParameter("username"));
    System.out.println("password--->" + request.getParameter("password"));
    //注意获取多个值一定要用getParamaterValues
    String[] hobby = request.getParameterValues("hobby");
    System.out.println("hobby--->" + Arrays.asList(hobby));


}
```

![image-20230426155705767](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155705767.png)

![image-20230426155711991](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155711991.png)



## 请求转发

服务器收到请求后，从一个资源跳到另一个资源的操作叫做转发![image-20230426155736744](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155736744.png)



柜台01

![image-20230426155747767](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155747767.png)



柜台02

![image-20230426155758662](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155758662.png)



路径：

所有的相对路径都会参照浏览器地址栏中的地址进行跳转，所以在用请求转发来做跳转的时候不能用相对路径。

或者**设置base标签**

写在html的head中，表示页面相对路径工作时参照的地址

![image-20230426155812634](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155812634.png)

![image-20230426155820148](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155820148.png)



## 请求重定向

![image-20230426160059197](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160059197.png)