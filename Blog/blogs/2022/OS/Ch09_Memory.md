---
title: Ch09 Memory management
date: 2022-04-20
tags:
 - OS
categories:
 - OS
---

# Memory management



- CPU会检查每次访问内存的地址是否越界，介于base 和 limit之间：![img](https://api2.mubu.com/v3/document_image/25bd2456-1fa4-4d24-97ab-86d834bd7b5b-14899999.jpg)

- 一个程序执行有三个步骤：

  - 编译compile

  - 链接link

  - 装入load![img](https://api2.mubu.com/v3/document_image/2689549a-bbf8-43f1-acae-cb6641181fe2-14899999.jpg)

- 内存管理需要控制的事情：

  

  - 内存空间的分配与回收

    - 连续分配管理：要求每个进程分配到的内存是连续的

      - 单一分区分配：只能装入一个作业，且内部碎片大

      - 固定分区分配：把内存划分为指定大小的区域，每个区域只能装入一个作业

      - 动态分区分配：不会预先划分内存，而是通过进程需要的内存大小在装入时动态分配内存

        

        - 用什么数据结构记录内存使用情况：![img](https://api2.mubu.com/v3/document_image/9aba3316-f10b-4a45-8008-8fa9abd2e70f-14899999.jpg)

        - 进程该分配给哪个空闲分区hole？

          

          - 内部碎片（Internal fragment）：分配给某些进程的内存区域中，有一部分没有被用上

          - 外部碎片（external fragment）：内存中某些空闲分区因为太小而难以利用

          - 可以使用compaction来减少外部碎片：

            - 把所有的空闲分区合并成一整个

            - 必须是动态重定位（dynamic relocation）才可以

            - 正在IO的进程不能挪动

    - 离散分配管理方式：为用户分配的可以是分散的内存空间

      

      - 分页存储（paging）：将内存空间分为大小相等的分区，每个分区叫做一个page，包含了 page number 和 offset，把进程按照page的大小分为多个页，可以不按顺序放到内存中，page从0开始编号

        

        

        

        

        - 块号（frame）![img](https://api2.mubu.com/v3/document_image/ffca65a2-d0d9-4ca6-80e5-0b645e103221-14899999.jpg)

        - 快表（TLB）：由于要访问两次：页表+数据，所以快表可以缓解这个问题：

          - 快表相当于是页表的缓存，命中的话可以减少一次对内存的访问![img](https://api2.mubu.com/v3/document_image/f5d80451-a6ff-41c8-81a7-8ee17698d434-14899999.jpg)

          - 例子：![img](https://api2.mubu.com/v3/document_image/929261c3-66f8-4bf3-b51d-7139601a1ba8-14899999.jpg)

        - 进程之间可以共享代码段（页），来减少内存消耗：![img](https://api2.mubu.com/v3/document_image/3a7f1960-eba5-4b7e-a320-5abbe891b1dc-14899999.jpg)

        - 两级页表：页表太长了且必须存储在连续内存中，就可以用多级页表，分散存储![img](https://api2.mubu.com/v3/document_image/bb307374-d0fa-45b5-83d5-29877b9a6a69-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/0b93fb6a-a7ca-4ced-bf14-d66066da7015-14899999.jpg)

        - Inverted Page Table：与物理地址一一对应，追踪每个物理地址对应的逻辑地址，通过pid和虚拟页号找到物理页号![img](https://api2.mubu.com/v3/document_image/5f5f6839-6ba5-47f6-b8fd-f6a80cd44161-14899999.jpg)

      - 分段存储（segement）：根据自身逻辑划分为多个段

        

        

        - 段表是把逻辑上的段映射到物理地址，包含了base和limit![img](https://api2.mubu.com/v3/document_image/dd3c812c-0b11-4a85-834d-600b5458855e-14899999.jpg)

        - 由于每个段的大小都不一样，所以必须进行越界检查![img](https://api2.mubu.com/v3/document_image/1d358e8d-35b9-4a40-9b42-4a7c14160ae8-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/30b53760-67e3-4e9a-a83c-2cc461320efe-14899999.jpg)

  - 逻辑上对内存空间的扩充（虚拟内存）

    

    - 覆盖技术：内存分为一个固定区和若干个覆盖区，程序分为多个段

      

      - 固定区：常驻的内存放在固定区，调入后不再调出（低内存区域）

      - 覆盖区：不常用的段放在覆盖区，需要时调入内存，不需要时调出内存（高内存区域）

    - 交换技术：内存紧张时，把一些进程换出外存，只保留PCB在内存中，为挂起队列，把外存中已经具备运行条件的一些队列调到内存中

      - 但是上下文切换时间会非常高

      - 等待IO的进程不能切换，因为这样的话会IO到错误的进程中

      - 把磁盘空间分为对换区和文件区

        - 对换区追求速度，通常容量很小，采用连续分配方式

        - 文件区追求容量，采用离散分配方式

  - 逻辑地址与物理地址的转换

    - 绝对装入：编译时，知道程序将使用什么物理地址，会产生绝对地址的目标代码

    - 静态重定位：装入时，对地址进行重定位，一个作业装入内存时，必须一次分配给他要求的全部内存空间。一旦装入后，不能移动

    - 动态重定位（Dynamic relocation）：在程序执行的时候才对地址进行重定位，需要重定位寄存器的支持，可以分配到不连续的存储区中，并且允许程序在内存中发生移动

  - 内存保护：使各进程在各自的内存空间内运行

    - 可以采用上下限寄存器![img](https://api2.mubu.com/v3/document_image/4befd84e-9b1e-442c-8cf8-698df62029e3-14899999.jpg)

    - 也可以采用relocation和limit寄存器，limit寄存器存的是分配内存大小，relocation是内存开始位置![img](https://api2.mubu.com/v3/document_image/6cfcb370-d144-4c71-9025-72483abaf314-14899999.jpg)

  - 