---
title: Ch09 SOAP
date: 2022-01-13
tags:
 - Service
 - Service Computing
 - SOAP
categories:
 - Service Computing



---

# Ch09 SOAP

- SOA架构：![img](https://api2.mubu.com/v3/document_image/9d1d7621-bf77-46e0-97af-36e6dc879731-14899999.jpg)

- ![img](https://api2.mubu.com/v3/document_image/03de4736-2bfa-4bc8-92a2-2be029be47f8-14899999.jpg)

- SOAP是一种基于xml的消息结构，是stateless的，而且是单向的，不像http有request和response

  - 是有header和body组成的![img](https://api2.mubu.com/v3/document_image/bf77a69c-61e1-4df9-af98-25e0ed7e686d-14899999.jpg)

  - SOAP不是依赖一个传输协议的，不像rest依赖于http或者https![img](https://api2.mubu.com/v3/document_image/0db39fa6-f139-4fb8-900f-7cddfe03c586-14899999.jpg)

  - example：普通的传输，中间的node都能知道消息的内容，所以必须是可信任的

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/4c61b858-d531-4d44-b2ee-93737dd61ba1-14899999.jpg)

    - 但是soap规定, 中间的node只能知道特定的消息内容而不是整个消息![img](https://api2.mubu.com/v3/document_image/264161f5-c958-462c-824f-b6efeb1995b5-14899999.jpg)

    - 中间的node也可以加消息内容，比如发送的是邮编，但是收到的可以包括city name等等![img](https://api2.mubu.com/v3/document_image/2d745edb-8b69-4408-8e03-edf337488981-14899999.jpg)

  - SOAP的消息结构：

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/8df0f1c1-02e7-4f5b-a3d5-89fe9af6fbe0-14899999.jpg)

    - 通常header是给中间的node看的，而body是给最终收到消息的destination看的

    - 但是有时候中间的node也会改变body的内容，比如加密（intermediate用ultimate receiver的public key加密body，然后在body中告诉ultimate receiver，之后ultimate receiver就可以用自己的private key来解密）

    - destination也有时候会看header，比如消息的结构是怎么组织的

    - soap消息的 schema：header可以没有，但是body至少一个![img](https://api2.mubu.com/v3/document_image/d2046da1-cd5b-4d4f-bd5f-8a8161bde132-14899999.jpg)

    - header，body的内容可以来自任何的namespace，有一些通用的attributes![img](https://api2.mubu.com/v3/document_image/cd8758a4-936e-4e83-b71f-c6b6b96f1a46-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/8f8b71c0-1079-4bb9-8c52-7c75b692e886-14899999.jpg)

- Processing logic

  - attribute：Role定义了谁可以处理这个header

    - 可以自定义role，也可以使用SOAP中预先定义好的三种role

      - next表示所有的intermediate node可以处理

      - ultimateReceiver表示只有最终的节点可以处理（默认是这个）

    - node可以读取到所有的header来找到哪个header需要它处理

      - 如果‘mustUnderstand’字段是true，那么它must process这个header

      - 如果‘mustUnderstand’字段是false，那么它may process这个header

    - 例子：![img](https://api2.mubu.com/v3/document_image/31fa999e-94f4-4878-ad6e-32b643dec017-14899999.jpg)

  - 在一个node收到消息并且处理时候的逻辑（重要）

    - 1. 先知道自己的role是什么，比如我可以处理login和next

    - 2. 遍历所有的header，找到自己的目标header，也就是和自己的role对应的，并且这些header的‘mustUnderstand’是true

    - 3. 如果有header是这个node不能understand的，那么马上终止消息的传输，不能做下一步的处理

    - 4. 如果没有第三步的情况，那么处理header中的信息，如果是ultimate node，就处理body中的消息

    - 5. node也可以自己选择‘mustUnderstand’是false的header进行处理

    - 6. 在处理完之后，node会删除所有和自己的role所对应的header（默认）不管处理了没有他的信息

      - 也可以在处理完之后再把header加进去，做进一步的修改

      - 但是如果该relay参数是true，并且这个node没有处理他的信息，那么就必须把这个header加回去

    - 7. 如果一个node处理完之后message还需要进一步的处理，那么发送给下一个node![img](https://api2.mubu.com/v3/document_image/ddbf422f-08b3-4c6c-a200-674fcf8fad02-14899999.jpg)

  - 例子：![img](https://api2.mubu.com/v3/document_image/2fb36072-ba94-4727-bd0e-354146de1549-14899999.jpg)

- Document style message change：只是发送文件，接收者要自己寻找what to do

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/10fba75d-fe4c-44e3-9ad0-c07011f373a9-14899999.jpg)

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e88db7d7-83a7-4ba0-a607-1eb7bfe74056-14899999.jpg)

  

  - request和response可以用reference来标记匹配，比如response中包含了request的uuid

  - 例子：请求![img](https://api2.mubu.com/v3/document_image/68541d4e-38ec-47b1-824e-e298b403027b-14899999.jpg)

  - 例子：回复![img](https://api2.mubu.com/v3/document_image/00b866d4-b942-4670-bf99-d68c728dda06-14899999.jpg)

- RPC style message change

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ba3b03b5-e8ad-47a7-9ba9-6af2654a26e8-14899999.jpg)

  - 在payload中写清楚了要接受者做哪些操作，因为包含了method name

  - ！并不是实现了RPC调用，只是一种消息交换的方式（clearly specifies what to do）

  - 例子：请求![img](https://api2.mubu.com/v3/document_image/73206e36-1a3d-4356-a8b9-b5c2f7aaef00-14899999.jpg)

  - 例子：回复![img](https://api2.mubu.com/v3/document_image/60cc9fa5-a949-4169-94be-b41b0357c66f-14899999.jpg)

- SOAP binding

  - SOAP信息是基于xml的

  - protocol binding：描述了信息如何在下层的协议中传输(在传递的过程中可能会变)，其中规定了

    - 序列化规则![img](https://api2.mubu.com/v3/document_image/78e34845-0803-426e-9d55-5874c38dfb90-14899999.jpg)

    - 消息传递模式（RPC，message...）

      - Message exchange pattern：制定一个文件，大家都根据这个文件来处理信息![img](https://api2.mubu.com/v3/document_image/a12c7494-bfbb-497c-b5ab-de7e7d190b65-14899999.jpg)

      - 例子：![img](https://api2.mubu.com/v3/document_image/95ee5543-f9f1-44f7-9869-34e19d602fa4-14899999.jpg)

  - SOAP的三种用法：![img](https://api2.mubu.com/v3/document_image/241650cb-3627-4a7b-9b07-2d0aad8d6cc2-14899999.jpg)

- 通过http来传输soap message：

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/25b1e7e9-98b8-44d2-a52d-ce0e6aabc61c-14899999.jpg)

  - 例子：![img](https://api2.mubu.com/v3/document_image/58115d22-f3e9-41bf-badc-9c6509ec0018-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/00e276d3-4dfe-41bb-a477-365e77eab0a7-14899999.jpg)

  - SOAP也可以扩展![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/51b91a14-0225-4e5b-8015-bccfd10f6e7e-14899999.jpg)

- XOP：xml传输二进制文件

  - 比如图片：因为在传输的时候可能会有xml关键字，导致解析器解析错误，所以可以用Base64来编码![img](https://api2.mubu.com/v3/document_image/37dd6bc6-4d78-4870-abf2-ecb21174cf9e-14899999.jpg)

  - Base64

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/37ac1bbe-806b-4e51-b521-cf1c11ede6b8-14899999.jpg)

    - 有overhead，因为ASCII码是8位标识一个字符![img](https://api2.mubu.com/v3/document_image/8f7db353-8bb3-4fee-bfe3-87e21535e055-14899999.jpg)

  - Reliable messaging：

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/93a8e0a7-5a60-4cf8-90bf-5813b190596f-14899999.jpg)

    - model

      ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/53598a83-61d7-42c9-84af-a59f3a17a52d-14899999.jpg)

      - Fundamental Processing Model：每个消息都有一个uuid，接受消息一方必须在收到消息后发送ack，否则发送方会再次发送，并且规定最大发送次数

      - Persistence Model：发送方会把消息存储到磁盘上，直到

        - 1. 最终的接收人收到了消息

        - 2. 消息的存活时间到了

        - 3. 重传次数达到上限

      - Order model：每个message有一个编号，且以+1递增，当receiver收到消息后，会给sender发送ack，如果sender没有收到ack，则重传。Receiver会把控发送消息给app的顺序![img](https://api2.mubu.com/v3/document_image/27b6e4cb-242d-40c8-85e1-e3737aeb3698-14899999.jpg)

    - message structure:![img](https://api2.mubu.com/v3/document_image/14abd57c-55e5-45b6-95cd-c03b6d7a0c02-14899999.jpg)

- Addressing: 标记一个service

  - endpoint：一个service所在的具体位置，message发送的target

  - endpoint reference：如何找到合适的endpoint

    - 包含哪些元素：![img](https://api2.mubu.com/v3/document_image/c3b9fe29-00cd-4a3f-b70a-4a2da1bd35f0-14899999.jpg)

    - W3C合并了一些元素，叫做metadata![img](https://api2.mubu.com/v3/document_image/39e00ce2-5299-451c-939c-6b8c8f9a98f1-14899999.jpg)

    - 例子1：规定了服务的地址和接口的名称![img](https://api2.mubu.com/v3/document_image/13812f7d-871a-4166-998c-dfd7602e320a-14899999.jpg)

    - 例子2：规定了服务的地址和一些属性来标识唯一的资源![img](https://api2.mubu.com/v3/document_image/45ffdf32-7ef1-435c-b0bb-ee250ee8485d-14899999.jpg)

    - 例子3：address和servicename标识唯一一个service之后（Properties标识了唯一一个资源），还可以加上Parameters对它进一步说明![img](https://api2.mubu.com/v3/document_image/a2256923-c556-4cf7-bb69-34b80377fc82-14899999.jpg)

- 重要！！！Endpoint References

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6bf2a3e0-34e1-4240-bdd8-b5e81130d175-14899999.jpg)

  - address是用来识别一个container的，它可能有很多service

  - 端口和端口类型是用来唯一识别一个service，port-->binding-->port type

  - policies是用来表示在处理信息的时候的规则，比如要以事务来处理

  - Reference properties和parms是传到service里的参数，用来找到特定的资源