(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{438:function(t,a,v){"use strict";v.r(a);var _=v(2),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ch05-transport-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch05-transport-layer"}},[t._v("#")]),t._v(" Ch05 Transport Layer")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("传输层协议UDP和TCP")])]),t._v(" "),a("li",[a("p",[t._v("网络安全")])]),t._v(" "),a("li",[a("p",[t._v("TCP可靠传输的实现")])]),t._v(" "),a("li",[a("p",[t._v("TCP的流量控制")])]),t._v(" "),a("li",[a("p",[t._v("TCP的拥塞控制")])]),t._v(" "),a("li",[a("p",[t._v("TCP的运输连接管理")])])]),t._v(" "),a("h2",{attrs:{id:"osi和dod模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osi和dod模型"}},[t._v("#")]),t._v(" OSI和DoD模型")]),t._v(" "),a("p",[t._v("下图必须背下来。尤其是传输层和网络层的协议。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image1.png",alt:"img"}})]),t._v(" "),a("p",[t._v("传输层最大数据包是65535字节，而网络层数据最大只有1480字节。所以需要分段，但是只要分段，就有可能丢包，因为网络层不负责可靠传输。所以要求服务器和客户端保持会话，直到数据传输完成。")]),t._v(" "),a("ul",[a("li",[t._v("TCP(Transmission Control Protocol)传输控制协议")])]),t._v(" "),a("p",[t._v("应用场景：需要将要传输的文件分段传输时；就需要TCP协议来建立会话实现可靠传输；同时也有流量控制功能。(例如QQ传文件)")]),t._v(" "),a("p",[t._v("查看会话 netstat -n")]),t._v(" "),a("p",[t._v("查看建立会话的进程 netstat -nb")]),t._v(" "),a("ul",[a("li",[t._v("UDP(User Data Protocol)用户数据报协议")])]),t._v(" "),a("p",[t._v("应用场景：一个数据包就能完成数据通信；不需要建立会话和流量控制；多播/广播；是一种不可靠传输。(例如QQ聊天，屏幕广播)")]),t._v(" "),a("h2",{attrs:{id:"传输层协议和应用层协议的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层协议和应用层协议的关系"}},[t._v("#")]),t._v(" 传输层协议和应用层协议的关系")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image2.png",alt:"img"}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("TCP和UDP协议和不同的端口即可对应一个应用层的协议。注意，53大部分是与UDP相连。")])]),t._v(" "),a("li",[a("p",[t._v("熟知数值一般为0-1023，登记端口号数值1024-49151，客户端口号数值为49152-65535.")])]),t._v(" "),a("li",[a("p",[t._v("常用的应用层协议使用的端口(号)：")])])]),t._v(" "),a("blockquote",[a("p",[t._v("http = TCP + 80")]),t._v(" "),a("p",[t._v("Https = TCP + 443")]),t._v(" "),a("p",[t._v("RDP = TCP + 3389")]),t._v(" "),a("p",[t._v("ftp = TCP + 21")]),t._v(" "),a("p",[t._v("共享文件夹 = TCP + 445")]),t._v(" "),a("p",[t._v("SMTP = TCP + 25")]),t._v(" "),a("p",[t._v("POP3 = TCP + 110")]),t._v(" "),a("p",[t._v("telnet = TCP + 23")]),t._v(" "),a("p",[t._v("SQL = TCP + 1433")]),t._v(" "),a("p",[t._v("DNS = UDP + 53")]),t._v(" "),a("p",[t._v("(注意与4.6 的协议号的区别)")])]),t._v(" "),a("h2",{attrs:{id:"服务和应用层协议的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务和应用层协议的关系"}},[t._v("#")]),t._v(" 服务和应用层协议的关系")]),t._v(" "),a("p",[t._v("防火墙是基于网卡的，只打开必要的端口，不必要的端口不允许接收数据，不影响服务的运行和监听。")]),t._v(" "),a("p",[t._v("服务使用TCP或UDP的端口侦听客户端请求；")]),t._v(" "),a("p",[t._v("客户端使用IP地址定位服务器，使用目标端口，定位服务；")]),t._v(" "),a("p",[t._v("可以在服务器网卡上设置只开放必要的端口，实现服务器网络安全。")]),t._v(" "),a("h3",{attrs:{id:"如何在windows上安装服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在windows上安装服务"}},[t._v("#")]),t._v(" 如何在Windows上安装服务")]),t._v(" "),a("p",[t._v("DNS服务")]),t._v(" "),a("p",[t._v("Web服务")]),t._v(" "),a("p",[t._v("SMTP")]),t._v(" "),a("p",[t._v("POP3")]),t._v(" "),a("h3",{attrs:{id:"如何查看服务侦听的端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何查看服务侦听的端口"}},[t._v("#")]),t._v(" 如何查看服务侦听的端口")]),t._v(" "),a("p",[t._v("netstat -a")]),t._v(" "),a("p",[t._v("netstat -an 以数字的形式查看端口")]),t._v(" "),a("p",[t._v("netstat -n 查看建立的会话")]),t._v(" "),a("p",[t._v("netstat -nb 查看建立会话的进程")]),t._v(" "),a("p",[t._v("telnet 192.168.80.100 3389 测试到远程计算机某个端口是否打开")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image3.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"如何更改服务使用默认端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何更改服务使用默认端口"}},[t._v("#")]),t._v(" 如何更改服务使用默认端口")]),t._v(" "),a("p",[t._v("可以迷惑病毒，使系统更加安全。")]),t._v(" "),a("h3",{attrs:{id:"如何设置windows网络安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设置windows网络安全"}},[t._v("#")]),t._v(" 如何设置Windows网络安全")]),t._v(" "),a("p",[t._v("设置本地连接 TCP/IP筛选")]),t._v(" "),a("h2",{attrs:{id:"传输层功能和端口范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层功能和端口范围"}},[t._v("#")]),t._v(" 传输层功能和端口范围")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image4.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"传输层协议和网络层协议的主要区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层协议和网络层协议的主要区别"}},[t._v("#")]),t._v(" 传输层协议和网络层协议的主要区别")]),t._v(" "),a("p",[t._v("网络层实现如何把数据包从这个地址(服务器)发送到另一个地址(服务器)。")]),t._v(" "),a("p",[t._v("传输层实现如何让这个应用程序找到对应计算机的应用程序(相对应的应用程序实现逻辑通信)。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image5.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"传输层的主要功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层的主要功能"}},[t._v("#")]),t._v(" 传输层的主要功能")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("传输层为应用进程之间提供了端到端的逻辑通信(但网络层是为主机之间提供逻辑通信)。")])]),t._v(" "),a("li",[a("p",[t._v("传输层还要对收到的报文进行差错检验。")])]),t._v(" "),a("li",[a("p",[t._v("传输层提供面向连接(TCP)和无连接(UDP)的服务。")])])]),t._v(" "),a("h3",{attrs:{id:"传输层的端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层的端口"}},[t._v("#")]),t._v(" 传输层的端口")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image6.png",alt:"img"}})]),t._v(" "),a("ol",[a("li",[t._v("TCP的端口")])]),t._v(" "),a("p",[t._v("端口用一个16位端口号进行标志。")]),t._v(" "),a("p",[t._v("端口号只具有本地意义，即端口号只是为了标志本计算机应用层的各进程。在Internet中不同计算机的相同端口号是没有联系的(最好不要有冲突)。")]),t._v(" "),a("h2",{attrs:{id:"udp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp协议"}},[t._v("#")]),t._v(" UDP协议")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("UDP是无连接的，即发送数据之前不需要建立连接。")])]),t._v(" "),a("li",[a("p",[t._v("UDP使用尽最大努力交付，即不保证可靠交付，同时也不使用拥塞控制。")])]),t._v(" "),a("li",[a("p",[t._v("UDP是面向报文的，适合多媒体通信的要求。")])]),t._v(" "),a("li",[a("p",[t._v("UDP支持一对一，一对多，多对一，多对多交互通信。")])]),t._v(" "),a("li",[a("p",[t._v("UDP首部开销小，只有8个字节。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image7.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"udp的首部格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp的首部格式"}},[t._v("#")]),t._v(" UDP的首部格式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image8.png",alt:"img"}})]),t._v(" "),a("p",[t._v("首部中的长度指的是UDP用户数据报的长度(首部+数据)。")]),t._v(" "),a("p",[t._v("伪首部用于检验和，我的理解是伪首部是IP数据包首部的后部分。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image9.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"tcp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议"}},[t._v("#")]),t._v(" TCP协议")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("TCP是面向连接的传输层协议。(三次握手)")])]),t._v(" "),a("li",[a("p",[t._v("每一条TCP连接智能有两个端点(endpoint)，每一条TCP连接只能时点对点的(一对一)。")])]),t._v(" "),a("li",[a("p",[t._v("TCP提供可靠交付的服务。(确保不丢包)")])]),t._v(" "),a("li",[a("p",[t._v("TCP提供全双工通信。(因为需要接收端的反馈，例如如果接收端处理不过来，可让发送端慢一点，流量控制)")])]),t._v(" "),a("li",[a("p",[t._v("面向字节流。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image10.png",alt:"img"}})]),t._v(" "),a("p",[t._v("如果要传输一个比较大的数据，首先一次只会传输一小块，这个数据块的大小是没有规律的。加上数据包数据帧的头，发送给接收端，接收端去掉首部，再次拼接。")]),t._v(" "),a("h3",{attrs:{id:"tcp的连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp的连接"}},[t._v("#")]),t._v(" TCP的连接")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("TCP把连接作为最基本的抽象。")])]),t._v(" "),a("li",[a("p",[t._v("每一条TCP连接有两个端点。")])]),t._v(" "),a("li",[a("p",[t._v("TCP连接的端点不是主机，不是主机的IP地址，不是应用程序，也不是传输层协议端口，TCP连接的端点叫 套接字(socket).")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("套接字socket = (IP地址:端口号)")])]),t._v(" "),a("li",[a("p",[t._v("每一条TCP连接唯一地被通信两端的两个套接字所确定，即：")])]),t._v(" "),a("li",[a("p",[t._v("TCP连接 ::= {socket1, socket2} = {(IP1:port1), (IP2:port2)}")])])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("端口号拼接到IP地址即构成了套接字。")])]),t._v(" "),a("h2",{attrs:{id:"tcp如何实现可靠传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp如何实现可靠传输"}},[t._v("#")]),t._v(" TCP如何实现可靠传输")]),t._v(" "),a("ol",[a("li",[t._v("可靠传输的工作原理——停止等待协议。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image11.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在发送完一个分组后，必须暂时保留已发送的分组的副本。")])]),t._v(" "),a("li",[a("p",[t._v("分组和确认分组都必须进行编号。")])]),t._v(" "),a("li",[a("p",[t._v("超时计时器的重传时间应当比数据在分组传输的平均往返时间更长一些。")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("确认丢失和确认迟到")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image12.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("可靠通信的实现")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用上述的确认和重传机制，微秒就可以在不可靠的传输网络上实现可靠的通信。")])]),t._v(" "),a("li",[a("p",[t._v("这种可靠传输的协议常称为自动重传请求ARQ(Automatic Repeat reQuest)。")])]),t._v(" "),a("li",[a("p",[t._v("ARQ表明重传的请求是自动进行的。接收方不需要请求发送方重传某个出错的分组。")])]),t._v(" "),a("li",[a("p",[t._v("缺点，信道利用率低。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image13.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("信道利用率U")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image14.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("流水线传输(发送方)")])]),t._v(" "),a("p",[t._v("发送方可连续发送多个分组，不必每发完一个分组就停顿下来等待对方的确认。由于信道上一直有数据不间断的传送，这种传输方式可获得很高的信道利用率。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image15.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("连续ARQ协议")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image16.png",alt:"img"}})]),t._v(" "),a("p",[t._v("如果1确认收到了，则滑动窗口。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image17.png",alt:"img"}})]),t._v(" "),a("p",[t._v("如果12收到了，3没有收到，则滑动窗口会会回溯到3位置，重新发送。")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("累计确认(接收方)")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("接收方一般采用累计确认的方式。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("优点：容易实现，信道利用率高。")])]),t._v(" "),a("li",[a("p",[t._v("缺点：不能向发送方反映出接收方已经正确收到的所有分组的信息。")])])])])]),t._v(" "),a("h2",{attrs:{id:"tcp报文段的首部格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文段的首部格式"}},[t._v("#")]),t._v(" TCP报文段的首部格式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image18.png",alt:"img"}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("源端口：2个字节16位。")])]),t._v(" "),a("li",[a("p",[t._v("目的端口：2个字节16位。")])]),t._v(" "),a("li",[a("p",[t._v("序号：当前数据的第一个字节在整个文件中的序号。")])]),t._v(" "),a("li",[a("p",[t._v("确认号ack：接收端发送，提示发送端下一次该发的数据在整个文件中的序号。接收端收到后，会把这个序号之前的数据从缓存中删掉。")])]),t._v(" "),a("li",[a("p",[t._v("数据偏移：当前TCP报文段第多少个字节后是TCP的数据部分了。数据偏移最多表示1111，即15，他最多可以表示15乘以4，即60个字节的偏移量，所以选项+填充最多只能是40个字节。")])]),t._v(" "),a("li",[a("p",[t._v("保留：6位，无作用。")])]),t._v(" "),a("li",[a("p",[t._v("URG：urgent，意思是优先级高，发送端优先发送，而不是在缓存中排队。")])]),t._v(" "),a("li",[a("p",[t._v("ACK：acknowledge，1意味着确认建立了会话。")])]),t._v(" "),a("li",[a("p",[t._v("PSH：1意味着接收端优先读取，而不是在缓存中排队。")])]),t._v(" "),a("li",[a("p",[t._v("RST：reset，1意味着TCP会话出现严重错误，必须释放和重新连接。")])]),t._v(" "),a("li",[a("p",[t._v("SYN：同步。1意味着要发起会话。")])]),t._v(" "),a("li",[a("p",[t._v("FIN：finish，1意味着释放连接。")])]),t._v(" "),a("li",[a("p",[t._v("窗口：接收端先发，发送端根据接收端的窗口尺寸确定发送端窗口尺寸。")])]),t._v(" "),a("li",[a("p",[t._v("检验和：")])]),t._v(" "),a("li",[a("p",[t._v("紧急指针：只有URG为1才有用。")])])]),t._v(" "),a("h3",{attrs:{id:"抓包分析p64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓包分析p64"}},[t._v("#")]),t._v(" 抓包分析P64")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image19.png",alt:"img"}})]),t._v(" "),a("p",[t._v("第一步，ARP，建立可靠传输")]),t._v(" "),a("p",[t._v("第二步，UDP(DNS同时占用UDP和TCP的53端口)，域名解析")]),t._v(" "),a("p",[t._v("第三步，TCP，识别网关MAC地址")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("cmd打开控制台如下，当前是建立了2个会话。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image20.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("浅蓝：请求的数据包；深蓝：得到的结果；")])]),t._v(" "),a("p",[t._v("192是我方地址；8是服务器地址；")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image21.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("两个SYN是双方确认建立了会话，MSS意思是最大数据包1460字节，web端(219.148.36.48)最多能缓存win=64240字节，我端(192.168.80.63)最多能缓存win=65535字节,如果某一方发了另一方win字节个数据对方都没有确认，那么就暂停。标记为TCP这三行(12,13,14)，不光是建立对话，还协商了一些参数。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image22.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("第15行，开始正式通信，HTTP。GET的意思是我要访问这个网站了。白框内写着各个层的数据首部的结构。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image23.png",alt:"img"}})]),t._v(" "),a("p",[t._v("目标端口Src Port是80，源端口Dst Port是1057，序号Sep是1，确认号Ack是1，数据部分长度是1-203字节。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image24.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("219->192是发送网页信息，192->219是确认反馈。注意，16第一次发送数据和19反馈接收是没有数据len=0。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image25.png",alt:"img"}})]),t._v(" "),a("p",[t._v("从建立会话，到传输数据到确认反馈的一个过程如下，15-19。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image26.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"tcp如何实现可靠传输p67"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp如何实现可靠传输p67"}},[t._v("#")]),t._v(" TCP如何实现可靠传输P67")]),t._v(" "),a("h3",{attrs:{id:"以字节为单位的滑动窗口技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以字节为单位的滑动窗口技术"}},[t._v("#")]),t._v(" 以字节为单位的滑动窗口技术")]),t._v(" "),a("p",[t._v("A的发送窗口是由B的接受窗口长度决定的。")]),t._v(" "),a("p",[t._v("在没有收到B确认收到之前，A不能删掉滑动窗口内的内容。")]),t._v(" "),a("p",[t._v("A可以持续给B发送，直到A的滑动窗口内数据都发了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image27.png",alt:"img"}})]),t._v(" "),a("p",[t._v("B收到后给A发确认收到的反馈ACK，序号是下一个应该发送的字节的序号，A收到后，就可以滑动窗口到对应的位置。例如B反馈ACK是7，那么A的滑窗可以移动到7位置，1-6删除。21-26可以发送。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image28.png",alt:"img"}})]),t._v(" "),a("p",[t._v("B收到1-6之后，也开始滑窗，B的应用程序可以读取1-6的数据。B的滑窗继续接收。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image29.png",alt:"img"}})]),t._v(" "),a("p",[t._v("以上是正常状态下的情况。如果出现丢失情况，例如7-9丢失，此时B反馈的ACK=7.因为10-12收到了，因此B发送SACK(选择性确认)，A只发送7-9.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image30.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"超时重传时间的确定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超时重传时间的确定"}},[t._v("#")]),t._v(" 超时重传时间的确定")]),t._v(" "),a("p",[t._v("TCP美发送一个报文段，就对这个报文段设置一次计时器。只要计时器设置的重传时间到了，但是还没有收到数据，那么就重传这一报文段。")]),t._v(" "),a("p",[t._v("RTTs(new) = (1 - alpha) x (RTTs(old)) + alpha x (new RTT样本)")]),t._v(" "),a("p",[t._v("超时重传时间应略大于上面得出的加权平均往返时间RTTs。alpha推荐值是0.125.")]),t._v(" "),a("p",[t._v("这个公式的目的是根据网速和带宽的实时情况调整往返时间。")]),t._v(" "),a("h2",{attrs:{id:"tcp如何实现流量控制p68"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp如何实现流量控制p68"}},[t._v("#")]),t._v(" TCP如何实现流量控制P68")]),t._v(" "),a("p",[t._v("解决通信两端处理时间不一样的问题。通过实时调整滑窗尺寸的大小(尺寸甚至可以是0)来实现流量控制。接收端主动调整滑窗大小，发送端根据接收端发送的报文调整相应的滑窗。发送端也会定时发送报文向接收端确认滑窗信息，避免接收端发送的相关调整滑窗大小的报文丢失带来的影响。")]),t._v(" "),a("h2",{attrs:{id:"tcp如何避免网络拥塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp如何避免网络拥塞"}},[t._v("#")]),t._v(" TCP如何避免网络拥塞")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("出现资源拥塞的条件：对资源需求的总和>可用资源。")])]),t._v(" "),a("li",[a("p",[t._v("拥塞控制是一个全局性的过程，涉及到所有的主机，所有的路由区，以及与降低网络传输性能有关的所有因素。")])]),t._v(" "),a("li",[a("p",[t._v("流量控制往往指在给定的发送端和接收端之间的点对点通信量的控制，它所要做的就是抑制发送端发送数据的速率，以便使接收端来得及接收。")])])]),t._v(" "),a("h3",{attrs:{id:"拥塞控制起到的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制起到的作用"}},[t._v("#")]),t._v(" 拥塞控制起到的作用")]),t._v(" "),a("p",[t._v("红线和绿线之间是数据丢失内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image31.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"慢开始和拥塞避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢开始和拥塞避免"}},[t._v("#")]),t._v(" 慢开始和拥塞避免")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("发送方维持 拥塞窗口cwnd(congestion window)")])]),t._v(" "),a("li",[a("p",[t._v("发送方控制拥塞窗口的原则是：")])])]),t._v(" "),a("p",[t._v("只要网络没有出现拥塞，拥塞窗口就再增大一些，以便把更多的分组发送出去；")]),t._v(" "),a("p",[t._v("只要网络出现拥塞，拥塞窗口就减少一些，以减少注入到网络中的分组数。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("慢开始算法的原理")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image32.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("设置慢开始门限状态变量ssthresh")])]),t._v(" "),a("p",[t._v("慢开始门限状态变量ssthresh的用法如下：")]),t._v(" "),a("p",[t._v("当cwnd<ssthresh时，使用慢开始算法；")]),t._v(" "),a("p",[t._v("当cwnd>ssthresh时，停止使用慢开始算法，改用拥塞避免算法；")]),t._v(" "),a("p",[t._v("当cwnd=ssthresh时，使用慢开始算法或拥塞避免算法均可；")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("拥塞避免算法的思路")])]),t._v(" "),a("p",[t._v("让拥塞窗口cwnd缓慢地增大，即每经过一个往返时间RTT就把发送方的拥塞窗口cwnd加1，而不是加倍，使拥塞窗口cwnd按线性规律缓慢增长。")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("当网络出现拥塞时对策")])]),t._v(" "),a("p",[t._v("无论是在慢开始阶段还是在拥塞避免阶段，只要发送方判断网络出现拥塞(其根据就是没有按时收到确认)，就要把慢开始门限ssthresh设置为出现拥塞时的发送方窗口值的一半(但是不能小于2)。")]),t._v(" "),a("p",[t._v("然后把拥塞窗口cwnd重新设置为1，执行慢开始算法。")]),t._v(" "),a("p",[t._v("这样做的目的就是要迅速减少主机发送到网络中的分组数，使得发生拥塞的路由器有足够的时间吧队列中积压的分组处理完毕。")]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("慢开始和拥塞避免算法的实现举例")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image33.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("拥塞避免并非指完全能够避免拥塞。利用以上的措施要完全避免网络拥塞还是不可能的。")])]),t._v(" "),a("li",[a("p",[t._v("拥塞避免是说在拥塞避免阶段吧拥塞避免窗口控制为按线性规律增长，使网络比较不容易出现拥塞。")])])]),t._v(" "),a("h3",{attrs:{id:"快重传和快恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快重传和快恢复"}},[t._v("#")]),t._v(" 快重传和快恢复")]),t._v(" "),a("p",[t._v("快重传算法首先要求接收方每收到一个失序的报文段后就立即发出重复确认，这样做可以让发送方及早知道有报文段没有到达接收方。")]),t._v(" "),a("p",[t._v("当发送端收到连续三个重复的确认时，就执行“乘法减少”算法，即把慢开始门限ssthresh减半，但拥塞窗口cwnd现在不设置为1，而是设置为慢开始门限ssthresh减半后的数值，然后开始执行拥塞避免算法(“加法增大”)，使拥塞窗口缓慢地线性增大。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image34.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"发送窗口的实际上限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送窗口的实际上限制"}},[t._v("#")]),t._v(" 发送窗口的实际上限制")]),t._v(" "),a("p",[t._v("取接收方窗口和 拥塞窗口 这两个变量中的较小值。")]),t._v(" "),a("p",[t._v("发送窗口的上限制 = min {rwnd, cwnd}.")]),t._v(" "),a("h2",{attrs:{id:"tcp传输连接管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp传输连接管理"}},[t._v("#")]),t._v(" TCP传输连接管理")]),t._v(" "),a("p",[t._v("传输连接有三个阶段，即：连接建立，数据传送，连接释放。")]),t._v(" "),a("p",[t._v("TCP连接的建立都是采用客户服务器方式。")]),t._v(" "),a("p",[t._v("主动发起连接建立的应用进程叫做客户(client)。")]),t._v(" "),a("p",[t._v("被动等待连接建立的应用进程叫做服务器(server)。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image35.png",alt:"img"}})]),t._v(" "),a("p",[t._v("头两次握手除了确定双方都能联通外，还通知了双方的一些端口信息。")]),t._v(" "),a("p",[t._v("第三次握手原因：假如把三次握手改成仅需要两次握手，死锁是可能发生的。作为例子，考虑计算机A和B之间的通信，假定A给B发送一个连接请求分组，B收到了这个分组，并发送了确认应答分组。按照两次握手的协定，B认为连接已经成功地建立了，可以开始发送数据分组。可是，B的应答分组在传输中被丢失的情况下，A将不知道B是否已准备好，A认为连接还未建立成功，将忽略B发来的任何数据分组，这样就形成了死锁。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image36.png",alt:"img"}})]),t._v(" "),a("p",[t._v("释放链接")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image37.png",alt:"img"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);