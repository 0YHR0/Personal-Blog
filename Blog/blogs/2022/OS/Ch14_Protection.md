---
title: Ch14 Protection
date: 2022-05-18
tags:
 - OS
categories:
 - OS
---

# Protection

- principle:![img](https://api2.mubu.com/v3/document_image/ac2c82b7-69aa-4d24-a94d-a4d56ebf87c3-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/e77f2dc6-7548-4892-8e2d-93d5f55c9043-14899999.jpg)

- Domain structure:![img](https://api2.mubu.com/v3/document_image/d951f0fd-b9e1-48f5-a0e4-3db38b9198d1-14899999.jpg)

- 域的实现：![img](https://api2.mubu.com/v3/document_image/59aba8a5-bf1c-4ff3-9796-cae7914cf604-14899999.jpg)

- 访问矩阵

  

  

  - 域切换![img](https://api2.mubu.com/v3/document_image/0f025963-1243-4470-a948-408afd076965-14899999.jpg)

  - 复制权限：![img](https://api2.mubu.com/v3/document_image/4fa25c6b-1867-405d-851b-f2710cc33b8c-14899999.jpg)

  - 权限所有者更改其他权限：修改列内权限![img](https://api2.mubu.com/v3/document_image/5d7cf73c-ddbb-4b3a-a956-6a226763974f-14899999.jpg)

  - 修改行内权限：![img](https://api2.mubu.com/v3/document_image/3ee60d36-d007-49c3-ac6d-50d434d1a3db-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/0d44e6d2-6980-414c-b9b4-c280ca1cb4c6-14899999.jpg)

  - 访问矩阵的实现：一般都是稀疏矩阵

    - 三元组的表：缺点：太大![img](https://api2.mubu.com/v3/document_image/e871b06b-f314-4b47-8550-bf12ad52b371-14899999.jpg)

    - 为每个访问对象建立一张表：每次访问都要搜索，太慢，确定域的访问权限集合太困难![img](https://api2.mubu.com/v3/document_image/ffbd50d0-6939-4a15-8668-edae939d6248-14899999.jpg)

    - 为每个域建立一张表：撤销能力的效率不高![img](https://api2.mubu.com/v3/document_image/8d2ef791-a461-4928-a60f-ea22ba6b6436-14899999.jpg)

    - lock-key：![img](https://api2.mubu.com/v3/document_image/557078d3-2509-4831-9dc0-7af58506aef5-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/7e534372-9891-4efc-8cb6-c874c0b38367-14899999.jpg)

    - 比较：![img](https://api2.mubu.com/v3/document_image/977f2c09-5e21-47cd-9622-1fc8fbd1b424-14899999.jpg)

    - 应用：第一次访问的时候搜索access list，允许访问的话把capabilities创建并添加到process中![img](https://api2.mubu.com/v3/document_image/230e4d3a-f97a-469c-9d93-d09002696d02-14899999.jpg)

- 权限控制：Privilege

  

  - 权限的撤回：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/2dca1f04-5659-48d9-a6b5-c6585b29495b-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/690aee34-a93c-4794-8cff-488e88fa2702-14899999.jpg)