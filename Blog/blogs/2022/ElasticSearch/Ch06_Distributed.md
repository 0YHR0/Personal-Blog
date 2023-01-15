---
title: Ch06 Distributed
date: 2023-01-15
tags:
 - ElasticSearch
 - ES
categories:
 - ElasticSearch
---


# Distributed



## 数据同步

![image-20230115113238606](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113238606.png)

+ 方案1：![image-20230115113448589](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113448589.png)
+ 方案2：![image-20230115113520412](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113520412.png)
+ 方案3：![image-20230115113749715](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113749715.png)
+ ![image-20230115113914462](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113914462.png)



![image-20230115122007225](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115122007225.png)

+ 声明队列交换机![image-20230115122644192](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115122644192.png)
+ 发送消息：由于把整个hotel对象发到消息队列里面太占内存了，所以只发id，根据id到mysql查询![image-20230115123013530](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115123013530.png)





## 集群

![image-20230115124512942](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115124512942.png)



```yml
version: '2.2'
services:
  es01:
    image: elasticsearch:7.12.1
    container_name: es01
    environment:
      - node.name=es01
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es02,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data01:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - elastic
  es02:
    image: elasticsearch:7.12.1
    container_name: es02
    environment:
      - node.name=es02
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data02:/usr/share/elasticsearch/data
    ports:
      - 9201:9200
    networks:
      - elastic
  es03:
    image: elasticsearch:7.12.1
    container_name: es03
    environment:
      - node.name=es03
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es02
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data03:/usr/share/elasticsearch/data
    networks:
      - elastic
    ports:
      - 9202:9200
volumes:
  data01:
    driver: local
  data02:
    driver: local
  data03:
    driver: local

networks:
  elastic:
    driver: bridge
```

![image-20230115125122769](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115125122769.png)

+ 监控集群状态https://github.com/lmenezes/cerebro![image-20230115125802681](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115125802681.png)
+ 创建索引库时集群分片![image-20230115130026581](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130026581.png)
+ 可以在上面more的地方创建索引库并设置分片![image-20230115130152938](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130152938.png)
+ 节点角色![image-20230115130516690](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130516690.png)
+ 节点选择![image-20230115130826653](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130826653.png)



### 脑裂问题

![image-20230115131137586](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115131137586.png)

+ 一个集群由于网络阻塞出现了两个主节点，在网络恢复之后，会出现两个主节点



## 分片

![image-20230115171445641](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115171445641.png)

+ 新增数据（左边是协调节点）![image-20230115171637136](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115171637136.png)
+ 查询数据![image-20230115173333625](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115173333625.png)



## 故障转移

![image-20230115173602331](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115173602331.png)

![image-20230115173845491](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115173845491.png)