---
title: Ch03_Servlet
date: 2019-05-27
tags:
 - Java
categories:
 - JavaWeb
---

# Servlet

Servlet是javaweb三大组件之一，是一个接口，还有两个为Fliter过滤器和Listener监听器

是运行在服务器上的小型java程序，用来接收客户端的请求并响应

 

在访问servlet时自动执行service中的方法![image-20230426161604898](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161604898.png)



在web.xml文件中用servlet标签给Tomcat配置Servlet程序

![image-20230426161621535](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161621535.png)



```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <!-- config servlet to the tomcat server -->
    <servlet>
        <!-- servlet name -->
        <servlet-name>HelloServlet</servlet-name>
        <!-- servlet complete class path  -->
        <servlet-class>test_hashtag_wordcount.HelloServlet</servlet-class>
    </servlet>
<!-- config the url to visit the servlet  -->
    <servlet-mapping>
<!-- tell the server what servlet uses the url  -->
        <servlet-name>HelloServlet</servlet-name>
<!-- after the project name  -->
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
</web-app>
```



![image-20230426161636677](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161636677.png)





## Servlet的生命周期：

（第1,2步是第一次访问的时候创建servlet程序会调用）

1. 执行servlet构造器方法

2. 执行init 初始化方法

3. 执行service方法（每次访问都会调用）

4. 执行destory方法（停止的时候才会执行）

配置完成之后可以通过请求访问![image-20230426161658091](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161658091.png)



Servlet中service方法获取请求方式：

```java
public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
    //因为只有子接口有获取请求类型的方法，所以要强转
    HttpServletRequest request = (HttpServletRequest) servletRequest;
    String method = request.getMethod();
    if(method.equals("POST")) System.out.println("POST");
    if(method.equals("GET")) System.out.println("GET");


}
```



一般直接继承HttpServlet方法，自动分发请求，重写doget和dopost方法

![image-20230426161721564](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161721564.png)



## ServletConfig类

有三个作用：

1. 获取servlet程序的别名

2. 获取初始化参数init-param

3. 获取ServletContext对象

![image-20230426155333159](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155333159.png)



Servlet程序和servletconfig对象默认由tomcat服务器负责创建

servlet程序默认第一次访问时创建，servletconfig在每一个servlet创建时自动被创建（一一对应）

只能获取自己的servletConfig

![image-20230426155351615](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155351615.png)



## ServletContext类

1. servletConext对象是一个接口，表示上下文对象

2. 一个web工程只有一个sevletContext对象实例

3. servletContext是一个域对象（可以像map一样存取对象），这里的域表示存储数据的操作范围

![image-20230426155909195](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155909195.png)



ServletContext对象的四个作用：

1. 获取web.xml中配置的上下文参数context-param

![image-20230426155926160](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426155926160.png)

2. 获取当前工程路径

3. 获取工程在服务器上的绝对路径

4. 像map一样存取数据（由于servletContext是在web工程启动的时候创建，销毁的时候销毁，所以所有的servlet都可以访问这些键值对，是工程内公用的）

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    //1. 获取web.xml中配置的上下文参数context-param
    javax.servlet.ServletContext context = getServletContext();
    System.out.println("111" + context.getInitParameter("username"));
    //2. 获取当前工程路径
    System.out.println(context.getContextPath());
    //3. 获取工程在服务器上的绝对路径
    // /表示根目录，对应项目中的web文件夹
    System.out.println(context.getRealPath("/"));
    //使用相对路径查绝对路径
    System.out.println(context.getRealPath("/css"));
    //4.像map一样存取数据
    context.setAttribute("username","9786879");
    System.out.println(context.getAttribute("username"));


}
```

两种设置的方法不一样：

1. 使用getServletContext是可以不同请求间共享数据的

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("04");
    ServletContext servletContext = getServletContext();
    System.out.println(servletContext.getAttribute("test"));
}
```

