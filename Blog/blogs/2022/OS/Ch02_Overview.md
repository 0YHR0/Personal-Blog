---
title: Ch02 Overview
date: 2022-03-21
tags:
 - OS
categories:
 - OS
---

# Overview

- Von Neumann architecture : Memory+CPU+I/O

- Operating system: a software layer uppers of the computer hardware which aims to make the usage of the hardware simpler, more efficient and more effective

- Also a resource allocator and a control program

- Computer System : 4 components --> Hardware, Operating system, Application programs, Users

- Kernel: The one program running at all times on the computer.

- cache: 越大missing rate越小![img](https://api2.mubu.com/v3/document_image/715b041e-385c-4c86-b423-a9a233c802db-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/72e02fcf-c5cd-4fab-94e1-22b1408afc7c-14899999.jpg)

- CPU 控制 main memory和local buffer之间的数据传输，IO设备可以和CPU执行concurrently（并发）

- device driver统一device controller和kernel的接口

- 每个Device controller 负责一个具体的device。每个Device controller 都有一个local buffer

- IO就是把数据从device传输到对应的local buffer中

- Device controller 通过中断(interrupt)来告诉 cpu 他的操作完成了

- 中断将控制权转移给中断服务程序, 通过interrupt vector

- Operating system is interrupt driven:

  - hardware interrupt by one of the devices

  - software interrupt by trap or expections

- The operating system preserves the state of the CPU by storing registers and the program counter![img](https://api2.mubu.com/v3/document_image/1b4d4aab-5073-4f98-a837-8a7f6882b6a4-14899999.jpg)

- caching vs buffering: 

  - caching is keep the data that can be used in a short time of the future

  - buffering is to solve the difference of the producer and the consumer

- Multiprocessors: Increased throughput, economy scale, increased reliability

  - Asymmetric multiprocessors: each processor is assigned a specific task

  - Symmetric multiprocessors: each processor performs all tasks![img](https://api2.mubu.com/v3/document_image/4af55488-1b54-4b4e-bc06-88f44b0eeb5d-14899999.jpg)

- Clustered system: 

  - multiple systems working together.

  - sharing storage via SAN(storage-area network)

  - Symmetric clustered system: multiple nodes running applications, monitoring each other

  - Asymmetric clustered system: one machine in hot-standby mode

- If processes don’t fit in memory, swapping moves them in and out to run ,Virtual memory allows execution of processes not completely in memory

- Operating system have user mode and kernel mode: Some instructions designated as privileged, only executable in kernel mode

- Timer 用来产生中断，特权指令可以设置计时器，计时器的时间会自动递减![img](https://api2.mubu.com/v3/document_image/04f0e51a-d7a7-4a68-ad70-e19b42d830ba-14899999.jpg)

- process is the execution of the program，it is a unit of work within the system

- Virtualization:![img](https://api2.mubu.com/v3/document_image/a2b0a4f6-ab49-4817-8d19-848ba778e04e-14899999.jpg)

- ![img](https://api2.mubu.com/v3/document_image/28fb2d85-2d66-494c-945d-4b4530a7668d-14899999.jpg)

- Application use system call to communicate with the kernel

- kernel use interrupts to communicate with the hardware![img](https://api2.mubu.com/v3/document_image/11b0db38-3fcf-4951-82e7-1c4f8ab19fe0-14899999.jpg)

- Monolithic kernel（单片内核）: one crash, then all the kernel crash![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/c11249d0-8a34-424d-bc38-a0ad1b9baf69-14899999.jpg)