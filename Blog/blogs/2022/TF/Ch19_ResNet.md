---
title: Ch19 ResNet
date: 2022-07-03
tags:
 - Tensorflow
 - ResNet
categories:
 - Tensorflow
---

# Ch19 ResNet

使用残差跳连，引入了前方信息，缓解梯度消失，使神经网络层数增加成为可能



![image-20220702175714219](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220702175714219.png)

+ 何凯明表示，单纯堆叠神经网络，会使神经网络退化，后面的神经网络会丢失最初始神经网络的特征，所以他用了跳连线，将前期的特征直接接到了后面![image-20220702175841954](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220702175841954.png)
+ ![image-20220702175939812](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220702175939812.png)

![image-20220702180100970](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220702180100970.png)

+ 如果维度不同，调用红色框里的代码
+ 如果维度相同，则直接相加

![image-20220703124149716](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220703124149716.png)

+ residual_path=true 用虚线连接， residual_path=false 用实线连接
+ block_list表示每个橙色块（block）中有几个ResnetBlock

filter=卷积核的个数就是输出的深度![image-20220703124947423](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220703124947423.png)

![image-20220703131331007](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220703131331007.png)

