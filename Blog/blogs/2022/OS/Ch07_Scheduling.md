---
title: Ch07 CPU Scheduling
date: 2022-04-16
tags:
 - OS
categories:
 - OS
---

# CPU Scheduling



- 调度

  

  - 调度需要的步骤：![img](https://api2.mubu.com/v3/document_image/fa74050a-e1b9-4f95-a0e2-c9df2a9b1299-14899999.jpg)

  - 调度延迟的定义：![img](https://api2.mubu.com/v3/document_image/65352b8d-7090-4b10-92cd-d38a46b5d92d-14899999.jpg)

- CPU调度算法

  - FCFS:先来先服务![img](https://api2.mubu.com/v3/document_image/d5b066e5-42ec-4aae-b716-ad519cd7ff87-14899999.jpg)

  - SJF：短进程优先，分为抢占式和非抢占式, 但是很难估计要运行多久，要问user

    - 估算下次CPU brust的方法![img](https://api2.mubu.com/v3/document_image/9af17c0b-8775-4642-b9cd-d5269ee0f605-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/e51ff50c-8ec7-45b0-a65d-94decb5b1a49-14899999.jpg)

    - 抢占式：![img](https://api2.mubu.com/v3/document_image/1a60ac41-785a-4669-a3b1-30dcbb2d6eb3-14899999.jpg)

    - 非抢占式：![img](https://api2.mubu.com/v3/document_image/7d4cf57e-3b05-4727-a3b1-aa9bce9b94cd-14899999.jpg)

  - HRRN：高响应比优先![img](https://api2.mubu.com/v3/document_image/594e726e-d3c2-4b25-b191-29837753d3ff-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/d2b0574c-0ed5-4427-95e3-39b1f618b601-14899999.jpg)

  - RR：Round-Robin

    

    - time quantum 时间片q![img](https://api2.mubu.com/v3/document_image/e549e690-4d43-448a-8782-1772d24ef878-14899999.jpg)

  - 优先级调度算法：分为抢占式和非抢占式，选择优先级最高的进程进行调度![img](https://api2.mubu.com/v3/document_image/915f245c-0584-4c86-a84d-7610cc514deb-14899999.jpg)

  - 多级队列：把就绪队列拆分成多个队列，每个队列有自己的调度算法。

    - 可以给每个队列设置不同的优先级，若是固定优先级，则会产生饥饿问题。

    - 那么另一种解决方案就是基于时间片的算法，给定 时间片调度，即个队列得到一定的 CPU 时间，进程在给定时间内执行![img](https://api2.mubu.com/v3/document_image/96fd186c-c6fe-431a-9421-83d39947b1a4-14899999.jpg)

  - 多级反馈队列：

    

    

    

    - 每个队列有不同的调度算法，并且规定了一个进程如何从一个队列到另一个队列![img](https://api2.mubu.com/v3/document_image/e6469226-7a8c-4f49-a4d1-b4b34892a453-14899999.jpg)

- 进程的执行过程表现为CPU区间（CPU Burst）和I/O区间（I/O Burst）的交替过程,最终是CPU Burst结束

- CPU Scheduler：选择一个ready队列中的进程给他分配cpu![img](https://api2.mubu.com/v3/document_image/1b16ac5b-cc32-4e37-89ad-b904467df165-14899999.jpg)

- Dispatcher：调度模块![img](https://api2.mubu.com/v3/document_image/12096bcc-5448-48ce-ae89-700bde2380df-14899999.jpg)

- scheduling critria![img](https://api2.mubu.com/v3/document_image/d77660c8-0de1-4c4d-9397-1837dec71946-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/311d4127-3feb-4159-a004-ab56792d68d4-14899999.jpg)

- Thread Scheduling

  - 用户线程调度是在process-contention scope，因为调度竞争是在process之间的

  - 核心线程调度是在system-contention scope，因为调度竞争是在系统的所有线程中

- Multiple-Processor Scheduling：有多个cpu时的调度

  - Asymmetric multiprocessing：只有一个processor可以访问系统数据，就不用考虑data shareing了

  - Symmetric multiprocessing（SMP）：多个处理器可以访问统一的内存，每个processor自己调度，所有的进程在公共的就绪队列或者每个processor维护自己独有的就绪队列

  - 进程优先选择自己在运行的那个processor![img](https://api2.mubu.com/v3/document_image/d360434e-7736-4c7b-ab96-728501699388-14899999.jpg)

  - NUMA架构![img](https://api2.mubu.com/v3/document_image/0fb537bf-9fad-4ae1-b490-46c0801c0922-14899999.jpg)

  - 多处理器要解决load balancing的问题，主要分为以下两点：

    - 周期性的检查每个处理器的负载，并且把高负载上的任务push到其他cpu![img](https://api2.mubu.com/v3/document_image/75467360-500b-4dac-8750-12fcfa2e387a-14899999.jpg)

    - 空闲处理器会把busy处理器中在waiting的任务拿过来处理![img](https://api2.mubu.com/v3/document_image/93b9a9b5-765e-4879-80a2-10a010dc7470-14899999.jpg)

- Multicore-MultiThread

  

  - 现在多个核心继承在一个芯片上

- Real time cpu scheduling

  - 软实时：不保证实时进程什么时候会被调度

  - 硬实时：实时任务必须在deadline之前被调度

  - 两种延迟时间：

    - Interrupt latency：从中断到达到中断被处理的时间（判断中断类型+上下文切换）![img](https://api2.mubu.com/v3/document_image/aa7aa01b-648a-43e9-b24d-7759dc24ad97-14899999.jpg)

    - Dispatch latency：调度器从一个进程切换到另一个进程的时间![img](https://api2.mubu.com/v3/document_image/b30d3d16-248b-4d8e-9053-bb90f74ee926-14899999.jpg)

  - realtime的调度要考虑：

    - 可抢占

    - 优先级

    - deadline （hard realtime）

  - 如果是周期性运行的进程，那么必须满足![img](https://api2.mubu.com/v3/document_image/0cdad91f-1ac7-4bcb-858e-05c15d3f429f-14899999.jpg)

  - 虚拟化软件可能带来的问题![img](https://api2.mubu.com/v3/document_image/c91cce0f-b7cc-4729-bcf2-237bc9b26745-14899999.jpg)

  - 实时系统的任务调度算法：Rate Monotonic Scheduling（RM算法）是优先级固定中的最优算法![img](https://api2.mubu.com/v3/document_image/8e3e7c64-b7d6-4d49-9b41-56d64d6db936-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/4b1100fb-87c5-4862-8da4-8e363f5c353d-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/dd54bccd-5bc9-4f3a-bd71-a7e0fefc4baa-14899999.jpg)

  - Earliest Deadline First Scheduling (EDF): deadline越早，优先级越高![img](https://api2.mubu.com/v3/document_image/86639bed-601f-4870-93c8-114cd8c8a3a9-14899999.jpg)

  - Proportional Share Scheduling：确保每个工作获取一定比例的CPU时间，把cpu时间分成T份，每个应用获得其中的n份

- Algorithm Evaluation：给一个特定的情况，看各个算法在此情况下的表现

  - 计算最小平均等待时间![img](https://api2.mubu.com/v3/document_image/13c5f120-1c51-4253-a97e-191b8102b703-14899999.jpg)

  - 利用queue model（排队模型，只能适用于特定情况） 和simulation（仿真模型更精确，high cost，high risk） 来evaluate算法