---
title: Ch00 Process Models
date: 2022-12-17
tags:
 - RealTimeSE
categories:
 - RealTimeSE
---

# Process Models

- Process model is a policy and guide, it is a description of the development process.

- Waterfall model

  - classic: 只有正向箭头

  - feedback waterfall model: 有反馈，但是只反馈给上一级

  - ![img](https://api2.mubu.com/v3/document_image/2363ff85-8360-4ab2-bbd5-ee5a3671cb83-14899999.jpg)

  - 特点：清楚的分工，一致性和好的文档

  - 应用：参与复杂合同项目的多家公司

  - 缺点：

    - difficult to respond to changing requirements   

    - Intermediate results of no value to customer (nothing to run, to show)

    - Often delays and poor quality. Because first tangible results are only available with a successful test. This makes project management very difficult. 

- Evolutionary model

  - 特点：

    - 通常从原型开始，系统的新版本从原型开始迭代

    - Development cycle is continued until user acceptance is reached

    - 不是一个线性的过程，而是a sequence of development cycles

  - 应用：

    - Vague user requirements or insufficient / missing technical baseline

    - Systematic reuse if systems are integrated from existing components or COTS(Commercial-off-the-shelf) systems

  - 缺点：

    - Systems are often poorly structured because final vision/needs/architecture are not known and agreed upfront

    - Unclear upfront resource estimation and allocation

  - ![img](https://api2.mubu.com/v3/document_image/7f6c01cf-25f6-451f-b3c0-31da1ad53d39-14899999.jpg)

- Spiral model（是evolutionary model的一种，主要特点是多了完善的risk评估）

  - 特点：

    - 通常从原型开始，系统的版本从原型开始迭代

    - Risks are explicitly assessed and resolved throughout the process

  - 应用：

    - Unknown user requirements or insufficient / missing technical baseline

    - Systematic reuse if systems are integrated from existing components or COTS(Commercial-off-the-shelf) systems

  - 缺点：

    - Systems are often poorly structured because final vision / needs / architecture are notknown and agreed upfront

    - Unclear upfront resource estimation and allocation

  - ![img](https://api2.mubu.com/v3/document_image/00887c2e-55bf-4d5b-b9eb-aabd5a8f8e4f-14899999.jpg)

- Incremental model

  - 特点：

    - 增量开发，一点一点增加系统的功能和稳定性，让系统随时稳定运行

    - 在早期先把优先级最高的需求实现

    - 在一次（行）increment development中，需求是不变的，在开始时就固定，要增加需求要在下一次增量开发的时候才能加

  - 应用：

    - 易变的需求

    - 每次增量交付给用户，更好的实现项目控制

    - 敏捷开发

  - 缺点：

    - 最先开发的系统和服务会被测试多次

    - 一些敏捷开发不能用在复杂的系统和异地的团队

    - Often all principles of one methodology are used dogmatically

- IAS process model

  - ![img](https://api2.mubu.com/v3/document_image/101925e9-cb4e-47cf-8cec-50524ce44f8d-14899999.jpg)

  - Project Execution (PE):

    -  Software Development (SWD)

    - System Development (SD)

    - Concept Development (CD)depending on the process model class

  -  Quality Aussurance (QA): 

    - Testing the system and its components

    - Process inspection

  - Project Management (PM): 

    - Planning and control of the process

    - Definition of work packages and milestones

  - Configuration Management (CM):

    - Ensuring the clear identification of the products

    - Version management of documents and source code files

- 敏捷开发：https://blog.csdn.net/xiajun2356033/article/details/81513957

  - 迭代

  - Scrum

    - Product owner：需要有专业知识，判断可否实现

    - Scrum Master：Responsible formaking the process run smoothly, forremoving obstacles that impactproductivity, and for organizing andfacilitating the critical meetings.不需要有专业知识

    - Team:开发团队

- Validation: do the right thing(customer requirements)

- Verification: do things right