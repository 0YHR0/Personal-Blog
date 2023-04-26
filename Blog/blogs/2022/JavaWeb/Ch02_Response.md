---
title: Ch02_Response
date: 2019-05-27
tags:
 - Java
categories:
 - JavaWeb

---

# Response



![image-20230426155551158](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155551158.png)



## MIME

![image-20230426155606286](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155606286.png)



## HttpServletResponse类

每次请求过来，Tomcat都会自动创建一个HttpServletResponse类传递给servlet使用，表示所有响应的信息。

---

向客户端传送消息的两种输出流：

字节流：getOutputStream();       常用于下载（传递二进制流）

字符流：getWriter();                    常用于回传字符串（常用）

两种流只能使用一个，否则就会报错

---

使用字符流传消息：（解决中文乱码的问题）

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    //解决打印中文乱码的问题,设置服务端回传的数据格式
    response.setCharacterEncoding("UTF-8");
    //通过请求头设置浏览器解析数据的格式
    response.setHeader("Content-type","text/html; charset=UTF-8");
    //也可以使用这个来设置数据的格式，等同于上面两个方法的合成，但是此方法只有在调用获取流方法之前调用才有效
    response.setContentType("text/html; charset=UTF-8");
    //往客户端回传字符串
    PrintWriter writer = response.getWriter();
    writer.write("中文");

}
```

![image-20230426161933104](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161933104.png)