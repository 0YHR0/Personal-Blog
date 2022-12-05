---
title: Ch06 E-mail
date: 2021-12-29
tags:
 - Service
 - Service Computing
categories:
 - Service Computing
---

# Ch06 E-mail

- 结构：

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/458aa519-1d09-4787-9de8-1e613d31def7-14899999.jpg)

  - POP是把用户的mail存在本地的

  - IMAP是把用户的mail存在服务端

- RFC 822(一种网络传输信息的标准)

  - message：memo包含了一个head和一个body（由text组成）

  - 第一个空行之后是message body

  - 例子：![img](https://api2.mubu.com/v3/document_image/7e09e1e2-85a6-4319-ad7c-31ed1a41f45b-14899999.jpg)

- MIME：定义一段内容的格式

  - 一个message body中有多个part，每个part都有header和body![img](https://api2.mubu.com/v3/document_image/1547641b-37a4-487a-8e7f-4b4e6bdc0792-14899999.jpg)

  - 例子：Content是大小写敏感的![img](https://api2.mubu.com/v3/document_image/3e03c23d-35e6-491d-a426-1d88b4ee2717-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/fb5258f1-4099-4ca9-808e-dd18de88221a-14899999.jpg)

  - Media types：

    <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d4c759e0-0e97-475d-9191-0e7d34679df1-14899999.jpg" alt="img" style="zoom:50%;" />![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/8894dd69-ee2f-4f16-bad6-af3832e552ca-14899999.jpg)

    

    - multipart的subtype又可以分为：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/8cfef427-602c-491d-a852-449655c2ed98-14899999.jpg)

      

      - mixed中每个part的分隔符：![img](https://api2.mubu.com/v3/document_image/127e179d-7e6b-4307-a32d-484e1f18d757-14899999.jpg)

      - 例子：![img](https://api2.mubu.com/v3/document_image/e3553fd5-0e27-44cf-9384-197a49a02e42-14899999.jpg)

- SMTP: 定义了两个用户通过tcp传输消息的规则（发邮件）

  - 是不可信的，因为可以伪造消息头部，headers，body都可以随意更改，比如我把我的发件人改成Trump

  - 例子：发一个email给多个用户，先检测用户存不存在![img](https://api2.mubu.com/v3/document_image/ae1b310e-8991-4fd0-9263-3777c3638d17-14899999.jpg)

  - 可以用指令来检测用户存不存在等![img](https://api2.mubu.com/v3/document_image/6faa6772-c720-41a4-a456-a02d20dde88a-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/2f734a0d-305f-4106-bf4b-e70de943fa15-14899999.jpg)

- POP是一种从server中把mail 下载到本地的协议（收邮件）默认端口110

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/f5f414a1-0355-4601-b51d-0037b809eb4b-14899999.jpg)

  - 收完邮件之后，远程server上会删除

  - 好处：user可以不用一直在线，离线接受服务也可以

  - 坏处：user不能在多个设备中共享mail

  - 步骤：

    - 先登录：ley已经在线了，登录失败，换一个用户![img](https://api2.mubu.com/v3/document_image/9d194a4b-d9ec-47d9-a404-d39a97d97499-14899999.jpg)

    - List：列出所有我没有下载的邮件（2个）以 . 来结束![img](https://api2.mubu.com/v3/document_image/7a302e68-e3fb-46f0-b0bf-d6a3647d2c6f-14899999.jpg)

    - 把邮件下载下来![img](https://api2.mubu.com/v3/document_image/efc625b5-9636-45d9-8a05-22a6513fa900-14899999.jpg)

    - 也可以删除信息：![img](https://api2.mubu.com/v3/document_image/9c7237d4-618d-436b-8d87-14ab1e5bb2dd-14899999.jpg)

- IMAP: 功能上比pop更强

  - 好处：mail在设备间共享，并且可以用文件夹分类，比如垃圾邮件等

  - 坏处：是online mode，必须要时刻保持在线