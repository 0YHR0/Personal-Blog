---
title: Ch05 Network
date: 2023-10-22
tags:
 - redis
categories:
 - Redis


---

# Network



![image-20231024104328542](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024104328542.png)

![image-20231024104559193](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024104559193.png)

![image-20231024104855833](C:\Users\YHR\AppData\Roaming\Typora\typora-user-images\image-20231024104855833.png)

## 阻塞IO

![image-20231024105347956](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024105347956.png)





## 非阻塞IO

![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024105313301.png)





## IO多路复用

![image-20231024110116752](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024110116752.png)

![image-20231024110305395](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024110305395.png)

![image-20231024110704535](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024110704535.png)



## Select

![image-20231024113525136](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024113525136.png)



## POLL

![image-20231024114851679](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024114851679.png)

+ 提升的只有大小



## EPOLL

![image-20231024123518650](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024123518650.png)

+ 解决了用户空间到内核空间频繁的拷贝
+ 解决了要遍历所有的fd，因为只拿到了就绪的fd
+ 由于红黑树的结构，可以实际上监听非常多的fd，不会像poll和select模式一样增加fd会减缓很多效率

![image-20231024124105091](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024124105091.png)





## 事件通知机制

![image-20231024124934425](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024124934425.png)

+ LT通知完，如果还有没读取完的，就继续放入链表中
+ ET通知完就全部删除![image-20231024143423013](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024143423013.png)



## 信号驱动IO

![image-20231024145026705](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024145026705.png)



## 异步IO

![image-20231024145231213](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024145231213.png)





![image-20231024145816285](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024145816285.png)





## 为什么单线程？

![image-20231024150233503](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024150233503.png)







![image-20231024151109685](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231024151109685.png)