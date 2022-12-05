---
title: Ch04 HTTP
date: 2021-12-28
tags:
 - Service
 - Service Computing
categories:
 - Service Computing

---

# Ch04 HTTP

## IP协议：一个传输数据包的协议

+ IP唯一标识一个机器，是一个逻辑上的概念，8位一段
  + IPV4: 32位二进制，用.隔开，如 127.0.0.1
  + IPV6：128位二进制，用：隔开 ，如 123:45:0:45:45:23:78:43:85:23:127:1:2:6:54:7
+ 通过ARP协议把IP地址映射到MAC地址
  + ARP数据包：把这个数据包发给其他所有的设备，目标IP的设备会返回自己的MAC地址，然后发送者再更新自己的路由表<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/77625ea2-32bd-45b3-92ec-a6cb42e71cf8-14899999.jpg" alt="img" style="zoom: 50%;" />
  + RARP协议：通过自己的mac地址请求一个IP地址![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ba1e8c65-65bf-4d6d-b491-886de22cf2cc-14899999.jpg)
+ ICMP协议：是附加在ip协议之上的，用来部分解决传输的可靠性
  + 附带failure message，如 超时，目标主机不可达等
  + 附带information message，如发送reply（用在ping中），记录发送和返回的时间，可以计算Round Trip Time
+ 负责数据包的分段，因为有些网络有最大数据包限制，不同的数据包可能沿着不同的链路传输
  + 数据包的组成：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/f22a9dc7-8cc9-4b2c-87c8-aec612d69e67-14899999.jpg)
    + 所有的数据包都是由header和payload组成的，payload中又用了另一层协议，层层封装
  + 路由表![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6ba681fd-e8bf-49d3-b2c3-92fccc520cf5-14899999.jpg)
    + 这是X的路由表，如果X想发数据包给F，那么可以沿着P6或者P5发出，再由D或者E查他的路由表来决定下一步往哪里发
    + 如果目的地不在路由表中，那么发给P9



## TCP: 解决Ip协议的缺陷

+ 可能产生丢包，重复包，包的顺序得不到保证
+ 使用了端口号，与机器上的一个进程所绑定
+ TCP建立连接，UDP不建立连接
+ repeater：中继器，用来连接两个相同结构的网络![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e99957a6-ffc5-44b1-a359-c8b2584f85e7-14899999.jpg)
+ Switch：交换机，可以用来连接两个不同结构的网络
+ Router：路由器，可以用来连接Internet



## DNS：顶级域名分为国家顶级域名和其他顶级域名

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/da3c5464-ae4c-44fe-aff2-d49059d9cee1-14899999.jpg)

+ DNS服务器是树形结构，查询不到就往上查![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b6a7444c-2a6d-47cb-a8c6-f8a769af4f4c-14899999.jpg)
+ DSA（Directory System Agent ）目录系统代理, 是指一种用于存储目录信息的数据库。该数据库采用分层格式，提供快速而高效的搜索功能
+ 目录用户代理（DUA：Directory User Agent）是用于访问一个或多个 DSA的用户接口程序![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a0416594-12f3-428d-a5b5-a5d204d25839-14899999.jpg)



### URI: 分为以下两类![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/bd322211-5860-42d8-97ce-9f1dc9535dd5-14899999.jpg)

+ URL: 资源位置
+ URN: 资源名，是稳定的，不变的
+ UNS是用来把URN转换成URL![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/eeb262db-87de-4093-9404-86dcea628eba-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/1787520d-994b-4df4-b96b-21d65b672d2e-14899999.jpg)



## HTTP: 

+ 端口号：80

+ 建立在TCP之上，是可靠的连接

+ http 1.0是短连接的，但是http 1.1是持久型连接，所以请求的发起和接受到的顺序必须是一样的，才能匹配![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/41703196-c1e7-43cc-9ada-a8672ad40585-14899999.jpg)

  ![image-20220410154831355](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410154831355.png)

+ 管道化连接，必须是幂等性请求才可以![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9458aced-1ac9-494b-b820-be79cb21f39f-14899999.jpg)

+ http携带的数据可以分段传输

