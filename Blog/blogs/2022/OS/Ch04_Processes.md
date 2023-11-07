---
title: Ch04 Processes
date: 2022-03-27
tags:
 - OS
categories:
 - OS

---

# Processes

- Processes in memory

  - text: 程序code

  - data：程序作用的数据，例：图像处理应用中的图像

  - heap：存储着程序执行暂时的数据

  - heap和stack的大小可以动态增长![img](https://api2.mubu.com/v3/document_image/41ede35f-83a1-43a0-aee7-0d45f21a5f2f-14899999.jpg)

- Process state![img](https://api2.mubu.com/v3/document_image/b4049725-d15b-4b4d-bd7e-dc63c607ad49-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/e09971b8-2237-43bc-adee-ebd44a0e415c-14899999.jpg)

- Process control block（PCB）

  

  - 每个process都有一个unique的PCB

  - 同一个程序可以产生两个process，比如用word处理两份文档，但是PCB不可能相同

  - 系统利用PCB来控制和管理进程，所以PCB是系统感知进程存在的唯一标志

  - 进程与PCB是一一对应的

- Cpu调度process流程![img](https://api2.mubu.com/v3/document_image/2d7a327e-6153-465d-a180-5e79f3ea9fe9-14899999.jpg)

- Process scheduling![img](https://api2.mubu.com/v3/document_image/32b9225a-bd7d-42d3-9530-aeb3700b794f-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/f056621f-fa0e-4c04-9209-ae9d51714c74-14899999.jpg)

- **生产者，消费者问题![img](https://api2.mubu.com/v3/document_image/7eb3b77e-ca21-4386-ae53-fd0d49d78455-14899999.jpg)

- Scheduler

  - Short-term scheduler：CPU scheduler, 选择哪个进程将会被cpu执行

  - Long-term scheduler：job scheduler， 选择哪个进程将会被放到ready queue中![img](https://api2.mubu.com/v3/document_image/6a36a90e-5aeb-44c1-b562-d5a025e33896-14899999.jpg)

  - Process分为：

    - I/O bound process：用更多的时间做IO操作，而不是CPU计算

    - CPU bound process：反之

  - 另外还有medium scheduler，比如：![img](https://api2.mubu.com/v3/document_image/dc3f3008-3872-41b7-bfd0-b4c9aefbb595-14899999.jpg)

  - ![img](https://api2.mubu.com/v3/document_image/ad7afe99-832c-4e36-8d15-0eca190418fd-14899999.jpg)

- Process creation

  - 父进程创建子进程，所以进程是一棵树

  - 进程用pid进行标识

- fork：克隆一份父进程的代码，从头开始执行，只不过fork函数在父进程中返回子进程的pid，在子进程中返回0

  - 执行一次返回两个值

- exec：

  - 一个进程一旦调用exec类函数，它本身就"死亡"了，系统把代码段替换成新的程序的代码，废弃原有的数据段和堆栈段，并为新程序分配新的数据段与堆栈段，唯一留下的，就是进程号，也就是说，对系统而言，还是同一个进程，不过已经是另一个程序了。（不过exec类函数中有的还允许继承环境变量之类的信息。）

  - 那么如果我的程序想启动另一程序的执行但自己仍想继续运行的话，怎么办呢？那就是结合fork与exec的使用。![img](https://api2.mubu.com/v3/document_image/875752ff-8553-4d5f-987a-5c20f4076b4e-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/3691449a-3f93-4eca-8c88-a98342301b9e-14899999.jpg)

- process termination

  

  - cascading termination：有些操作系统不允许子进程在父进程挂了的情况下继续执行

  - zombie process：没有父进程在wait

  -  orphan process：父进程没有wait但是结束了

- Interprocess communication

  

  - Shared memory

  - message passing

    - Synchronization

      - Blocking-->synchronize

      - non-blocking-->asynchronize

    - Buffering![img](https://api2.mubu.com/v3/document_image/4f835bfb-2b1c-436d-9dd6-4383f5c81e94-14899999.jpg)

  - Pipe

    

    - Ordinary pipe: 用于父进程与子进程之间的通信，其他进程不能访问，并且是单向的
      - Windows calls these anonymous pipes

    - Named pipe: 用于其他进程之间的通信，可以多进程用一个管道，可以是双向的

- Exercise：看ppt

  - pid：process id

  - ppid： parent process id，没有父进程就是0

  - tid：thread Id

  - tgid：thread group id：The ID of the process that started the threadhttps://blog.csdn.net/chenpu5887/article/details/100627310?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.essearch_pc_relevant&spm=1001.2101.3001.4242.1![img](https://api2.mubu.com/v3/document_image/e47f5228-62bb-425d-bedf-327080d2e280-14899999.jpg)

  - https://blog.csdn.net/qq_29503203/article/details/54618275