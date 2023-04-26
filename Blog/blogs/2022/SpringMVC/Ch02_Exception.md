---
title: Ch02 Exception
date: 2020-01-19
tags:
 - Java
 - Spring
categories:
 - SpringMVC

---

tomcat的web.xml文件有一个 servlet 名称为 default，在服务器启动时创建。

这个名叫 default 的 servlet 作用：

1 处理静态资源

2 处理未映射到其它servlet的请求

使用 ” / “ 后，无法访问静态资源，可以访问动态资源

```xml
// web.xml
<servlet-mapping>
    <servlet-name>springmvc</servlet-name>
    <!--
   		使用框架的时候，url-pattern可以使用两种方式
    1.使用扩展名方式，语法 *.xxxx , xxxx时自定义扩展名。常用的方式 *.do, *.action, *.mvc等等
        http://localhost:8080/myweb/some.do
        http://localhost:8080?myweb/other.do

    2.使用斜杠 "/"
        当你的项目使用了 / ，它会替换 tomcat 中的 default.
        导致所有的静态资源都给DispatcherServlet处理，默认情况下DispatcherServlet没有处理静态资源的能力,
        没有控制器对象能处理静态资源的访问,所以静态资源（html，js，图片，css）都是404

        动态资源some.do可以访问，原因时我们程序中有MyController控制器对象，能处理some.do请求
    -->
    <url-pattern>/</url-pattern>
</servlet-mapping>

```





**异常处理:**

springmvc框架采用的是统一，全局的异常处理。把controller中的所有异常处理都集中到一个地方，采用的是aop思想，把业务逻辑和异常处理代码分开。也叫解耦合。

使用两个注解：1、ExceptionHandler 2、ControllerAdvice

![image-20230426152815679](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426152815679.png)



UserException继承自Exception

UsernameException继承自UserException，用来标记异常种类

GlobalException用来处理异常，通过class识别：

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426152839679.png" alt="image-20230426152839679" style="zoom:50%;" />

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426152848786.png" alt="image-20230426152848786" style="zoom:50%;" />

**GlobalException：用来显示专门的异常网页**

```java
@ControllerAdvice//增强Controller
public class GlobalException {
    //通过识别异常返回class类型来分配显示异常
    @ExceptionHandler(value = UsernameException.class)
    public ModelAndView handleUsername(Exception exception){
        ModelAndView mv = new ModelAndView();
        mv.addObject("msg","username is wrong");
        mv.setViewName("UsernameError");
        return mv;
    }

}
```

测试：新建一个Controller来抛出异常

```java
@Controller
public class TestExceptionController {
    @GetMapping("/exception/{username}")
    public String testException(@PathVariable String username, Model model) throws UsernameException {
        if(!username.equals("yhr")) throw new UsernameException(username + " does not exist");
        model.addAttribute("username",username);
        return "Success";
    }
}
```

