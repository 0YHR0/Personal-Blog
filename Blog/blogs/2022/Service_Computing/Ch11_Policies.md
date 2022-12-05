---
title: Ch11 Policies
date: 2022-01-20
tags:
 - Service
 - Service Computing
categories:
 - Service Computing





---

# Ch11 Policies

- Policy：requestor说我有什么条件，service说我需要什么条件才能提供服务，再由中间机构选择https://blog.csdn.net/yuwenruli/article/details/6675444

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ed56e6e1-45a5-4a07-809a-85c893405547-14899999.jpg)

  - ![img](https://api2.mubu.com/v3/document_image/9ae09dae-88c8-497e-8497-f8389f5d9db0-14899999.jpg)

- 重要！policy what the quality of the service(QOS) ensured![img](https://api2.mubu.com/v3/document_image/2d3fe7db-e916-4bd6-9e6f-3c637df30edf-14899999.jpg)

- ![img](https://api2.mubu.com/v3/document_image/4b5a7fbf-9439-4efd-8f4a-3b159f8823f2-14899999.jpg)

- 例子：![img](https://api2.mubu.com/v3/document_image/e68f5c8f-31e5-40cf-af7e-be3be0b26909-14899999.jpg)

- Policy是一些Policy alternative，它可以包含0个或多个policy assertion，用户可以选择一个policy alternative，但是必须满足里面的所有条件才能享受服务

  - vocabulary of policy是policy中所有的assertion types

  - vocabulary of policy alternative是policy alternative中所有的assertion types

  - 不能直接在policy中写assertion，只能写在其中的policy alternative中

- Policy assertion是一个单一的要求

- Policy assertion type是 policy assertion的一个抽象，一类policy

  - Policy assertion type只能识别Qname，就是namespace：name，所以以下两个是相同的![img](https://api2.mubu.com/v3/document_image/a7d52e71-672f-4f8c-93fc-d9f4ea16a10f-14899999.jpg)

  - 只有在assertion里面的policy expression才会被识别，所以以下灰色的不会被识别，<fl:PaymentMethod>是一个assertion![img](https://api2.mubu.com/v3/document_image/95cc44d7-848b-44e1-9659-9c8e75e6e73f-14899999.jpg)

- Policy vocabulary是在一个policy中Policy assertion type的集合![img](https://api2.mubu.com/v3/document_image/9277f7ec-338e-42c9-98ca-197e825552dd-14899999.jpg)

- normal form的policy格式：第一个元素必须是ExactlyOne，不能引用别的

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0f5c4966-651d-45bb-95de-572b34a6be25-14899999.jpg)

  - 例子：![img](https://api2.mubu.com/v3/document_image/8b950e8c-6bc8-4491-9e2c-eb55a049fb25-14899999.jpg)

- 可以在一个policy中include其他的policy;

  - policy可以用name来标识他的uri![img](https://api2.mubu.com/v3/document_image/3b6da296-8170-4392-aa77-7f849047c9ba-14899999.jpg)

  - 用reference URI来引用![img](https://api2.mubu.com/v3/document_image/b39be4fe-b054-46d5-98fb-33c6403e5a10-14899999.jpg)

  - 引入后，会变成<wsp:All>，其中的child和引入的一样，不能自己引用自己

  - 例子：在同一个xml文档中用id表示并引用policy：![img](https://api2.mubu.com/v3/document_image/808d810b-f971-4b2d-8e7b-1565130938bd-14899999.jpg)

  - 一个assertion中，只有直系child的第一个policy才生效![img](https://api2.mubu.com/v3/document_image/8b544f1f-ebc7-4d86-9b0a-f0880ed1b334-14899999.jpg)

- Compact form的policy格式：<wsp:policy>==<wsp:All>

  - assertion默认是都要实现的，但是也可以用Optional属性表示某一个assertion可以是可选的，可实现也可以不实现![img](https://api2.mubu.com/v3/document_image/d3cdcdb6-b99a-4713-b590-d6c4ed3b1f9e-14899999.jpg)

  - 一样的意思，compact form和normal form的实现区别：![img](https://api2.mubu.com/v3/document_image/4b8ed732-34d7-4d4a-882d-525da0ec4517-14899999.jpg)

  - 第一个表示所有都行，第二个表示所有都不行![img](https://api2.mubu.com/v3/document_image/6a8a85cb-c6ec-4874-97df-0e9a771e8f89-14899999.jpg)

  - 交换律：assertion没有顺序，可以随便交换

  - 结合律：![img](https://api2.mubu.com/v3/document_image/7006e579-9680-44d6-b56e-e4b2fd480e97-14899999.jpg)

  - All中如果是空的，那么这行等于没写![img](https://api2.mubu.com/v3/document_image/f476551d-e8ad-4986-9e05-4cd6d3771192-14899999.jpg)

  - 一样的嵌套也可以化简：![img](https://api2.mubu.com/v3/document_image/fb4630b2-4ddc-4565-8d3a-9345fe03d197-14899999.jpg)

  - 分配律：

    <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b30f83af-35ce-4727-a0cf-673b60762392-14899999.jpg" alt="img" style="zoom: 25%;" /><img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9f0819e2-0471-4f28-9aa7-6370680a0cca-14899999.jpg" alt="img" style="zoom: 25%;" /><img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/171b0202-a031-4a0e-860c-e084cad53621-14899999.jpg" alt="img" style="zoom:25%;" />

    

    

    - 3表示不能访问，no interaction

  - compact form转换为normal form例子：

    - compact form：![img](https://api2.mubu.com/v3/document_image/82dd8348-06cd-4db1-831e-1106ee5171d3-14899999.jpg)

    - normal form：![img](https://api2.mubu.com/v3/document_image/7ecfb2a8-ac08-4fd7-9a1d-66f82b27ff6f-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/67f86bd5-e9e4-4ec7-954c-f15c3009ce4d-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/f4ab4c2a-0a9e-44f9-85d8-83960439dc50-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/5ac4ef6a-382c-46cb-aee1-7f511c634bec-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/cacef972-494f-4934-80a2-d149ea71bf61-14899999.jpg)

- Intersecting Policies：

  - 两个assertions是compatible的条件：![img](https://api2.mubu.com/v3/document_image/7511bba0-8dae-47c9-9d7b-20371c76be3a-14899999.jpg)

  - 两个policy alternative是compatible的条件：![img](https://api2.mubu.com/v3/document_image/5cf36e68-87ec-4108-9693-5cff0dcdd215-14899999.jpg)

  - 两个policy是compatible的条件：![img](https://api2.mubu.com/v3/document_image/99a2dbc0-903e-4a6a-a312-48956c5103a7-14899999.jpg)

  - WS-policy只关心Qname来判断是否是compatible的，而domain-specific compatibility processing关心Qname和attribute

  - Intersection类似assertion的交集，例子：只有compatible才能intersection![img](https://api2.mubu.com/v3/document_image/3cb4ab67-3753-4383-9f72-ce2eb7e1f6f3-14899999.jpg)

  - 最后的结果就叫Effective policy，他会被放在soap消息的头部，而且需要DSP![img](https://api2.mubu.com/v3/document_image/3f8d1363-bb6f-4ddf-b114-abcce2b06302-14899999.jpg)

  - 但是需要sementic post processing，否则如下图，单位不能又是美元又是欧元![img](https://api2.mubu.com/v3/document_image/dbb6606a-57cd-485d-bf8d-e9159e0058d6-14899999.jpg)

  - 例子：没有可以结合的就是incompatible![img](https://api2.mubu.com/v3/document_image/bb2fc5d2-78ce-498d-bedd-a02d62975958-14899999.jpg)

  - 例子：不用post processing，因为是不同的assertion![img](https://api2.mubu.com/v3/document_image/89ac81ff-b0a4-4072-9aa6-c092cc862b83-14899999.jpg)

- Policy attachment：把policy和subject绑定起来的方法：

  - 1. 在subject的定义中加上

  - 2. policy在外部定义，并external binding到subject上![img](https://api2.mubu.com/v3/document_image/7bec7cd2-6a90-4b6f-84cb-8c5bb0e33739-14899999.jpg)

  - 可以这样绑定，例子：![img](https://api2.mubu.com/v3/document_image/5f3c7760-29ce-4c4e-a94a-f1ac0ae20936-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/80dd76d5-fdce-48d8-96e0-9e31e44ba4e3-14899999.jpg)

  - merge：把多个policy合成一个，相当于笛卡尔积，规则如下：

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/870d8dbc-bff4-464c-98f0-aabd2c9d9dc6-14899999.jpg)

    - 例子：P1和P2 merge![img](https://api2.mubu.com/v3/document_image/54f34b23-cb2b-4826-ba57-e5a1c93c6031-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/19d43729-4d60-4604-854a-624b670b82c0-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/797f246a-f33c-49d1-a7ce-561569597d32-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/0b140331-64f7-4f9f-a340-da300a5fda62-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/f4665e4c-c37b-4995-a2f6-b8587b21715e-14899999.jpg)

  - port type的policy只可以是与binding无关的，因为port type是binding的接口

  - message的policy也只可以是与binding无关的，因为message可能被多个port type引用

  - input, output, fault也是

  - policy可以attach到wsdl文件中的port type， binding， port中

  - 在一个特定port的operation是两个policy的merge（port type：operation和binding：operation）

- 在一个已经部署好的资源上添加policy：用external attachments，不用改变他的definition，即开闭原则：以下文件就表示把一个policy attach到一个资源上，而不用改变原有代码

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/08a8ee7b-a4e5-4021-9241-18902f288926-14899999.jpg)

  - 例子：所有在这个uri下的文件都attach上这个policy![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/999750eb-8d8a-4ef8-999c-f5dfba5e8ff4-14899999.jpg)