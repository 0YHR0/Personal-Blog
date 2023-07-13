(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{426:function(t,a,s){"use strict";s.r(a);var r=s(2),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ch02-physical-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch02-physical-layer"}},[t._v("#")]),t._v(" Ch02 Physical Layer")]),t._v(" "),a("h2",{attrs:{id:"物理层定义的标准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理层定义的标准"}},[t._v("#")]),t._v(" 物理层定义的标准")]),t._v(" "),a("p",[t._v("物理层解决如何在链接各种计算机的传输媒体上传输数据比特流，而不是指具体的传输媒体。")]),t._v(" "),a("p",[t._v("物理层的主要任务：确定传输媒体的接口的一些特性，包括，")]),t._v(" "),a("ul",[a("li",[t._v("机械特性：接口形状，大小，引线数量")]),t._v(" "),a("li",[t._v("电气特性：例如规定电压范围(-5V-5V)")]),t._v(" "),a("li",[t._v("功能特性：例如规定-5V上0，+5V是1")]),t._v(" "),a("li",[t._v("过程特性：也称规程特性，规定建立连接时各个相关部件的工作步骤")])]),t._v(" "),a("h2",{attrs:{id:"数据通信基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据通信基础知识"}},[t._v("#")]),t._v(" 数据通信基础知识")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220544360.png",alt:"image-20220529220544360"}})]),t._v(" "),a("h3",{attrs:{id:"通信的目的是传送消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通信的目的是传送消息"}},[t._v("#")]),t._v(" 通信的目的是传送消息")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数据(data)——运送消息的实体。")])]),t._v(" "),a("li",[a("p",[t._v("信号(signal)——数据的电气或电磁的表现。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("->模拟信号——代表信息的参数的取值是连续的。")])]),t._v(" "),a("li",[a("p",[t._v("->数字信号——代表信息的参数的取值是离散的。")])])])]),t._v(" "),a("li",[a("p",[t._v("码元(code)——在使用时间域的波形表示数字信号时，代表不同离散数值的基本波形。")]),t._v(" "),a("ul",[a("li",[t._v("->在数字通信中常常用时间间隔相同的符号表示一个二进制数字，这样的时间间隔内的信号称为二进制码元。这个间隔称为码元长度，1 code可以携带n bit信息量(此时电压会有多个取值，例如1，2，…,7V，而不是只有2个取值)。")])])])]),t._v(" "),a("h3",{attrs:{id:"信道的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信道的概念"}},[t._v("#")]),t._v(" 信道的概念")]),t._v(" "),a("p",[t._v("信道一般表示向一个方向传输信息的媒体。所以通信线路往往包含一条发送信息的信道和一条接收信息的信道。")]),t._v(" "),a("p",[t._v("->单向通信(单工通信)——只能有一个方向的同学，没有反向交互。")]),t._v(" "),a("p",[t._v("->双向交替通信(半双工通信)——通信的双方都可以发送信息，但是不能双方同时发送或接收。")]),t._v(" "),a("p",[t._v("->双向同时通信(全双工通信)——通信的双发可以同时发送和接收。")]),t._v(" "),a("h4",{attrs:{id:"什么是基带-baseband-和带通-base-pass-信号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是基带-baseband-和带通-base-pass-信号"}},[t._v("#")]),t._v(" 什么是基带(baseband)和带通(base pass)信号？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220656238.png",alt:"image-20220529220656238"}})]),t._v(" "),a("p",[t._v("基带信号(基本频率信号)——来自信源的信号，例如计算机输出的代表各种文字或图像文件的数据信号都属于基带信号。基带信号就是发出的直接表达了要传输的信息的信号，比如说我们说话的声波。")]),t._v(" "),a("p",[t._v("带通信号——把基带信号经过载波调制后，把信号的频率范围迁移到较高的频段以便在信道中传输(即仅在一段频率范围内能够通过信道)。")]),t._v(" "),a("p",[t._v("因此在传输距离较近时，采用基带传输方式(衰减不大，信号内容不会变化)。传输距离较远时，采用带通传输方式，例如从计算机到监视器，打印机等外设的信号。")]),t._v(" "),a("h4",{attrs:{id:"几种基本的调制方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几种基本的调制方法"}},[t._v("#")]),t._v(" 几种基本的调制方法")]),t._v(" "),a("p",[t._v("从基带信号到带通信号，涉及到 调频(AM)，调频(FM)，调相(PM)。"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220725276.png",alt:"image-20220529220725276"}})]),t._v(" "),a("h4",{attrs:{id:"常用编码方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用编码方式"}},[t._v("#")]),t._v(" 常用编码方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("单极性不归零编码：只使用一个电压值，高电平表示1，低电平表示0.")])]),t._v(" "),a("li",[a("p",[t._v("双极性不归零编码：用幅值相等的正负电平表示二进制数1和0.")])]),t._v(" "),a("li",[a("p",[t._v("单极性归零编码：发送码1时高电平在整个码元期间只持续一段时间，其余时间返回零电平。")])]),t._v(" "),a("li",[a("p",[t._v("双极性归零编码：正负零三个电平，信号本事携带同步信息。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220750041.png",alt:"image-20220529220750041"}})]),t._v(" "),a("ul",[a("li",[t._v("曼彻斯特编码：单极性编码的缺点是没有办法区分此时是没有信号，还是有信号，但是信号是0.\n"),a("ul",[a("li",[t._v("->这种编码方式是bit中间有信号，低-高跳转表示0，高-低跳转表示1，一个时钟周期只可以表示一个bit，并且必须通过两次采样才能得到一个bit。它能携带时钟信号，而且能区分此时是没有信号还是信号为0.")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220805838.png",alt:"image-20220529220805838"}})]),t._v(" "),a("ul",[a("li",[t._v("差分曼彻斯特编码：抗干扰能力比曼彻斯特编码更强。bit与bit之间有信号跳变，表示下一个bit为0，bit与bit之间没有信号跳变，表示下一个bit为1。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220815794.png",alt:"image-20220529220815794"}})]),t._v(" "),a("h4",{attrs:{id:"信道极限容量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信道极限容量"}},[t._v("#")]),t._v(" 信道极限容量")]),t._v(" "),a("p",[t._v("信道极限容量取决于失真的大小，当失真过大时，接收信号无法还原发送信号。"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220831279.png",alt:"image-20220529220831279"}})]),t._v(" "),a("h4",{attrs:{id:"奈氏-nyquist-准则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#奈氏-nyquist-准则"}},[t._v("#")]),t._v(" 奈氏(Nyquist)准则")]),t._v(" "),a("p",[t._v("在理想条件下(无噪声/干扰/失真)，为了避免码间串扰，码元的传输速率是有上限的。如果信道的频带越宽(信号高频分量越多)，则用更高的速率传输码元也不会出现码间串扰。")]),t._v(" "),a("h4",{attrs:{id:"信噪比和香农-shannon-公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信噪比和香农-shannon-公式"}},[t._v("#")]),t._v(" 信噪比和香农(Shannon)公式")]),t._v(" "),a("p",[t._v("信道的极限信息传输速率C(带宽受限且有Gauss白噪声干扰时的信道极限且无差错时的信息传输速率)可表示为")]),t._v(" "),a("p",[a("strong",[t._v("C = W log2(1 + S / N) b/s")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("W是信道的带宽(Hz)；")])]),t._v(" "),a("li",[a("p",[t._v("S是信道内所传信号的平均功率；")])]),t._v(" "),a("li",[a("p",[t._v("N是信道内的Gauss噪声的功率。")])])]),t._v(" "),a("p",[t._v("可以发现，减少速度和增大功率能提高准确度。")]),t._v(" "),a("p",[t._v("信道的带宽或信道中的信噪比(S/N)越大，则信息的极限传输速率C就越高；")]),t._v(" "),a("p",[t._v("只要信息传输速率小于信道的极限传输速率C，就一定能实现某种无差错传输；")]),t._v(" "),a("p",[t._v("若带宽W或信噪比(S/N)没有上限，则极限传输速率C也没有上限(虽然不可能)；")]),t._v(" "),a("p",[t._v("实际上，信道能达到的最高传输速率要比C低不少；")]),t._v(" "),a("h4",{attrs:{id:"奈氏-nyquist-准则和香农公式的应用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#奈氏-nyquist-准则和香农公式的应用范围"}},[t._v("#")]),t._v(" 奈氏(Nyquist)准则和香农公式的应用范围")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220908670.png",alt:"image-20220529220908670"}})]),t._v(" "),a("h3",{attrs:{id:"物理层下面的传输介质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理层下面的传输介质"}},[t._v("#")]),t._v(" 物理层下面的传输介质")]),t._v(" "),a("h4",{attrs:{id:"导向传输媒体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导向传输媒体"}},[t._v("#")]),t._v(" 导向传输媒体")]),t._v(" "),a("p",[t._v("导向传输媒体中，电磁波沿着固体媒体传播。")]),t._v(" "),a("p",[a("strong",[t._v("双绞线")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("屏蔽/非屏蔽双绞线(STP/UTP)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529220949793.png",alt:"image-20220529220949793"}})]),t._v(" "),a("p",[a("strong",[t._v("同轴电缆")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("50欧姆同轴电缆(基带同轴电缆)——用于数字传输，多用于基带传输；")])]),t._v(" "),a("li",[a("p",[t._v("75欧姆同轴电缆(宽带同轴电缆)——用于模拟传输，多用于带通传输；")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529221003598.png",alt:"image-20220529221003598"}})]),t._v(" "),a("p",[a("strong",[t._v("光缆")]),t._v("：")]),t._v(" "),a("p",[a("strong",[t._v("网线")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("直通线——双绞线夹线顺序两端一致(1白橙2橙3白绿4蓝5白蓝6绿7白棕8棕，口诀“橙白橙/绿白蓝/蓝白绿/棕白棕”)，这是100M的标准(568B)，也称正线/标准线/直通线。当用于10M和100M时，下图只用了1，3，2，6线。对于1000M的网络，8根线都会用上。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220607215012834.png",alt:"image-20220607215012834"}})]),t._v(" "),a("p",[t._v("直通线应用最广，这种类型的以太网电缆用来实现以下连接：主机到交换机/集线器，路由\n器到交换机/集线器。")]),t._v(" "),a("ul",[a("li",[t._v("交叉线——一般不同设备连接用直通线，同类设备用交叉线。也用于集线器到交换机，路\n由器到主机连接。"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220607215047593.png",alt:"image-20220607215047593"}})])]),t._v(" "),a("p",[t._v("注意，现在网卡能够自动协商，所以交叉线和直通线已经无所谓了，连错了也没关系。\n"),a("strong",[t._v("光纤")]),t._v("："),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220607215108799.png",alt:"image-20220607215108799"}})]),t._v(" "),a("ul",[a("li",[t._v("单模光纤——只能传输一种电磁波；直径小；用于有线电视网络，传播特性好，带宽可达\n10GHz，可以在一根光纤中传输 60 套 PAL-D 电视节目。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220607215136340.png",alt:"image-20220607215136340"}})]),t._v(" "),a("ul",[a("li",[t._v("多模光纤——能传输多种电磁波；直径大；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image15.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"非导向传输媒体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非导向传输媒体"}},[t._v("#")]),t._v(" 非导向传输媒体")]),t._v(" "),a("p",[t._v("非导向传输媒体指自由空间，其中的电磁波传输称为无线传输。")]),t._v(" "),a("p",[t._v("无线传输的频段很广。")]),t._v(" "),a("p",[t._v("短波通信主要是靠电离层的反射，但短波信道的通信质量较差；")]),t._v(" "),a("p",[t._v("微波在空间主要是直线传播(延迟大)——地面微波接力通信；微信通信。")]),t._v(" "),a("p",[t._v("电信领域使用的电磁波的频谱如下，")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image16.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"物理层设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理层设备"}},[t._v("#")]),t._v(" 物理层设备")]),t._v(" "),a("p",[a("strong",[t._v("集线器")]),t._v("：")]),t._v(" "),a("p",[t._v("工作特点是在网络中只起到信号放大和重发作用，目的是扩大网络的传输范围，而不具备信号的定向传送能力。最大传输距离是100m；集线器是一个大的冲突域(意思是某个时间点只能是2台设备进行通信)。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image17.png",alt:"img"}})]),t._v(" "),a("p",[t._v("现在很少用集线器了，它不安全，一般用交换机。")]),t._v(" "),a("h3",{attrs:{id:"信道复用技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信道复用技术"}},[t._v("#")]),t._v(" 信道复用技术")]),t._v(" "),a("p",[t._v("复用(multiplexing)是通信技术中的基本概念。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image18.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"频分复用-fdn-frequency-division-multiplexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频分复用-fdn-frequency-division-multiplexing"}},[t._v("#")]),t._v(" 频分复用(FDN: frequency division multiplexing)")]),t._v(" "),a("p",[t._v("用户在分配到一定的频带后，在通信过程中始终站用这个频带。频分复用的所有用户在同样的时间占用不同的带宽资源(带宽指频率带宽不是数据的发送速率)。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image19.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"时分复用-tdn-time-division-multiplexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时分复用-tdn-time-division-multiplexing"}},[t._v("#")]),t._v(" 时分复用(TDN: time division multiplexing)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image20.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("实现机制：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image21.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("时分复用可能会造成线路资源的浪费，由于计算机数据的突发性质，用户对分配到的子信道的利用率一般不高。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image22.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"统计时分复用-stdm-statistic-tdm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计时分复用-stdm-statistic-tdm"}},[t._v("#")]),t._v(" 统计时分复用(STDM: statistic TDM)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image23.png",alt:"img"}})]),t._v(" "),a("p",[t._v("需要在放置前添加标记。")]),t._v(" "),a("h4",{attrs:{id:"波分复用-wdm-wavelength-division-multiplexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#波分复用-wdm-wavelength-division-multiplexing"}},[t._v("#")]),t._v(" 波分复用(WDM: wavelength division multiplexing)")]),t._v(" "),a("p",[t._v("就是光的频分复用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image24.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"码分复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#码分复用"}},[t._v("#")]),t._v(" 码分复用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("常用的名词是码分多址CDMA(Code Division Multiple Access)")])]),t._v(" "),a("li",[a("p",[t._v("各用户使用经过特殊挑选的不同码型，因此彼此不会造成干扰。")])]),t._v(" "),a("li",[a("p",[t._v("这种系统发送的信号有很强的抗干扰能力，其频谱类似于白噪声，不易被敌人发现。")])]),t._v(" "),a("li",[a("p",[t._v("每一个比特时间划分为m个短的间隔，称为码片(chip)。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image25.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("任何一个码片向量和该码片向量自己的规格化内积都是1.")])]),t._v(" "),a("li",[a("p",[t._v("任何一个码片向量和该码片反码向量的规格化内积都是-1.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image26.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("缺点：表示一个bit需要更多的数据。")])]),t._v(" "),a("h3",{attrs:{id:"数字传输系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字传输系统"}},[t._v("#")]),t._v(" 数字传输系统")]),t._v(" "),a("p",[t._v("主要讲的是广域网的数据传输。")]),t._v(" "),a("p",[t._v("脉码调制(PCM)技术。欧洲是E1标准(30路)，北美是T1(24路，时分复用)。")]),t._v(" "),a("h3",{attrs:{id:"带宽接入技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带宽接入技术"}},[t._v("#")]),t._v(" 带宽接入技术")]),t._v(" "),a("h4",{attrs:{id:"非对称数字用户链路adsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非对称数字用户链路adsl"}},[t._v("#")]),t._v(" 非对称数字用户链路ADSL")]),t._v(" "),a("p",[t._v("使用电话线。用数字技术对现有的模拟电话用户线进行改造(xDSL)，把0-4kHz留给传统电话使用，把原来没有利用的高频谱段留给用户上网使用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image27.png",alt:"img"}})]),t._v(" "),a("p",[t._v("基于ADSL的接入网组成如下图，")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image28.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数字用户线接入复用器DSLAM(DSL Access Multiplexer)")])]),t._v(" "),a("li",[a("p",[t._v("接入端单元(Access Termination Unit)")])]),t._v(" "),a("li",[a("p",[t._v("ATU-C(C表示端局Central Office)")])]),t._v(" "),a("li",[a("p",[t._v("ATU-R(R代表远端Remote)")])]),t._v(" "),a("li",[a("p",[t._v("电话分离器PS(POTS Splitter)")])])]),t._v(" "),a("h4",{attrs:{id:"dmt技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmt技术"}},[t._v("#")]),t._v(" DMT技术")]),t._v(" "),a("p",[t._v("采用频分复用，把40kHz以上一直到1.1MHz的高频谱划分为徐队子信道，其中25个子信道用于上行信道，249个子信道用于下行信道(因为下载的情景多于上传)。每个子信道占据4kHz的带宽，并使用不同的载波进行数字调制。这种做法相当于在一对用户线上使用许多小的调制解调器并行地传输数据。")]),t._v(" "),a("h4",{attrs:{id:"光纤同轴混合网hfc-hybrid-fiber-coax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光纤同轴混合网hfc-hybrid-fiber-coax"}},[t._v("#")]),t._v(" 光纤同轴混合网HFC(Hybrid Fiber Coax)")]),t._v(" "),a("p",[t._v("HFC网是在目前覆盖范围很广的有线电视网CATV基础上开发的一种居民宽带接入网。除了可以传送CATV外，还可以提供电话/数据/和其它宽带交互型业务。现有CATV网是树形拓扑结构的同轴电缆网络，它采用 模拟技术的频分复用 对电视节目进行单向传输。HFC需要对CATV网进行改造。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image29.png",alt:"img"}})]),t._v(" "),a("p",[t._v("每个用户要安装一个用户接口盒。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image30.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"ftt技术-光纤到xx技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftt技术-光纤到xx技术"}},[t._v("#")]),t._v(" FTT技术(光纤到XX技术)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("光纤到家技术(Fiber to the home):光纤一直铺设到用户家庭(155MB/s)。")])]),t._v(" "),a("li",[a("p",[t._v("光纤到大楼技术(Fiber to the building):光纤进入大楼后就转为电信号，然后用电缆或双绞线分配到各用户。")])]),t._v(" "),a("li",[a("p",[t._v("光纤到路边技术(Fiber to the curb):从路边到各用户可以使用星形结构的双绞线作为传输媒体(155MB/s)。")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);