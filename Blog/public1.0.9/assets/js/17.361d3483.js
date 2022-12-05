(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{413:function(t,a,v){"use strict";v.r(a);var _=v(2),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ch04-network-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch04-network-layer"}},[t._v("#")]),t._v(" Ch04 Network Layer")]),t._v(" "),a("h2",{attrs:{id:"网络层提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络层提供的服务"}},[t._v("#")]),t._v(" 网络层提供的服务")]),t._v(" "),a("h3",{attrs:{id:"网络层的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络层的作用"}},[t._v("#")]),t._v(" 网络层的作用")]),t._v(" "),a("p",[t._v("负责在不同的网络之间(基于数据包的IP地址)尽力转发数据包，不负责丢包重传和接收顺序。")]),t._v(" "),a("p",[t._v("有点像送快递，一个人往另一个地方寄快递，每个快递走不同的路线，可能后发的先到了，也可能丢件了。但是网络层不管这些，只管寄快递。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image1.png",alt:"img"}})]),t._v(" "),a("p",[t._v("数据包在Internet中的传输，Internet既有局域网，又有广域网，既有光纤，又有铜线，无线，还有不同的协议，这是Internet复杂所在。")]),t._v(" "),a("p",[t._v("路由器是三层设备：能看到网络层的IP地址来选择路径。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image2.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"互联网络与虚拟互联网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#互联网络与虚拟互联网络"}},[t._v("#")]),t._v(" 互联网络与虚拟互联网络")]),t._v(" "),a("ol",[a("li",[t._v("互联网互联的设备")])]),t._v(" "),a("p",[t._v("中间设备又称为中间系统或中继(relay)系统。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("物理层中继系统：转发器(repeater)，有点像集线器。")])]),t._v(" "),a("li",[a("p",[t._v("数据链路层中继系统：网桥或桥接器(bridge)。")])]),t._v(" "),a("li",[a("p",[t._v("网络层中继系统：路由器(router)。")])]),t._v(" "),a("li",[a("p",[t._v("传输层/应用层中继系统：网关(gateway)器。")])])]),t._v(" "),a("p",[t._v("网关就是路由器接口的地址。一般是本网段第一个地址。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("网络需要解决的问题")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image3.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("虚拟网络把复杂的Internet看成一个网络，化简问题。虚拟互联网络就是逻辑互联网络，他的意思就是互联起来的各种物理网络的异构性本来就是客观存在的， 但是我们利用IP协议就可以使这些性能各异的网络从用户看起来好像是一个统一的网络，而不用考虑具体的网络异构细节。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image4.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"网络设备和osi参考模型的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络设备和osi参考模型的关系"}},[t._v("#")]),t._v(" 网络设备和OSI参考模型的关系")]),t._v(" "),a("p",[t._v("举例，PC4向PC3传输数据")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image5.png",alt:"img"}})]),t._v(" "),a("p",[t._v("PC：计算机；Hub：集线器；Switch：交换机；Router：路由")]),t._v(" "),a("p",[t._v("发送端(封装)：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("应用层准备要传输的数据；")])]),t._v(" "),a("li",[a("p",[t._v("传输层把文件进行分段并编号；(数据段)")])]),t._v(" "),a("li",[a("p",[t._v("网络层把传输层的每一个数据包增加原IP地址和目标IP地址；(数据包)")])]),t._v(" "),a("li",[a("p",[t._v("数据链路层把每个数据加上MAC地址；两种情况：(数据帧)")])])]),t._v(" "),a("p",[t._v("使用自己的子网掩码，判断自己和目标地址分别在哪个网段，若在同一个网段(不过路由器)，通过ARP协议广播的方式得到目标IP地址的MAC地址，然后就能封装出一个数据帧；如果子网掩码不是一个网段(用与运算)，通过ARP协议广播的方式得到路由器(网关)的MAC地址，然后把数据通过交换机发送到路由器M2，因为M2和M3是点对点通信，没有别的主机，所以它们之间的MAC地址就是FF。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("物理层把数据帧变成数字信号(bit流)")])]),t._v(" "),a("p",[t._v("接收端(解封)：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("交换机Hub0接收bit流，能对数据进行存储转发。它根据数据帧的MAC地址，确定数据是从哪来的，要去哪。")])]),t._v(" "),a("li",[a("p",[t._v("路由器M2获取交换机的数据包，识别其中的IP地址，根据路由表选择出口，它无法识别数据段内容。")])]),t._v(" "),a("li",[a("p",[t._v("路由器M2到M3是点对点通信，遵守PPP协议。")])]),t._v(" "),a("li",[a("p",[t._v("PC3收到bit流后，数据链路层发现MAC地址是自己的，去掉MAC地址给它的网络层，网络层去掉IP地址给传输层，传输层把数据给应用层，应用层把各个数据拼接起来。")])])]),t._v(" "),a("h3",{attrs:{id:"路由器-交换机-集线器会不会中病毒"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由器-交换机-集线器会不会中病毒"}},[t._v("#")]),t._v(" 路由器/交换机/集线器会不会中病毒")]),t._v(" "),a("p",[t._v("不会，路由器不能识别数据内容。它只负责信息的传递。但是病毒会影响网络设备。因为病毒会占用网络流量。")]),t._v(" "),a("h2",{attrs:{id:"arp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arp协议"}},[t._v("#")]),t._v(" ARP协议")]),t._v(" "),a("h3",{attrs:{id:"tcp-ip协议层次关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip协议层次关系"}},[t._v("#")]),t._v(" TCP/IP协议层次关系")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image6.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("IP协议：把数据包从一个网段转到另一个网段，就是用来选择路径用的。")])]),t._v(" "),a("li",[a("p",[t._v("ARP为IP服务，IP为ICMP/IGMP服务。")])])]),t._v(" "),a("h3",{attrs:{id:"arp协议的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arp协议的作用"}},[t._v("#")]),t._v(" ARP协议的作用")]),t._v(" "),a("p",[t._v("将IP地址通过广播(本网段，不通过路由器)，目标MAC地址是FF-FF-FF-FF-FF-FF，解析目标IP地址的MAC地址。")]),t._v(" "),a("p",[t._v("ARP是解决同一个局域网上的主机或路由器的IP地址和MAC地址的映射关系。如果所找的主机和原主机不在同一个局域网上，那么就要通过ARP找一个位于本局域网上的某个路由器的MAC地址，然后把分组发送给这个路由器，让这个路由器把分组转发给下一个网络。剩下的工作就由下一个网络来做。")]),t._v(" "),a("p",[t._v("从IP地址到MAC地址的解析是自动进行的，主机的用户对这种地址解析过程是不知情的。")]),t._v(" "),a("p",[t._v("只要主机或路由器要和本网络上的另一个已知IP地址的主机或路由器进行通信，ARP协议就会自动地将该IP地址解析为链路层所需要的MAC地址。")]),t._v(" "),a("h3",{attrs:{id:"使用arp的四种典型情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用arp的四种典型情况"}},[t._v("#")]),t._v(" 使用ARP的四种典型情况")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("发送方是主机，要把IP数据报发送到本网络的另一个主机，此时用ARP找到目标主机的MAC地址；")])]),t._v(" "),a("li",[a("p",[t._v("发送方是主机，要把IP数据报发送到另一个网络的另一个主机，此时用ARP找到本网络上一个路由器的MAC地址，剩下的工作由路由器进行；")])]),t._v(" "),a("li",[a("p",[t._v("发送方是路由器，要把IP数据报发送到本网络的另一个主机，此时用ARP找到目标主机的MAC地址；")])]),t._v(" "),a("li",[a("p",[t._v("发送方是路由器，要把IP数据报发送到另一个网络的另一个主机，此时用ARP找到本网络上一个路由器的MAC地址，剩下的工作由路由器进行；")])])]),t._v(" "),a("h3",{attrs:{id:"逆地址解析协议rarp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逆地址解析协议rarp"}},[t._v("#")]),t._v(" 逆地址解析协议RARP")]),t._v(" "),a("p",[t._v("只知道自己MAC地址就能获得其IP地址。")]),t._v(" "),a("h3",{attrs:{id:"arp欺骗-网络执法官-arp防火墙-实验课"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arp欺骗-网络执法官-arp防火墙-实验课"}},[t._v("#")]),t._v(" ARP欺骗/网络执法官/ARP防火墙-实验课")]),t._v(" "),a("p",[t._v("如果同一网段中有电脑中毒，可能会把中毒电脑的MAC地址传回去。")]),t._v(" "),a("h2",{attrs:{id:"网际控制报文协议icmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网际控制报文协议icmp"}},[t._v("#")]),t._v(" 网际控制报文协议ICMP")]),t._v(" "),a("h3",{attrs:{id:"icmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icmp"}},[t._v("#")]),t._v(" ICMP")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ICMP：在IP之上，用来测试网络层有没有故障。使用最多的命令是ping。")]),t._v(" "),a("ul",[a("li",[t._v("为了提高IP数据报交付成功的机会，在网络层使用了ICMP(Internet Control Message Protocol)。")])])]),t._v(" "),a("li",[a("p",[t._v("ICMP允许主机或路由器报告差错情况和提供有关异常情况的报告；")])]),t._v(" "),a("li",[a("p",[t._v("ICMP不是高层协议，而是IP层协议；")])]),t._v(" "),a("li",[a("p",[t._v("ICMP报文件为IP层数据报的数据加上数据报的首部，组成IP数据报发送出去。")])])]),t._v(" "),a("h3",{attrs:{id:"ping-packet-internet-grope-命令诊断网络故障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ping-packet-internet-grope-命令诊断网络故障"}},[t._v("#")]),t._v(" ping(Packet Internet Grope)命令诊断网络故障")]),t._v(" "),a("p",[t._v("PING是网络层命令。")]),t._v(" "),a("p",[t._v("TTL是数据报的生存时间每过一个路由器就会减1，作用是防止数据报在网络中循环。TTL默认初始值如下：")]),t._v(" "),a("p",[t._v("Linux 64")]),t._v(" "),a("p",[t._v("Windows 128")]),t._v(" "),a("p",[t._v("Unix 256")]),t._v(" "),a("p",[t._v("可以根据TTL值粗略判定对方是什么系统。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("PING,因特网包套所起，用于测试网络连接量的程序。ping发送一饿ICMP回声请求消息给目的地并报告是否收到所希望的ICMP回声应答。")])]),t._v(" "),a("li",[a("p",[t._v("ping指端对端联通，通常用作可用性检测，但是某些病毒会强行大量远程执行ping命令抢占你的网络资源，导致系统网速变慢。严禁ping入侵作为大多数防火墙的一个基本功能提供给用户进行选择。")])]),t._v(" "),a("li",[a("p",[t._v("如果打开IE浏览器访问网站失败，可以通过ping命令测试到Internet的网络连通，可以为你排除网络故障提供线索。")])])]),t._v(" "),a("h3",{attrs:{id:"ping和pathping命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ping和pathping命令"}},[t._v("#")]),t._v(" ping和pathping命令")]),t._v(" "),a("p",[t._v("QQ能登上，网页打不开是为什么？ 网络层没有问题，域名解析有问题。")]),t._v(" "),a("p",[t._v("pathping 能跟踪数据包路径，发现出问题的位置。")]),t._v(" "),a("p",[t._v("Windows上跟踪数据包路径的命令：tracerert 10.7.1.53")]),t._v(" "),a("p",[t._v("路由器上跟踪数据包路径的命令：traceroute 12.0.0.3")]),t._v(" "),a("h2",{attrs:{id:"igmp协议和多播组播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#igmp协议和多播组播"}},[t._v("#")]),t._v(" IGMP协议和多播组播")]),t._v(" "),a("p",[t._v("点到点通信：")]),t._v(" "),a("p",[t._v("广播：目标MAC地址全是F，目标IP地址全是255，也就是全是1.全网广播不能跨越路由器。")]),t._v(" "),a("p",[t._v("组播=多播：分组广播。")]),t._v(" "),a("h3",{attrs:{id:"访问多播视频节目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问多播视频节目"}},[t._v("#")]),t._v(" 访问多播视频节目")]),t._v(" "),a("p",[t._v("使用多播一般用于直播，网络会议，能够节省带宽。")]),t._v(" "),a("p",[t._v("IGMP协议的作用就是周期性扫描本网段内有没有主机在访问多播数据包。")]),t._v(" "),a("h2",{attrs:{id:"ip数据包的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip数据包的结构"}},[t._v("#")]),t._v(" IP数据包的结构")]),t._v(" "),a("p",[t._v("注意，ARP数据包不是这个格式。")]),t._v(" "),a("p",[t._v("首部：第一部分是固定长度，20字节，是所有IP数据包必须具有的。后一部分是可选字段，长度可变。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image7.png",alt:"img"}})]),t._v(" "),a("p",[t._v("每一行32bit相当于1个字节，一共5行，共20字节。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image8.png",alt:"img"}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("版本：用来表示TCP/IP是哪个版本，ipv4还是ipv6.")])]),t._v(" "),a("li",[a("p",[t._v("区分服务：确定更高的传输优先级。")])]),t._v(" "),a("li",[a("p",[t._v("总长度：确定数据部分长度。一共是16位，最多有2^16-1=65535字节。")])])]),t._v(" "),a("ul",[a("li",[t._v("注意，网络层，数据包最大65535字节；而数据链路层数据最大是1500字节，是不一样的。所以说，一旦超过数据链路层的最大要求时(网络层数据部分超过1480字节)，数据包会分片。最大传输单元MTU。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image9.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("数据包分片：把数据分割，分别添加IP地址，通过网络发给目标MAC地址。目标在通过网络层拼接。传送过程中可能会丢包，或者后发的先到(泪滴攻击就是利用目标机发送破坏的IP包(重叠的包货过大的包负荷)可以通过TCP/IP协议来瘫痪各种不同的操作系统)。所以需要编号。")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("标识：如果出现数据包分片，那么标识用来确定哪些数据包是需要组合的。")])]),t._v(" "),a("li",[a("p",[t._v("标志：确定该数据包是完整的还是分片中的一部分。占3位，只有前两位有用，标志字段最低位是MF(More Fragment)，MF=1表示后面还有分片，MF=0表示最后一个分片。标志字段中间一位是DF(Don’t Fragment)，只有DF=0才允许分片。")])]),t._v(" "),a("li",[a("p",[t._v("片偏移：偏移等于当前字节在数据部分的第几个再除以8.(下图是一个举例)")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image10.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[t._v("生存时间：就是TTL，time to live，每过一个路由器就减1。8位二进制。防止数据包在网络中循环。")])]),t._v(" "),a("li",[a("p",[t._v("协议：用协议号标识数据部分是什么数据。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image11.png",alt:"img"}})]),t._v(" "),a("blockquote",[a("p",[t._v("ICMP协议号：1；")]),t._v(" "),a("p",[t._v("IGMP协议号：2；")]),t._v(" "),a("p",[t._v("TCP协议号：6；")]),t._v(" "),a("p",[t._v("UDP协议号：17；域名解析")]),t._v(" "),a("p",[t._v("IPv6协议号：41；")]),t._v(" "),a("p",[t._v("OSPF协议号：89；")])]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("首部检验和：16位，只检验数据报的首部，不检验数据部分。这里不是采用CRC检验码而是采用简单的计算方法。每经过一个路由器就会检验一次。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image12.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[a("p",[t._v("源地址和目的地址都是IP地址，32位，只符合IPv4。IPv6是128位。")])]),t._v(" "),a("li",[a("p",[t._v("可变部分：一般没用。")])])]),t._v(" "),a("h2",{attrs:{id:"ip协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip协议"}},[t._v("#")]),t._v(" IP协议")]),t._v(" "),a("ol",[a("li",[t._v("网络畅通的条件")])]),t._v(" "),a("p",[t._v("沿途路由器必须知道下一跳给谁，数据包有去有回。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image13.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"静态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态路由"}},[t._v("#")]),t._v(" 静态路由")]),t._v(" "),a("p",[t._v("需要管理员告诉路由器所有没有直连的网络下一跳给谁。")]),t._v(" "),a("p",[t._v("适合于小规模网络，不能自动调整路由。")]),t._v(" "),a("h3",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[t._v("#")]),t._v(" 动态路由")]),t._v(" "),a("ol",[a("li",[t._v("RIP协议")])]),t._v(" "),a("p",[t._v("周期性广播(30s)路由表，选择路径的依据是最少的跳数，最大跳数是15跳，所以一般不适合大网络。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("OSPF协议")])]),t._v(" "),a("p",[t._v("根据带宽选择路径。")]),t._v(" "),a("h2",{attrs:{id:"子网掩码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子网掩码"}},[t._v("#")]),t._v(" 子网掩码")]),t._v(" "),a("p",[t._v("能够帮助路由器判断对应主机是否在同一个网段中。")]),t._v(" "),a("h2",{attrs:{id:"abcde类网络地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abcde类网络地址"}},[t._v("#")]),t._v(" ABCDE类网络地址")]),t._v(" "),a("p",[t._v("网络地址(网络号)唯一指定了每个网络。同一网络中的每台计算机都共享相同的网络地址，并用它作为自己IP地址的一部分。ABC对应的子网掩码分别是255.0.0.0和255.255.0.0和255.255.255.0")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image14.png",alt:"img"}})]),t._v(" "),a("p",[t._v("特殊的几个地址")]),t._v(" "),a("p",[t._v("127.0.0.1 本地换回地址")]),t._v(" "),a("p",[t._v("169.254.0.0")]),t._v(" "),a("p",[t._v("10.0.0.0，172.16.0.0–172.31.0.0，192.168.0.0–192.168.255.0 保留的私网地址")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image15.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"子网划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子网划分"}},[t._v("#")]),t._v(" 子网划分")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image16.png",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image17.png",alt:"img"}})]),t._v(" "),a("p",[t._v("注意，全为1是广播，所以63，127，191，254不选")])])}),[],!1,null,null,null);a.default=r.exports}}]);