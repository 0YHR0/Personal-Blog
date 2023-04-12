---
title: Ch05_MPG
date: 2023-01-23
tags:
 - Go
categories:
 - Go

---





# 线程解释

 ### golang的goroutine机制有点像线程池：

+ go 内部有三个对象： P对象(processor) 代表上下文（或者可以认为是cpu），M(work thread)代表工作线程，G对象（goroutine）.
+ 正常情况下一个cpu对象启一个工作线程对象，线程去检查并执行goroutine对象。碰到goroutine对象阻塞的时候，会启动一个新的工作线程，以充分利用cpu资源。所有有时候线程对象会比处理器对象多很多

​    我们用如下图分别表示P、M、G

![image-20230322140538937](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322140538937.png)





在单核情况下，所有goroutine运行在同一个线程（M0）中，每一个线程维护一个上下文（P），任何时刻，一个上下文中只有一个goroutine，其他goroutine在runqueue中等待。一个goroutine运行完自己的时间片后，让出上下文，自己回到runqueue中（如下图左边所示）。

当正在运行的G0阻塞的时候（可以需要IO），会再创建一个线程（M1），P转到新的线程中去运行。

![image-20230322141540756](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322141540756.png)

当M0返回时，它会尝试从其他线程中“偷”一个上下文过来，如果没有偷到，会把goroutine放到global runqueue中去，然后把自己放入线程缓存中。上下文会定时检查global runqueue。



# Go的CSP并发模型



Go实现了两种并发形式。第一种是大家普遍认知的：多线程共享内存。其实就是Java或者C++等语言中的多线程开发。另外一种是Go语言特有的，也是Go语言推荐的：CSP（communicating sequential processes）并发模型。



CSP并发模型是在1970年左右提出的概念，属于比较新的概念，不同于传统的多线程通过共享内存来通信，CSP讲究的是“以通信的方式来共享内存”。



请记住下面这句话：
**Do not communicate by sharing memory; instead, share memory by communicating.**
“不要以共享内存的方式来通信，相反，要通过通信来共享内存。”



普通的线程并发模型，就是像Java、C++、或者Python，他们线程间通信都是通过共享内存的方式来进行的。非常典型的方式就是，在访问共享数据（例如数组、Map、或者某个结构体或对象）的时候，通过锁来访问，因此，在很多时候，衍生出一种方便操作的数据结构，叫做“线程安全的数据结构”。例如Java提供的包”java.util.concurrent”中的数据结构。Go中也实现了传统的线程并发模型。



Go的CSP并发模型，是通过`goroutine`和`channel`来实现的:

- `goroutine` 是Go语言中并发的执行单位。有点抽象，其实就是和传统概念上的”线程“类似，可以理解为”线程“。
- `channel`是Go语言中各个并发结构体(`goroutine`)之前的通信机制。 通俗的讲，就是各个`goroutine`之间通信的”管道“，有点类似于Linux中的管道。



生成一个`goroutine`的方式非常的简单：Go一下，就生成了。

```go
go f();
```



通信机制`channel`也很方便，传数据用`channel <- data`，取数据用`<-channel`。

在通信过程中，传数据`channel <- data`和取数据`<-channel`必然会成对出现，因为这边传，那边取，两个`goroutine`之间才会实现通信。

而且不管传还是取，必阻塞，直到另外的`goroutine`传或者取为止。





# Go并发模型的实现原理

我们先从线程讲起，无论语言层面何种并发模型，到了操作系统层面，一定是以线程的形态存在的。而操作系统根据资源访问权限的不同，体系架构可分为用户空间和内核空间；内核空间主要操作访问CPU资源、I/O资源、内存资源等硬件资源，为上层应用程序提供最基本的基础资源，用户空间呢就是上层应用程序的固定活动空间，用户空间不可以直接访问资源，必须通过“系统调用”、“库函数”或“Shell脚本”来调用内核空间提供的资源。



