---
title: Ch04 Activation Function
date: 2022-06-25
tags:
 - Tensorflow
categories:
 - Tensorflow

---

# Ch04 Activation Function

![image-20220625235322621](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220625235322621.png)

![image-20220625235710516](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220625235710516.png)

![image-20220625235901931](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220625235901931.png)

+ sigmoid的导数在0-0.25之间



![image-20220625235958938](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220625235958938.png)

![image-20220626000026344](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626000026344.png)

+ 因为过多的负数输入Relu函数会导致梯度为0，不能更新参数，所以在随机初始化的时候应该避免过多初始为负数输入进ReLu![image-20220626000307965](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626000307965.png)

![image-20220626000359059](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626000359059.png)