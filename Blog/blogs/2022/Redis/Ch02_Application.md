---
title: Ch02 Application
date: 2019-09-30
tags:
 - redis
categories:
 - Redis

---

# Application

![image-20230425114616438](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114616438.png)

解决方案：1. 布隆过滤器（先对数据进行几次哈希，再以此来匹配新的请求，来判断库内是否存在）

                  2. 缓存空对象（即使返回空对象（查询失败）也进行缓存）



![image-20230425114706111](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114706111.png)

![image-20230425114715561](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114715561.png)



