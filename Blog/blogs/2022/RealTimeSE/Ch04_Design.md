---
title: Ch04 Software Design
date: 2022-12-27
tags:
 - RealTimeSE
categories:
 - RealTimeSE

---

# Software Design



- Basic Principles of the Design

  

  - 从system model出发，设计 system architecture 和 specific system components

  - system --> subsystems + interplay  --> components + interfaces 

  - System analysis to system design![img](https://api2.mubu.com/v3/document_image/cd6df951-7095-42d6-90c0-2ce851d67439-14899999.jpg)

- System architecture: A system architecture describes the structure of the system by means of software components and the relationships(events等) amongst each other.

  

  - 设计需要考虑的标准![img](https://api2.mubu.com/v3/document_image/5b1fcee5-f7e3-497b-a191-1a97b2cc8ac6-14899999.jpg)

  - call return pattern![img](https://api2.mubu.com/v3/document_image/e2c753c5-0223-4b3c-bd50-bd11d94e4cea-14899999.jpg)

  - pipes and filter Architectures：支持复用，并发，易维护

    

    - pipe 是连接两个方块的线

    - filter是方块

  - controller控制板块![img](https://api2.mubu.com/v3/document_image/365fb52c-b4ba-439e-b27d-3df4c46039c8-14899999.jpg)

  - Service Oriented Architecture（SOA）:Architectural style that for software design where services are provided to other componentsthrough a communication protocol over a network.

    - 更好的复用

    - 统一的接口标准

    - 可移植性强，可以跨平台调用

    - Service： A service is a discrete unit of functionality that can be accessed remotely and acted upon and updated independently, such as retrieving a location information online. ![img](https://api2.mubu.com/v3/document_image/111347e4-4ded-41ba-a7a1-f1a00f80d22f-14899999.jpg)

    - Evaluation![img](https://api2.mubu.com/v3/document_image/affbf08d-8aa1-47f2-a64f-0ebe7b9474c2-14899999.jpg)

  - Multi-tier Architectures多层架构：

    

    - 例如: IOT三层架构![img](https://api2.mubu.com/v3/document_image/75ad932e-66e0-45ca-bc02-017fefb0a1de-14899999.jpg)

  - MVC架构：![img](https://api2.mubu.com/v3/document_image/f1a9817e-48fa-422e-aadc-1e90678b0084-14899999.jpg)

- Analysis the system archtecture:

  - 从每个stakeholder的角度，分析scenarios

  - SAAM方法: 想各种scenarios，并排优先级，分为直接或者间接，分别评估![img](https://api2.mubu.com/v3/document_image/29eaacd5-5e85-4d46-a24c-d743b38dbbd8-14899999.jpg)

  - ATAM方法：注意analysis的输入输出![img](https://api2.mubu.com/v3/document_image/1952ce5e-e130-4ff4-9c01-ebe700cd6535-14899999.jpg)

- Design principles：

  - module：可以独立测试，不关心其中的具体实现的模块，如 class, component, library

  - 在设计module的时候，要权衡耦合性，复杂性和module的数量![img](https://api2.mubu.com/v3/document_image/2389f753-3c6d-46f9-a381-760d2c2dfd35-14899999.jpg)

  - analysis model --> design model![img](https://api2.mubu.com/v3/document_image/4f62a30f-8fb4-45e2-bc4b-f917a371a3cd-14899999.jpg)

  - System of Systems

- real time：

  

  - Real-time Design Patterns：

    - Concurrency Patterns：control and scheduling of the architectural elements 

    - help to organize, manage, use and share finite resources in real-time andembedded systems

    - Watchdog Pattern：解决死锁等问题![img](https://api2.mubu.com/v3/document_image/7dbd6439-60c1-4b7d-ac45-f56232166fff-14899999.jpg)

    - Event-driven architectures

    - Time-driven architectures

- Safey：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/b6685988-4052-42a6-b012-8607e112eee4-14899999.jpg)