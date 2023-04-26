---
title: Ch04_Generic
date: 2019-04-15
tags:
 - Java
categories:
 - Java

---

# Generic

Java中的泛型只会在编译过程中有效，以此来检查代码的正确性，正确检验泛型结果后，会将泛型的信息擦出，并且在对象进入或离开方法边界处，添加类型检查和类型转换的方法。

也就是说，泛型信息不会进入到运行时阶段。

泛型分为：

**泛型类，泛型接口，泛型方法**

**泛型类：1.泛型不同的引用不能互相赋值**

​        **2.泛型默认为Object**

![image-20230426214708809](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214708809.png)

![image-20230426214700648](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214700648.png)



**泛型接口：如果一个class实现了泛型接口，并且没有指定数据类型，那么class在声明时也要加泛型，如下：**

![image-20230426214738457](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214738457.png)



**泛型方法：可变参数类型的泛型方法，在声明时必须加上泛型：**

**在类上定义的泛型，可以在普通方法中使用，但是不能在静态方法中使用。**

**也就是说普通方法中既可以用类中的泛型也可以用自己定义的泛型。**

静态方法中不能使用类定义的泛型只能使用自己定义的泛型。![image-20230426214803872](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214803872.png)



**泛型通配符：**

**无限制：<?>**

**有限制：<? extends Person > 只有Person及其子类才可以传入；**

​        **<? super Person > 只有Person及其父类才可以传入；**

​        **<? extends Comparable> 只有实现了Comparable接口的类才可以传入；**



![image-20230426214816599](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214816599.png)