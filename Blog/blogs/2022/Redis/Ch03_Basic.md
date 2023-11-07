---
title: Ch03 Basic
date: 2023-10-18
tags:
 - redis
categories:
 - Redis
---

# 

# 数据类型

![image-20231018162435719](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231018162435719.png)



## Nosql

![image-20231018224553903](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231018224553903.png)



+ redis是区分大小写的
+ 默认value都是字符串，存储的是二进制



```java
SET key value 
GET key
DEL key //删除
EXISTS key //判断一个键是否存在
KEYS [pattern] //寻找符合patten 的key， 如 keys *
FLUSHALL //删除所有的键
TTL key //查询一个键的过期时间
EXPIRE key seconds //设置一个键的过期时间 如 expire name 10 （10秒）
SETEX key seconds value//设置一个带有过期时间的键，原子操作
SETNX key value //只有当键不存在的时候设置kv
```



## List

```java
LPUSH key element... // LPUSH letter a 往letter列表头部添加一个元素 a
LRANGE key start end // 获取列表中的元素，起始位置开始是0， 结束位置末尾是 -1
RPUSH key element... // 从尾部添加元素
LPOP key count //删除左边第一个元素， count为要删除元素的个数
RPOP key count //删除右边第一个元素
LLEN key // 查看列表的长度
LTRIM key start end // 删除start-end之外的元素，全闭区间
```



<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019172539334.png" alt="image-20231019172539334" style="zoom:25%;" />



## Set

Set是一种无序集合，和列表的区别在于，列表中的元素可以重复，set中的元素不可以重复

```java
SADD key element... //在set中添加元素 
SMEMBERS key //用来查询所有集合中的元素
SISMEMBER key element // 查询element是否在集合中
SREM key element //删除集合中的某个元素
SINTER key... // 取几个集合的交集
SUNION key... //取几个集合的并集
SDIFF key... //Returns the difference of multiple sets.
```





## SortedSet

+ 也叫Zset，有序集合

```java
ZADD key [NX | XX] [GT | LT] [CH] [INCR] score member [score member ...]
    
// ZADD uni 100 ecust 200 stuttgart
    
ZRANGE result 0 -1 [withscores] //可以输出范围内的成员，以及分数
DEL key//删除整个集合
    
ZSCORE key member // 可以看到对应成员的分数
ZRANK key member // 可以查看排名，从小到大的排名
ZREVRANK key member // 从大到小排名，返回的是index
ZREM key member // 删除某个成员
ZREMRANGEBYRANK key start stop // 删除[start, stop]排名范围内的所有成员
ZREMRANGEBYSCORE key min max //根据score删除
zcard key // 获取有序集合的成员数量
zcount key 1 23 // 计算有序集合中指定区间分数的成员数
zincrby key 100 member//增加分数
```

+ 跳表，插入○(㏒n)![image-20231022113316454](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022113316454.png)
+ 修改时维护平衡性![image-20231022113336170](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231022113336170.png)



## Hash

+ 键值对

```java
HSET key field value [field value ...] // 在一个hash里添加键值对，hset dogs name yang
HGET key field //获取某一个值
HGETALL key //返回所有的键值对
HDEL key field //删除hash中的某个键值对
HEXISTS key field //判断某个键值对是否存在
HKEYS key//获取所有的键
HLEN key //获取键的数量
HSETNX key field value //只有在字段 field 不存在时，设置哈希表字段的值。
```



## 发布订阅

+ 消息无法持久化，无法记录历史消息

```java
SUBSCRIBE channel [channel ...] // 订阅消息
PUBLISH channel message // 发布消息
```



### Stream

+ id格式 时间戳-序列号
+ 消息可以重复读取，不是读取一次就没了
+ https://www.runoob.com/redis/redis-stream.html

```java
XADD key id field value 
XADD streamA * course redis     // 向steam流中写入id自动生成的kv
XLEN key //查看消息数量
XRANGE key start end //查看id在范围内的消息
XRANGE key - + //所有消息
XDEL key id //删除消息
XTRIM key MAXLEN 0 // 删除所有消息

XREAD count 2 block 1000 key 0//在key消息队列中一次读取两条消息，如果没有消息就阻塞1000毫秒，0表示从头开始读取，如果是1表示从第二条消息开始读取，如果是$表示从现在开始读取消息


XGROUP CREATE stream(stream名称) group01(组的名称) 0 // 0是id  
XINFO GROUPS stream(stream名称) //查看消费者组的信息
XGROUP CREATECONSUMER stream(stream名称) group01(组的名称) consumer(消费者的名字)
XREADGROUP GROUP group01(组的名称) consumer(消费者的名字) COUNT 2(一次读取两条消息) BLOCK 3000(如果没有消息，阻塞3000ms) stream(stream名称) > (表示从这个流中读取最新的消息)
    
XACK key group id [id ...] //确认消息已经被消费
```

