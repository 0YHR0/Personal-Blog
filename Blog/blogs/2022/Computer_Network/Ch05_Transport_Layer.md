---
title: Ch05 Transport Layer
date: 2018-09-30
tags:
 - network
categories:
 - Computer_network

---

# Ch05 Transport Layer

+ 传输层协议UDP和TCP

+ 网络安全

+ TCP可靠传输的实现

+ TCP的流量控制

+ TCP的拥塞控制

+ TCP的运输连接管理

## OSI和DoD模型

下图必须背下来。尤其是传输层和网络层的协议。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image1.png)

传输层最大数据包是65535字节，而网络层数据最大只有1480字节。所以需要分段，但是只要分段，就有可能丢包，因为网络层不负责可靠传输。所以要求服务器和客户端保持会话，直到数据传输完成。

+ TCP(Transmission Control Protocol)传输控制协议

应用场景：需要将要传输的文件分段传输时；就需要TCP协议来建立会话实现可靠传输；同时也有流量控制功能。(例如QQ传文件)

查看会话 netstat -n

查看建立会话的进程 netstat -nb

+ UDP(User Data Protocol)用户数据报协议

应用场景：一个数据包就能完成数据通信；不需要建立会话和流量控制；多播/广播；是一种不可靠传输。(例如QQ聊天，屏幕广播)

## 传输层协议和应用层协议的关系

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image2.png)

1. TCP和UDP协议和不同的端口即可对应一个应用层的协议。注意，53大部分是与UDP相连。

2. 熟知数值一般为0-1023，登记端口号数值1024-49151，客户端口号数值为49152-65535.

3. 常用的应用层协议使用的端口(号)：

> http = TCP + 80
>
> Https = TCP + 443
>
> RDP = TCP + 3389
>
> ftp = TCP + 21
>
> 共享文件夹 = TCP + 445
>
> SMTP = TCP + 25
>
> POP3 = TCP + 110
>
> telnet = TCP + 23
>
> SQL = TCP + 1433
>
> DNS = UDP + 53
>
> (注意与4.6 的协议号的区别)



## 服务和应用层协议的关系

防火墙是基于网卡的，只打开必要的端口，不必要的端口不允许接收数据，不影响服务的运行和监听。

服务使用TCP或UDP的端口侦听客户端请求；

客户端使用IP地址定位服务器，使用目标端口，定位服务；

可以在服务器网卡上设置只开放必要的端口，实现服务器网络安全。

### 如何在Windows上安装服务

DNS服务

Web服务

SMTP

POP3

### 如何查看服务侦听的端口

netstat -a

netstat -an 以数字的形式查看端口

netstat -n 查看建立的会话

netstat -nb 查看建立会话的进程

telnet 192.168.80.100 3389 测试到远程计算机某个端口是否打开

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image3.png)

### 如何更改服务使用默认端口

可以迷惑病毒，使系统更加安全。

### 如何设置Windows网络安全

设置本地连接 TCP/IP筛选

## 传输层功能和端口范围

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image4.png)

### 传输层协议和网络层协议的主要区别

网络层实现如何把数据包从这个地址(服务器)发送到另一个地址(服务器)。

传输层实现如何让这个应用程序找到对应计算机的应用程序(相对应的应用程序实现逻辑通信)。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image5.png)

### 传输层的主要功能

1. 传输层为应用进程之间提供了端到端的逻辑通信(但网络层是为主机之间提供逻辑通信)。

2. 传输层还要对收到的报文进行差错检验。

3. 传输层提供面向连接(TCP)和无连接(UDP)的服务。

### 传输层的端口

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image6.png)

1. TCP的端口

端口用一个16位端口号进行标志。

端口号只具有本地意义，即端口号只是为了标志本计算机应用层的各进程。在Internet中不同计算机的相同端口号是没有联系的(最好不要有冲突)。

## UDP协议

