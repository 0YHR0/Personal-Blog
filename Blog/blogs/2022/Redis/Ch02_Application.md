---
title: Ch02 Application
date: 2019-09-30
tags:
 - redis
categories:
 - Redis

---

# Application

![image-20230502124145469](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502124145469.png)





![image-20230425114616438](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114616438.png)

![image-20230502124543363](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502124543363.png)

解决方案：

    1. 布隆过滤器（先对数据进行几次哈希，再以此来匹配新的请求，来判断库内是否存在）
    2. 缓存空对象（即使返回空对象（查询失败）也进行缓存）

+ 但是布隆过滤器的删除也是难点，比如数据库删除的数据怎么在布隆过滤器也删除，有可能有别的key值也占用了这个hash值

![image-20230502125759140](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502125759140.png)

![image-20230502125813556](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502125813556.png)

![image-20230502125835847](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502125835847.png)

![image-20230502125954238](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502125954238.png)

![image-20230502130044997](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502130044997.png)

![image-20230502130113447](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502130113447.png)

![image-20230502130704988](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502130704988.png)

![image-20230502130710770](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502130710770.png)





![image-20230425114706111](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114706111.png)

+ 比如设置了超时时间（为了避免缓存和数据库长期保持不一致）
+ 但是在系统第一次部署的时候，缓存预热，把很多key设置了一样的超时时间，就会造成缓存雪崩（解决办法：使用固定值+随机值作为失效时间）
+ 目前分布式缓存解决方案都很难做到和数据库强一致

![image-20230425114715561](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114715561.png)



## 缓存击穿



解决方案

+ 把db的执行当作一个临界资源

  + 单机加锁

  + 分布式锁![image-20230502125237983](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230502125237983.png)

    + 没抢到锁就阻塞等待，但是有问题会阻塞很久，可能把rpc的连接池打爆

    + 返回一个默认值，在key-value的value里面加上逻辑过期时间，每次判断一下，如果时间过期再抢分布式锁，查询数据库并更新缓存。如果没抢到分布式锁，就直接返回逻辑上过期的数据（弱一致性）

      



