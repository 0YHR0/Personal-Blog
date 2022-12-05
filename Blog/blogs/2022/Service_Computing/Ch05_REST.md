---
title: Ch05 REST
date: 2021-12-28
tags:
 - Service
 - Service Computing
categories:
 - Service Computing
---

# Ch05 REST

- REpresentational State Transfer

- Stateless：client和server interact的state存在server返回给client的信息中（比如cookie中），服务器不保存interaction的历史，所以不是一个特定的物理机器才能对client做出响应，server的扩展也变得十分容易

- Representational：来组Server的多种选项，选择权在Client

- Rest是一种archtecture style，跟http不一样，http是一个协议，一种技术

  - Email 的SMTP协议也可以用rest style

- http实现REST的目标：![img](https://api2.mubu.com/v3/document_image/fe5becb0-e2ac-4942-8bb9-953c7b990181-14899999.jpg)

- 结构![img](https://api2.mubu.com/v3/document_image/3b324bb6-ceae-4be5-8fa9-1c97108897e3-14899999.jpg)

- CRUD:

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/530b8b0e-ccaf-44b6-ae16-5692afb6f07d-14899999.jpg)

  - Example:![img](https://api2.mubu.com/v3/document_image/a41f0bb3-8d46-47a8-b0bb-bd85de34addc-14899999.jpg)

  - POST:![img](https://api2.mubu.com/v3/document_image/df951304-c3dc-497c-9b71-d60c9bd1132e-14899999.jpg)

  - GET:![img](https://api2.mubu.com/v3/document_image/4f3724b2-4900-4bda-aea1-f909db3383c9-14899999.jpg)

  - DELETE:![img](https://api2.mubu.com/v3/document_image/c73b7f97-db59-4f5a-bc8c-d3cf2a8c7512-14899999.jpg)

  - PUT:![img](https://api2.mubu.com/v3/document_image/6a5e81b3-91a7-429a-9548-bd99c216b844-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/a9882b7f-8290-4fd3-a44f-29cefca7dde1-14899999.jpg)

- 由于rest的含义大家都明白，所以传输中的消息是高可见的（通过URL就可以知道），http中间经过的component都会知道request/response了什么

- 什么时候用rest，什么时候用soa（一般API都是用rest）![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b6034c87-f28e-4b61-a420-2e15adaf8cf1-14899999.jpg)

  - generic的意思是GET POST等等

  - custom的意思是实现一些复杂的功能

- Link（HATEOAS）：

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e57145ba-6924-4714-bb43-77dd95b800c7-14899999.jpg)

  - example：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/c0aa6500-3144-461b-9b93-82f98b045e30-14899999.jpg)

    

    - get请求返回的内容中有link，link中的rel字段表示我要发POST请求到href中，来cancel order

  - link也可以写在header里面，因为body里面的内容不方便解析

  - Client可以用rel对href的内容进行查询可以做哪些操作，服务器返回响应可以做的操作，client在对此选择

- 当有long running request的时候，比如POST 或者DELETE。服务器不可能执行完之后才返回结果，这样会让客户端一直等待，所以就用状态码202表示accept（表示我已经接受了你的请求，但是处理这个请求还需要时间）并且返回一个task对象（由Content-Location或者link实现，指向task的位置）让客户端可以追踪进度（现在的状态和预计完成时间）

  - 当client用GET请求查询这个对象的时候，返回值如果是200，并不代表请求处理完成了，只是返回完成进度

  - 返回值如果是303，则表示这个请求已经成功被执行了，并且Location返回被执行请求的资源，Content-Location返回的是task对象的位置

  - 例子：第一次提交请求![img](https://api2.mubu.com/v3/document_image/9109dc8a-af16-4f7f-a2d7-8a3d06d99dab-14899999.jpg)

  - 例子：查询状态![img](https://api2.mubu.com/v3/document_image/a51b0fa5-535b-435b-8d23-5a5a0afe89a7-14899999.jpg)

  - 例子：执行完成之后：![img](https://api2.mubu.com/v3/document_image/a8304a78-6ecd-4803-b0d1-c6664abcf76d-14899999.jpg)

  - 例子：执行失败：![img](https://api2.mubu.com/v3/document_image/16944ea5-c69a-4ecf-ab04-70b6fcc163be-14899999.jpg)

- Http返回值200和204（no content）的区别![img](https://api2.mubu.com/v3/document_image/16ddceeb-ce76-49d6-b657-489b9bdf507b-14899999.jpg)

- 服务器的Resource types：

  - Atomic resources：在传输过程中作为一个整体传输，比如entity

  - Collection resource：resource的集合

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/1d555c8e-2eb2-4d1f-83f1-6a30ead72f13-14899999.jpg)

    - page可以这样实现，不用一次传输所有的数据![img](https://api2.mubu.com/v3/document_image/a66ccf40-61c3-485c-8b0f-4e65976686c7-14899999.jpg)

    - 对搜索的优化：![img](https://api2.mubu.com/v3/document_image/e415e014-ef6c-42b3-b334-ec70b04b4518-14899999.jpg)

    - 批量处理：不用对每个resource发送clean：![img](https://api2.mubu.com/v3/document_image/3ffd2a6d-a110-48f0-a76b-674ef7ad6081-14899999.jpg)

  - Composite resource![img](https://api2.mubu.com/v3/document_image/80b0f595-647f-40b8-b574-b32d5976bcf4-14899999.jpg)

  - Controller resource：实现事务，部分update

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d6bd50ff-5368-4897-b031-a23d16e24b3b-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/72b0620c-c344-49c5-be19-07a206dd8d09-14899999.jpg)

    

    - 例子-1：projectArchiver是一段代码，实现事务![img](https://api2.mubu.com/v3/document_image/c41f3c2d-ba3c-4a2f-a457-db5e2823895f-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/20bcfe5c-201f-46b8-b0bf-84a95b256a43-14899999.jpg)

    - 例子-2：部分update![img](https://api2.mubu.com/v3/document_image/b6108e66-a74e-468b-8ca5-77e1d76a0801-14899999.jpg)

  - Processing Function resource：不对资源做任何操作

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ebe289e9-9b4a-45ce-b86c-e7b4e0669bb4-14899999.jpg)

    - 可以用之前的long running![img](https://api2.mubu.com/v3/document_image/d744d973-8bbb-486d-9f94-0a772d10d4fe-14899999.jpg)

- Error信息应该meaningful![img](https://api2.mubu.com/v3/document_image/1fb5216e-33ce-4651-a014-87a2f1f9ede7-14899999.jpg)

- URI命名

  - 在URI中，尽量用’-‘，不要用’_‘和驼峰命名

    - atomic resource尽量用单数名词

    - collection resource 尽量用复数名词

  - Matrix 参数 和 Query 参数

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/885e155d-51ae-42d4-b8aa-c5bd2e221d1e-14899999.jpg)

    - 多个参数的情况：![img](https://api2.mubu.com/v3/document_image/2f2df14b-6ff5-4fe7-9df2-cfa05832df12-14899999.jpg)

    - 在uri中传参数![img](https://api2.mubu.com/v3/document_image/9a91ed45-9ce6-4025-a92c-271a91759d8e-14899999.jpg)

- 设计interaction的一些pattern：

  - GET DELETE PUT是幂等性的，但是POST不是

  - POST和GET/PUT的优劣性

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/fc31fdb4-45e3-4490-afe5-f9b4a96bc83d-14899999.jpg)

    - post由于不是幂等性，由于网络原因可能不知道服务器上更新了没

    - GET/PUT由于要发多个请求，请求处理的顺序也是不同的，所以可能会发生覆盖写的问题，即同步性问题

      - Pessimistic悲观并发控制：当冲突多的时候，可以用lock来解决

      - Optimistic乐观并发控制：当冲突少的时候，可以用undo/retry

        - Etag（相当于版本号）：可以用Etag一不一样来判断修改前和修改后的资源改变了没有，然后用If-Match匹配

        - 例子：在只有在Etag匹配的时候才进行更新![img](https://api2.mubu.com/v3/document_image/85a1a7f1-df69-4518-b782-3c916c42e476-14899999.jpg)

  - 创建资源的问题：

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/aff578dc-f9b3-4709-a091-b6ad5696d581-14899999.jpg)

    - POST：创建一个全局唯一的URI交给了Server，因为POST不用指定创建文件位置，但是可能由于网络原因收不到response，并且不是幂等性的，所以不安全

    - PUT：是幂等性的，但是client必须指定创建文件位置，对于client来说不知道哪些位置已经被使用过了

    - POST&PUT: 使用post提交空的body，来获取server分配的一个URI，再用PUT往里面存资源![img](https://api2.mubu.com/v3/document_image/1349768e-d719-4918-91a5-427676697456-14899999.jpg)

  - 在升级API的时候必须要支持之前的版本，因为API的使用者不一定会升级代码

    - 一般都是最新版本加之前一个版本

    - REST中，版本声明只有在改变的function上加，而不是在所有的API中的function中加

      ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a1b1e73d-aca5-474b-873b-ee74882cf894-14899999.jpg)

      - 比如API中有5个函数，f1在下一个版本改变过了，那么只要在f1上标识新版本就可以

      - 但是这样，在一个API中会有mixed versions of functions

      - 所以一般在所有的function上加

    - Semantic versioning：版本号的意思：V.R.P

      - V: version，删除了一些参数，或者多了一些必填的参数，用户必须要升级代码才可以用

      - R: release，多了一些可选的参数，但是原来的参数还支持，用户还是可以继续用之前的function

      - P: patch，比如修复了一个函数中的bug，但是没有改变他的用法，比如输入输出，用户感知不到，用户还是可以继续用之前的function

      - 比如 {host}/1.3.17/projects/...(一般都用这种方式)

      - 例子：也在accept中可以设置 MIME ![img](https://api2.mubu.com/v3/document_image/22427a5a-de36-4391-a88b-9d47b2bd156b-14899999.jpg)

- ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a3e0e2bd-596a-4924-8d61-56530003d4ac-14899999.jpg)