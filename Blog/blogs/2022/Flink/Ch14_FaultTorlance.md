---
title: Ch14_FaultTorlance
date: 2021-04-08
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink
---

# Fault Torlance

![image-20220528201655550](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201655550.png)

![image-20220528201704106](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201704106.png)

![image-20220528201716943](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201716943.png)

![image-20220528201732880](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201732880.png)

![image-20220528201742555](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201742555.png)

![image-20220528201757247](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201757247.png)

![image-20220528201805417](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201805417.png)

![image-20220528201821143](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201821143.png)

可以设置检查点，第一个参数为多久保存一次检查点，第二个参数为检查点的模式，一般为exactly-once【状态一致性的级别】

```java
env.enableCheckpointing(5000, CheckpointingMode.AT_LEAST_ONCE);//每个5秒执行一次
```

![image-20220528201854176](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528201854176.png)