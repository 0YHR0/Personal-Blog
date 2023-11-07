---
title: Ch07 Go detailed
date: 2023-08-23
tags:
 - Go
categories:
 - Go

---

# go语言底层原理，细节

# panic

![image-20230901110517035](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230901110517035.png)

![image-20230901110529049](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230901110529049.png)

+ 如果test后面还有代码，会继续执行\

+ panic需要等defer结束后才会向上传递。出现panic的时候，会先按照defer的**先出的顺序执行，最后才会执行panic。



# select channel

+ **select 同时监听多个分支，一直堵塞直到其中一个分支完成 channel**
+ select 是 go 语言中的一种条件控制语句，类似于之前学习的 switch 条件控制语句，不同的是 select 只能用于通道的控制，在 select 中同样可以有多个 case 分支和一个 default 分支，但是每一个 case 必须都是 channel 的操作，可以是发送也可以是接收，select 会一直等待，直到某一个 case 分支的 channel 操作完成之后就执行对应的代码语句。

![image-20230901143827116](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230901143827116.png)

![image-20230901143837653](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230901143837653.png)

![image-20230902003442458](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902003442458.png)

+ range取channel会无限等待，直到channel被关闭

  ![image-20230902002847538](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902002847538.png)

+ channel可以是单向的![image-20230902004331717](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902004331717.png)



# 序列化

golang 中的类型比如：channel（通道）、complex（复数类型）、func（函数）均不能进行 JSON 格式化





# 锁



+  ![image-20230901190437651](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230901190437651.png)



# Go stub

![image-20230901223357882](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230901223357882.png)





# 杂记

+ 指针不能添加方法

+  ![image-20230902004717035](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902004717035.png)

+  new创建对象返回的是指针，值接收者可以接收值类型，也可以接受指针类型，但是指针接收者必须是指针类型

![image-20230902005036633](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902005036633.png)

![image-20230902010022659](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902010022659.png)

![image-20230902010117835](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902010117835.png)

+ 全局变量要定义在函数之外，而在函数之外定义的变量**只****能用var**定义。
+ 接口查询就是断言interfaceName.(TypeName)

+ ![image-20230902010632584](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902010632584.png)

+ ![image-20230902011530248](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902011530248.png)

  + **go语言常量要是编译时就能确定的数据，C选项中errors.New("xxx") 要等到运行时才能确定，所以它不满足**

  + 定义常量是不能存在任何可变元素 

  + ![image-20230902012045348](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902012045348.png)

  + 切片可以不用make直接append，但是map一定要make

  + make时必须带有长度参数，容量为可选

  + nil只能赋值给指针、channel、func、interface、map或slice类型的变量

  + ![image-20230902013052475](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902013052475.png)

  + 难：https://cloud.tencent.com/developer/article/2294578?areaSource=100001.9

  + slice只有扩容或者make的时候才会开辟新内存，否则通过length来规定可读范围

  + 当 appned 超过 cap 大小的时候，slice 会自动帮我们扩容，**在元素数量小于 1024 的时候每次会扩大一倍，当超过了 1024 个元素每次扩大 25%**

  + 要copyslice，必须先规定新slice好长度，或者append一个nil slice

    + copy![image-20230903161734854](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903161734854.png)

    + append![image-20230903161744995](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903161744995.png)

      

  + ![image-20230902112813705](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903161305004.png)

  + range会copy一份，不会改到原数据

  + ![image-20230902113251572](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902113251572.png)

  + defer参数被调用时就确定了，但是方法内的变量可以获取到最新值![image-20230902115216436](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902115216436.png)







# beego

![image-20230902010307579](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902010307579.png)

+ beego重量级，beego支持多种数据库





# sync.Waitgroup

+ sync.Waitgroup 里面有 noCopy 结构，不应该使用值拷贝，只能使用指针传递https://zhuanlan.zhihu.com/p/632190680![image-20230902232753024](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902232753024.png)
+ ![image-20230902232828396](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230902232828396.png)
