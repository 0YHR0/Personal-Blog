---
title: Ch03 System Analysis
date: 2022-12-25
tags:
 - RealTimeSE
categories:
 - RealTimeSE

---

# System Analysis

- Overall view![img](https://api2.mubu.com/v3/document_image/cd5dd42e-24db-461b-a63a-8a4eabdcc4f9-14899999.jpg)

- ![img](https://api2.mubu.com/v3/document_image/2f7a2427-b19f-4a73-9fdb-688c7ff25d1c-14899999.jpg)

- System analysis 的不同角度：![img](https://api2.mubu.com/v3/document_image/78d59eba-fc99-4a8f-9652-f30d731cc3f4-14899999.jpg)

- sysML:

  

  - Context model

    

    - Use case diagram(External perspective)![img](https://api2.mubu.com/v3/document_image/ac63f9a9-f7bc-4aa4-a0ca-fcce194318db-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/757f2a6f-c270-4092-ab82-bffd142ec848-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/ac3b6eee-a732-4435-a03a-b78df7e79b6d-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/8675ab3f-ed3f-4a06-834d-5dea1fd21d4f-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/bc492e69-d39c-428e-9bd3-c51dde5cf26d-14899999.jpg)

  - Behavior models

    

    - data-flow diagram (Behavioral perspective)![img](https://api2.mubu.com/v3/document_image/b4babf30-9c81-4c85-a788-3cce123759ed-14899999.jpg)

    - Activity diagrams: 横着的小长方形表示syncronize bars，只有所有输入都完成了才能输出 (Behavioral perspective)![img](https://api2.mubu.com/v3/document_image/ecd15916-2118-4cf6-a1f9-bfa22e11f972-14899999.jpg)

    - state machine models (Behavioral perspective)![img](https://api2.mubu.com/v3/document_image/f1e8b00b-2b41-4af4-b5f4-fc0c024f7528-14899999.jpg)

    - decision tables (Behavioral perspective)![img](https://api2.mubu.com/v3/document_image/8a8acc3c-e171-4c50-a3b7-a630f8c4699d-14899999.jpg)

    - sequence diagrams (Behavioral perspective)![img](https://api2.mubu.com/v3/document_image/820bacee-1c22-4e04-bda7-a4e897b1e3df-14899999.jpg)

  - Semantic Data Models (Structural perspective)

    

    - Entity-relationship diagram![img](https://api2.mubu.com/v3/document_image/8bc269e0-700c-4e14-842d-6efcba786e5f-14899999.jpg)

    - Data Dictionaries (Structural perspective),可以统一词汇![img](https://api2.mubu.com/v3/document_image/ee136f09-8acb-4b3f-ba35-af1e041d29f8-14899999.jpg)

    - Function Tree (Hierarchical Refinement, Structural persp.)![img](https://api2.mubu.com/v3/document_image/2a24b62c-601e-48f8-8ab5-9bfb13c46676-14899999.jpg)

    - Class diagram

      

      

      - Aggregation：整体没了部分还可以在,部分可以脱离整体存在![img](https://api2.mubu.com/v3/document_image/ca6dda8e-c507-4372-a7fb-6781e2eb47e4-14899999.jpg)

      - composition: 整体没了部分就没了![img](https://api2.mubu.com/v3/document_image/f7acb6e0-7310-42e8-84f3-d72cd80e8a95-14899999.jpg)

      - Inheritance![img](https://api2.mubu.com/v3/document_image/3c6d58ad-4633-4496-9638-8485ae7a0878-14899999.jpg)

  - Summary：![img](https://api2.mubu.com/v3/document_image/8d3447ca-b9af-4f7e-82aa-4fe6a53bd81f-14899999.jpg)

- Analysis Methods：

  - Test driven analysis

  - 安全分析![img](https://api2.mubu.com/v3/document_image/e52b17b5-fd87-4c8a-a190-1f5bc918ca01-14899999.jpg)

- Real-time analysis：

  

  - Analyze system interfaces（Understanding the environment）

  - Analyze safety requirements

  - Performance Analysis![img](https://api2.mubu.com/v3/document_image/747afa3e-c62e-4ac7-9dc7-1a616c432403-14899999.jpg)

  - Analyze temporal requirements: Real-time Scheduling Methods：

    - Preemptive：在执行前安排好顺序

    - Non-preemptive：根据一定的规则执行，如FIFO

    - Periodic：execute on a static timing, 如：根据timmer来执行

    - Aperiodic：如事件驱动![img](https://api2.mubu.com/v3/document_image/99a51625-5744-4529-abcf-5b5cf9a43ff1-14899999.jpg)

  - Analyze resources limitations：多个用户访问一个资源，会lock，所以要控制用户访问资源请求的数量