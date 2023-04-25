---
title: Ch00_JavaThread
date: 2019-05-12
tags:
 - Java
categories:
 - Java

---

# JavaThread



**1. Thread.sleep(1000),线程在1000毫秒后是否会被唤醒？**

**2. Thread.sleep(0),有什么用？**



**UNIX的cpu竞争是用的时间片算法：**

+ 时间片算法：存在一张就绪进程列表，当一个线程的时间片用完时，会把该线程排到队列尾，如果在一个时间片内结束，CPU会马上进行切换



**WIN的cpu竞争策略是抢占式：**

+ 抢占式：当一个进程获得了CPU使用权，除非自己放弃CPU，否则会一直霸占CPU，该操作系统假设所有的进程都是“人品很好的”，会主动退出CPU。（当然会有算法检测，长时间霸占会强制挂起）

**Sleep函数的意思是告诉操作系统，我在未来多少毫秒内不参与CPU的竞争**



所以:

1. 不一定会被唤醒，因为参与竞争不代表能马上占用CPU，类似Resume函数，告诉CPU我要参与竞争了。

2. 有用，Thread.sleep(0),的作用就是触发操作系统重新进行一次CPU竞争，所以我们在大循环中经常会加上这句话，这样就给了其他线程比如paint线程获取CPU的能力，这样界面就不会出现假死。（并不是原来不竞争，而是增加大循环被打断的几率）



![image-20230425105803793](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105803793.png)

+ 在多线程中即使使用volatile都不能使i++保证原子性，因为i++的操作是可分割的，所以要保证原子性可以用原子类AtomicInteger以及其提供的方法

![image-20230425111154171](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111154171.png)

![image-20230425111228673](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111228673.png)

**Callable的实现方法：**

```java
public class Thread04 {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        ThreadTest04 th = new ThreadTest04();
        FutureTask<String> fu = new FutureTask<String>(th);//先要把实现callable接口的线程注册到Futuretask里
        new Thread(fu).start();//再new线程来执行这个task
        System.out.println(fu.get());//获取线程执行的返回值

    }
}
class ThreadTest04 implements Callable<String>{

    @Override
    public String call() throws Exception {
        System.out.println("start");
        return "success";
    }
}
```

![image-20230425111259149](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111259149.png)

![image-20230425111307953](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111307953.png)



**使用Callable、Future和FutureTask的好处**

![image-20230425111321473](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111321473.png)

**java定义线程有两种方式：**

- 实现Runnable接口
- 继承Thread类（Thread类也实现了Runnable接口）

在多线程中多使用接口的方式



**线程的状态有6种：**

1. 新建状态NEW：刚刚new出来，并没有启动
2. 可运行状态RUNNABLE：调用start方法时的状态，但是不一定竞争的到cpu资源
3. 阻塞BLOCKED
4. 等待WAITING：调用不带超时的Object的wait()方法、不带超时的Thread的join()方法、LockSupport的park()方法
5. 超时等待TIMED_WAITING：调用带有指定正等待时间的Object的wait()方法、Thread的join()方法、Thread的sleep()方法、LockSupport（不可重入锁）的parkNanos()方法、LockSupport的parkUntil()方法
6. 终止状态TERMINATED：线程调用终止或者run()方法执行结束后，线程即处于终止状态



**Thread类中的实例方法：**

- start()
- run()
- getId()
- getName()
- setPriority(int priority) 和 getPriority(): 优先级越高越优先执行
- isDaeMon() 和 setDaeMon(boolean on): 设置和判断是否为守护线程，set必须在线程start之前
- interrupt(): 线程遭到阻塞时抛出的中断信号，这样就可以退出阻塞状态，并不能中断线程
- isInterrupted():检测线程是否已经中断
- join(): 会使调用该线程的线程阻塞，直到该线程执行完毕，当然也可以指定超时时间



wait和sleep都会让出cpu资源

![image-20230425111408770](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111408770.png)

![image-20230425111430708](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111430708.png)



**Thread中的静态方法：**

