---
title: Ch03_Deploy
date: 2021-03-01
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink
---

# Deploy

新建maven项目，引入依赖包

```xml
<dependencies>
    <dependency>
        <groupId>org.apache.flink</groupId>
        <artifactId>flink-java</artifactId>
        <version>1.10.1</version>
    </dependency>
    <dependency>
        <groupId>org.apache.flink</groupId>
        <artifactId>flink-streaming-java_2.12</artifactId>
        <version>1.10.1</version>
    </dependency>
</dependencies>
```

其中2.12为scala语言版本

因为flink运行时包中的akka的底层为scala（高并发处理）

spark的底层也是scala

所以需要指定scala版本