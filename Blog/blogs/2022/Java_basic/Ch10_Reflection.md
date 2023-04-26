---
title: Ch10_Reflection
date: 2020-04-21
tags:
 - Java
categories:
 - Java

---

# Reflection

每个类在JRE中都为其保留一个不变的class对象

Class本身也是一个类

Class类只能由系统建立对象

一个类在JVM中只会有一个class实例，对应一个class文件

每个类都会记得自己由哪个class对象创建而成

通过class可以得到一个类的完整结构

Class类的常用创建方法：

![image-20230426223122755](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223122755.png)



利用class类来获得类的各种信息：

![image-20230426223141481](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223141481.png)

![image-20230426223200816](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223200816.png)

![image-20230426223209117](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223209117.png)





利用反射机制创建对象

使用反射机制获取与调用方法：当一个方法有泛型参数时，编译器会自动上转型

T的上转型为Object

在 Java 反射中，一个 Method 执行时遭遇的异常会被包装在一个特定的异常中，这个异常就是 InvocationTargetException。需要手动获取异常具体信息，如下代码

```java
catch (InvocationTargetException e) {
    Throwable cause = e.getCause();
    System.out.println(cause.toString());

}
```

![image-20230426223716183](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223716183.png)



使用反射机制获以及使用取field（成员变量）

![image-20230426223727101](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223727101.png)



反射中会出现的异常情况：

![image-20230426223750835](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223750835.png)



更多详细内容参考https://blog.csdn.net/briblue/article/details/76223206