- currentThread()方法是返回当前正在执行的线程对象的引用
- sleep()：让线程休眠一段时间，并不释放锁
- yield():暂停当前执行的线程对象，并执行其他线程。这个暂停是会放弃CPU资源的，并且放弃CPU的时间不确定，有可能刚放弃，就获得CPU资源了，也有可能放弃好一会儿，才会被CPU执行
- interrupted():测试当前线程是否已经中断，执行后具有将状态标识清除为false的功能。换句话说，如果连续两次调用该方法，那么返回的必定是false

syncronized锁是可以重入的，也适用于父子类继承的环境中，线程中的代码抛出异常后，会自动释放锁



**避免死锁的方法：synchronized不具备这个功能，但是我们可以使用Lock类中的tryLock方法去尝试获取锁，这个方法可以指定一个超时时限，在等待超过该时限之后变回返回一个失败信息**



**ThreadLocal**

ThreadLocal用于保存某个线程共享变量：对于同一个static ThreadLocal，不同线程只能从中get，set，remove自己的变量，而不会影响其他线程的变量。

1、ThreadLocal.get: 获取ThreadLocal中当前线程共享变量的值。

2、ThreadLocal.set: 设置ThreadLocal中当前线程共享变量的值。

3、ThreadLocal.remove: 移除ThreadLocal中当前线程共享变量的值。

4、ThreadLocal.initialValue: ThreadLocal没有被当前线程赋值时或当前线程刚调用remove方法后调用get方法，返回此方法值。

ThreadLocal使用场景为 用来解决 数据库连接、Session管理等。

```java
private static ThreadLocal<Connection> connectionHolder = new ThreadLocal<Connection>() {
                public Connection initialValue() {
                return DriverManager.getConnection(DB_URL);
                }
};
 
public static Connection getConnection() {
return connectionHolder.get();
}
```

**原理**

![image-20230425111519880](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111519880.png)

threadLocals是ThreadLocalMap类型的变量

![image-20230425111535070](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111535070.png)



线程共享变量缓存如下：

![image-20230425111609274](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425111609274.png)



这种存储结构的好处：

1、线程死去的时候，线程共享变量ThreadLocalMap则销毁。

2、ThreadLocalMap<ThreadLocal,Object>键值对数量为ThreadLocal的数量，一般来说ThreadLocal数量很少，相比在ThreadLocal中用Map<Thread, Object>键值对存储线程共享变量（Thread数量一般来说比ThreadLocal数量多），性能提高很多。

 

关于ThreadLocalMap<**ThreadLocal**, **Object**>弱引用问题：（ThreadLocal是弱引用类型的）

当线程没有结束，但是ThreadLocal已经被回收，则可能导致线程中存在ThreadLocalMap<**null**, **Object**>的键值对，造成内存泄露。（ThreadLocal被回收，ThreadLocal关联的线程共享变量还存在）。

虽然ThreadLocal的get，set方法可以清除ThreadLocalMap中key为null的value，但是get，set方法在内存泄露后并不会必然调用，所以为了防止此类情况的出现，我们有两种手段。

1、使用完线程共享变量后，显示调用ThreadLocalMap.remove方法清除线程共享变量；

2、JDK建议ThreadLocal定义为private static，这样ThreadLocal的弱引用问题则不存在了。





## **ReetrantLock:可重入的互斥锁**

可以借助condition来精确唤醒进程，和syncronize一样，在await()和signal()之前都要先获得锁，await()是释放锁的，singnal()可以唤醒进程，但是不能忘记要在finally中手动释放锁lock.unlock().

```java
private Lock lock = new ReentrantLock();
    private Condition condition = lock.newCondition();
    public void await()
    {
        try
        {
            lock.lock();
            System.out.println("await时间为：" + System.currentTimeMillis());
            condition.await();
            System.out.println("await等待结束");
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
        finally
        {
            lock.unlock();
        }
    }
    
    public void signal()
    {
        try
        {
            lock.lock();
            System.out.println("signal时间为：" + System.currentTimeMillis());
            condition.signal();
        }
        finally
        {
            lock.unlock();
        }
    }
```

另一大特点是可以设置公平锁或者非公平锁，所谓公平锁就是先排队先获得锁，syncronize是非公平锁，可能导致有些进程一直抢不到锁。要实现公平锁，只要在构造的时候传入true参数就可以