![image-20231019194729139](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019194729139.png)

+ stream(stream名称)



## Geospatial

+ 用来存地理位置

```java
GEOADD city 116.405285 39.904989 beijing //添加了北京的经纬度
GEOPOS city beijing //获取位置信息
GEODIST city beijing shanghai KM//计算两个地理位置之间的距离，km为单位
GEOSEARCH city FROMMEMBER shanghai BYRADIUS 300 KM// 搜索上海附近圆形300km内的成员
//可以以指定经纬度，或者成员位置为中心，搜索矩形（BYBOX）或者圆形范围内的成员
GEORADIUS key longitude latitude radius M | KM | FT | MI //指定经纬度圆形范围内
GEORADIUSBYMEMBER key member radius M | KM | FT | MI // 某个成员圆形范围内
```





## HyperLoglog

+ 统计不相等元素的个数

+ 原理是通过随机数，通过牺牲一定的精确度来换取更小的内存消耗

+ 通常用在统计某个词的搜索次数等

  ```java
  PFADD course git docker redis // 添加元素
  PFCOUNT course //查看基数
  PFMERGE result course1 course2 //可以合并两个HyperLoglog，结果放到result
  ```

  



## Bitmap

+ 可以用来记录用户的在线状态，有没有点过赞等等

+ ```java
  SETBIT dianzan 0 1 //把它在偏移量为0的位置上设置为1
  SETBIT dianzan 1 0 //把它在偏移量为0的位置上设置为1
  GETBIT dianzan 0 //获取某个偏移量的值
  SET dianzan "\xF0"
  BITCOUNT dianzan //统计有多少个1
  BITPOS dianzan 0 //第一个出现0的位置，也可以在范围内查找，在后面加上 start end
  ```

+ ![image-20231019202307166](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019202307166.png)



## Bitfield

+ 将很多小的整数，存储到一个较大的位图中

![image-20231019202825442](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019202825442.png)



```java
bitfield player:1 set u8 #0 1 //设置一个8位的无符号整数，第0个位置是1【等级】
get player:1
bitfield player:1 get u8 #0 1 //获取
bitfield player:1 set u32 #1 100 //设置一个8位的无符号整数，第0个位置是1【金钱】
bitfield player:1 incrby u32 #1 100 //增加金币
```






# 事务

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019203557309.png" alt="image-20231019203557309" style="zoom:25%;" />

+ 批量操作在发送 EXEC 命令前被放入队列缓存。
+ 收到 EXEC 命令后进入事务执行，事务中任意命令执行失败，其余的命令依然被执行。
+ 在事务执行过程，其他客户端提交的命令请求不会插入到事务执行命令序列中。



![image-20231019203805378](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019203805378.png)

单个 Redis 命令的执行是原子性的，但 Redis 没有在事务上增加任何维持原子性的机制，所以 Redis 事务的执行并不是原子性的。

事务可以理解为一个打包的批量执行脚本，但批量指令并非原子化的操作，中间某条指令的失败不会导致前面已做指令的回滚，也不会造成后续的指令不做。

+ WATCH key [key ...\]
  监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。
+ UNWATCH
  取消 WATCH 命令对所有 key 的监视。





# 持久化



### RDB(主要用来备份)

+ vi redis.conf 多少秒内有多少修改就进行一次快照![image-20231019231943604](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019231943604.png)
+ 或者登录后用save命令，直接触发快照dump.rdb（redis会阻塞）
+ 或者用bgsave命令（会创建一个子进程，这样主进程就不会阻塞了）



### AOF

+ 当执行写命令的时候，会把命令追加到aof文件中，会以日志的形式记录每一个操作，redis重启的时候，会重新执行aof中的命令，重建数据库的内容
+ 使用方式，在配置文件中把appendonly改成yes![image-20231019232329302](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019232329302.png)



## 主从复制

只能主节点复制到从节点

+ 只需要修改从节点的配置 
+ 通过命令行修改，这种不常用![image-20231019233052444](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019233052444.png)
+ 通过配置文件修改redis.conf 启动的时候可以“redis-server redis.conf”指定配置文件
  + 端口号：port 6380
  + pid![image-20231019233212172](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019233212172.png)
  + dbfilename![image-20231019233232393](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019233232393.png)
  + 前面都是在单机上要修改的
  + 然后![image-20231019233253344](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019233253344.png)
  + info replication命令查看信息





# 哨兵

会一直心跳监控redis节点是否正常，如果不正常就会通过发布订阅方式把一个从节点变成主节点

+ 监控
+ 通知



使用redis sentinel来创建哨兵节点，先创建一个sentinel.conf

![image-20231019233925948](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231019233925948.png)

master是主节点的名字，可以任意，最后一个1是需要多少个哨兵节点同意，就可以进行故障转移

哨兵节点也需要高可用，可以三台，然后选举领导者deng