---
title: Ch19_Watermark
date: 2021-10-21
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink
---

# Watermark

![image-20220529111901673](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111901673.png)

![image-20220529111919730](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111919730.png)![image-20220529111933287](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111933287.png)![image-20220529111943851](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111943851.png)

**Flink处理乱序数据的三个保证：**

**1. watermark水位线，使得整体的数据变慢(结束之后先输出一个结果)**

**2.window设置允许数据迟到（来一个迟到数据聚合一次，输出结果）**

**3.侧输出流**

![image-20220529112016937](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112016937.png)

**数据来了之后，放到对应的桶中，并计算插入的waterMark来判断窗口需不需要关闭，如果需要关闭，则触发计算，关闭窗口和桶**

**比如如下图，5秒（时间戳）的数据来了之后，系统认为现在的时间进行到了5-3=2秒，所以把三秒的时间窗口关闭了，等8秒的数据来了之后才关闭5秒的窗口。**

![image-20220529112036016](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112036016.png)

![image-20220529112048572](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112048572.png)



---

## **应用**

如果数据没有带时间戳，则时间戳默认为Long.MIN_VALUE

前提是规定好事件语义：

```java
env.setStreamTimeCharacteristic(TimeCharacteristic.EventTime);
```

提取时间戳+设定waterMark【一般都是周期性生成】



**乱序数据：**

参数为设定waterMark的延迟为999毫秒，重写的方法的返回值是从数据中提取时间戳

![image-20220529112127238](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112127238.png)

原理为周期性生成waterMark，第一个waterMark为了防止数据溢出（由于数据溢出【小于最小值】之后会变成一个超大的值）为Long.MIN_VALUE+waterMark延迟时间



**非乱序数据**：不用设置延迟时间：【也是周期性生成】![image-20220529112149521](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112149521.png)

也可以自定义函数设置waterMark



**周期：**

![image-20220529112214657](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112214657.png)



---

易错：![image-20220529112233587](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112233587.png)