```java
private Lock lock = new ReentrantLock(true);
```



- getHoldCount()方法返回的是当前线程调用lock()的次数
- getQueueLength()方法用于获取正等待获取此锁定的线程**估计**数。注意"估计"两个字，因为此方法遍历内部数据结构的同时，线程的数据可能动态变化
- isFair()用来获取此锁是否公平锁
- hasQueuedThread(Thread thread)用来查询指定的线程是否正在等待获取指定的对象监视器
- hasQueuedThreads()用于查询是否有线程正在等待获取指定的对象监视器
- isHeldByCurrentThread()表示此对象监视器是否由当前线程保持
- isLocked()表示此对象监视器是否由任意线程保持
- tryLock()方法的作用是，在调用try()方法的时候，如果锁没有被另外一个线程持有，那么就获得该锁并返回true，否则返回false
- tryLock(long timeout, TimeUnit unit)是tryLock()另一个重要的重载方法，表示如果在指定等待时间内获得了锁，则返回true，否则返回false
- 1、getWaitQueueLength(Condition condition) 类似getQueueLength()，不过此方法的前提是condition。比如5个线程，每个线程都执行了同一个condition的await()方法，那么方法调用的返回值是5，因为5个线程都在等待获得锁
- hasWaiters(Condition condition)查询是否有线程正在等待与此锁有关的condition条件。比如5个线程，每个线程都执行了同一个condition的await()方法，那么方法调用的返回值是true，因为它们都在等待condition
- lockInterruptibly() 如果当前线程未被中断，则获取锁
- getWaitingThreads(Condition condition)返回一个collection，它包含**可能**正在等待与此锁相关给定条件的那些线程，因为构造结果的时候实际线程可能动态变化，因此返回的collection只是尽力的估计值



## **读写锁ReentrantReadWriteLock**

ReentrantLock虽然具有完全互斥排他的效果（即同一时间只有一个线程正在执行lock后面的任务），但是效率非常低。所以在JDK中提供了一种读写锁ReentrantReadWriteLock，使用它可以加快运行效率。

读写锁表示两个锁，一个是读操作相关的锁，称为**共享锁**；另一个是写操作相关的锁，称为**排他锁**。**多个Thread可以同时进行读取操作，但是同一时刻只允许一个Thread进行写入操作**。

```java
readLock().lock();
readLock().unlock();
```

sychronized 和reentrantlock都是可重入的锁

![image-20230425112008567](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112008567.png)



## **BlockingQueue**

阻塞队列所谓的"阻塞"，指的是**某些情况下线程会挂起（即阻塞），一旦条件满足，被挂起的线程又会自动唤醒**。使用BlockingQueue，不需要关心什么时候需要阻塞线程，什么时候需要唤醒线程，这些内容BlockingQueue都已经做好了

BlockingQueue既然是Queue的子接口，必然有Queue中的方法,以下为特有的方法：

**1）void put(E e) throws InterruptedException**

把e添加进BlockingQueue中，如果BlockingQueue中没有空间，则调用线程被阻塞，进入等待状态，直到BlockingQueue中有空间再继续

**2）void take() throws InterruptedException**

取走BlockingQueue里面排在首位的对象，如果BlockingQueue为空，则调用线程被阻塞，进入等待状态，直到BlockingQueue有新的数据被加入

**3）int drainTo(Collection<? super E> c, int maxElements)**

一次性取走BlockingQueue中的数据到c中，可以指定取的个数。通过该方法可以提升获取数据效率，不需要多次分批加锁或释放锁



另外几种队列实现方式

![image-20230425112049718](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112049718.png)

![image-20230425112103606](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112103606.png)



另外，也不要担心非单一生产者/消费者场景下的系统假死问题，缓冲区空、缓冲区满的场景BlockingQueue都是定义了不同的Condition，所以不会唤醒自己的同类。

![image-20230425112124229](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112124229.png)

