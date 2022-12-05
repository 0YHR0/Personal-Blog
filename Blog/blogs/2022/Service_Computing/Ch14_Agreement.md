---
title: Ch14 Agreement
date: 2022-01-30
tags:
 - Service
 - Service Computing
categories:
 - Service Computing
---

# Ch14 Agreement

- Protocal定义了coordinator 和 participants之间消息的传递（包括顺序）![img](https://api2.mubu.com/v3/document_image/7c82db06-784f-4208-bcac-07c274ec077d-14899999.jpg)

- agreement：达成共识，比如一个auction系统中，谁最后出价最高是需要达成共识的

  - 例子：比如在一个需要保证Acid的应用中，Cooordinator表示事务的实现细节，到底是回滚还是提交，Application只需要接受消息，事务成功或者失败![img](https://api2.mubu.com/v3/document_image/8219e3eb-f116-4cf5-b1fe-82080917c52f-14899999.jpg)

  - 例子：比如2PC时，需要所有节点达成共识才能最终提交![img](https://api2.mubu.com/v3/document_image/dd1b87ca-616c-4a89-9379-c5319932f3c4-14899999.jpg)

- Coordinator包含：

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/2992715a-4396-4f5e-8041-7c9608dc1dd3-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/5918cf8c-e300-4209-99da-0e1042029556-14899999.jpg)

  

  - Activation Service：用来开启一种需要达成共识的activity，会产生coordination context

  - Registration Service：用来注册或者记录共识的参与者

- 步骤：

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0fbd090c-16ab-4841-923d-c2a82a5516f4-14899999.jpg)

  - 1. 一个应用通过activation service开启了一个activity，返回一个coordination context（一般都是在消息的header中传递的），包含以下信息![img](https://api2.mubu.com/v3/document_image/ff47f1d3-dc70-4c31-a14d-f21e2445981d-14899999.jpg)

  - ​    2.应用通过其中的registeration service来与protocal的子集绑定，注册自己

- 实现：

  - 1. Coordinator给service发消息要求他们注册，以完成共同的任务，这样就可以管理这些service，比如让他们全部回滚![img](https://api2.mubu.com/v3/document_image/7dc2860d-fcc4-4662-a32f-c4019ddf9c40-14899999.jpg)

  - 2. service通过收到的消息中的registration service来注册自己，把自己的port和id和protocal传递给registration service，然后被返回一些coordinator的port，这样participant和coordinator就绑定到了一起![img](https://api2.mubu.com/v3/document_image/d9b48d83-c0c1-4a24-855c-216e09fab4d6-14899999.jpg)

- 例子：当然App2和DBMS也可以直接在coord1中注册

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/376c9f5c-cc4b-4388-93f6-9a4851aab44c-14899999.jpg)

  - App A1先发起了一个activity的请求给他的coordinator的Activation service，收到回复之后注册自己到‘completion’ protocal，并把回复和自己的消息一并发到A2，告诉A2你也必须要注册

  - App A2会在自己server的coordinator的Activation service注册自己到‘Volatile’ protocal，Coord2再把自己注册到Coord1中，这样Coord1就可以管理Coord2了(activity为C1)

- 把附带Coordination context 的message发给其他应用：

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/c4337e5d-67ac-4c9f-9c0a-31751d851dbc-14899999.jpg)

  - 向Activation service申请开启一个coordination activity![img](https://api2.mubu.com/v3/document_image/e066c3fc-cb86-4367-95e0-e86faaec7aa8-14899999.jpg)

  - Activation service返回response![img](https://api2.mubu.com/v3/document_image/2cfb6bca-3a8c-4380-b96c-229b72be45e4-14899999.jpg)

- Activation protocal

  - Asychronous：requester实现response，调用request![img](https://api2.mubu.com/v3/document_image/316035a0-678b-455a-aa83-ca3402275bed-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/9d8d5602-271a-4bee-8635-18e2ed2abd90-14899999.jpg)

  - Synchronize：requester不用实现任何port type![img](https://api2.mubu.com/v3/document_image/4cbb41fd-fc40-44ac-bb79-c4da10064886-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/ddba2b56-3267-49b2-be4b-1781356d7a9c-14899999.jpg)

- Register消息：request，要求传递participant的port type

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/97f0dc63-b0ab-4cc4-8083-e510a2fdc6e0-14899999.jpg)<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/19d74dde-5f5a-4416-91ea-12ba2bd7a11f-14899999.jpg" alt="img" style="zoom:25%;" />

  

  - response![img](https://api2.mubu.com/v3/document_image/04dfea50-dfca-4b44-95f2-7e90074017b9-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/05866ac8-da82-4425-981d-44738c8838eb-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/f4df3b2c-9f51-464b-86ea-a30525aa4e1f-14899999.jpg)

  - 同样也有synchronize类型![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a7035694-9f59-4547-9287-f4bc88cdc6da-14899999.jpg)