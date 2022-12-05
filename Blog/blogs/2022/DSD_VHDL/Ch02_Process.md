---
title: Ch02 Process
date: 2022-11-01
tags:
 - FPGA
 - VHDL
categories:
 - VHDL


---

# 

## Process

![image-20221101215408262](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101215408262.png)

+ process内部的语句是顺序执行的（并且会循环）
+ 但是process A 和 process B的语句是并发执行的![image-20221101215918766](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101215918766.png)
+ 只有在process run完一次之后，signal才会更新数值
+ ![image-20221101220320401](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101220320401.png)
+ 要么有sensitivity list，要么有wait语句
+ process里的参数必须要是可以读的，比如说A是output就不能作为sensitivity list
+ process会一直重复执行，如果sensitivity list中有人的值被改变了
+ ![image-20221101220837615](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101220837615.png)
+ 



## If

![image-20221101221007048](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221007048.png)![image-20221101221958714](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221958714.png)

+ 优先级
+ 可以被嵌套



## case

![image-20221101221718841](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221718841.png)![image-20221101221939750](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221939750.png)

+ 无优先级
+ 即使是并发执行的，但是statements还是顺序执行的
+ 不能有重复，并且要覆盖所有的情况![image-20221101222105020](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101222105020.png)







## 有两种process，第一种不一定一定给一个sequential的 logic，如图，combinational logic

![image-20221101222638204](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101222638204.png)



## Clock process

![image-20221101223127287](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101223127287.png)

+ 图中是上升沿的描述，记得加‘
+ **所有在时钟事件下的的assignment语句，都会生成一个flip-flop**
+ ![image-20221101223818080](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101223818080.png)
+ 在clock process中，if event必须要写在process最后，在if中可以嵌套别的if，但是不能写对应if event的else语句
+ clk不是关键字，可以取任何名字
+ clock event可以是else中的，下图中右边红色字是对的![image-20221104102812579](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104102812579.png)



## Synchronize reset

![image-20221104103046553](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103046553.png)

+ rst在clock的if内部： 在时钟上升沿读取reset的值



## Asynchronize reset

![image-20221104103242741](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103242741.png)

+ reset变了之后不用等上升沿下降沿



![image-20221104103625167](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103625167.png)

+ 两个assignment只生成一个ff（例外），a and b在ff的输入生成一个combination gate
+ ![image-20221104103902930](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103902930.png)
+ 如果if else赋值给了同一个信号，则会首先生成左边圈里的电路

![image-20221104133441521](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104133441521.png)

+ 如果if条件语句不完整（比如没有else），则会生成一个latch![image-20221104134020244](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104134020244.png)
+ clock' event and clock=1 也可以写成 rising_edge(clk)![image-20221104141435639](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104141435639.png)
+ 一个<=生成一个flip-flop，所以用variable，可以不生成![image-20221104141954712](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104141954712.png)