---
title: Ch03_Java_Datastructure
date: 2019-05-12
tags:
 - Java
categories:
 - Java

---

# ![image-20230425113337990](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425113337990.png)



**Vector和ArrayList：**

1. Vector是线程安全的，因为大部分方法都用syncronized方法修饰，而ArrayList不是

2. ArrayList在原来的数组不够用的时候扩容0.5倍，Vector扩容1倍

所以单线程环境下，Vector的效率很低，而在多线程环境中不能直接用ArrayList，必须加处理



**HashMap和HashTable：**

1. Hashtable中方法是synchronized，多线程可以直接用Hashtable，而HashMap必须手动处理。

2. Hashtable的key和value都允许null值，而HashMap中null只能作为键，并且只有一个。

3. Hashtable直接使用对象的hashcode，而HashMap是另外计算了hash值。

4. Hashtable的hash数组初始大小为11，增加方式是old*2+1，而hashMap中默认数组的大小为16，而且一定是2的指数。



**TreeMap和HashMap：**

1. TreeMap继承自SortedMap，HashMap继承自Abstractap，TreeMap会把元素排序，所以更适合按自然顺序遍历元素，其他情况HashMap更常用，因为效率更高



**HashMap和HashSet：**

![image-20230425113412190](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425113412190.png)