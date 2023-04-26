---
title: Ch11 Java Based DataStructure
date: 2019-07-08
tags:
 - Data structure
 - Java
categories:
 - Data structure

---

# HashSet

Hashset：可以存储任何对象的一种数据结构，在java.util包中。

Set集合存的值是不重复的，并且可以存null。

若想让set存储指定的类型，就要使用到泛型：

  HashSet<String> set = new HashSet<String>();   // 只能存String类型的数据

  HashSet<Object> set = new HashSet<Object>();  //能存任何类型的数据

![image-20230426214217256](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214217256.png)



# TreeSet

Tree set是Sortedset的接口实现类，可以确保元素处于排序状态。

支持两种排序方法：自然排序和定制排序，默认使用自然排序

自然排序：在使用自然排序时，自动调用CompareTo方法，并按照升序排列，必须保证Treeset中的数据类型是一样的（可以使用泛型进行约束），否则会报出异常。

![image-20230426214250523](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214250523.png)

定制排序：必须实现Comparator接口，并且重写其中的Compare 方法：

![image-20230426214301441](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214301441.png)



# ArrayList

List代表一个元素有序且可以重复的结合，他会按照元素的插入顺序给每个元素建立一个索引。并且给出了按照索引操作元素的一些方法：

ArrayList和Vector都实现List接口，但一般使用ArrayList![image-20230426214332396](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214332396.png)



# Map

Map用于保存具有映射关系的数据（对象），所以map中存在两组值，一组为key，一组为value，key与value拥有着单向对应的关系，即一个key必定只能找到一个value，两个key之间必定互不相等。

Map是一个接口，HashMap是对Map的接口经典实现类。![image-20230426214409350](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214409350.png)



TreeMap与TreeSet类似，也有自然排序和定制排序两种方式，定制排序需要实现Comparator接口并重写其中的Compare方法。 自然排序是字典排序





# Collection

Collection是一个操作set， map， list等的工具类，常直接调用其静态方法。

Collection中提供了大量对集合元素进行排序，查询和修改等操作，还设置了对元素对象设置不可变和同步控制。下面以list为例：

其中sort为升序排序![image-20230426214459645](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214459645.png)

![image-20230426214508899](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426214508899.png)



