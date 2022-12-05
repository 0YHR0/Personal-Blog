---
title: Ch03 Index
date: 2022-11-16
tags:
 - MongoDB
 - DB
categories:
 - MongoDB

---

## 4. MongoDB 的索引

### 4.1 概述

索引支持在 MongoDB 中高效地执行查询.如果没有索引, MongoDB 必须执行全集合扫描, 即扫描集合中的每个文档, 以选择与查询语句 匹配的文档.这种扫描全集合的查询效率是非常低的, 特别在处理大量的数据时, 查询可以要花费几十秒甚至几分钟, 这对网站的性能是非常致命的.

如果查询存在适当的索引, MongoDB 可以使用该索引限制必须检查的文档数.

索引是特殊的数据结构, 它以易于遍历的形式存储集合数据集的一小部分.索引存储特定字段或一组字段的值, 按字段值排序.索引项的排 序支持有效的相等匹配和基于范围的查询操作.此外, MongoDB 还可以使用索引中的排序返回排序结果.

MongoDB 使用的是 B Tree, MySQL 使用的是 B+ Tree

```js
// create index
db.<collection_name>.createIndex({ userid : 1, username : -1 })

// retrieve indexes
db.<collection_name>.getIndexes()

// remove indexes
db.<collection_name>.dropIndex(index)

// there are 2 ways to remove indexes:
// 1. removed based on the index name
// 2. removed based on the fields

db.<collection_name>.dropIndex( "userid_1_username_-1" )
db.<collection_name>.dropIndex({ userid : 1, username : -1 })

// remove all the indexes, will only remove non_id indexes
db.<collection_name>.dropIndexes()
```

### 4.2 索引的类型

#### 4.2.1 单字段索引

MongoDB 支持在文档的单个字段上创建用户定义的**升序/降序索引**, 称为**单字段索引** Single Field Index

对于单个字段索引和排序操作, 索引键的排序顺序（即升序或降序）并不重要, 因为 MongoDB 可以在任何方向上遍历索引.

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20200505231043779.png)

#### 4.2.2 复合索引

MongoDB 还支持多个字段的用户定义索引, 即复合索引 Compound Index

复合索引中列出的字段顺序具有重要意义.例如, 如果复合索引由 `{ userid: 1, score: -1 }` 组成, 则索引首先按 `userid` 正序排序, 然后 在每个 `userid` 的值内, 再在按 `score` 倒序排序.

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20200505231305941.png)

#### 4.2.3 其他索引

- 地理空间索引 Geospatial Index
- 文本索引 Text Indexes
- 哈希索引 Hashed Indexes

##### 地理空间索引（Geospatial Index）

为了支持对地理空间坐标数据的有效查询, MongoDB 提供了两种特殊的索引: 返回结果时使用平面几何的二维索引和返回结果时使用球面几何的二维球面索引.

##### 文本索引（Text Indexes）

MongoDB 提供了一种文本索引类型, 支持在集合中搜索字符串内容.这些文本索引不存储特定于语言的停止词（例如 “the”, “a”, “or”）, 而将集合中的词作为词干, 只存储根词.

##### 哈希索引（Hashed Indexes）

为了支持基于散列的分片, MongoDB 提供了散列索引类型, 它对字段值的散列进行索引.这些索引在其范围内的值分布更加随机, 但只支持相等匹配, 不支持基于范围的查询.

### 4.3 索引的管理操作

#### 4.3.1 索引的查看

语法

```js
db.collection.getIndexes()
```

![image-20221116210849516](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221116210849516.png)

默认 `_id` 索引： MongoDB 在创建集合的过程中, 在 `_id` 字段上创建一个唯一的索引, 默认名字为 `_id` , 该索引可防止客户端插入两个具有相同值的文 档, 不能在 `_id` 字段上删除此索引.

注意：该索引是**唯一索引**, 因此值不能重复, 即 `_id` 值不能重复的.

在分片集群中, 通常使用 `_id` 作为**片键**.

#### 4.3.2 索引的创建

语法

```js
db.collection.createIndex(keys, options)
```

参数

![image-20200506203419523](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20200506203419523.png)

options（更多选项）列表

![image-20200506203453430](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20200506203453430.png)

注意在 3.0.0 版本前创建索引方法为 `db.collection.ensureIndex()` , 之后的版本使用了 `db.collection.createIndex()` 方法, `ensureIndex()` 还能用, 但只是 `createIndex()` 的别名.

举个🌰

```js
$  db.comment.createIndex({userid:1})
{
  "createdCollectionAutomatically" : false,
  "numIndexesBefore" : 1,
  "numIndexesAfter" : 2,
  "ok" : 1
}

$ db.comment.createIndex({userid:1,nickname:-1})
...
```

#### 4.3.3 索引的删除

语法

```js
# 删除某一个索引
$ db.collection.dropIndex(index)
# example: db.my.dropIndex({name: 1}),或者括号里写索引名称也行
# 删除全部索引
$ db.collection.dropIndexes()
```

提示:

`_id` 的字段的索引是无法删除的, 只能删除非 `_id` 字段的索引

示例

```
# 删除 comment 集合中 userid 字段上的升序索引
$ db.comment.dropIndex({userid:1})
```

### 4.4 索引使用

#### 4.4.1 执行计划

分析查询性能 (Analyze Query Performance) 通常使用执行计划 (解释计划 - Explain Plan) 来查看查询的情况![image-20221116211755937](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221116211755937.png)

```js
$ db.<collection_name>.find( query, options ).explain(options)
```

比如: 查看根据 `user_id` 查询数据的情况

**未添加索引之前**

`"stage" : "COLLSCAN"`, 表示全集合扫描

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20200506205714154.png)

**添加索引之后**

`"stage" : "IXSCAN"`, 基于索引的扫描

#### 4.4.2 涵盖的查询

当查询条件和查询的投影仅包含索引字段是, MongoDB 直接从索引返回结果, 而不扫描任何文档或将文档带入内存, 这些覆盖的查询十分有效![image-20221116213000930](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221116213000930.png)

![image-20221116213107064](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221116213107064.png)

> https://docs.mongodb.com/manual/core/query-optimization/#covered-query