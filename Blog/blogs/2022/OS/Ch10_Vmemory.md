---
title: Ch10 Virtual memory
date: 2022-04-23
tags:
 - OS
categories:
 - OS

---

# Virtual memory

- 虚拟内存的定义和特征![img](https://api2.mubu.com/v3/document_image/dc126b98-8784-47a1-9c27-0a29e83b7833-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/006437ad-769e-4f38-ab5f-d64933a8e1b0-14899999.jpg)

- 进程之间共享lib![img](https://api2.mubu.com/v3/document_image/97b64607-52eb-4a90-9be8-923db6026ec5-14899999.jpg)

- Demand paging：

  

  

  - page faults（缺页中断）![img](https://api2.mubu.com/v3/document_image/93124b3f-f533-4be0-880a-fe8f3c1d7981-14899999.jpg)

  - 页表机制：![img](https://api2.mubu.com/v3/document_image/9e7f096b-417d-49cb-bda7-7c42693552b4-14899999.jpg)

  - 地址变换

    

    

    - 只要快表命中，就一定在内存中，页面调出的时候也要在快表中删除

    - 只要从外存中调入页面，那么也要把该页加到快表中![img](https://api2.mubu.com/v3/document_image/e24da05c-eb98-4684-b4f0-83fac5dac7d5-14899999.jpg)

  - Copy-on-Write：父进程创建子进程，内存中共享一个块，只有有进程对这个块进行写操作了，这个块才会被复制, 操作系统会保留一个空page的pool，每次都从这个池子中拿page

  - 页面置换算法：

    

    - OPT(但是操作系统无法提前预判页面访问顺序)![img](https://api2.mubu.com/v3/document_image/89758eed-4313-44e6-b76c-46c1e502f871-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/ca9e89f0-164f-4088-b3c8-7bcfe418c969-14899999.jpg)

    - FIFO![img](https://api2.mubu.com/v3/document_image/1d099913-6b24-4bd2-8b0f-b0ff06c06ef2-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/f83742d6-5508-454e-852a-ad912657f792-14899999.jpg)

    - LRU（比FIFO好，但是实现困难，需要特殊的硬件，开销大，没有belady异常）访问字段是上次访问的时间

      

      

      - 要维护一个stack来记录谁是最长没被访问的![img](https://api2.mubu.com/v3/document_image/6d8d8390-f018-4a0e-8b53-b011f611d1eb-14899999.jpg)

  - Second-Chance (clock) Page-Replacement Algorithm![img](https://api2.mubu.com/v3/document_image/19190fee-bac3-4976-8294-cd1db2f4bd85-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/813530c5-0627-4ae1-b8d5-7955482b4d50-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/cda7d8da-41e3-4f9a-af4e-b8040413d85b-14899999.jpg)

  - 改进型![img](https://api2.mubu.com/v3/document_image/9c715a14-5910-4b1f-a1d3-9e5f110298fd-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/eec967c8-35ea-47ba-a638-93024605c06f-14899999.jpg)

  - 其他算法：![img](https://api2.mubu.com/v3/document_image/7db65d7f-dbc6-47df-81e9-dc77d158dce2-14899999.jpg)

  - Thrashing ≡ a process is busy swapping pages in and out

- 工作集![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/daae48af-b7e6-473b-a8ea-69d2db803bd5-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/8a8c69a0-cdad-4ca2-94b5-3ab03ed4dea1-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/c8513ac1-dc35-4a91-9e63-c7a175b1219d-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/b66db9a2-cc48-472b-8e98-b306bc745441-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/4347bcb7-b73f-4569-a82f-66b5f9524ea8-14899999.jpg)