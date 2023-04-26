---
title: Ch04_jsp
date: 2019-05-29
tags:
 - Java
categories:
 - JavaWeb

---

# JSP

代替servlet回传html页面

jsp本质是一个servlet程序

当我们第一次访问jsp页面的时候。Tomcat服务器会帮我们把jsp页面翻译成一个java源文件并且编译成.class字节码文件（自动把每行html语句用out.write(...);写到_jspService()方法中）



## Page

![image-20230426160236100](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160236100.png)

jsp的page指令可以修改jsp页面中一些重要的属性，或者行为：

![image-20230426160249349](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160249349.png)

![image-20230426160257663](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160257663.png)



## **声明脚本**

直接加入到类中

1.可以声明类属性

2.可以声明类方法

3.可以声明static代码块

4.可以声明内部类

格式：<%!...%>

```java
<%--声明类属性--%>
<%!
     private int id;
     private String name;
     private static Map<String,String> map;
%>
<%--声明类方法--%>
<%!
   public int abc(){
       return 1;
   }
%>
<%--声明静态代码块--%>
<%!
   static{
       map = new HashMap<>();
       map.put("username","yhr");

   }
%>
<%--声明内部类--%>
<%!
    public class A{
        public int a;
    }

%>
```



## 表达式脚本

作用是在jsp页面上输出内容，可以输出变量值

<%=表达式%>

1. 所有表达式脚本都会被翻译到_jspService()方法中

2. 所有的表达式脚本都会被翻译成为out.print();输出到页面中

3. 由于被翻译到_jspService()方法中，方法中的变量都可以直接使用，如context对象，request对象等

4. 表达式脚本中的语句不能以分号结束

```jsp
<%=map%>

```



## **代码脚本**

格式：<%代码%>

可以在jsp中写java语句

所有代码脚本都会被翻译到_jspService()方法中

多个代码脚本块可以拼起来

代码脚本可以与表达式脚本一起用

由于生成代码机制，可以循环输出标签：

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160408932.png" alt="image-20230426160408932" style="zoom:33%;" />





**注释：**

html和java注释都会被翻译到_jspService()方法中

jsp注释可以注释掉不需要的代码



## **JSP的九大内置对象**

将jsp翻译为servlet后，内部提供的内置对象：

![image-20230426160439823](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160439823.png)



## **jsp中out和response输出的区别**

out.write();

response.getWriter.write();

有两个缓冲区：out缓冲区和response缓冲区

当jsp中的代码全部执行完毕之后，会执行以下操作：

1. 执行out.flush(); 把out缓冲区中的内容追加写入到response缓冲区的末尾

2. 会执行response的刷新操作，把response缓冲区中的数据都写到客户端去

由于jsp翻译之后，都使用out来输出，所以一般情况下jsp页面用out输出，避免打乱内容输出的顺序

out.write();输出字符串没问题

out.print();输出任意字符都没有问题，因为都转为字符串后用write输出

所以统一使用out.print();进行输出



## **jsp常用标签**

### **1. 静态包含**

<%@ include file="路径" %> 引入另一个jsp文件

在多个页面中都要用到某块内容，不用在每个页面都写一遍，直接包含，维护简单

1.静态包含不会解析被包含的jsp代码

2.静态包含直接拷贝代码到_jspService();进行输出![image-20230426160514508](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160514508.png)



### **2. 动态包含**

**<jsp:include page="路径"></jsp:include>**

1.动态包含会把包含的jsp代码也翻译成java代码![image-20230426160537791](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160537791.png)







### **3.请求转发：不会改变浏览器的url**

![image-20230426160603012](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160603012.png)





## EL表达式

EL表达式用来代替jsp表达式脚本在jsp页面上进行输出，比jsp表达式简洁很多![image-20230426160901584](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160901584.png)



主要用来输出域数据，根据key来查询value

查询四个域的顺序：从小到大（pageContext-->request-->session-->application）

输出对象和他的属性：要写get方法，因为EL使用反射获取属性值

![image-20230426160924128](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426160924128.png)



```jsp
<%
    //初始化person
    Person person = new Person();
    person.setAge(18);
    person.setCities(new String[]{"aaa","bbb","ccc"});
    List<String> phone = new ArrayList<String>();
    phone.add("1313");
    phone.add("21313");
    phone.add("44rrr");
    person.setPhone(phone);
    Map<Object,Object> map = new HashMap<>();
    map.put("username","yhr");
    map.put("password","2312");
    map.put(123,"22222222");
    person.setMap(map);

    pageContext.setAttribute("personAtt",person);

%>
<%--EL输出--%>
person: ${personAtt}<br>
person age: ${personAtt.age}<br>
<%--输出数组必须带数组下标，否则会输出地址值--%>
person cities: ${personAtt.cities[0]}<br>
<%--输出List集合，可以带下标输出特定的值--%>
person phone: ${personAtt.phone}<br>
person phone 0 : ${personAtt.phone[0]}<br>
<%--输出map--%>
person map: ${personAtt.map}<br>
<%--输出map中特定的值--%>
person map username: ${personAtt.map["username"]}
```



当map中key为int类型时，输出失败，解决方案1. 使用表达式脚本

```jsp
<%=map.get(123)%>
```



解决方案2：

使用EL表达式获取key为int类型时， 由于会自动把key转换为Long类型，所以会导致获取不到value，想要获取到就在map中存的时候就存Long类型的

```java
map.put(123L,"22222222");
```



```java
${personAtt.map[123]}
```



---

EL表达式中也可以使用各种逻辑运算，算数运算，关系运算，三元运算等，如==，<=, &&,mod...

判断语句？表达式1：表达式2

Empty运算：

可以判断一个数据是否为空，以下几种情况为空：

1. 值为null时

2. 字符串为空串的时候""

3. 值是Object类型的数组，长度为0

4. List集合，元素个数为0

5. Map集合，元素个数为0

```java
pageContext.setAttribute("username1",null);
```

%{empty 变量名}，是空则返回true，否则返回false

```java
empty运算：
${empty username1}
```



---

![image-20230426161102236](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161102236.png)



Scope实例：可以获取不同域对象的值

pageScope:

```java
pageContext.setAttribute("username1","nulllllll");
```

```java
pageScope:
${pageScope["username1"]}
```

使用pageContext获取九大内置对象(示例：获取服务器IP，获取会话的id编号)

```java
${pageContext.request.serverName}
${pageContext.session.id}
```

技巧：

把request放到pageContext的域对象中，操作简单

```java
pageContext.setAttribute("req",request);
```

```java
${req.serverName}
```





## JSTL标签库（代替代码脚本）

核心标签库https://blog.csdn.net/a_helloword/article/details/80193810

需要导包（网上下载），导类![image-20230426161218929](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161218929.png)

---

![image-20230426161237912](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161237912.png)

![image-20230426161243876](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161243876.png)



**choose标签：**

**1. 标签里不能使用html注释，要使用jsp注释**

**2. when标签的父标签一定要是choose标签**

![image-20230426161304005](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161304005.png)



![image-20230426161314890](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161314890.png)

![image-20230426161324730](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161324730.png)

![image-20230426161334874](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161334874.png)