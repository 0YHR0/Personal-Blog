(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{423:function(t,v,_){"use strict";_.r(v);var a=_(2),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"ch07-security"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ch07-security"}},[t._v("#")]),t._v(" Ch07  Security")]),t._v(" "),v("h2",{attrs:{id:"网络安全介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络安全介绍"}},[t._v("#")]),t._v(" 网络安全介绍")]),t._v(" "),v("h3",{attrs:{id:"一个入侵实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一个入侵实例"}},[t._v("#")]),t._v(" 一个入侵实例")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("端口扫描，指定一个公网范围扫描端口的地址，调查哪些主机开了1433端口。")])]),t._v(" "),v("li",[v("p",[t._v("将地址拷贝到某个破解数据库管理员密码的软件。")])])]),t._v(" "),v("h3",{attrs:{id:"安全包括哪些方面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全包括哪些方面"}},[t._v("#")]),t._v(" 安全包括哪些方面")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("数据(文件/文件夹)存储安全")])]),t._v(" "),v("li",[v("p",[t._v("应用程序安全")])]),t._v(" "),v("li",[v("p",[t._v("操作系统安全")])]),t._v(" "),v("li",[v("p",[t._v("网络安全")])]),t._v(" "),v("li",[v("p",[t._v("物理安全")])]),t._v(" "),v("li",[v("p",[t._v("用户安全教育")])])]),t._v(" "),v("h2",{attrs:{id:"计算机网络上的通信面临的威胁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络上的通信面临的威胁"}},[t._v("#")]),t._v(" 计算机网络上的通信面临的威胁")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("截获——从网络上窃听他人的通信内容。(被动攻击)(例如cain软件)")])]),t._v(" "),v("li",[v("p",[t._v("中断——有意中断他人在网络上的通信。(主动攻击)")])]),t._v(" "),v("li",[v("p",[t._v("篡改——故意篡改网络上发送的报文。(主动攻击)(例如cain软件)")])]),t._v(" "),v("li",[v("p",[t._v("伪造——伪造信息在网络上传送。(主动攻击)")])])]),t._v(" "),v("p",[t._v("例如，cain软件能够截获和篡改本网段的的报文。它是在主机通过ARP协议寻找网关地址(想上网)的时候，用ARP欺骗，把本电脑的地址发给那个主机，此时，网段内的所有的计算机的报文都会发给cain，这样主机访问外网的时候，都是通过cain访问的(主机访问cain提供的假域名，cain去访问真的域名，再把信息转给主机，这是一种DNS劫持)，既能篡改DNS解析结果，还能获取密码。同样的道理，局域网管理员可以在网关设置监视端口，获得本网段的所有信息。")]),t._v(" "),v("h3",{attrs:{id:"被动攻击和主动攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#被动攻击和主动攻击"}},[t._v("#")]),t._v(" 被动攻击和主动攻击")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image1.png",alt:"img"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("中断——拒绝服务式攻击")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("举例：DoS拒绝服务式攻击，通过在网络上拥挤一些没用的数据包来组断网络。一般会占用下载通道ADSL而不是上传通道UDP，因为下载的带宽要大得多。")])]),t._v(" "),v("li",[v("p",[t._v("DDoS分布式攻击，可以在网络上找很多有漏洞的网站(肉鸡)，给指定的服务器发流量来使网络拥挤吃掉带宽，对于这种方式没有什么好办法。")])])])]),t._v(" "),v("li",[v("p",[t._v("篡改——修改域名解析的结果")]),t._v(" "),v("ul",[v("li",[t._v("类似于钓鱼网站，当用户想出入建设银行的域名，解析错误导致用户访问了错误的网站，当用户输入账号密码的话就会导致信息泄漏。")])])]),t._v(" "),v("li",[v("p",[t._v("伪造——伪装成其它主机的IP地址")]),t._v(" "),v("ul",[v("li",[t._v("趁其它主机关机时，把IP地址伪装成该主机的IP地址，从而获取信息。")])])])]),t._v(" "),v("h2",{attrs:{id:"计算机面临的威胁-恶意程序-rogue-program"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机面临的威胁-恶意程序-rogue-program"}},[t._v("#")]),t._v(" 计算机面临的威胁——恶意程序(rogue program)")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("计算机病毒——会“传染”其它程序，“传染”是通过修改其它程序来把自身或其变种复制进去完成的。(熊猫烧香)")])]),t._v(" "),v("li",[v("p",[t._v("计算机蠕虫——通过网络的通信功能将自身从一个结点发送到另一个结点并启动运行的程序。(消耗CPU资源)")])]),t._v(" "),v("li",[v("p",[t._v("特洛伊木马——一种程序，它执行的功能超过所声称的功能。(和(1)(2)的区别是会和外界通信)")])]),t._v(" "),v("li",[v("p",[t._v("逻辑炸弹——一种当运行环境满足某种特定条件时执行其它特殊功能的程序。")])])]),t._v(" "),v("h3",{attrs:{id:"木马程序的识别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#木马程序的识别"}},[t._v("#")]),t._v(" 木马程序的识别")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("查看会话netstat -n看看是否有可疑的会话；")])]),t._v(" "),v("li",[v("p",[t._v("运行msconfig服务，把隐藏微软服务掉，看看剩下的有哪些刻意；")])]),t._v(" "),v("li",[v("p",[t._v("杀毒软件。")])])]),t._v(" "),v("h2",{attrs:{id:"加密技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加密技术"}},[t._v("#")]),t._v(" 加密技术")]),t._v(" "),v("p",[t._v("广泛应用于应用层加密。")]),t._v(" "),v("h3",{attrs:{id:"对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),v("p",[t._v("加密密钥和解密密钥是同一个。")]),t._v(" "),v("p",[t._v("缺点：密钥不适合在网上传；密钥是一对一的，如果有很多主机相互通信，有很多密钥需要维护；")]),t._v(" "),v("p",[t._v("优点：效率高。")]),t._v(" "),v("p",[t._v("加密包括加密算法和加密密钥。")]),t._v(" "),v("h3",{attrs:{id:"数据加密标准des"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据加密标准des"}},[t._v("#")]),t._v(" 数据加密标准DES")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("它属于常规密钥密码体制，是一种分组密码。在加密前，先对整个铭文进行分组，每一个租场为64位，然后对每一个64位二进制数据进行加密处理，产生一组64位密文数据。最后将各组密文串接起来，即得出整个密文。使用的密钥是64位(实际密钥长度位56位，有8位数用来奇偶校验)。")])]),t._v(" "),v("li",[v("p",[t._v("DES的保密性")])])]),t._v(" "),v("p",[t._v("仅取决于对密钥的保密，而算法本身是公开的。尽管人在破译DES上有很多进展，但是至今没有找到比穷举搜索密钥更有效的方法。")]),t._v(" "),v("p",[t._v("DES是世界上第一个公认的使用密码算法标准，它曾对密码学的发展做出了重大贡献。")]),t._v(" "),v("p",[t._v("目前较为严重的问题是DES的密钥的长度。")]),t._v(" "),v("p",[t._v("现在已经设计出来搜索DES密钥的专用芯片。")]),t._v(" "),v("p",[t._v("DES算法公开，所以破解取决于密钥长度，56位密码破解需要3.5-21min；128位密钥破解需要5.4*10^18年。")]),t._v(" "),v("h3",{attrs:{id:"非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),v("ol",[v("li",[t._v("加密密钥和解密密钥是不同的，有一对密钥对，公钥和私钥。")])]),t._v(" "),v("p",[t._v("要么公钥加密私钥解密；要么私钥加密公钥解密。")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("p",[t._v("优点：给出私钥和公钥其中一个无法算出另一个。")])]),t._v(" "),v("li",[v("p",[t._v("缺点：效率低。")])]),t._v(" "),v("li",[v("p",[t._v("非对称加密实现细节：（用对称加密加密文件，再用非对称加密加密对称加密的密钥）")])])]),t._v(" "),v("p",[t._v("设A是非对称加密机制；B为对称加密机制；A1要给A2传一组数据，很大，如果直接用非对称加密花的时间很长；为了加快速度，用对称加密手段B来加密这个数据得到加密后数据B’和密钥B给A1，速度很快；然后A1对密钥B进行非对称加密得到公钥A1’；A1把密钥A1’和数据B’发给A2；A2运用私钥解密A1’获得密钥B，再用密钥B解密这个数据，最终得到想要的结果。")]),t._v(" "),v("p",[t._v("通过这种对数据采用对称加密，对对称加密的密钥进行非对称加密的方式能实现快速加密。")]),t._v(" "),v("h3",{attrs:{id:"数字签名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字签名"}},[t._v("#")]),t._v(" 数字签名")]),t._v(" "),v("p",[t._v("功能：防止抵赖，能够检查签名后的内容有没有被更改过。")]),t._v(" "),v("p",[t._v("具体实现细节：假设A要给B发文件C：")]),t._v(" "),v("p",[t._v("A先把文件C用单向散列函数计算出128位2进制摘要D（相当于文件C的指纹，一一对应的，无论文件c多大，d都是128位），再把D用A的私钥加密得到A的签名，A再打包【文件c ，A的签名， A的公钥】发给B")]),t._v(" "),v("p",[t._v("B收到打包文件后，先用A的公钥解密A的签名，得到摘要D0，再把文件c用单向散列函数计算出摘要D1，若D0和D1完全相同，则判定内容没有被更改过。")]),t._v(" "),v("h3",{attrs:{id:"证书颁发机构ca"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#证书颁发机构ca"}},[t._v("#")]),t._v(" 证书颁发机构CA")]),t._v(" "),v("p",[t._v("来验证公钥是否是证书颁发机构认证过。")]),t._v(" "),v("p",[t._v("具体实现方法：x公司向CA提供相关材料，CA用自己的私钥给x的密钥对进行加密，即x公司的证书。")]),t._v(" "),v("p",[t._v("Y公司判别x公司方法：使用CA的公钥对X公司发来的包中的x证书进行解密。")]),t._v(" "),v("p",[t._v("为企业和用户办法数字证书，确认这些企业和个人的身份；")]),t._v(" "),v("p",[t._v("如果证书丢失，它要发布证书吊销列表；")]),t._v(" "),v("p",[t._v("企业和个人是信任证书颁发机构的。")]),t._v(" "),v("h2",{attrs:{id:"internet上使用的安全协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#internet上使用的安全协议"}},[t._v("#")]),t._v(" Internet上使用的安全协议")]),t._v(" "),v("h3",{attrs:{id:"安全套接字ssl-secure-sockets-layer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全套接字ssl-secure-sockets-layer"}},[t._v("#")]),t._v(" 安全套接字SSL(Secure Sockets Layer)")]),t._v(" "),v("ol",[v("li",[t._v("SSL的位置")])]),t._v(" "),v("p",[t._v("是在应用层和传输层之间进行加密。好处是应用层和传输层都不需要来加密。不需要应用程序(应用层)来支持，但是需要在服务器配置证书。")]),t._v(" "),v("p",[t._v("例如，不使用SSL加密使用的是http://，使用SSL加密是https://。")]),t._v(" "),v("p",[t._v("注意，http://使用的是TCP的80端口，而https://使用的是TCP的443端口。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image2.png",alt:"img"}})]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("SSL的配置(加密的实现)(https://)")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("客户端有一个浏览器IE，想要访问服务器端的网站web；")])]),t._v(" "),v("li",[v("p",[t._v("浏览器IE要访问网站web，此时网站web会把他的公钥给浏览器IE；")])]),t._v(" "),v("li",[v("p",[t._v("浏览器IE通过校验CA证书确保网站web的公钥是可靠的；")])]),t._v(" "),v("li",[v("p",[t._v("浏览器IE会产生一个对称密钥；")])]),t._v(" "),v("li",[v("p",[t._v("浏览器IE拿着网站web的公钥对它的对称密钥进行加密，发给网站web；")])]),t._v(" "),v("li",[v("p",[t._v("网站web用它的私钥进行解密，就得到了浏览器IE的对称密钥；")])]),t._v(" "),v("li",[v("p",[t._v("所以说，本质上是用对称密钥对数据进行加密的，公钥和私钥是用来对这个对称密钥进行加密的。这也是为什么https://刚开始打开的时候会有一些慢。")])])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("另外一些协议使用的安全套接字SSL时对应的TCP端口")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("imaps tcp-993")])]),t._v(" "),v("li",[v("p",[t._v("pop3s tcp-995")])]),t._v(" "),v("li",[v("p",[t._v("smtps tcp-465")])]),t._v(" "),v("li",[v("p",[t._v("https tcp-443")])])]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("SSL提供的三个功能")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("SSL服务器鉴别：允许用户证实服务器的身份；具有SSL功能的浏览器维持一个表，上面有一些可信赖的认证中心CA(Certificate Authority)和它们的公钥。")])]),t._v(" "),v("li",[v("p",[t._v("加密的SSL会话：客户和服务器交互的所有数据都在发送方加密，在接收方解密。")])]),t._v(" "),v("li",[v("p",[t._v("SSL客户鉴别：允许服务器证实客户的身份。")])])]),t._v(" "),v("h3",{attrs:{id:"网络层安全ipsec"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层安全ipsec"}},[t._v("#")]),t._v(" 网络层安全IPSec")]),t._v(" "),v("p",[t._v("网络层安全是底层安全，不需要应用程序支持，也不需要配置证书，对用户是透明的(感觉不到)。")]),t._v(" "),v("ol",[v("li",[t._v("安全关联SA(Security Association)")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("在使用AH或ESP之前，先要从源主机到目的主机建立一条网络层的逻辑连接。此逻辑连接叫做安全关联SA。")])]),t._v(" "),v("li",[v("p",[t._v("IPsec就把传统的Internet无连接的网络层转换为具有逻辑连接的层。")])]),t._v(" "),v("li",[v("p",[t._v("SA是构成IPSec的基础，是两个通信实体经过协商(利用IKE协议)建立起来的一种协定，它决定了用来保护数据分组安全的安全协议(AH协议(只签名：只关心发送方的身份而不关心数据是否被窃取)或ESP协议(既签名又对数据加密))，转码方式，密钥及密钥的生存周期等。")])])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("IPsec中最主要的2个协议")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("鉴别首部AH(Authentication Header):AH鉴别源点和检查数据完整性，但不能保密。")])]),t._v(" "),v("li",[v("p",[t._v("在使用AH时，把AH首部插在原数据报数据部分的签名，同时把IP首部中的协议字段设置为51.")])]),t._v(" "),v("li",[v("p",[t._v("在传输过程中，中间的路由器都不查看AH首部。当数据报到达终点时，目的主机才会处理AH字段，以鉴别源点和检查数据报的完整性。")])]),t._v(" "),v("li",[v("p",[t._v("封装安全有效载荷ESP(Encapsulation Security Payload):ESP比AH复杂的多，它鉴别源点，检查数据完整性和提供保密。")])]),t._v(" "),v("li",[v("p",[t._v("使用ESP时，IP数据报首部的协议字段设置为50.当IP首部检查到协议字段是50时，就知道在IP首部后面紧跟着ESP首部，同时在原IP数据报后面增加了2个字段，即ESP尾部和ESP数据。")])])]),t._v(" "),v("h2",{attrs:{id:"数据链路层安全-链路加密与端到端加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层安全-链路加密与端到端加密"}},[t._v("#")]),t._v(" 数据链路层安全(链路加密与端到端加密)")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("PPP 身份验证")])]),t._v(" "),v("li",[v("p",[t._v("ADSL")])])]),t._v(" "),v("h2",{attrs:{id:"防火墙-firewall"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防火墙-firewall"}},[t._v("#")]),t._v(" 防火墙(firewall)")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("防火墙用来解决内联网和外联网的安全问题。")])]),t._v(" "),v("li",[v("p",[t._v("防火墙是由软件，硬件构成的系统，是一种特殊编程的路由器，用来在两个网络之间实施接入控制策略。接入控制策略是由防火墙的单位自行制定的，为的是可以最适合本单位的需要。")])]),t._v(" "),v("li",[v("p",[t._v("防火墙内的网络称为“可信赖的网络”(trusted network)，而将外部的Internet称为“不可信赖的网络”(untrusted network)。")])])]),t._v(" "),v("h3",{attrs:{id:"防火墙在互联网中的位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防火墙在互联网中的位置"}},[t._v("#")]),t._v(" 防火墙在互联网中的位置")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image3.png",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"防火墙的功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防火墙的功能"}},[t._v("#")]),t._v(" 防火墙的功能")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("阻止：阻止某种类型的通信量通过防火墙(从外部网络到内部网络，或反过来)。")])]),t._v(" "),v("li",[v("p",[t._v("允许：允许某种类型的通信量通过防火墙(从外部网络到内部网络，或反过来)。")])])]),t._v(" "),v("p",[t._v("防火墙必须能够识别通信量的各种类型。一般是阻止功能。")]),t._v(" "),v("h3",{attrs:{id:"防火墙技术的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防火墙技术的分类"}},[t._v("#")]),t._v(" 防火墙技术的分类")]),t._v(" "),v("ol",[v("li",[t._v("网络层防火墙：用来防止整个网络出现外来非法的入侵。属于这类的有分组过滤和授权服务器。前者检查所有流入本网络的信息，然后拒绝不符合事先制订好的一套准则的数据，而后者则是检查用户的登录是否合法。")])]),t._v(" "),v("p",[t._v("可以基于数据包，源地址，目标地址，协议和端口来控制流量。")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("应用层防火墙：从应用程序来进行接入控制，通常使用应用网关或代理服务器来区分各种应用。例如，可以只允许用过访问www的应用，而阻止FTP应用的通过。")])]),t._v(" "),v("p",[t._v("应用级防火墙可以检查数据报的内容。")]),t._v(" "),v("p",[t._v("可以基于数据包，源地址，目标地址，协议和端口，用户名，时间段来控制内容，可以放病毒，可见功能更强大。")]),t._v(" "),v("h3",{attrs:{id:"防火墙的结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防火墙的结构"}},[t._v("#")]),t._v(" 防火墙的结构")]),t._v(" "),v("ol",[v("li",[t._v("边缘防火墙")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image4.png",alt:"img"}})]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("三向外围网")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image5.png",alt:"img"}})]),t._v(" "),v("p",[t._v("DMZ是公司内部的服务器。内网可以访问外网，外网不能访问内网，只能访问服务器DMZ。")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("背靠背防火墙")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image6.png",alt:"img"}})]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("单一网卡防火墙")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image7.png",alt:"img"}})]),t._v(" "),v("p",[t._v("参考文献：https://blog.csdn.net/iwanderu/article/details/103812986")]),t._v(" "),v("h3",{attrs:{id:"生日攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生日攻击"}},[t._v("#")]),t._v(" 生日攻击")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220608101617368.png",alt:"image-20220608101617368"}})]),t._v(" "),v("h3",{attrs:{id:"中途相遇攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中途相遇攻击"}},[t._v("#")]),t._v(" 中途相遇攻击")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220608101703193.png",alt:"image-20220608101703193"}})])])}),[],!1,null,null,null);v.default=r.exports}}]);