1. UDP是无连接的，即发送数据之前不需要建立连接。

2. UDP使用尽最大努力交付，即不保证可靠交付，同时也不使用拥塞控制。

3. UDP是面向报文的，适合多媒体通信的要求。

4. UDP支持一对一，一对多，多对一，多对多交互通信。

5. UDP首部开销小，只有8个字节。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image7.png)

### UDP的首部格式

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image8.png)

首部中的长度指的是UDP用户数据报的长度(首部+数据)。

伪首部用于检验和，我的理解是伪首部是IP数据包首部的后部分。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image9.png)

##  TCP协议

1. TCP是面向连接的传输层协议。(三次握手)

2. 每一条TCP连接智能有两个端点(endpoint)，每一条TCP连接只能时点对点的(一对一)。

3. TCP提供可靠交付的服务。(确保不丢包)

4. TCP提供全双工通信。(因为需要接收端的反馈，例如如果接收端处理不过来，可让发送端慢一点，流量控制)

5. 面向字节流。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image10.png)

如果要传输一个比较大的数据，首先一次只会传输一小块，这个数据块的大小是没有规律的。加上数据包数据帧的头，发送给接收端，接收端去掉首部，再次拼接。

### TCP的连接

1. TCP把连接作为最基本的抽象。

2. 每一条TCP连接有两个端点。

3. TCP连接的端点不是主机，不是主机的IP地址，不是应用程序，也不是传输层协议端口，TCP连接的端点叫 套接字(socket).

+ 套接字socket = (IP地址:端口号)

+ 每一条TCP连接唯一地被通信两端的两个套接字所确定，即：

+ TCP连接 ::= {socket1, socket2} = {(IP1:port1), (IP2:port2)}

4. 端口号拼接到IP地址即构成了套接字。

##  TCP如何实现可靠传输

1. 可靠传输的工作原理——停止等待协议。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image11.png)

+ 在发送完一个分组后，必须暂时保留已发送的分组的副本。

+ 分组和确认分组都必须进行编号。

+ 超时计时器的重传时间应当比数据在分组传输的平均往返时间更长一些。

2. 确认丢失和确认迟到

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image12.png)

3. 可靠通信的实现

+ 使用上述的确认和重传机制，微秒就可以在不可靠的传输网络上实现可靠的通信。

+ 这种可靠传输的协议常称为自动重传请求ARQ(Automatic Repeat reQuest)。

+ ARQ表明重传的请求是自动进行的。接收方不需要请求发送方重传某个出错的分组。

+ 缺点，信道利用率低。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image13.png)

+ 信道利用率U

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image14.png)

4. 流水线传输(发送方)

发送方可连续发送多个分组，不必每发完一个分组就停顿下来等待对方的确认。由于信道上一直有数据不间断的传送，这种传输方式可获得很高的信道利用率。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image15.png)

5. 连续ARQ协议

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image16.png)

如果1确认收到了，则滑动窗口。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image17.png)

如果12收到了，3没有收到，则滑动窗口会会回溯到3位置，重新发送。

6. 累计确认(接收方)

+ 接收方一般采用累计确认的方式。

  + 优点：容易实现，信道利用率高。

  + 缺点：不能向发送方反映出接收方已经正确收到的所有分组的信息。

##  TCP报文段的首部格式

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image18.png)

1. 源端口：2个字节16位。

2. 目的端口：2个字节16位。

3. 序号：当前数据的第一个字节在整个文件中的序号。

4. 确认号ack：接收端发送，提示发送端下一次该发的数据在整个文件中的序号。接收端收到后，会把这个序号之前的数据从缓存中删掉。

5. 数据偏移：当前TCP报文段第多少个字节后是TCP的数据部分了。数据偏移最多表示1111，即15，他最多可以表示15乘以4，即60个字节的偏移量，所以选项+填充最多只能是40个字节。

6. 保留：6位，无作用。

