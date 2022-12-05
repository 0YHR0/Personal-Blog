---
title: Ch07 Dynamic pages
date: 2022-01-02
tags:
 - Service
 - Service Computing
categories:
 - Service Computing

---

# Ch07 Dynamic pages

- 一个对servlet的请求映射成一条JVM里面的线程
- Cookie没有安全问题，因为它不会撑爆你的硬盘，也不能执行代码

  - 但是有隐私问题，用户不希望被server记录下来自己干了什么，也不希望其他网站share cookies

  - 用户可以选择禁用cookie，这时候为了追踪session可以在url中附带信息，但是一旦用户离开就没有了

  - 也可以用form中的hidden fields![img](https://api2.mubu.com/v3/document_image/3a43bb47-6af1-41e5-8353-5bdee852e915-14899999.jpg)

  - 设置cookie![img](https://api2.mubu.com/v3/document_image/fc196f3d-ad71-47dc-9afa-6149362ccd54-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/d83f8100-4b00-4d9c-862d-292479dd3b7e-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/f9f4078d-cf62-48fd-afb2-07493cd0aca8-14899999.jpg)
- JSP：

  - 单行表达式：![img](https://api2.mubu.com/v3/document_image/e79cb870-e0a7-4ea7-a938-30555fb216b1-14899999.jpg)

  - 多行：![img](https://api2.mubu.com/v3/document_image/b5a9bb99-d90c-4907-95fa-b42855e392ee-14899999.jpg)

  - 在jsp中，可以直接用out和request变量：![img](https://api2.mubu.com/v3/document_image/dd862963-82c2-4f60-a7e2-2ef90edf140a-14899999.jpg)

  - 静态包含：不会解析jsp代码![img](https://api2.mubu.com/v3/document_image/da76734e-55df-4b0f-99b7-0fc38e4d26a4-14899999.jpg)

  - 动态包含：会解析jsp代码![img](https://api2.mubu.com/v3/document_image/f6a5b0eb-589a-4590-a869-2c788263be53-14899999.jpg)

  - 可以引入tag library来实现某些功能![img](https://api2.mubu.com/v3/document_image/460eec15-c47f-4505-a1bb-fc21ee88b83a-14899999.jpg)
- Load balancing

  - Host：IP地址

  - service：IP：port

  - Cluster：Collection of similar services

  - Virtual server: A cluster represented as a single service
    - 用一个IP:PORT来代表多个IP:PORT。这个IP：port就是load balancer提供的

  - 例子：![img](https://api2.mubu.com/v3/document_image/59a696eb-8194-43c7-88b6-8cdf3b1cb039-14899999.jpg)

  - 过程：![img](https://api2.mubu.com/v3/document_image/8c309ded-df1e-41c2-ba5b-ccd4f5e556d3-14899999.jpg)