+ **内容协商：一个请求的实例可能有多种表现形式，http可以协商自己需要哪种形式**![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/4d02936a-1682-4a3b-9260-a017685f8eac-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7c242178-42cb-4436-b9b9-8179f52baf28-14899999.jpg)

  + 图中为client driven内容协商，请求中表示自己喜欢的内容格式的权重，响应中server吧所有可能的内容都列出来
  + Server driven：Client告诉server我需要哪些格式的信息，server来判断并返回信息
    + 好处：只用发一次请求和一次响应
    + 坏处：可能不能满足客户端的预期
  + Client driven：Server把发送自己可以提供的格式的列表，用http响应值300标识
    + 好处：可以由客户端自由选择
    + 坏处：至少要发两次http请求
  + Http消息结构：
    + 请求行：由请求方法字段、URL字段和HTTP协议版本字段3个字段组成，它们用空格分隔。例如，GET /index.html HTTP/1.1
      + 请求方法Post：表示服务器上的程序要处理这些数据，比如提供服务
      + 请求方法Put：表示服务器上的资源要被更新，使用请求体中的数据更新服务器上的数据
      + **不能全用POST！！不用post更安全，用get等，并且post不是幂等性的，但是get是**![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/389ff483-6a73-4f7a-b15b-e579bacf169f-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/549e1ee5-96f4-45ea-b59f-5dd1863a7222-14899999.jpg)
        + 因为put等会改变服务器上的资源，所以not safe
      + 请求方法 Patch：允许部分更新某个entity，因为put默认会传送整个entity到服务器上，以下是有关幂等性的说法![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/41bbf0b7-1f75-4472-9be7-60a9d6798b76-14899999.jpg)
    + 请求头：有很多类型，如
      + http请求头：host是必须的![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/609bba9a-0ecb-4814-b4ac-b85237e126db-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/99427d7e-340d-4d15-af64-6f5df55a21fc-14899999.jpg)
        + 可以是条件request，比如我get消息，仅当这个消息在什么日期之后更新过
      + （常规http消息）general header：描述整个http请求![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/1480d22f-aea3-457e-ae19-2e5995041b3f-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/86b70f26-26f4-4cdb-a14b-70b5eb1cc550-14899999.jpg)
      + （常规http消息）entity header：描述请求体中的数据![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e56160b0-2e96-4d36-af2c-ad0ad9c97cf2-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/3d12592f-25bf-4eb5-967d-e7b6b0a0fe59-14899999.jpg)
    + 空行CRLF：告诉服务器请求头已经没有了
    + 请求体（可以没有）message body
  + http响应消息：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/cd1b9dcf-f29d-4ef6-aaf2-c98809f84d45-14899999.jpg)
    + 响应头：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/403b065d-5425-4c19-ab7f-8e3578fd1a76-14899999.jpg)
    + 响应状态码： ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a1cb4f48-d1fc-4bb4-816f-d257dd2d940f-14899999.jpg)
  + 例子：![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6d68fc13-8f99-416c-a564-24fbed725b19-14899999.jpg)

+ Http caching：目的是提高响应速度![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/372ecc97-b3b2-486e-b137-ecb02c215c4a-14899999.jpg)

  + Client side cache：比如浏览器的back按钮，内容是从cache中拿的，不是再向服务器发起请求
  + server side cache：服务器把内容从内存中拿出，不用再去访问磁盘, 也不用重新装配页面
  + seperate cache component：中间有一个cache，请求直接从cache中拿，不用访问server，比如代理服务器等

+ cache拓扑图

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/c33d3637-0ca4-4c9e-a438-5413054625fb-14899999.jpg)

  - reverse cache是用来减轻服务器压力的，不是所有的请求都会打到服务器上

