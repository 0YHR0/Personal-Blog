---
title: Ch04 DSL
date: 2022-12-24
tags:
 - ElasticSearch
 - ES
categories:
 - ElasticSearch
---

# DSL

![image-20230109173725339](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109173725339.png)



## query

+ 尽量把多个字段copy to到一个字段中，然后再查这个字段，比如：all

![image-20230109173855323](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109173855323.png)



### match

![image-20230109174537653](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109174537653.png)



### multi_match

![image-20230109174606139](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109174606139.png)



### term+range 

![image-20230109201823281](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109201823281.png)

![image-20230109201731269](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109201731269.png)





### geo查询

![image-20230109202548770](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109202548770.png)

![image-20230109202700488](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109202700488.png)

```js
GET /hotel/_search
{
  "query": {
    "match": {
      "all": "外滩"
    }
  }
}

GET /hotel/_search
{
  "query": {
    "term": {
      "city": {
        "value": "上海"
      }
    }
  }
}

GET /hotel/_search
{
  "query": {
    "multi_match": {
      "query": "君悦",
      "fields": ["brand"]
    }
  }
}

GET /hotel/_search
{
  "query": {
    "geo_distance":{
      "distance": "5km",
      "location": "31.21,121.5"
    } 
  }
}
```



## 相关性算法

![image-20230109203820186](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109203820186.png)



![image-20230109203900032](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109203900032.png)



### Function score query

![image-20230109204316806](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109204316806.png)

![image-20230109204504487](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230109204504487.png)





### boolean

![image-20230110235426112](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110235426112.png)

![image-20230111000216808](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111000216808.png)





### 搜索结果处理：



#### 排序

![image-20230111161934459](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111161934459.png)



#### 分页

![image-20230111162744814](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111162744814.png)

+ 分布式会有问题![image-20230111162933219](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111162933219.png)
+ 总结![image-20230111163256586](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111163256586.png)



#### 高亮

![image-20230111163626084](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111163626084.png)

![image-20230111163900119](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111163900119.png)

+ 否则要设置false
