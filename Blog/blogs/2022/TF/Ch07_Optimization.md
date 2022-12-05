---
title: Ch07 Optimization
date: 2022-06-26
tags:
 - Tensorflow
categories:
 - Tensorflow




---

# Ch07 Optimization

### 神经网络参数优化器（5种）

![image-20220626211415497](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626211415497.png)

+ 不同的优化器对一阶动量，二阶动量的定义不一样



#### 随机梯度下降，与之前的例子相同

![image-20220626211605034](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626211605034.png)





#### SGDM(保留了部分上次梯度下降的方向)

![image-20220626211935685](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626211935685.png)

```py
##########################################################################
m_w, m_b = 0, 0
beta = 0.9
##########################################################################
...
 # 计算loss对各个参数的梯度
        grads = tape.gradient(loss, [w1, b1])

        ##########################################################################
        # sgd-momentun  
        m_w = beta * m_w + (1 - beta) * grads[0]
        m_b = beta * m_b + (1 - beta) * grads[1]
        w1.assign_sub(lr * m_w)
        b1.assign_sub(lr * m_b)
    ##########################################################################
```



#### Adagrade（为每个参数分配自适应学习率）tao是迭代的轮数

![image-20220626212248966](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626212248966.png)

```py
##########################################################################
v_w, v_b = 0, 0
##########################################################################
... 
    # 计算loss对各个参数的梯度
        grads = tape.gradient(loss, [w1, b1])

        ##########################################################################
        # adagrad
        v_w += tf.square(grads[0])
        v_b += tf.square(grads[1])
        w1.assign_sub(lr * grads[0] / tf.sqrt(v_w))
        b1.assign_sub(lr * grads[1] / tf.sqrt(v_b))
    ##########################################################################
```





### RMSProp

![image-20220626213722869](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626213722869.png)

```py
##########################################################################
v_w, v_b = 0, 0
beta = 0.9
##########################################################################
...
# 计算loss对各个参数的梯度
        grads = tape.gradient(loss, [w1, b1])

        ##########################################################################
        # rmsprop
        v_w = beta * v_w + (1 - beta) * tf.square(grads[0])
        v_b = beta * v_b + (1 - beta) * tf.square(grads[1])
        w1.assign_sub(lr * grads[0] / tf.sqrt(v_w))
        b1.assign_sub(lr * grads[1] / tf.sqrt(v_b))
    ##########################################################################
```



#### Adam

![image-20220626214033576](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220626214033576.png)

```py
##########################################################################
m_w, m_b = 0, 0
v_w, v_b = 0, 0
beta1, beta2 = 0.9, 0.999
delta_w, delta_b = 0, 0
global_step = 0
##########################################################################
...
# 训练部分
now_time = time.time()  ##2##
for epoch in range(epoch):  # 数据集级别的循环，每个epoch循环一次数据集
    for step, (x_train, y_train) in enumerate(train_db):  # batch级别的循环 ，每个step循环一个batch
 ##########################################################################       
        global_step += 1
 ##########################################################################       
        with tf.GradientTape() as tape:  # with结构记录梯度信息
            y = tf.matmul(x_train, w1) + b1  # 神经网络乘加运算
            y = tf.nn.softmax(y)  # 使输出y符合概率分布（此操作后与独热码同量级，可相减求loss）
            y_ = tf.one_hot(y_train, depth=3)  # 将标签值转换为独热码格式，方便计算loss和accuracy
            loss = tf.reduce_mean(tf.square(y_ - y))  # 采用均方误差损失函数mse = mean(sum(y-out)^2)
            loss_all += loss.numpy()  # 将每个step计算出的loss累加，为后续求loss平均值提供数据，这样计算的loss更准确
        # 计算loss对各个参数的梯度
        grads = tape.gradient(loss, [w1, b1])

##########################################################################
 # adam
        m_w = beta1 * m_w + (1 - beta1) * grads[0]
        m_b = beta1 * m_b + (1 - beta1) * grads[1]
        v_w = beta2 * v_w + (1 - beta2) * tf.square(grads[0])
        v_b = beta2 * v_b + (1 - beta2) * tf.square(grads[1])

        m_w_correction = m_w / (1 - tf.pow(beta1, int(global_step)))
        m_b_correction = m_b / (1 - tf.pow(beta1, int(global_step)))
        v_w_correction = v_w / (1 - tf.pow(beta2, int(global_step)))
        v_b_correction = v_b / (1 - tf.pow(beta2, int(global_step)))

        w1.assign_sub(lr * m_w_correction / tf.sqrt(v_w_correction))
        b1.assign_sub(lr * m_b_correction / tf.sqrt(v_b_correction))
##########################################################################

    # 每个epoch，打印loss信息
    print("Epoch {}, loss: {}".format(epoch, loss_all / 4))
    train_loss_results.append(loss_all / 4)  # 将4个step的loss求平均记录在此变量中
    loss_all = 0  # loss_all归零，为记录下一个epoch的loss做准备

```

