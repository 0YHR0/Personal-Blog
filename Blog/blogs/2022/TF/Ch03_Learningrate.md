---
title: Ch03 Learning rate
date: 2022-06-24
tags:
 - Tensorflow
categories:
 - Tensorflow
---

# Ch03 Learning rate

```py
import tensorflow as tf

# where函数（条件语句，真返回a，假）
a = tf.constant([1, 2, 3, 1, 1])
b = tf.constant([0, 1, 3, 4, 5])
c = tf.where(tf.greater(a, b), a, b)  # 若a>b，返回a对应位置的元素，否则返回b对应位置的元素
print("c：", c)


# 产生随机数
rdm = np.random.RandomState(seed=1)
a = rdm.rand()
b = rdm.rand(2, 3)
print("a:", a)
print("b:", b)

# 将两个数组按垂直方向叠加，变成一个二维数组
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
c = np.vstack((a, b))
print("c:\n", c)

# 生成等间隔数值点（起始值，结束值，步长）几个就生成几维数组
x, y = np.mgrid[1:3:1, 2:4:0.5]
# 将x, y拉直，并合并配对为二维张量，生成二维坐标点
grid = np.c_[x.ravel(), y.ravel()]
print("x:\n", x) # 为了保证两个数组的维度相同，所以都是2行4列
print("y:\n", y)
print("x.ravel():\n", x.ravel())
print("y.ravel():\n", y.ravel())
print('grid:\n', grid)
```

![image-20220625234030553](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220625234030553.png)

![image-20220625234934344](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220625234934344.png)![image-20220625235112198](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220625235112198.png)
