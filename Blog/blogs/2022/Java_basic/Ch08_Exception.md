---
title: Ch08_Exception
date: 2019-04-20
tags:
 - Java
categories:
 - Java

---

# Exception

Try-catch自定义异常类使用方法：

![image-20230426222350755](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426222350755.png)



一般使用System.err.println();来输出错误，因为System.out可能会被重定向。

Exception继承了Throwable

默认的方法：e.printStackTrace();将会提示方法调用处以及异常抛出处。

重新抛出异常会把异常抛给上一级异常处理程序

![image-20230426222407885](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426222407885.png)

![image-20230426222418216](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426222418216.png)

![image-20230426222428991](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426222428991.png)



RuntimeException会自动捕获，finally不管是否抛出错误都执行