---
title: Ch13 CNN
date: 2022-07-01
tags:
 - Tensorflow
 - CNN
categories:
 - Tensorflow

---

# Ch13 CNN

## 卷积概念

![image-20220701160729104](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701160729104.png)

![image-20220701160833677](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701160833677.png)

![image-20220701160856714](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701160856714.png)

![image-20220701161010809](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701161010809.png)

![image-20220701161043692](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701161043692.png)



## 感受野

![image-20220701162131365](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701162131365.png)

+ 计算量：(x-2)²*9 + (x-2-2)²*9



## 使用padding让输入与输出大小一样

![image-20220701162402451](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701162402451.png)



![image-20220701162654843](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701162654843.png)



## TF描述卷积层

![image-20220701162739309](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701162739309.png)



## Batch normalization

神经网络对零附近的值比较敏感，所以用BN使把偏移的数据重新拉回

![image-20220701162934847](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701162934847.png)

+ **但是通常这样会把数据拉回‘线性区域‘，也就是0附近**有可能会丧失非线性特征，所以引入两个可训练参数，使得数据可以缩放和位移，保证非线性特征

![image-20220701163206080](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701163206080.png)



用在卷积层和激活层之间

![image-20220701163528182](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701163528182.png)



## Pooling池化

![image-20220701163654783](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701163654783.png)

![image-20220701163756676](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701163756676.png)



## Dropout舍弃

![image-20220701163903316](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701163903316.png)



## CNN

![image-20220701164001305](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701164001305.png)



