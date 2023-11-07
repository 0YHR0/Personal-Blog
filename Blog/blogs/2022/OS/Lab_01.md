---
title: Lab 01
date: 2022-05-28
tags:
 - OS
categories:
 - OS

---

# Lab 01

- unsafe concurrency可以用automic operation来解决，但是代码过长又不能保证，所以用lock

- 自旋锁可以用在：使用关中断来保证不会发声死锁，因为时间很短

- 读写自旋锁：分为读锁和写锁

  - 读可以多个一起读，但是只有在没有写的时候

  - 写的时候其他进程都被阻塞

- 信号量机制：表示一个资源的剩余个数，等待获取信号量的进程会进入等待队列，但是不会像自旋锁一样占用cpu，因为当有信号量的时候，它会被被动唤醒

- mutex是semaphores=1的情况（互斥）

- 程序top half：把不耗时部分放到top half，不可中断

- 程序bottom half：可被中断

- sequential locks：引入版本号，write的时候会+1，read会一直重试直到开始读的sequential number=结束读的sequential number。适用于有很多reader，没有很多writer的情况

-  Pre-emption Disabling： pre-emptive抢占式的，可以通过设置关键区不可抢占来实现同步![img](https://api2.mubu.com/v3/document_image/74343c53-e834-4d63-876d-61fa3839a1a6-14899999.jpg)

- read barrier，write barrier，阻止指令重排序的

  - 加之前：![img](https://api2.mubu.com/v3/document_image/cee5169d-bda6-4f14-8e40-f547105061ac-14899999.jpg)

  - 加之后：![img](https://api2.mubu.com/v3/document_image/0a084d39-d487-4d6d-8058-f956355768af-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/7fbae135-2ec2-4a57-bd2d-af8546fea763-14899999.jpg)

- RCU：读进程不会被阻塞

  

  - 多用于传递的不是值而是指针的情况：Only works on dynamically allocated data that is referenced via pointers

- summary![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/42e947b8-b7a8-4ac7-9ef3-02cfd17c010d-14899999.jpg)