---
title: Ch01_Notes
date: 2019-05-12
tags:
 - Java
categories:
 - Java


---

# Notes

**java四种引用类型**[**https://blog.csdn.net/coding_or_coded/article/details/6603549**](https://blog.csdn.net/coding_or_coded/article/details/6603549)

**浮点数精度问题**

直接double类型计算会出现小数多的情况。

可以使用java.math包下的BigDecimal来计算

```java
public static double mul(Double v1, Double v2){
		  BigDecimal b1 = new BigDecimal(Double.toString(v1));
		  BigDecimal b2 = new BigDecimal(Double.toString(v2));
		  return b1.multiply(b2).doubleValue();
		 }
```



**java中对象不使用时，建议手动赋值为null**

有利于jvm更早回收内存，以减少内存占用。

换而言之，就是尽早断掉与GC root 的关系：

在JVM中，即使离开作用域，局部变量表中依然存在作用域中的对象引用，直到有新的对象要占用局部变量表，才会覆盖原来的，手动赋值为null就是为了尽快释放内存空间。



**深拷贝和浅拷贝**

浅拷贝：被复制对象的所有值属性都含有与原来对象的相同，而所有的对象引用属性仍然指向原来的对象。

深拷贝：在浅拷贝的基础上，所有引用其他对象的变量也进行了clone，并指向被复制过的新对象。

可以重写clone()方法来实现深拷贝，但是不是强制检查错误，需要把所有的父类都实现clone方法和接口，所以一般使用序列化来实现深拷贝。也可以在重写的方法中多次使用clone方法。



注意：在自己的类内使用clone方法可以不重写clone方法，但是在别的类内使用clone方法必须重写clone方法。



**Java常见异常类的继承关系**

![image-20230425112745350](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112745350.png)



**Java的Collection集合类**

![image-20230425112812599](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112812599.png)



Vector线程安全，ArrayList线程不安全，实现原理都是数组，但是Vector吃更多的资源

Hashset 底层是哈希表，存储无序，元素无索引，不可以重复

LinkedList线程不安全，链表结构

![image-20230425112825799](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112825799.png)



**java单例模式饿汉线程安全，懒汉线程不安全，双检查模式线程安全**



**JVM垃圾回收算法：**

**标记-清除算法**： 标记无用对象，然后进行清除回收，但是效率不高，无法清除垃圾碎片

**标记-整理算法**：标记无用对象，然后让存活的对象都向一端移动，然后直接清除掉端边界以外的内存

**复制算法**：按照容量大小划分两个大小相等的区域，当一个区域用完的时候将活着的对象复制到另一个区域，然后把已使用的那个区域一次性清理掉，缺点：内存使用率不高只有原来的一半。

**分代算法**：根据对象存活周期的不同将内存划分为几块，一般是新生代和老生代，新生代使用复制算法，老生代使用标记整理的算法



**Mysql调优**

1. 可以只编译一次mysql语句，后面传参数就可以，可以减少开销，在只执行一次的地方使用Preparedstatement

2. 使用DButils使整个项目链接只建立一次

3. 在插入时可以先update（修改），修改返回行数为0时再用Insert语句插入



**String内存问题：**

![image-20230425112911403](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112911403.png)

用了new关键字就会为其分配内存空间，不用就先会去常量池找是否存在123，若存在就直接指向它



**Interger缓存问题：**

```java
Integer a = -128;
Integer b = -128;
System.out.println(a==b);//true
Integer c = 128;
Integer d = 128;
System.out.println(c==d);//false
```

Integer在JVM没有设置过的时候，默认缓存为-128到127. 所以如果赋值为-128到127，会指向同一个值，而超过此范围就会开辟新的内存空间。