---
title: Ch13 Service discovery
date: 2022-01-23
tags:
 - Service
 - Service Computing
categories:
 - Service Computing

---

# Ch13 Service discovery

- UDDI: Universal Description, Discovery & Integration![img](https://api2.mubu.com/v3/document_image/760a6c9b-e4a7-43f8-a99c-07b2dec7873f-14899999.jpg)

- 公司把自己可以提供的服务注册到UDDI中，其他人再通过寻找Business registrations来找到service type registerations，最后使用服务

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/3df3bf84-c750-40bf-972d-12963145dca4-14899999.jpg)

  - 注册表的data包含这几项：

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/f2259aaa-06ab-4e13-bf02-d4aaceedb9be-14899999.jpg)

    - Service Type叫做tModels

    - White page: business entity

    - Yellow page:business services

    - Green page: binding template

    - 例子：![img](https://api2.mubu.com/v3/document_image/6e5ab452-d6d0-4d10-972c-87096e6e38f1-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/34a3cecd-ba2c-40bc-a829-c7098039fe76-14899999.jpg)

    - 例子：我出售花，申请了一个域名并把它publish到了UDDI registry上，其他开发者可以用这个来发现我提供的服务，并且集成到自己的产品中，消费者既可以直接访问我的域名来买花，也可以通过其他集成了买花服务的产品来买花![img](https://api2.mubu.com/v3/document_image/0bfde40b-6c20-4a59-ba5b-64b82dcab977-14899999.jpg)

    - UDDI registry是一个集群，replica

    - public UDDI是一个失败，因为很多useless service在此注册

    - private UDDI是一个成功，因为限制了注册和使用

    - 使用UDDI![img](https://api2.mubu.com/v3/document_image/d527d91b-a028-4429-92ad-1d71477b5a29-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/3e7055ae-05f5-47d2-8a2d-d933d8e9afd1-14899999.jpg)

- Metadata exchange

  - metadata描述了endpoint的属性![img](https://api2.mubu.com/v3/document_image/e1eefbfa-d259-4b00-94c3-89cc31065781-14899999.jpg)

  - 例子：表示MyEndPoint在询问YourEndPoint要policy方面的metadata![img](https://api2.mubu.com/v3/document_image/a84f7a43-4959-4611-8377-758c7297fb8c-14899999.jpg)

  - 例子：response：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/4252c111-a495-47df-8759-44c06ac9ad44-14899999.jpg)