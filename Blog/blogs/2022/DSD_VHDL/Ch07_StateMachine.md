---
title: Ch07 State Machine
date: 2023-01-01
tags:
 - FPGA
 - VHDL
categories:
 - VHDL

---



## FSM

![image-20230110190819685](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110190819685.png)

![image-20230110190828800](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110190828800.png)

+ ![image-20230110190904439](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110190904439.png)
+ 第一个moore，第二个mealy![image-20230111103146932](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111103146932.png)
+ 右边是moore，因为和input无关![image-20230111103247311](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111103247311.png)



##### 给状态编码的时候，可能有多余的状态，就会引起异常，比如红绿灯，而且不会返回正确的状态

![image-20230110220410232](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220410232.png)

![image-20230110220422886](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220422886.png)

![image-20230110220428781](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220428781.png)

![image-20230110220438117](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220438117.png)



+ 解决方案1：把状态图画完整![image-20230110220538205](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220538205.png)
+ 解决方案2：重新选择状态编码![image-20230111000825044](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111000825044.png)



门电路会有延迟，为了避免出现不想要的状态可以在输出的地方加一个Flipflop，但是这样就会要把时钟信号设计的非常大![image-20230111000850909](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111000850909.png)



寄存器有好多D flipflop产生![image-20230111001100908](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111001100908.png)



FSM可以用State diagram或者ASM来表达

![image-20230111095743048](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111095743048.png)

+ 在state里面的是moore，在线上的是mealy



ASM

+ 一个框框是一个状态
+ 因为moore只和输入有关系，所以在状态改变的一开始，但是mealy会根据输入做一些判断

![image-20230111104536733](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111104536733.png)

![image-20230111105022241](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105022241.png)

![image-20230111105218046](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105218046.png)

![image-20230111105402179](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105402179.png)

+ 框把状态和两条输出边给框起来![image-20230111105531568](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105531568.png)



state的方框里是register：

![image-20230111111150162](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111111150162.png)



控制状态转换是transitions![image-20230111111217760](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111111217760.png)



输出与状态之间是moore![image-20230111111256256](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111111256256.png)



+ Distriburted RAM 不同步读，同步写、
  + 要实现同步读可以加一个FF
+ Block RAM 同步读，同步写