7. URG：urgent，意思是优先级高，发送端优先发送，而不是在缓存中排队。

8. ACK：acknowledge，1意味着确认建立了会话。

9. PSH：1意味着接收端优先读取，而不是在缓存中排队。

10. RST：reset，1意味着TCP会话出现严重错误，必须释放和重新连接。

11. SYN：同步。1意味着要发起会话。

12. FIN：finish，1意味着释放连接。

13. 窗口：接收端先发，发送端根据接收端的窗口尺寸确定发送端窗口尺寸。

14. 检验和：

15. 紧急指针：只有URG为1才有用。

### 抓包分析P64

1. 

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image19.png)

第一步，ARP，建立可靠传输

第二步，UDP(DNS同时占用UDP和TCP的53端口)，域名解析

第三步，TCP，识别网关MAC地址

2. cmd打开控制台如下，当前是建立了2个会话。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image20.png)

3. 浅蓝：请求的数据包；深蓝：得到的结果；

192是我方地址；8是服务器地址；

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image21.png)

4. 两个SYN是双方确认建立了会话，MSS意思是最大数据包1460字节，web端(219.148.36.48)最多能缓存win=64240字节，我端(192.168.80.63)最多能缓存win=65535字节,如果某一方发了另一方win字节个数据对方都没有确认，那么就暂停。标记为TCP这三行(12,13,14)，不光是建立对话，还协商了一些参数。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image22.png)

5. 第15行，开始正式通信，HTTP。GET的意思是我要访问这个网站了。白框内写着各个层的数据首部的结构。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image23.png)

目标端口Src Port是80，源端口Dst Port是1057，序号Sep是1，确认号Ack是1，数据部分长度是1-203字节。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image24.png)

6. 219->192是发送网页信息，192->219是确认反馈。注意，16第一次发送数据和19反馈接收是没有数据len=0。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image25.png)

从建立会话，到传输数据到确认反馈的一个过程如下，15-19。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image26.png)

## TCP如何实现可靠传输P67

### 以字节为单位的滑动窗口技术

A的发送窗口是由B的接受窗口长度决定的。

在没有收到B确认收到之前，A不能删掉滑动窗口内的内容。

A可以持续给B发送，直到A的滑动窗口内数据都发了。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image27.png)

B收到后给A发确认收到的反馈ACK，序号是下一个应该发送的字节的序号，A收到后，就可以滑动窗口到对应的位置。例如B反馈ACK是7，那么A的滑窗可以移动到7位置，1-6删除。21-26可以发送。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image28.png)

B收到1-6之后，也开始滑窗，B的应用程序可以读取1-6的数据。B的滑窗继续接收。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image29.png)

以上是正常状态下的情况。如果出现丢失情况，例如7-9丢失，此时B反馈的ACK=7.因为10-12收到了，因此B发送SACK(选择性确认)，A只发送7-9.

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image30.png)

### 超时重传时间的确定

TCP美发送一个报文段，就对这个报文段设置一次计时器。只要计时器设置的重传时间到了，但是还没有收到数据，那么就重传这一报文段。

RTTs(new) = (1 - alpha) x (RTTs(old)) + alpha x (new RTT样本)

超时重传时间应略大于上面得出的加权平均往返时间RTTs。alpha推荐值是0.125.

这个公式的目的是根据网速和带宽的实时情况调整往返时间。

## TCP如何实现流量控制P68

解决通信两端处理时间不一样的问题。通过实时调整滑窗尺寸的大小(尺寸甚至可以是0)来实现流量控制。接收端主动调整滑窗大小，发送端根据接收端发送的报文调整相应的滑窗。发送端也会定时发送报文向接收端确认滑窗信息，避免接收端发送的相关调整滑窗大小的报文丢失带来的影响。

## TCP如何避免网络拥塞

1. 出现资源拥塞的条件：对资源需求的总和>可用资源。

