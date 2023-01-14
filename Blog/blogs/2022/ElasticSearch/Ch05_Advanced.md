---
title: Ch05 Aggregation
date: 2023-01-11
tags:
 - ElasticSearch
 - ES
categories:
 - ElasticSearch

---

# 

# Advanced



### 数据聚合

![image-20230113122519851](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113122519851.png)

+ 聚合的字段不能是text，也就是说不能分词



### Bucket聚合语法

+ 和groupby

![image-20230113123833154](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113123833154.png)

![image-20230113123606919](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113123606919.png)

![image-20230113123706889](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113123706889.png)





### Metrics 聚合语法

![image-20230113225225623](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113225225623.png)



+ 根据每个桶中的平均得分排序![image-20230113225602726](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113225602726.png)



## RestClient聚合

![image-20230113225813906](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113225813906.png)

+ 发送请求

![image-20230113225925636](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113225925636.png)

+ 解析结果![image-20230113230032810](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113230032810.png)



## 多条件聚合

![image-20230113232843404](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113232843404.png)

![image-20230113232913519](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230113232913519.png)



### 拼音分词器

+ 可以实现搜索的时候自动提示的功能
+ 把分词器的目录挂载到es的plugin之下安装

```js
POST /_analyze
{
  "text": ["如家酒店还不错"]
  , "analyzer": "pinyin"
}
```

![image-20230114230305586](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114230305586.png)



### 自定义分词器

+ 因为拼音分词器不会分词

![image-20230114230231354](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114230231354.png)
