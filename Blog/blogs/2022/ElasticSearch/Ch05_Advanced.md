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



### 拼音分词器（https://github.com/medcl/elasticsearch-analysis-pinyin）

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

+ 因为拼音分词器不会分词(一个字一个字转成拼音，不知道哪个是词)

![image-20230114230231354](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114230231354.png)

![image-20230114230816116](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114230816116.png)



+ 但是查询的时候不能用拼音分词器：![image-20230114231323946](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114231323946.png)

+ ![image-20230114231307053](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114231307053.png)

  + 所以在创建索引时和搜索时要使用不同的分词器![image-20230114231502223](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114231502223.png)

  ![image-20230114231600073](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114231600073.png)



# 自动补全

## Completion suggester

![image-20230114231817633](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114231817633.png)

+ title分成两个字段的原因是，如果是一个字符串的话只能对S进行自动补全，用户搜W是不会出现的

+ 自动补全的查询

![image-20230114232454531](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114232454531.png)

![image-20230114232604487](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114232604487.png)





## 例子

+ 需要分词的用text_anlyzer， 不需要分词（固定的词条，keyword ）的用completion_analyzer
+ 把关键字，比如说品牌，商圈放到suggestion里面去![image-20230114234510358](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114234510358.png)

```js
// 酒店数据索引库
PUT /hotel
{
  "settings": {
    "analysis": {
      "analyzer": {
        "text_anlyzer": {
          "tokenizer": "ik_max_word",
          "filter": "py"
        },
        "completion_analyzer": {
          "tokenizer": "keyword",
          "filter": "py"
        }
      },
      "filter": {
        "py": {
          "type": "pinyin",
          "keep_full_pinyin": false,
          "keep_joined_full_pinyin": true,
          "keep_original": true,
          "limit_first_letter_length": 16,
          "remove_duplicated_term": true,
          "none_chinese_pinyin_tokenize": false
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "id":{
        "type": "keyword"
      },
      "name":{
        "type": "text",
        "analyzer": "text_anlyzer",
        "search_analyzer": "ik_smart",
        "copy_to": "all"
      },
      "address":{
        "type": "keyword",
        "index": false
      },
      "price":{
        "type": "integer"
      },
      "score":{
        "type": "integer"
      },
      "brand":{
        "type": "keyword",
        "copy_to": "all"
      },
      "city":{
        "type": "keyword"
      },
      "starName":{
        "type": "keyword"
      },
      "business":{
        "type": "keyword",
        "copy_to": "all"
      },
      "location":{
        "type": "geo_point"
      },
      "pic":{
        "type": "keyword",
        "index": false
      },
      "all":{
        "type": "text",
        "analyzer": "text_anlyzer",
        "search_analyzer": "ik_smart"
      },
      "suggestion":{
          "type": "completion",
          "analyzer": "completion_analyzer"
      }
    }
  }
}

```

+ 查询![image-20230114234648928](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114234648928.png)



## Restful API

![image-20230114235504762](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114235504762.png)

+ 处理结果![image-20230114235707624](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230114235707624.png)
