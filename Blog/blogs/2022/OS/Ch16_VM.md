---
title: Ch16 VM
date: 2022-05-26
tags:
 - OS
categories:
 - OS

---

# Virtual Machines

- 结构：![img](https://api2.mubu.com/v3/document_image/a774b028-4750-4f47-ae57-c5dff7b2366b-14899999.jpg)

- type0是硬件支持，type1是软件支持：![img](https://api2.mubu.com/v3/document_image/e92742fc-1710-402a-a554-ff8f3bfdaf00-14899999.jpg)

- 双模式cpu：

  

  - cpu有user mode和kernel mode

  - 虚拟机也有virtual user mode和virtual kernel mode，但是都运行在真实cpu的user mode中

  - 要切换到kernel mode必须从virtual kernel mode进行

- Trap-and-Emulate![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/a410cb2a-6ce4-49f2-93df-225ec8786528-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/da5bfee2-ee75-4f9e-a3e7-df26afc8592a-14899999.jpg)