2. 使用request.setAttribute的作用域是本次请求，与其他请求之间的数据不共享，（在重定向中是使用两次不同的请求）

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("04");
    System.out.println(request.getAttribute("test"));
}
```



## Session



session的机制，应用，劫持https://www.cnblogs.com/chenlimei/p/10844230.html

---

Session存储在服务器端，一般存放在服务器的内存中（为了高速存取），Session在用户访问第一次访问服务器时创建，需要注意只有访问JSP、Servlet等程序时才会创建Session，只访问HTML、IMAGE等静态资源并不会创建Session，可调用request.getSession(true)强制生成Session。session其实就是一个Map，键=值对，通过session.getAttribute("name");获得session中设置的参数。

---

**Session什么时候失效？**

　　1. 服务器会把长时间没有活动的Session从服务器内存中清除，此时Session便失效。Tomcat中Session的默认失效时间为20分钟。

　　2. 调用Session的invalidate方法。

**设置session的失效时间**

　　1. web.xml中（单位是分钟）

　　<session-config>

​       <session-timeout>30</session-timeout>

​    </session-config>

　

**session过期时间的计算**

​    从session不活动的时候开始计算，如果session一直活动，session就总不会过期。从该Session未被访问,开始计时; 一旦Session被访问,计时清0;并是从一登录就开始计算的。



**Session对浏览器的要求：**

　　虽然Session保存在服务器，对客户端是透明的，它的正常运行仍然需要客户端浏览器的支持。这是因为Session需要使用Cookie作为识别标志。HTTP协议是无状态的，Session不能依据HTTP连接来判断是否为同一客户，因此服务器向客户端浏览器发送一个名为JSESSIONID的Cookie，它的值为该Session的id（也就是HttpSession.getId()的返回值）。Session依据该Cookie来识别是否为同一用户。

　　该Cookie为服务器自动生成的，它的maxAge属性一般为-1，表示仅当前浏览器内有效，并且各浏览器窗口间不共享，关闭浏览器就会失效。因此同一机器的两个浏览器窗口访问服务器时，会生成两个不同的Session。但是由浏览器窗口内的链接、脚本等打开的新窗口（也就是说不是双击桌面浏览器图标等打开的窗口）除外。这类子窗口会共享父窗口的Cookie，因此会共享一个Session。

　　**注意**：新开的浏览器窗口会生成新的Session，但子窗口除外。子窗口会共用父窗口的Session。例如，在链接上右击，在弹出的快捷菜单中选择"在新窗口中打开"时，子窗口便可以访问父窗口的Session。

---

如果客户端浏览器将Cookie功能禁用，或者不支持Cookie怎么办？例如，绝大多数的手机浏览器都不支持Cookie。Java Web提供了另一种解决方案：URL地址重写。

　　URL地址重写是对客户端不支持Cookie的解决方案。URL地址重写的原理是将该用户Session的id信息重写到URL地址中。服务器能够解析重写后的URL获取Session的id。这样即使客户端不支持Cookie，也可以使用Session来记录用户状态。HttpServletResponse类提供了encodeURL(String url)实现URL地址重写，该方法会自动判断客户端是否支持Cookie。如果客户端支持Cookie，会将URL原封不动地输出来。如果客户端不支持Cookie，则会将用户Session的id重写到URL中。

　　**注意**：TOMCAT判断客户端浏览器是否支持Cookie的依据是请求中是否含有Cookie。尽管客户端可能会支持Cookie，但是由于第一次请求时不会携带任何Cookie（因为并无任何Cookie可以携带），URL地址重写后的地址中仍然会带有jsessionid。当第二次访问时服务器已经在浏览器中写入Cookie了，因此URL地址重写后的地址中就不会带有jsessionid了。



## Cookie

服务器通知客户端保存键值对的一种技术

1.当客户端有了cookie之后，每次请求都发送给服务器

2.每个cookie大小不能超过4kb