- 有单级关联，也有多级关联（树形），一般开发中使用单级关联
- 线程组有自动关联特性，也就是在一个线程中创建一个线程组，这个线程组自动归属于当前线程组中，也就是成为了当前线程组的子线程组
- 根线程组就是系统线程组system
- 批量停止组内线程：调用了ThreadGroup中的interrupt()方法批量中断了线程组内的线程



## **中断：**

1.中断只是设置下标志位，true or false

2.标识位设不设置是别人的事情，处不处理是线程自己的事情，没有强制要求必须处理中断



## **线程池：**

线程池的作用就2个：

**1、减少了创建和销毁线程的次数，每个工作线程都可以被重复利用，可执行多个任务**

**2、可以根据系统的承受能力，调整线程池中工作线程的数据，防止因为消耗过多的内存导致服务器崩溃**

**线程池的类结构图：**

![image-20230425112226492](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112226492.png)



**ThreadPoolExecutor六个核心参数**

```java
public ThreadPoolExecutor(int corePoolSize,
                          int maximumPoolSize,
                          long keepAliveTime,
                          TimeUnit unit,
                          BlockingQueue<Runnable> workQueue,
                          ThreadFactory threadFactory,
                          RejectedExecutionHandler handler)
```

![image-20230425112247978](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112247978.png)



**ThreadPoolExecutor的使用很简单，前面的代码也写过例子了。通过execute(Runnable command)方法来发起一个任务的执行，通过shutDown()方法来对已经提交的任务做一个有效的关闭。尽管线程池很好，但我们要注意JDK API的一段话：**

!!**强烈建议程序员使用较为方便的Executors工厂方法**!!

- **Executors.newCachedThreadPool()（无界线程池，可以进行线程自动回收）：**

​         无界线程池，意思是不管多少任务提交进来，都直接运行。无界线程池采用了SynchronousQueue，采用这个线程池就没有workQueue容量一说了，只要添加进去的线程就会被拿去用。既然是无界线程池，那线程数肯定没上限，所以以maximumPoolSize为主了，设置为一个近似的无限大Integer.MAX_VALUE。 另外注意一下，单线程线程池和固定大小线程池线程都不会进行自动回收的，也即是说保证提交进来的任务最终都会被处理，但至于什么时候处理，就要看处理能力了。但是无界线程池是设置了回收时间的，由于corePoolSize为0，所以只要60秒没有被用到的线程都会被直接移除

- **Executors.newFixedThreadPool(int)（固定大小线程池）：**

​          固定大小的线程池和单线程的线程池异曲同工，无非是让线程池中能运行的线程编程了手动指定的nThreads罢了。同样，由于是选择了LinkedBlockingQueue，因此其实第二个参数maximumPoolSize同样也是无意义的

- **Executors.newSingleThreadExecutor()（单个后台线程）：**

​          单线程线程池，那么线程池中运行的线程数肯定是1。workQueue选择了无界的LinkedBlockingQueue，那么不管来多少任务都排队，前面一个任务执行完毕，再执行队列中的线程。从这个角度讲，第二个参数maximumPoolSize是没有意义的，因为maximumPoolSize描述的是排队的任务多过workQueue的容量，线程池中最多只能容纳maximumPoolSize个任务，现在workQueue是无界的，也就是说排队的任务永远不会多过workQueue的容量，那maximum其实设置多少都无所谓了



![image-20230425112323417](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112323417.png)



## **定时器Timer**

Timer可以指定任务的执行时间

**1. Timer的schedule(TimeTask task, Date time)：**在执行的日期执行一次任务，如果早于当前时间，则立即执行，但是不保证一定在这个时间执行，万一前一个任务执行时间长，就会延后执行

- 一个timmer中可以注册多个任务

**2. TimerTask的cancel()方法**：将自身从任务队列中清除

**3. Timer的schedule(TimerTask task, Date firstTime, long period)：**在指定的日期之后，按指定的间隔周期性地无限循环地执行某一任务

```java
private static Timer timer = new Timer();
    
static public class MyTask extends TimerTask
{
    public void run()
    {
        System.out.println("运行了！时间为：" + new Date());
    }
}
    
public static void main(String[] args) throws Exception
{
    MyTask task = new MyTask();
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String dateString = "2015-10-6 12:14:00";
    Date dateRef = sdf.parse(dateString);
    System.out.println("字符串时间：" + dateRef.toLocaleString() + " 当前时间：" + new Date().toLocaleString());
    timer.schedule(task, dateRef);
}
```

