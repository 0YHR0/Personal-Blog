---
title: Ch05 Multicast
date: 2022-06-22
tags:
 - Distributed System
categories:
 - Distributed System

---

# Multicast

- 多播：系统把信息发送给一个多播地址（使用D类IP地址（224.0.0.1到239.255.255.255））。这个多播地址是一个组，任何加入这个组的client会收到多播信息, 但是发送的信息会携带目标端口号，只有监听此端口号的client才不会过滤掉这个信息。一个process可以加入多个多播组

  

  - 好处：

    - 不用知道client的ip地址

    - 只要发送一个信息到多播ip就可以，不会对server造成很大的网络拥塞

  - client收到的消息顺序可能和发送端不一样
    - 为了解决这个问题，可以用一个队列来接收数据，一个队列按照我们自己的逻辑排列数据，再给上层应用消费数据（receive+deliver）

  - failure module：
    - 不知道消息被接受到没有，所以只能omission failures

- Open group 和 close group

  

  - IP multicast是open group

- reliable：validity(所有发送的消息都会被收到)+integrity（cannot be changed, omited... and 只会发送一次）

  

  - 取得validity方法：![img](https://api2.mubu.com/v3/document_image/6cfd302d-59ac-41f9-b137-da324d5d4ea1-14899999.jpg)

  - 取得integrity方法：![img](https://api2.mubu.com/v3/document_image/fa9ea8ea-902c-405a-b9ff-d55acc2faa06-14899999.jpg)

- 原始的multicast方法：所有的消息最终都会被送到

  

  - 给每个process建立一个一对一通信，发送信息并等待ack，会导致占用过多资源

- basic multicast over IP：保证消息顺序的方法：进程收到消息分为（receive+deliver）进程在发送消息的时候，带上消息的序列号，进程在接受消息的时候，记录自己收到的序列号，如果大于原序列号 + 1，说明有消息漏掉，再问sender要，如果小于原序列号+1， 说明这个消息已经收过了，丢弃，如果等于原序列号+1，那么deliver这个消息给上层应用来消费![img](https://api2.mubu.com/v3/document_image/40b8968a-f6e5-4601-bcb5-e8c35c60d5d6-14899999.jpg)

- 在basic multicast中，如果有人crash了，会导致不正确的结果，所以要用reliable multicast：

  

  - 实现算法：每个进程维护一个received表，里面存放收到的信息，当有进程广播信息的时候，其他进程收到这个信息，且这个信息不在自己的received表中，把这个信息放入received表中，然后询问其他进程是否收到了信息，是否要deliver（多了这一步【before delivery】），如果都同意，那么最终deliver

    

    - 因为是底层使用了一对一通信，所以实现了integrity

    - validity：所有processor包括自己收到了消息

    - 缺单：heavy，需要发送很多信息

- 把reliable multicast用在basic multicast over ip 上： S是自己（p）发送消息的序列号，Rq是收到的最后一个q发来的消息的序列号，把此信息（Sp和Rq）发给group的其他进程。当其他进程收到了消息，如果接受到的消息确实是p发来的下一个消息，把自己的Rp +1，如果比自己的Rp小，说明已经接受过了这个消息，就丢弃，如果Sp大了，说明中间丢失了p发来的消息，如果自己的Rq小于p发来的Rq，说明自己丢失了Rq的消息，所以回复negative ack来告诉p不能deliver q的消息

  

  - 分析：![img](https://api2.mubu.com/v3/document_image/1f585b87-752f-4261-b7ad-ad1d2243c4a0-14899999.jpg)

- Ordered multicast

  

  - FIFO：所有的进程deliver message的顺序都和sender send message的顺序一样，是站在sender的角度看的（简单实现，只要在sender编号就可以）

  - Causal ordering：遵循 happen-before 原则的消息必须按照顺序。（是Causal ordering一定是FIFO，但是反之不是）（需要vector clock来实现，比较复杂）

  - total ording：所有的进程deliver message的顺序都是一样的就可以，不一定需要遵循FIFO或者causal ordering。FIFO也不一定total ording，因为有多个进程在发送消息（延迟以及对带宽的占用很大，very expensive）用sequence number来唯一的确定消息的顺序

  - Example：

    

    - 第一组是total ordering，因为三个进程收到消息的顺序都是一样的

    - 第二组不是total ordering，因为第三个进程收到消息的顺序和前两个不一样，但是是FIFO，因为从第一个进程来看，他发送了两个消息，这两个消息在其他进程收到的先后顺序是一样的（先收到空心盒子，再收到实心黑色盒子）

    - 第三组：C1导致了C3，所以C3的消息要晚于C1deliver，并且C1导致了C2的顺序也满足，所以C2的消息要晚于C1deliver，所以是causal ordering

  - Example![img](https://api2.mubu.com/v3/document_image/2550f4a4-f662-46d4-9db9-755550de3cb0-14899999.jpg)

- 使用basic multicast（所有的消息最终都会被送到）实现FIFO ordering：

  - 还是维护S 和R![img](https://api2.mubu.com/v3/document_image/e0f6cffa-5392-424b-84cc-3553f3498472-14899999.jpg)

  - 在发送消息的时候，把Sp+1 发送出去，接受消息方用自己的Rp来检验是否是下一个应该收到的消息，如果是的，就deliver，如果不是，就把他放到holdback队列中，等待收到下一个消息![img](https://api2.mubu.com/v3/document_image/6f06b1bc-92b5-430f-b5ed-b7e125bac584-14899999.jpg)

- 使用sequencer来实现total ordering：sequencer是用来定义消息顺序的中间机构

  

  - 一个进程把消息发送给这个组的sequencer和其他进程

  - 其他进程收到消息后，放到holdback队列中

  - sequencer收到消息后，给这个消息安排一个编号（不一定FIFO或者causal），并向group发送

  - group在收到编号之后，确定是自己下一个应该deliver的消息，就从holdback queue中取出deliver，否则等待消息到来

  - 原理：![img](https://api2.mubu.com/v3/document_image/e56d4533-b13c-4b2c-a6e6-47d212d02669-14899999.jpg)

- ISIS算法实现total ordering（与其他进程商量得出sequence number）

  

  - p1进程给别的进程发送消息，说“让我们商量一下此消息的sequence number是什么”，然后取大家发送回来的proposed number中的最大值，发给其他processor。其他processor中不断取出holdback queue中sequence number最小的消息deliver掉。

  - 详细版：![img](https://api2.mubu.com/v3/document_image/5a6956a4-8c0a-4491-860c-609db00bb092-14899999.jpg)

  - 非常heavy，要发一次多播和多次一对一通信，就为了确定一个sequence number

- 使用vector clock来取得causal ordering：CO：causal order

  

  

  - Comments：R-multicast=reliable multicast， B-multicast=basic multicast第一条很重要，帮助理解![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/f6254113-abad-4afe-944e-ccec0783779b-14899999.jpg)