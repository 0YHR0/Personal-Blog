---
title: Ch08 XML and namespace
date: 2022-01-03
tags:
 - Service
 - Service Computing
categories:
 - Service Computing


---

# Ch08 XML and namespace

- Namespace：A collection of  names identified by a URI(但是不一定是在此定义的)

  ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e49879b7-0912-4ec9-9215-79d7e1db8297-14899999.jpg)![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/c66852df-95f2-4fcc-a442-d68d9697d561-14899999.jpg)

  

  - Qualified name（Qname）：![img](https://api2.mubu.com/v3/document_image/b74ad878-e525-4b0e-9344-c0ac4c1c61d9-14899999.jpg)![img](https://api2.mubu.com/v3/document_image/fd17022a-2223-49b2-8a55-a7e6df52b9de-14899999.jpg)

  - 默认namespace：可以在任意位置被定义![img](https://api2.mubu.com/v3/document_image/419f365e-d481-4e0b-8340-09ca86842439-14899999.jpg)

  - XSD是xml schema，是用来取代dtd的东西，可以用来验证一个xml是否符合规范https://blog.csdn.net/freelk/article/details/80869439

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/fa762c4d-209e-4b42-911a-136ef9cc8698-14899999.jpg)

    - xmls:xs定义了这个schema的namespace，前缀为xs

    - targetNamespace定义了这个schema用来验证哪个namespace下的东西，也就是说在验证xml的时候，xml中的schemaLocation第一个参数必须和targetNamespace一样才可以

    - 例子schema：Pers.xsd![img](https://api2.mubu.com/v3/document_image/87da733b-4462-49ca-980a-8e464e7fc8b6-14899999.jpg)

    - 例子xml引用上面的schema：

      ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/27cbb406-4081-4b56-ad42-377719dbe7ce-14899999.jpg)

      - xmlns：xsi=‘...’ 是固定的，因为这是由WWW机构定义的namespace，这个namespace中规定了schemaLocation怎么写, 意思是使用Pers.xsd来验.../Person这个namespace下的东西

- 由于XML非常冗长，在传输（Serialize the structured data）的时候可以用一定的策略：

  - 有多种传输数据的方式

    ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a7b1424a-9004-4b15-b2b9-cce0524e91f2-14899999.jpg)

    - 1. FO存储了数据格式，ID是数据的id，LE是长度，value是真正的数据

    - XML schema可以作为一个序列化的模板（Serialization Template），一个factory，一个Metamodel。

      ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9fa561f1-fc79-438f-80f0-b9b3e6e5a1d6-14899999.jpg)

      - 整个树叫Info set

      - Node叫info item

      - xml文档是一棵树

        ![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a0630ceb-ca16-4a58-b020-19ef018889cb-14899999.jpg)

        - 灰色虚线的是attribute

      - 可以用XPATH来找到某个元素![img](https://api2.mubu.com/v3/document_image/1328ac5b-5b43-4772-bf0c-e716527b2a51-14899999.jpg)

  - 也可以用XML schema来定义JSON，yaml的格式，也就是产生各种格式的xml schema的instance