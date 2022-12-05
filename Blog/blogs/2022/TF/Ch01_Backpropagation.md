---
title: Ch01 Back propagation
date: 2022-06-21
tags:
 - Tensorflow
categories:
 - Tensorflow

---

# Ch01 Back propagation



使用y=(x-1)²来测试梯度下降

```py
import tensorflow as tf

# 初始点为w=5，学习率为0.2
w = tf.Variable(tf.constant(5, dtype=tf.float32))
lr = 0.2
epoch = 40

for epoch in range(epoch):  # for epoch 定义顶层循环，表示对数据集循环epoch次，此例数据集数据仅有1个w,初始化时候constant赋值为5，循环40次迭代。
    with tf.GradientTape() as tape:  # with结构到grads框起了梯度的计算过程。
        loss = tf.square(w + 1)
    grads = tape.gradient(loss, w)  # .gradient函数告知谁对谁求导

    w.assign_sub(lr * grads)  # .assign_sub 对变量做自减 即：w -= lr*grads 即 w = w - lr*grads
    print("After %s epoch,w is %f,loss is %f" % (epoch, w.numpy(), loss))

# lr初始值：0.2   请自改学习率  0.001  0.999 看收敛过程
# 最终目的：找到 loss 最小 即 w = -1 的最优参数w

```



+ 当学习率过小时，40次迭代并没有能找到最优值
+ 当学习率过大时，一直在左右跳动，很难找到最优值



## Tensorflow基础

![image-20220622225753176](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220622225753176.png)

![image-20220622225843433](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220622225843433.png)



```py
import tensorflow as tf

a = tf.constant([1, 5], dtype=tf.int64) #创建常量
print("a:", a)
print("a.dtype:", a.dtype)
print("a.shape:", a.shape)

# 本机默认 tf.int32  可去掉dtype试一下 查看默认值
```



### 张量从numpy转换为tensor

```py
import tensorflow as tf
import numpy as np

a = np.arange(0, 5)
b = tf.convert_to_tensor(a, dtype=tf.int64)
print("a:", a)
print("b:", b)

```



### 创建tensor![image-20220622233643069](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220622233643069.png)

```py
import tensorflow as tf

a = tf.zeros([2, 3]) # 2行3列
b = tf.ones(4)
c = tf.fill([2, 2], 9)
print("a:", a)
print("b:", b)
print("c:", c)
```



## TF常用函数

![image-20220622235548636](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220622235548636.png)![image-20220622235721759](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220622235721759.png)

```py
import tensorflow as tf

# 随机生成均值为0.5，标准差为1（正态分布）的2*2张量
d = tf.random.normal([2, 2], mean=0.5, stddev=1)
print("d:", d)

# 随机生成均值为0.5，标准差为1（正态分布）的2*2张量，并且限制在±2标准差之间
e = tf.random.truncated_normal([2, 2], mean=0.5, stddev=1)
print("e:", e)

# 随机生成指定维度的均匀分布随机数，在[minval，maxval）之间
f = tf.random.uniform([2, 2], minval=0, maxval=1)
print("f:", f)

# 强制类型转换
x1 = tf.constant([1., 2., 3.], dtype=tf.float64)
print("x1:", x1)
x2 = tf.cast(x1, tf.int32)
print("x2", x2)
print("minimum of x2：", tf.reduce_min(x2))
print("maxmum of x2:", tf.reduce_max(x2))

# 求每一行的最大值
x = tf.constant([[1, 2, 3], [2, 2, 3]])
print("x:", x)
print("mean of x:", tf.reduce_mean(x))  # 求x中所有数的均值
print("sum of x:", tf.reduce_sum(x, axis=1))  # 求每一行的和

# 两个张量对应元素的加减乘除
a = tf.ones([1, 3])
b = tf.fill([1, 3], 3.)
print("a:", a)
print("b:", b)
print("a+b:", tf.add(a, b))
print("a-b:", tf.subtract(a, b))
print("a*b:", tf.multiply(a, b))
print("b/a:", tf.divide(b, a))

a = tf.fill([1, 2], 3.)
print("a:", a)
print("a的平方:", tf.pow(a, 3))
print("a的平方:", tf.square(a))
print("a的开方:", tf.sqrt(a))

# 矩阵直接乘法
a = tf.ones([3, 2])
b = tf.fill([2, 3], 3.)
print("a:", a)
print("b:", b)
print("a*b:", tf.matmul(a, b))

# 标签配对
features = tf.constant([12, 23, 10, 17])
labels = tf.constant([0, 1, 1, 0])
dataset = tf.data.Dataset.from_tensor_slices((features, labels))
for element in dataset:
    print(element)
    
    
# 梯度下降，对x²求x=3处的导数
with tf.GradientTape() as tape:
    x = tf.Variable(tf.constant(3.0))
    y = tf.pow(x, 2)
grad = tape.gradient(y, x)
print(grad)

# 遍历每个元素
seq = ['one', 'two', 'three']
for i, element in enumerate(seq):
    print(i, element)
    
# one hot 编码，可以表示出每个分类的概率
classes = 3
labels = tf.constant([1, 0, 2])  # 输入的元素值最小为0，最大为2
output = tf.one_hot(labels, depth=classes)
print("result of labels1:", output)
print("\n")

---
# 手动算概率
import tensorflow as tf

x1 = tf.constant([[5.8, 4.0, 1.2, 0.2]])  # 5.8,4.0,1.2,0.2（0）
w1 = tf.constant([[-0.8, -0.34, -1.4],
                  [0.6, 1.3, 0.25],
                  [0.5, 1.45, 0.9],
                  [0.65, 0.7, -1.2]])
b1 = tf.constant([2.52, -3.1, 5.62])
y = tf.matmul(x1, w1) + b1
print("x1.shape:", x1.shape)
print("w1.shape:", w1.shape)
print("b1.shape:", b1.shape)
print("y.shape:", y.shape)
print("y:", y)

#####以下代码可将输出结果y转化为概率值#####
y_dim = tf.squeeze(y)  # 去掉y中纬度1（观察y_dim与 y 效果对比）
y_pro = tf.nn.softmax(y_dim)  # 使y_dim符合概率分布，输出为概率值了
print("y_dim:", y_dim)
print("y_pro:", y_pro)

#请观察打印出的shape
---

# softmax函数，常用在概率分布中，用来使输出符合概率分布
y = tf.constant([1.01, 2.01, -0.66])
y_pro = tf.nn.softmax(y)

print("After softmax, y_pro is:", y_pro)  # y_pro 符合概率分布

print("The sum of y_pro:", tf.reduce_sum(y_pro))  # 通过softmax后，所有概率加起来和为1

---
# 使参数进行自减运算，必须先指定为variable
x = tf.Variable(4)
x.assign_sub(1) # 相当于x = x - 1
print("x:", x)  # 4-1=3

---
# 返回张量沿指定维度最大值的索引
test = np.array([[1, 2, 3], [2, 3, 4], [5, 4, 3], [8, 7, 2]])
print("test:\n", test)
print("每一列的最大值的索引：", tf.argmax(test, axis=0))  # 返回每一列最大值的索引
print("每一行的最大值的索引", tf.argmax(test, axis=1))  # 返回每一行最大值的索引

```

![image-20220623163738878](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220623163738878.png)![image-20220623165531013](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220623165531013.png)

![image-20220623165743978](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220623165743978.png)

![image-20220624213638240](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220624213638240.png)
