---
title: Ch05_Container Runtime
date: 2024-10-10
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud

---



# 容器运行时

## K8s的CRI接口

![image-20241013132230522](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132230522.png)

![image-20241013132244076](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132244076.png)



## 容器运行时实现原理

![image-20241013132323988](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132323988.png)

![image-20241013132451222](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132451222.png)

![image-20241013132514637](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132514637.png)



### K8s中RuntimeClass

![image-20241013132706333](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132706333.png)



## 业界主流运行时

### runc

![image-20241013132743004](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132743004.png)

![image-20241013132751091](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013132751091.png)

+ 右边是主机上的输出：
  + 在主机上可以看到容器内的进程，如nginx
  + 主机上可以看到限制给进程的内存大小，用超了就oom
  + 主机上的capabilities全是1，代表有权限，但是容器进程会给他限制



### kata

![image-20241013133751006](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013133751006.png)

![image-20241013134058904](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013134058904.png)

+ crictl命令可以在主机上看到运行了哪些pod，因为不是都用的docker
+ 在主机上看不到容器的进程，只能看到qemu虚拟机进程
+ 因为是虚拟机实现，所以容器内外内核版本不一样，内核隔离，更加安全
+ 内存：如果是runc实现，可以看到主机上所有的内存大小，但是kata只能看到自己能使用的内存大小
+ 看到的CPU是虚拟的CPU



### gVisor

![image-20241013134432416](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013134432416.png)

![image-20241013134703840](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013134703840.png)

+ 也看不到真正用户的进程，因为藏在了sendbox里
+ 内存也只能看到自己的
+ CPU也是虚拟化的cpu
+ 内核也不一样，看到的是虚拟出来的内核





## 华为云中的使用

![image-20241013134929325](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013134929325.png)

![image-20241013135015432](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135015432.png)



# 容器运行时技术发展方向

![image-20241013135112877](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135112877.png)

# 总结

![image-20241013135302911](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135302911.png)