我们现在的计算机语言，可以狭义的认为是一种“软件”，它们中所谓的“线程”，往往是用户态的线程，和操作系统本身内核态的线程（简称KSE），还是有区别的。



线程模型的实现，可以分为以下几种方式：

![image-20230322142046739](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322142046739.png)

![image-20230322142053974](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322142053974.png)

![image-20230322142108363](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322142108363.png)



Go语言的线程模型就是一种特殊的两级线程模型。暂且叫它“MPG”模型吧。



# Go线程实现模型MPG

`M`指的是`Machine`，一个`M`直接关联了一个内核线程。
`P`指的是”processor”，代表了`M`所需的上下文环境，也是处理用户级代码逻辑的处理器。
`G`指的是`Goroutine`，其实本质上也是一种轻量级的线程。

三者关系如下图所示：

![image-20230322142131904](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322142131904.png)



以上这个图讲的是两个线程(内核线程)的情况。一个M会对应一个内核线程，一个M也会连接一个上下文P，一个上下文P相当于一个“处理器”，一个上下文连接一个或者多个Goroutine。P(Processor)的数量是在启动时被设置为环境变量GOMAXPROCS的值，或者通过运行时调用函数`runtime.GOMAXPROCS()`进行设置。Processor数量固定意味着任意时刻只有固定数量的线程在运行go代码。Goroutine中就是我们要执行并发的代码。图中P正在执行的`Goroutine`为蓝色的；处于待执行状态的`Goroutine`为灰色的，灰色的`Goroutine`形成了一个队列`runqueues`



三者关系的宏观的图为：![image-20230322142148037](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322142148037.png)



#### 抛弃P(Processor)

你可能会想，为什么一定需要一个上下文，我们能不能直接除去上下文，让`Goroutine`的`runqueues`挂到M上呢？答案是不行，需要上下文的目的，是让我们可以直接放开其他线程，当遇到内核线程阻塞的时候。

一个很简单的例子就是系统调用`sysall`，一个线程肯定不能同时执行代码和系统调用被阻塞，这个时候，此线程M需要放弃当前的上下文环境P，以便可以让其他的`Goroutine`被调度执行。



一个很简单的例子就是系统调用`sysall`，一个线程肯定不能同时执行代码和系统调用被阻塞，这个时候，此线程M需要放弃当前的上下文环境P，以便可以让其他的`Goroutine`被调度执行。![image-20230322142247782](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322142247782.png)



如上图左图所示，M0中的G0执行了syscall，然后就创建了一个M1(也有可能本身就存在，没创建)，（转向右图）然后M0丢弃了P，等待syscall的返回值，M1接受了P，将·继续执行`Goroutine`队列中的其他`Goroutine`。

当系统调用syscall结束后，M0会“偷”一个上下文，如果不成功，M0就把它的Gouroutine G0放到一个全局的runqueue中，然后自己放到线程池或者转入休眠状态。全局runqueue是各个P在运行完自己的本地的Goroutine runqueue后用来拉取新goroutine的地方。P也会周期性的检查这个全局runqueue上的goroutine，否则，全局runqueue上的goroutines可能得不到执行而饿死。



#### 均衡的分配工作

按照以上的说法，上下文P会定期的检查全局的goroutine 队列中的goroutine，以便自己在消费掉自身Goroutine队列的时候有事可做。假如全局goroutine队列中的goroutine也没了呢？就从其他运行的中的P的runqueue里偷。

每个P中的`Goroutine`不同导致他们运行的效率和时间也不同，在一个有很多P和M的环境中，不能让一个P跑完自身的`Goroutine`就没事可做了，因为或许其他的P有很长的`goroutine`队列要跑，得需要均衡。
该如何解决呢？

Go的做法倒也直接，从其他P中偷一半！![image-20230322142325237](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230322142325237.png)



ref: https://morsmachine.dk/go-scheduler?spm=a2c6h.12873639.article-detail.5.429568d8yapeta

ref: https://developer.aliyun.com/article/611313