2. 拥塞控制是一个全局性的过程，涉及到所有的主机，所有的路由区，以及与降低网络传输性能有关的所有因素。

3. 流量控制往往指在给定的发送端和接收端之间的点对点通信量的控制，它所要做的就是抑制发送端发送数据的速率，以便使接收端来得及接收。

### 拥塞控制起到的作用

红线和绿线之间是数据丢失内容。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image31.png)

### 慢开始和拥塞避免

1. 发送方维持 拥塞窗口cwnd(congestion window)

2. 发送方控制拥塞窗口的原则是：

只要网络没有出现拥塞，拥塞窗口就再增大一些，以便把更多的分组发送出去；

只要网络出现拥塞，拥塞窗口就减少一些，以减少注入到网络中的分组数。

3. 慢开始算法的原理

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image32.png)

4. 设置慢开始门限状态变量ssthresh

慢开始门限状态变量ssthresh的用法如下：

当cwnd<ssthresh时，使用慢开始算法；

当cwnd>ssthresh时，停止使用慢开始算法，改用拥塞避免算法；

当cwnd=ssthresh时，使用慢开始算法或拥塞避免算法均可；

5. 拥塞避免算法的思路

让拥塞窗口cwnd缓慢地增大，即每经过一个往返时间RTT就把发送方的拥塞窗口cwnd加1，而不是加倍，使拥塞窗口cwnd按线性规律缓慢增长。

6. 当网络出现拥塞时对策

无论是在慢开始阶段还是在拥塞避免阶段，只要发送方判断网络出现拥塞(其根据就是没有按时收到确认)，就要把慢开始门限ssthresh设置为出现拥塞时的发送方窗口值的一半(但是不能小于2)。

然后把拥塞窗口cwnd重新设置为1，执行慢开始算法。

这样做的目的就是要迅速减少主机发送到网络中的分组数，使得发生拥塞的路由器有足够的时间吧队列中积压的分组处理完毕。

7. 慢开始和拥塞避免算法的实现举例

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image33.png)

+ 拥塞避免并非指完全能够避免拥塞。利用以上的措施要完全避免网络拥塞还是不可能的。

+ 拥塞避免是说在拥塞避免阶段吧拥塞避免窗口控制为按线性规律增长，使网络比较不容易出现拥塞。

### 快重传和快恢复

快重传算法首先要求接收方每收到一个失序的报文段后就立即发出重复确认，这样做可以让发送方及早知道有报文段没有到达接收方。

当发送端收到连续三个重复的确认时，就执行“乘法减少”算法，即把慢开始门限ssthresh减半，但拥塞窗口cwnd现在不设置为1，而是设置为慢开始门限ssthresh减半后的数值，然后开始执行拥塞避免算法(“加法增大”)，使拥塞窗口缓慢地线性增大。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image34.png)

### 发送窗口的实际上限制

取接收方窗口和 拥塞窗口 这两个变量中的较小值。

发送窗口的上限制 = min {rwnd, cwnd}.

## TCP传输连接管理

传输连接有三个阶段，即：连接建立，数据传送，连接释放。

TCP连接的建立都是采用客户服务器方式。

主动发起连接建立的应用进程叫做客户(client)。

被动等待连接建立的应用进程叫做服务器(server)。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image35.png)

头两次握手除了确定双方都能联通外，还通知了双方的一些端口信息。

第三次握手原因：假如把三次握手改成仅需要两次握手，死锁是可能发生的。作为例子，考虑计算机A和B之间的通信，假定A给B发送一个连接请求分组，B收到了这个分组，并发送了确认应答分组。按照两次握手的协定，B认为连接已经成功地建立了，可以开始发送数据分组。可是，B的应答分组在传输中被丢失的情况下，A将不知道B是否已准备好，A认为连接还未建立成功，将忽略B发来的任何数据分组，这样就形成了死锁。

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image36.png)

释放链接

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image37.png)