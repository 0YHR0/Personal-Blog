---
title: Ch01 Data warehouse Architecture
date: 2021-10-26
tags:
 - Data
 - Data warehouse
categories:
 - Data warehouse
---

# Data warehouse Architecture

+ 数据仓库架构图：![image-20220408231627254](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408231627254.png)

+ Basic Elements

  + Source Systems
    + Classification![image-20220408232007743](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232007743.png)
    + Data quality![image-20220408231944327](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408231944327.png)
    + Monitoring![image-20220408232055353](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232055353.png)
  + Data Staging Area
    + Extraction
    + Transformation
    + Load
  + Core Data Warehouse
  + Data Marts
    + 数据集市(Data Marts) 为了特定的应用目的或应用范围,而从数据仓库中独立出来的一部分数据,也可称为部门数据或主题数据(subject area)
    + Independent data marts
    + Dependent data marts![image-20220408232127245](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232127245.png)
  + End user data access
  + Data warehouse manager![image-20220408232240589](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232240589.png)
  + Meta data repository![image-20220408232303660](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232303660.png)
  + Operational Data Store![image-20220408232342356](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232342356.png)

+ Architecture:![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/c4d0568b-a707-403b-a9c3-8ab5f9349676-14899999.jpg)

  