![image-20230425112351321](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112351321.png)



## **CountDownLatch：多个任务完成后通知多个任务继续，**

传统的wait和notify只能实现一个任务完成之后通知其他任务继续执行

```java
private static class WorkThread extends Thread
{
    private CountDownLatch cdl;
    private int sleepSecond;
        
    public WorkThread(String name, CountDownLatch cdl, int sleepSecond)
    {
        super(name);
        this.cdl = cdl;
        this.sleepSecond = sleepSecond;
    }
        
    public void run()
    {
        try
        {
            System.out.println(this.getName() + "启动了，时间为" + System.currentTimeMillis());
            Thread.sleep(sleepSecond * 1000);
            cdl.countDown();
            System.out.println(this.getName() + "执行完了，时间为" + System.currentTimeMillis());
        } 
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
    }
}
    
private static class DoneThread extends Thread
{
    private CountDownLatch cdl;
        
    public DoneThread(String name, CountDownLatch cdl)
    {
        super(name);
        this.cdl = cdl;
    }
        
    public void run()
    {
        try
        {
            System.out.println(this.getName() + "要等待了, 时间为" + System.currentTimeMillis());
            cdl.await();
            System.out.println(this.getName() + "等待完了, 时间为" + System.currentTimeMillis());
        } 
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
    }
}
    
public static void main(String[] args) throws Exception
{
    CountDownLatch cdl = new CountDownLatch(3);//这边设置多少任务完成之后唤醒await的任务
    DoneThread dt0 = new DoneThread("DoneThread1", cdl);
    DoneThread dt1 = new DoneThread("DoneThread2", cdl);
    dt0.start();
    dt1.start();
    WorkThread wt0 = new WorkThread("WorkThread1", cdl, 2);
    WorkThread wt1 = new WorkThread("WorkThread2", cdl, 3);
    WorkThread wt2 = new WorkThread("WorkThread3", cdl, 4);
    wt0.start();
    wt1.start();
    wt2.start();
}
```



**Semaphore**

**并发控制器**，是用于管理信号量的。构造的时候传入可供管理的信号量的数值，这个数值就是控制并发数量的，我们需要控制并发的代码，执行前先通过acquire方法获取信号，执行后通过release归还信号 。每次acquire返回成功后，Semaphore可用的信号量就会减少一个，如果没有可用的信号，acquire调用就会阻塞，等待有release调用释放信号后，acquire才会得到信号并返回。

Semaphore分为单值和多值两种：

1、单值的Semaphore管理的信号量只有1个，该信号量只能被1个，只能被一个线程所获得，意味着并发的代码只能被一个线程运行，这就相当于是一个互斥锁了

2、多值的Semaphore管理的信号量多余1个，主要用于控制并发数

```java
public static void main(String[] args)
{
    final Semaphore semaphore = new Semaphore(5);
        
    Runnable runnable = new Runnable()
    {
        public void run()
        {
            try
            {
               semaphore.acquire();                    
　　　　　　　　  System.out.println(Thread.currentThread().getName() + "获得了信号量,时间为" + System.currentTimeMillis());
               Thread.sleep(2000);
　　　　　　　　  System.out.println(Thread.currentThread().getName() + "释放了信号量,时间为" + System.currentTimeMillis());
            }
            catch (InterruptedException e)
            {
                e.printStackTrace();
            }
            finally
            {
                semaphore.release();
            }
        }
    };
    
    Thread[] threads = new Thread[10];
    for (int i = 0; i < threads.length; i++)
        threads[i] = new Thread(runnable);
    for (int i = 0; i < threads.length; i++)
        threads[i].start();
}
```

1. Semaphore可以指定公平锁还是非公平锁

2. acquire方法和release方法是可以有参数的，表示获取/返还的信号量个数



## **Exchanger**

