---
title: Ch12 Axis&ESB
date: 2022-01-21
tags:
 - Service
 - Service Computing
categories:
 - Service Computing
---

# Ch12 Axis&ESB

- Axis2：

  - message处理模型：有点像责任链模式![img](https://api2.mubu.com/v3/document_image/6ebd5c32-aa8e-4389-abbb-a162496d97e6-14899999.jpg)

  - 核心模块![img](https://api2.mubu.com/v3/document_image/ea93e122-cd09-46cb-9ebe-0e7d3b415e28-14899999.jpg)

  - 两种思路：![img](https://api2.mubu.com/v3/document_image/95e990c2-5f9a-44cb-aba6-d26d19a0d8d2-14899999.jpg)

  - 基于message filter和pipe：一个message先经过outcoming再经过incoming

    - incoming pipe：message在输入server之前的处理，比如查看授权等![img](https://api2.mubu.com/v3/document_image/f3c660e4-91a9-4ec4-bdb5-1176984d1ac3-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/ec736a24-c336-4c76-ba51-b1129e223f69-14899999.jpg)

    - outcoming pipe：message从client输出之后处理，比如写到日志等![img](https://api2.mubu.com/v3/document_image/970c6ef7-f620-4804-8f8e-d3e30178e8a3-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/9315780b-0a53-4ca6-897f-18fdfb38c0f1-14899999.jpg)

  - Module是一组handler，以.mar结尾的文件，model can be engaged to service by deployment descriptor

- Top-down：

  -  webservice development with Axis:通过wsdl生成java类和xml，实现逻辑功能并部署到服务器上![img](https://api2.mubu.com/v3/document_image/0018309a-7691-40d8-985e-e9f697283bb8-14899999.jpg)

  - Client development![img](https://api2.mubu.com/v3/document_image/8595a371-ae94-4043-9018-752538f534c1-14899999.jpg)

  - summary![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ca7a3cd3-3395-4376-a778-44c0f7a704c2-14899999.jpg)