+ cache需要保证自己正确，比如服务器上的内容改了之后，缓存中的内容就必须要马上改，不然会造成不一致

  ![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/8dae01a1-c594-4e56-801f-ea28439b31e8-14899999.jpg)

  - 一般使用时间戳和过期时间来实现

    - Expires头：可选的，表明过期的timestamp![img](https://api2.mubu.com/v3/document_image/f0042b6d-9523-4824-abac-afd0693cc18c-14899999.jpg)

    - Cache-Control头：Max-age：表示可以存活的时间，优先级比expires高![img](https://api2.mubu.com/v3/document_image/10dbd6c1-ecc1-444c-b610-d9a92b4176df-14899999.jpg)

    - 从cache返回的信息会附带age，表示这个信息在缓存中存在多久了![img](https://api2.mubu.com/v3/document_image/5facfbbc-52aa-4356-90c2-a78ec3685690-14899999.jpg)

    - 不缓存![img](https://api2.mubu.com/v3/document_image/27fa994c-ffed-4581-82db-314d8592e1f6-14899999.jpg)

    - 如果http响应没有附带任何过期日期，那么cache会根据‘Last modified’（必须附带的信息）来推测什么时候会过期，但是可能导致问题 sementic transparency

    - Date是origin服务器加的响应头，根据Date和max-age可以算出他是否过期了![img](https://api2.mubu.com/v3/document_image/8d4d30a0-9c58-4467-a4ac-8c3b2020d33d-14899999.jpg)

  - cache必须透明（sementic transparency），跟用户直接请求服务器一样 ![img](https://api2.mubu.com/v3/document_image/0b9b3ec1-9b2a-4df7-bd90-1974d8184cb5-14899999.jpg)

  - 但是不fresh的response并不是仅仅再请求一次，也可能是有效的--> HTTP validation model

  - HTTP validation model:

    - 当缓存中消息过期了，会把自己的validator发给server

      - server如果发现消息并没有更新，就返回304状态码，表示没有被改过

      - 如果改过，直接把新数据发过来，这样就可以节省带宽，防止一直请求

      - validator有Last-modified，ETag（表示内容的MD5值）等

      - 例子：![img](https://api2.mubu.com/v3/document_image/aff0e8af-8853-41e6-8ce9-e0954c98db41-14899999.jpg)

      - client和server都能对cache提出自己的要求，比如最大可接受的age是多少

+ Security：

  - 如果服务器上的资源是protected，那么请求会返回401 unauthorized

  - Basic方法：然后客户端在请求头部发送 Authorization：Base64([userid]:[password ])

    - realm表示的是受保护的资源

    - 例子：发送请求![img](https://api2.mubu.com/v3/document_image/597f77d6-dd3a-4f50-ac50-91d3b6feb6d0-14899999.jpg)

    - 例子：发送账号密码：![img](https://api2.mubu.com/v3/document_image/e6a086ae-8f69-48b4-9d30-92850324e565-14899999.jpg)

  - Digest方法：但是直接发送账号密码，即使是base64加密过的，也非常的不安全，所以使用了这种机制：

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ed2bf7ff-a6fd-438e-9524-b2e62e53c559-14899999.jpg)

    - 1. client使用自己的password加密server传来的challenge，再发给server

    - 2. server拿到这个消息后，使用这个client的password进行解密，成功就予以授权

    - 实现：使用nouce可以防止attacker之后再用这个窃听到的字符串连接，因为每次请求nonce都不一样![img](https://api2.mubu.com/v3/document_image/f7027ffc-9941-4583-86b2-3473fccd4871-14899999.jpg)

    - 例子：![img](https://api2.mubu.com/v3/document_image/f652218c-a4bf-42a5-b859-e0a29b0eeada-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/25f883fe-509e-40b3-8425-9cfd600d21ad-14899999.jpg)

  - 但是也会有MITM attack：attacker用伪造的basic challenge来获取client的账号密码![img](https://api2.mubu.com/v3/document_image/3fe2334c-ae54-491e-99ef-815009630f2a-14899999.jpg)

  - Bearer Authentication：使用第三方机构发的token来授权

    - Authentication：是识别某人是否真的是某人

    - Authorization：表示是否允许某人访问

    - 例子：![img](https://api2.mubu.com/v3/document_image/285a26da-4e56-4b54-ac63-fb8bd689bc48-14899999.jpg)

    - 有两种token：![img](https://api2.mubu.com/v3/document_image/7f1f2197-8313-4a91-8c8c-4728a8d3ed5f-14899999.jpg)

    - token可以使用请求头，请求体或者请求附带参数上（？xx=xx）

  - Authorization delegation：授权委托

    - 例子：你要用一个打印服务打印你在服务器上的一个照片，你在自己登录之后告诉服务器，允许打印服务获取我的照片![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a71c0643-24ac-48fb-b43b-183fa00eb005-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7c9a6c9a-9891-4bdd-9c61-1cc41e95c1be-14899999.jpg)

      - client就是打印服务，resource owner是我，resource server是存我照片的服务器，AS是第三方授权，比如在网购的时候使用谷歌账户登录

      - AS通常会返回一个refresh token给client，所以client可以直接自己请求access token，但是也可以随时被收回

      - 最终的决定权在resource server手中，即使拿到了access token也可以拒绝

  - OIDC（OpenId connect身份认证）是证明你是你自己，OAuth是授权对某个资源的访问![img](https://api2.mubu.com/v3/document_image/6e7a11a5-f8d6-4b86-9445-5ac762c3e3c7-14899999.jpg)

+ Cookies

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/78109f8b-81e9-4063-b4e6-b524579fe2f5-14899999.jpg)

  - 由于http是没有状态的，也就是一个请求相对之前的请求是独立的，但是interaction是需要的，所以session存在

  - cookie也允许跨session边界保持状态，比如根据用户的点击来定制化用户看到的页面，用户的preference就可以存在cookie中

  - 设置cookie的方法：server发的响应中附带Set-Cookie响应头，client就存储这个cookie

  - 然后每次client发http请求的时候，都在请求头上带上cookie，server可以通过这个cookie找到对应的session

  - 图解：![img](https://api2.mubu.com/v3/document_image/d4593423-52d6-4c3c-8d68-3ad818cc91c5-14899999.jpg)

  - cookie包含的字段：![img](https://api2.mubu.com/v3/document_image/21827b94-b650-47c2-9ab1-6c105071b9dd-14899999.jpg)

+ Http2

  - Http2扩展了http1.1，加快了数据传输速度

  - 传输的不再是text而是binary二进制![img](https://api2.mubu.com/v3/document_image/05d9404e-b3fe-4770-9659-07b03cdddfaa-14899999.jpg)

  - headers被压缩（HPACK）

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/638edad5-82dc-4c16-aed2-b33102880e27-14899999.jpg)

    - 用Huffman编码压缩数据，1和7没有是因为在之前的frame中传输过了，但是每次传输index要保留

  - 可以通过一个tcp连接交换很多信息，domain sharding（服务器为了方式dos攻击，限制连接数量，所以资源会被放到不同的domain中）不再需要

  - http2传输

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/eef7d23c-82a3-4731-8129-ab9ac6d43e30-14899999.jpg)

    - +表示这是header的最后一个frame，把一个post请求拆成多个frame传输，注意大小写

