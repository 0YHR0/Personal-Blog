---
title: Ch09_Stream
date: 2019-04-21
tags:
 - Java
categories:
 - Java


---

**底层流：文件字节输入（出）流：FileInputStream, FileOutputStream(可能出现乱码)**

​        **文件字符输入（出）流：FileReader, FileWriter(解决乱码)**

​        **数组流：ByteArrayInputStream, ByteArrayOutputStream(目的可以是内存)**

**高级流：缓冲流：BufferedReader, BufferedWriter(增加了文件读取能力，可以按行读取)**

​              **参数：Reader Writer**

​        **数据流：DataInputStream, DataOutputStream(可以机器无关)**

​              **参数：InputStream OutputStream**

​        **对象流：ObjectInputStream, ObjectOutputStream(把对象(Serializable)存入文件)**

​              **参数：InputStream OutputStream**

**随机流：RandomAcessFile 既能读文件也能写文件，参数为File+mode**

数组流：流和源的目的地可以是文件，也可以是计算机内存



![image-20230426222559051](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426222559051.png)



数据流：可以按照机器无关的风格读取数值，不再关心该数值为多少字节，是输入输出流的一个高上层流

**注意：不能随意使用tostring方法，当一char数组需要转化为string输出时，必须使用string的构造方法：new String（c）；否则会出现乱码**

**Java源码中tostring方法的返回值是 类型@哈希值；**

![image-20230426222610270](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426222610270.png)