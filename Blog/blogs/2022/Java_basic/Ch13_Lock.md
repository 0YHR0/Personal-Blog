---
title: Ch13_Lock
date: 2020-04-30
tags:
 - Java
categories:
 - Java


---

# Lock

**锁：1.可重入锁：指的是以线程为单位，当一个线程获取对象锁之后，这个线程可以再次获取本对象上的锁，而其他的线程是不可以的。**

​    **synchronized 和  Reentrant Lock 都是可重入锁。**

**可重入锁的意义之一在于防止死锁：关于父类和子类的锁的重入:子类覆写了父类的synchronized方法，然后调用父类中的方法，此时如果没有可重入的锁，那么这段代码将产生死锁。**

**实现原理实现是通过为每个锁关联一个请求计数器和一个占有它的线程。当计数为0时，认为锁是未被占有的；线程请求一个未被占有的锁时，JVM将记录锁的占有者，并且将请求计数器置为1 。**

**如果同一个线程再次请求这个锁，计数器将递增；**

**每次占用线程退出同步块，计数器值将递减。直到计数器为0,锁被释放。**

**抛了异常，线程内部如果没处理，线程会直接停止，并且释放锁。**



---

**虚拟机中锁优化：从上到下**

1. **偏向锁：**同一个线程获取同一个锁减少开销，竞争激烈升级到轻量级锁
2. **轻量级锁：**对绝大部分的锁，在整个同步周期内都不存在竞争”，轻量级锁所适应的场景是线程交替执行同步块的场合，如果存在同一时间访问同一锁的场合，就会导致轻量级锁膨胀为重量级锁。
3. **自旋锁：**为了避免线程真实的在操作系统中被挂起（需要从用户态转换为核心态），在转换成重量级锁之前的优化
4. **锁消除：**消除锁是虚拟机另外一种锁的优化，这种优化更彻底，Java虚拟机在JIT编译时(可以简单理解为当某段代码即将第一次被执行时进行编译，又称即时编译)，通过对运行上下文的扫描，去除不可能存在共享资源竞争的锁，通过这种方式消除没有必要的锁，可以节省毫无意义的请求锁时间，如下StringBuffer的append是一个同步方法，但是在add方法中的StringBuffer属于一个局部变量，并且不会被其他线程所使用，因此StringBuffer不可能存在共享资源竞争的情景，JVM会自动将其锁消除。





---

Java实现线程同步的几个方法：

线程调用sleep不会释放锁，处于阻塞状态，并捕获异常（Interrupt）

线程调用wait会释放锁，并等待别的线程唤醒

notify/notifyAll和wait方法必须在synchronized代码块或者synchronized方法调用，因为要获取monitor，而synchronize 可以获取monitor

1. **同步方法：**用synchronize 修饰方法（悲观锁，可重入锁）

在调用方法之前，需要获得该锁，否则线程处于阻塞状态

也可以修饰静态方法，此时锁会锁住整个类。

Java 虚拟机中的同步(Synchronization)基于进入和退出管程(Monitor)对象实现， 无论是显式同步(有明确的 monitorenter 和 monitorexit 指令,即同步代码块)还是隐式同步都是如此。在 Java 语言中，同步用的最多的地方可能是被 synchronized 修饰的同步方法。同步方法 并不是由 monitorenter 和 monitorexit 指令来实现同步的，而是由方法调用指令读取运行时常量池中方法的 ACC_SYNCHRONIZED 标志来隐式实现的。https://blog.csdn.net/javazejian/article/details/72828483

1. **同步代码块：**使用synchronize 修饰一个代码块。

通常情况下没必要修饰整个方法，系统开销太大

代码如： 

  synchronized(object){ 

  }

1. **使用特殊域变量(volatile)实现线程同步：**volatile不会提供任何原子操作，它也不能用来修饰final类型的变量 

一般用volatile来修饰变量，被修饰的变量不会被复制到线程内存中，而是存在主内存中，每当有修改，都会马上刷新值。

阻止指令重排（编译器重排，处理器重排）内存屏障，JMM（happens-before原则， 原子性，可见性，有序性）

1. **CAS算法（自旋锁）：无锁编程思想** https://blog.csdn.net/qq_34337272/article/details/81252853

https://blog.csdn.net/qq_37113604/article/details/81582784

5.使用重入锁实现线程同步

在JavaSE5.0中新增了一个java.util.concurrent包来支持同步。ReentrantLock类是可重入、互斥、实现了Lock接口的锁， 它与使用synchronized方法和快具有相同的基本行为和语义，并且扩展了其能力。   ReenreantLock类的常用方法有：     ReentrantLock() : 创建一个ReentrantLock实例      lock() : 获得锁      unlock() : 释放锁 

 

---

**注：关于Lock对象和synchronized关键字的选择：** 

​    a.最好两个都不用，使用一种java.util.concurrent包提供的机制， 

​      能够帮助用户处理所有与锁相关的代码。 

​    b.如果synchronized关键字能满足用户的需求，就用synchronized，因为它能简化代码 

​    c.如果需要更高级的功能，就用ReentrantLock类，此时要注意及时释放锁，否则会出现死锁，通常在finally代码释放锁 。