---
title: Ch02 Conceptual Data warehouse design
date: 2021-11-02
tags:
 - Data
 - Data warehouse
categories:
 - Data warehouse
---

# Conceptual Data warehouse design



## Data warehouse design process

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e104a620-00a9-48fd-8d22-5abef15e0133-14899999.jpg)

+ Requirements analysis
+ Conceptual design
+ Logical design
+ Physical design



### Multidimensional model：

+ 从三个维度看销量，每个维度又可以细分![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/293318e2-52c4-4534-995b-313882a6d09e-14899999.jpg)

+ DataCube![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/11db4ec2-bd76-48c6-ba00-19f6ad3e492f-14899999.jpg)

  + 一个n维的base cube叫做 base cuboid
  + 最上面的0-D cuboid，叫做 apex cuboid，有最高的总结度，如总销量
  + 图中的线称为lattice，构成了这个datacube
  + 图中越往下越多维，越详细
  + 在一个n维的base cube中一共有2的n次方个单元

  

### Basic Elements of a Conceptual Model：![image-20220408232907564](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232907564.png)

+ Fact data
+ Attributes
+ Qualities
+ Dimensions



### Conformed Dimensions

![image-20220408233000497](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233000497.png)



### Dimensional fact model（DFM）![image-20220408233533242](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233533242.png)

+ basic elements of a fact schema: f=(M,A,N,R,O,S)
+ quasi-tree
+ Facts and measures

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/528d8773-2884-4127-bc96-5ac512cfae0a-14899999.jpg" alt="image" style="zoom:50%;" />

+ Attributes and dimensions

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ff04f578-3421-48bc-8c98-62354c985882-14899999.jpg" alt="img" style="zoom: 33%;" />

+ attributes 分为dimensional和non-dimensional
+ 图中左边方框是一个Fact，例如sale
+ Hierarchies![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/92f794f1-3a2d-42f5-bf48-a928abd28da8-14899999.jpg)
+ Aggregation: 图中mj是method，di是dimension<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0b188699-48cd-4a7a-b1f9-163d70029e51-14899999.jpg" alt="img" style="zoom: 50%;" />
  + 图中如果sum操作不在可聚合的范围之内，那么就要连线（虚线），并且写上可聚合的操作
    + 如果连线上什么也没写，那么就表示不能sum 
  + 如果只有sum操作，那么不需要连线
  + 如果有包括sum的各种操作，那么在连线（虚线）上写上‘+’跟着其他聚合操作



### StarER

![image-20220408233559369](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233559369.png)



### UML Profile for Multidimensional Modelling

+ Three levels of detail
  + Model definition![image-20220408233625364](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233625364.png)
  + Star schema definition![image-20220408233634092](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233634092.png)![image-20220408233647249](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233647249.png)
  + Dimension definition  fact definition
    + Dimension definition![image-20220408233746241](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233746241.png)
      + Types of Classification Hierarchies
        + Strict Hierarchy
        + Non-strict Hierarchy
        + Completeness for drill down
        + Completeness for roll up![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7cf09208-5e10-457c-83e2-f846c801f2f5-14899999.jpg)
    + Fact definition
      + Degenerate fact-->辅助表示m：n关系
      + Degenerate dimension：没有维度表的维度![image-20220408233934945](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233934945.png)