Exchanger用于在两个线程之间进行数据交换，注意也只能在两个线程之间进行数据交换。线程会阻塞在Exchanger的exchange方法上，直到另外一个线程也到了同一个Exchanger的exchange方法时，二者进行数据交换，然后两个线程继续执行自身相关的代码。

```java
public static class ExchangerThread extends Thread
{
    private String str;
    private Exchanger<String> exchanger;
    private int sleepSecond;
    
    public ExchangerThread(String str, Exchanger<String> exchanger, int sleepSecond)
    {
        this.str = str;
        this.exchanger = exchanger;
        this.sleepSecond = sleepSecond;
    }
        
    public void run()
    {
        try
        {
            System.out.println(this.getName() + "启动, 原数据为" + str + ", 时间为" + System.currentTimeMillis());
            Thread.sleep(sleepSecond * 1000);
            str = exchanger.exchange(str);
            System.out.println(this.getName() + "交换了数据, 交换后的数据为" + str + ", 时间为" + System.currentTimeMillis());
        } 
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
    }
}
    
public static void main(String[] args)
{
    Exchanger<String> exchanger = new Exchanger<String>();
    ExchangerThread et0 = new ExchangerThread("111", exchanger, 3);
    ExchangerThread et1 = new ExchangerThread("222", exchanger, 2);
    et0.start();
    et1.start();
}
```



## **CyclicBarrier**

CyclicBarrier从字面理解是指循环屏障，它可以协同多个线程，让多个线程在这个屏障前等待，直到所有线程都达到了这个屏障时，再一起继续执行后面的动作。

```java
public static class CyclicBarrierThread extends Thread
{
    private CyclicBarrier cb;
    private int sleepSecond;
        
    public CyclicBarrierThread(CyclicBarrier cb, int sleepSecond)
    {
        this.cb = cb;
        this.sleepSecond = sleepSecond;
    }
        
    public void run()
    {
        try
        {
            System.out.println(this.getName() + "运行了");
            Thread.sleep(sleepSecond * 1000);
            System.out.println(this.getName() + "准备等待了, 时间为" + System.currentTimeMillis());
            cb.await();
            System.out.println(this.getName() + "结束等待了, 时间为" + System.currentTimeMillis());
        }
        catch (Exception e)
        {
            e.printStackTrace();
        } 
    }
}
    
public static void main(String[] args)
{
    Runnable runnable = new Runnable()
    {
        public void run()
        {
            System.out.println("CyclicBarrier的所有线程await()结束了，我运行了, 时间为" + System.currentTimeMillis());
        }
    };
    CyclicBarrier cb = new CyclicBarrier(3, runnable);
    CyclicBarrierThread cbt0 = new CyclicBarrierThread(cb, 3);
    CyclicBarrierThread cbt1 = new CyclicBarrierThread(cb, 6);
    CyclicBarrierThread cbt2 = new CyclicBarrierThread(cb, 9);
    cbt0.start();
    cbt1.start();
    cbt2.start();
}

```

![image-20230425112536751](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112536751.png)

可能有人觉得CyclicBarrier和CountDownLatch有点像，都是多个线程等待相互完成之后，再执行后面的代码。实际上，CountDownLatch和CyclicBarrier都是用于多个线程间的协调的，它们二者的几个差别是：



1、CountDownLatch是在多个线程都进行了latch.countDown()后才会触发事件，唤醒await()在latch上的线程，而执行countDown()的线程，执行完countDown()后会继续自己线程的工作；CyclicBarrier是一个栅栏，用于同步所有调用await()方法的线程，线程执行了await()方法之后并不会执行之后的代码，而只有当执行await()方法的线程数等于指定的parties之后，这些执行了await()方法的线程才会同时运行



2、CountDownLatch不能循环使用，计数器减为0就减为0了，不能被重置；CyclicBarrier提供了reset()方法，支持循环使用



3、CountDownLatch当调用countDown()方法的线程数等于指定的数量之后，可以唤起多条线程的任务；CyclicBarrier当执行await()方法的线程等于指定的数量之后，只能唤起一个BarrierAction

注意，因为使用CyclicBarrier的线程都会阻塞在await方法上，所以在线程池中使用CyclicBarrier时要特别小心，如果线程池的线程过少，那么就会发生死锁了