---
title: Ch06_K8s structure
date: 2024-10-11
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud


---



# k8s 架构



![image-20241013135347225](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135347225.png)

![image-20241013135357076](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135357076.png)



## controller manager

![image-20241013135425584](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135425584.png)

![image-20241013135445049](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135445049.png)



### Client-go

+ 使用client-go来实现list&watch机制

  ![image-20241013135855733](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135855733.png)

  + 回调函数实现

  ![image-20241013135921589](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013135921589.png)

+ ![image-20241013140018832](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140018832.png)



#### Client-go中的Informer实现

![image-20241013140211211](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140211211.png)

![image-20241013140250746](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140250746.png)



## List-watch机制

![image-20241013140301264](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140301264.png)

![image-20241013140455951](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140455951.png)

![image-20241013140621020](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140621020.png)

![image-20241013140628309](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140628309.png)

![image-20241013140643097](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140643097.png)

![image-20241013140729395](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140729395.png)

![image-20241013140738571](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140738571.png)

![image-20241013140811045](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013140811045.png)

# 总结

![image-20241013141008316](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241013141008316.png)







