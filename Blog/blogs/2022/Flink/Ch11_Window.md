---
title: Ch11_Window
date: 2021-04-01
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink

---

# Window

![image-20220528200111950](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200111950.png)

![image-20220528200119500](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200119500.png)

![image-20220528200129137](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200129137.png)

![image-20220528200137034](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200137034.png)

![image-20220528200146632](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200146632.png)



---

## **开窗操作**

![image-20220528200203720](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200203720.png)

![image-20220528200210217](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200210217.png)

![image-20220528200216556](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200216556.png)

![image-20220528200224956](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200224956.png)

---

## **聚合操作**

![image-20220528200241475](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200241475.png)

增量聚合函数：

![image-20220528200255330](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200255330.png)

**AggregateFunction:**

对每个窗口进行聚合操作，要在分配窗口之后才可以调用

第一个泛型为输入类型，第二个泛型为中间聚合状态（聚合器，eg：累加器），第三个泛型为输出类型

createAccumulator用来初始化中间聚合状态【eg：累加器】

 // 初始化列累加器 .创建一个新的累加器，启动一个新的聚合,负责迭代状态的初始化

 //来一条数据.相应组内只有一条数据时候执行一次

  //如果原先有一条，那么新进来一条时候，就不执行了。直接执行add getresult

  //累加器有点像是中间传递的东西

  //user1+user1 通过累加器就是 acc_1=acc(初始化)+第一个user，  acc=acc_1+第一个user1

   //相加的结果都保留在累加器中。相当于一个寄存的地方

add为数据过来之后的处理过程，即数据过来之后聚合状态【eg：累加器】如何变化

getResult用来返回最后的结果，一般返回中间聚合状态【eg：累加器】

*// 返回值  在窗口内满足2个，计算结束的时候执行一次  从累加器获取聚合的结果*

merge：*//合并两个累加器，返回一个具有合并状态的累加器  一般不触发这个*

对每个分组1秒输出一次结果，但是每来一个数据都会进行计算

![image-20220528200345580](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200345580.png)

全窗口函数：

可以获取更多的数据，输入类型，输出类型，之前的keyBy的key以及window的信息

最后用collector.collect();来输出

输入类型是一个迭代器类型，因为有很多数据![image-20220528200358022](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200358022.png)

![image-20220528200408174](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200408174.png)

例：![image-20220528200420108](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200420108.png)

第一个参数为key的值，第二个参数为当前window的属性，第三个参数为key分组之后的数据集合，第四个参数用来输出

![image-20220528200435360](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200435360.png)

![image-20220528200445919](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200445919.png)

![image-20220528200453643](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200453643.png)

allowedLateness()传的参数为时间，作用为先输出一个近似正确的结果，在延迟的时间内不断更新输出结果，使结果更准确，达到了快速性和准确性

由于不关闭窗口会使数据积压在内存中，造成压力，所以我们可以将在allowLateness之外的迟到的数据放到侧输出流。相当于一个兜底的方法，迟到了再迟到

注意：获取侧输出流方法，返回值类型不能是dataStream

![image-20220528200510251](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200510251.png)

窗口起始点和偏移量：

![image-20220528200524303](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528200524303.png)