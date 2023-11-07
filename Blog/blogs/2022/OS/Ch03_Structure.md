---
title: Ch03 Structure
date: 2022-03-25
tags:
 - OS
categories:
 - OS
---

# Operating System structures

- Operating System services:

  - User interface(UI)

    - Command-Line(CLI)

    - Graphic user interface(GUI)

    - Batch

  - Program execution

  - I/O operations

  - File-system manipulation

  - Communications

  - Error detection

  - \------------------------

  - Resource allocation

  - Accounting

  - Protection(保证对系统资源调用权限的控制) and security（保护外来入侵）![img](https://api2.mubu.com/v3/document_image/4fdfff7b-08bd-493f-8d75-ca16cf8d2ae0-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/1fef1944-7b35-412a-8971-35d42cf5864a-14899999.jpg)

- System call：一般用高级语言写（c,c++）提供对services的编程接口![img](https://api2.mubu.com/v3/document_image/04272498-bf1f-4d33-80ef-9de848362f87-14899999.jpg)

- 每个system call 都会被分配一个数字，system-call interface维护了这个表，用户不需要知道system call的实现细节，只要调用就可以了

  

  - System call传参方式：

    - 直接把参数传递到registers，但是可能会放不下

      

      

      - 如：eax寄存器中存放的是序号为1的system call，ebx寄存器中存放的是参数，int 表示interrupt，80Hex（16进制）也就是128表示是software interrupt![img](https://api2.mubu.com/v3/document_image/af0aee96-4bd2-4d0d-a40f-c68ba91d3a7d-14899999.jpg)

      - current表示的是当前process的discriptor![img](https://api2.mubu.com/v3/document_image/270d1c4e-b5f2-45ac-87de-8cbb131621c9-14899999.jpg)

    - 把参数存在内存的块或者表中，然后把表的地址传递给register（Linux就是这样）![img](https://api2.mubu.com/v3/document_image/9d228677-8b05-47b1-831a-ddc150acace7-14899999.jpg)

    - 把参数push到一个栈中，然后再由操作系统pop

  - Types of System call![img](https://api2.mubu.com/v3/document_image/39d2fe9a-fcc8-4050-aeef-c84b5e0c6cff-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/d8d4c0c6-967d-405f-b30d-a33c6d42b0fb-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/596ffce3-efc9-418e-a05d-8766c5bdc67a-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/73b460ac-7963-4e5e-a91d-5fe6c144cf6d-14899999.jpg)

  - ![img](https://api2.mubu.com/v3/document_image/82281c38-fd42-4c9d-a6ac-f4b255a6991c-14899999.jpg)

- System programs：相当于对system call做了一层封装，主要分为以下几个类型：

  - 类型：![img](https://api2.mubu.com/v3/document_image/f3325370-3af2-4efb-8cac-58a45e9d59cd-14899999.jpg)

- Operating System structure![img](https://api2.mubu.com/v3/document_image/07ab8802-caf7-4d0d-ad66-5b63221c0c82-14899999.jpg)

- Module：loadable kernelmodules![img](https://api2.mubu.com/v3/document_image/69d55e99-16ed-463a-8724-1bb31e5313bc-14899999.jpg)

- Operating System debugging

  - Log file

  - Failure of an application-->core dump file capturing memoryof the process

  - Failure of Operating system--> crash dump file containing kernelmemory

  - *也可以用trace listings或者Profiling来监控系统

- Operating System generation

  - 操作系统是搭建在某个特定硬件上的

  - SYSGEN程序包含了硬件的特定信息

    - 用来做系统调优或者构建特定系统的内核

    - 可以产生更高效的代码

- System boot![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/682b949b-0f73-4de9-b3c6-b52178bda473-14899999.jpg)