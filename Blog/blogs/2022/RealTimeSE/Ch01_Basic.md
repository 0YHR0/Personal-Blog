---
title: Ch01 Basic techniques
date: 2022-12-19
tags:
 - RealTimeSE
categories:
 - RealTimeSE

---

# Basic techniques





- Function Tree

  - 同一层的抽象程度必须一样

  - 只有技术密切相关的才能有一个共同的父亲

- Entity-Relationship Diagram（ERD）

  - Entity

  - Attribute![img](https://api2.mubu.com/v3/document_image/488117aa-067b-405d-8ba4-729e5e441b49-14899999.jpg)

  - Associations

  - Cardinalities![img](https://api2.mubu.com/v3/document_image/082c3aab-547d-4d76-a772-bacb25c25c4a-14899999.jpg)

- State-Machine

  - 输出取决于输入和状态![img](https://api2.mubu.com/v3/document_image/11e30d9d-d762-4034-ba2a-63792f1b701c-14899999.jpg)

  - 最终状态也不一定要有，如![img](https://api2.mubu.com/v3/document_image/3c14cf3b-594e-4d1d-9a3b-708dca1b8f97-14899999.jpg)

- Dicision table

  - 示意图：![img](https://api2.mubu.com/v3/document_image/78fbb6c7-d1c9-48ab-b141-ce0e7b7518da-14899999.jpg)

  - Redundancy

  - Contradiction

  - Completeness test

    - Number of theoretically possible cases = number of condition combinations

    - 计算有几种情况，表中列出了几种情况，并把没有的情况补齐