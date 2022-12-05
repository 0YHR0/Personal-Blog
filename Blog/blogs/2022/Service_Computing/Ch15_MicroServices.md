---
title: Ch15 MicroServices
date: 2022-02-15
tags:
 - Service
 - Service Computing
categories:
 - Service Computing

---

# Ch15 MicroServices

- 什么是微服务![img](https://api2.mubu.com/v3/document_image/c46587dc-9170-4510-9643-34c0759da269-14899999.jpg)

- 有哪些特性![img](https://api2.mubu.com/v3/document_image/e6ed32f7-506b-4bab-8d07-b54e86736deb-14899999.jpg)

- 所以deployment是非常重要的，会在cloud computing课上讲

- 在replica的情况下：碰到瓶颈的时候，只要复制对应的component就可以，不用整个应用一起复制![img](https://api2.mubu.com/v3/document_image/e78b974f-33fe-40f5-86c6-b04612d112dd-14899999.jpg)

- Service的粒度很难确定![img](https://api2.mubu.com/v3/document_image/ccba73ac-ac6f-428a-8860-c343bae4e1c1-14899999.jpg)

- 因为每个服务都要自己routing自己的消息到别的service等，所以会产生强耦合的情况，side car就是用来解决这个问题，把业务代码分割开来，sidecar负责接受请求，调用逻辑，发送请求![img](https://api2.mubu.com/v3/document_image/1e480b75-dea6-4391-a992-877384e1c9c6-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/9c149deb-2a3c-4689-8e63-1b1575066f28-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/969b0f6f-5ac7-4a79-8c1c-a1bd0e1fbe05-14899999.jpg)

- Benefits of MicroServices:

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ffde2a12-020e-42e7-9fff-567a9d8a059b-14899999.jpg)

  - Permissionless Innovation: 如果team间开会数量远大于team内部开会，那么这个要求没达到

  - Enable failure：出错之后很难排错，一个service内部错误是可以容忍的，但是不能有级联错误![img](https://api2.mubu.com/v3/document_image/3bf1056d-4dc5-4dd1-bcf9-a7808b0893b4-14899999.jpg)

  - Disrupt trust：不用相信某个工程师什么什么没问题，直接测试api![img](https://api2.mubu.com/v3/document_image/3339d367-2822-4633-b67a-b8179dd2bc0e-14899999.jpg)

  - You build it，you own it: 一个service由一个团队负责，有问题了就要马上修复![img](https://api2.mubu.com/v3/document_image/9e1caee5-ef9e-4915-bb72-d4d87bc978eb-14899999.jpg)

  - ...

- 每个微服务都应该有自己的数据库，不能share

- 微服务的中心思想是解耦