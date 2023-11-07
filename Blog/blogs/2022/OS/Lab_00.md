---
title: Lab 00
date: 2022-03-28
tags:
 - OS
categories:
 - OS
---

# Lab 00

- Two types of system bounds

  - I/O-bound: 大部分时间在等I/O，比如GUI

  - Processor-bound (CPU-bound)：大部分时间在执行

  - Linux追求高响应速度，喜欢IO bound进程

- 线程优先级定义：

  - Nice value:  Range -20 (higher priority) to +19 (lower priority)

  - Real-time priority: Range 0 (lower priority) to 99 (higher priority)

  - 用户看见的是两个，但是内核中会统一起来![img](https://api2.mubu.com/v3/document_image/1f3ed7b5-1c89-4fbe-8550-1f5fd609de9a-14899999.jpg)

- 五种调度类（schedule class），以及对应的调度策略：

  - 运行队列中有许多task![img](https://api2.mubu.com/v3/document_image/215af026-48dd-4d9c-91cd-d17eb301d2f4-14899999.jpg)

  - 这些task分别属于不同的调度类：Real-time 和CFS 是有优先级的

    

    - stop：只要有，就马上运行，是优先级最高的![img](https://api2.mubu.com/v3/document_image/1bcd1d2f-2563-47ef-9c28-653e8e8fb485-14899999.jpg)

    - Deadline：deadline越早越先运行![img](https://api2.mubu.com/v3/document_image/5c83bb26-74f0-4f3b-84d5-21dba1c0cc22-14899999.jpg)

    - Realtime：有两种调度算法，根据优先级运行

      

      - RR：时间片轮换，时间片耗尽的时候，会自动到优先级队尾，重新调度

      - FIFO：只要高优先级进程在运行，低优先级的进程是轮不上的，除非高优先级的自动放弃cpu

    - CFS:

      

      - 如果一个进程得以执行，随着执行时间的不断增长，其vruntime也将不断增大，没有得到执行的进程vruntime将保持不变。而调度器将会选择最小的vruntime那个进程来执行。这就是所谓的“完全公平”。不同优先级的进程其vruntime增长速度不同，优先级高的进程vruntime增长得慢，所以它可能得到更多的运行机会。
        - 默认优先级的进程vruntime和真实的runtime是相等的

      - Minimum Granularity：为了防止进程过多，导致每个进程平均分到的时间太短，上下文切换频繁，规定最小一个线程会运行多久

      - minimum Targeted Latency ：在这段时间内，至少所有的process都运行一次

      - 三种调度算法![img](https://api2.mubu.com/v3/document_image/1f4dc8fe-25e8-4a91-9f51-cd11bbcb7dd8-14899999.jpg)

    - IDLE: 当没有进程在跑的时候会运行这个进程![img](https://api2.mubu.com/v3/document_image/1deeb702-f6aa-4a1d-b805-b0bdd9e66171-14899999.jpg)

- schedule():

  - 内核的调度操作分为触发和执行两个部分，触发时仅仅设置一下当前进程的TIF_NEED_RESCHED标志，执行的时候则是通过schedule()函数来完成进程的选择和切换。当前进程的thread_info->flags中TIF_NEED_RESCHED位表示需要调用schedule()函数进行调度。内核在两种情况下会设置该标志，一个是在时钟中断进行周期性的检查时，另一个是在被唤醒进程的优先级比正在运行的进程的优先级高时。

  - 会调用优先级最高的调度类，调度类再根据设置的调度策略决定哪个进程被调度

  - 什么出发了scheduler？3种情况

    

    - Task_tick():

      

      - scheduler_tick()是所有调度子函数的父函数，而其是由Linux时间子系统的tick_device调用。tick_device是一个周期性定时器，定时时间为1个tick，当触发中断后，会在中断处理函数中，调用scheduler_tick()。