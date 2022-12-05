(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{423:function(t,a,r){"use strict";r.r(a);var s=r(2),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ch06-application-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch06-application-layer"}},[t._v("#")]),t._v(" Ch06 Application Layer")]),t._v(" "),a("h2",{attrs:{id:"域名协议dns-domain-name-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名协议dns-domain-name-system"}},[t._v("#")]),t._v(" 域名协议DNS(Domain Name System)")]),t._v(" "),a("h3",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),a("p",[t._v("把域名解析为IP地址。例如打得开QQ(可以直接用IP地址登陆)，打不开网络可能是域名问题。")]),t._v(" "),a("p",[t._v("8.8.8.8 是google的DNS服务器，222.222.222.222是电信的DNS服务器，能够用来帮忙解析域名地址。")]),t._v(" "),a("h3",{attrs:{id:"域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("根 .")])]),t._v(" "),a("li",[a("p",[t._v("顶级域名 com, edu, net,cn,org,gov")])]),t._v(" "),a("li",[a("p",[t._v("二级域名 91xueit, inhe，例如91xueit.com是全球唯一的域名。")])]),t._v(" "),a("li",[a("p",[t._v("三级域名 dba，例如www.dba.91xueit.com")])])]),t._v(" "),a("p",[t._v("Ping或nslookup能得到IP地址。或者直接输入网址。")]),t._v(" "),a("h2",{attrs:{id:"动态主机配置系统dhcp-同一个网段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态主机配置系统dhcp-同一个网段"}},[t._v("#")]),t._v(" 动态主机配置系统DHCP(同一个网段)")]),t._v(" "),a("ol",[a("li",[t._v("静态IP地址")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image1.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("动态IP地址")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image2.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("DHCP客户端请求IP地址的过程")])]),t._v(" "),a("p",[t._v("我的理解这是一个动态IP地址的请求和分配过程。客户机在网中发广播请求地址，目标IP是4个255，目标MAC地址是全FF。DHCP收到后，会从地址池里选一个给客户机。如果网络中有2个DHCP服务端且都给了反馈，此时计算机还需要返回一个数据通知他选择了谁提供的地址。另一个DHCP客户端发现没要他的，于是收回他提供的。从这个角度看，网络中不能有太多的DHCP服务端。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("DHCP服务器的安装")])]),t._v(" "),a("p",[t._v("必须是固定的IP地址。释放命令为ipconfig /release")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("DHCP跨网段配置IP地址")])]),t._v(" "),a("p",[t._v("需要DHCP配IP地址的计算机，需要在他所在的网络的路由器的网关上配置IPhelper address，再访问到DHCP。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image3.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"文件传输协议ftp-file-transfer-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件传输协议ftp-file-transfer-protocol"}},[t._v("#")]),t._v(" 文件传输协议FTP(File Transfer Protocol)")]),t._v(" "),a("h3",{attrs:{id:"ftp使用的两个tcp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp使用的两个tcp连接"}},[t._v("#")]),t._v(" FTP使用的两个TCP连接")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image4.png",alt:"img"}})]),t._v(" "),a("p",[t._v("FTP的连接方式包括控制连接和数据连接。每上传/下载一个文件就会建立一个会话。")]),t._v(" "),a("p",[t._v("控制连接：标准端口为21，用于发送FTP命令信息。")]),t._v(" "),a("p",[t._v("数据连接：标准端口为20，用于上传/下载数据。")]),t._v(" "),a("h3",{attrs:{id:"ftp数据连接-上图的tcp数据连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp数据连接-上图的tcp数据连接"}},[t._v("#")]),t._v(" FTP数据连接(上图的TCP数据连接)")]),t._v(" "),a("p",[t._v("涉及到主动模式和被动模式")]),t._v(" "),a("ol",[a("li",[t._v("主动模式：FTP客户端告诉FTP服务器(的21端口)它在使用什么端口侦听，然后FTP服务器(的20端口)主动地和FTP客户端的这个端口建立连接。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image5.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("被动模式：FTP服务器端打开在指定范围内的某个新的端口(例如1089端口)并且进行侦听，被动地等待客户端发起连接。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image6.png",alt:"img"}})]),t._v(" "),a("p",[t._v("综上，在有防火墙的情况下，如果使用被动模式，防火墙不得不开很多端口来监听。因此应该使用主动模式来进行数据连接，并在防火墙开21和20端口。")]),t._v(" "),a("h3",{attrs:{id:"ftp传输模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp传输模式"}},[t._v("#")]),t._v(" FTP传输模式")]),t._v(" "),a("p",[t._v("文本模式：ASCII模式，以文本序列传输数据。")]),t._v(" "),a("p",[t._v("二进制模式：Binary模式，以二进制序列传输数据。")]),t._v(" "),a("h2",{attrs:{id:"远程终端协议telnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程终端协议telnet"}},[t._v("#")]),t._v(" 远程终端协议telnet")]),t._v(" "),a("p",[t._v("默认使用TDP23端口。")]),t._v(" "),a("h2",{attrs:{id:"远程桌面协议rdp-remote-desktop-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程桌面协议rdp-remote-desktop-protocol"}},[t._v("#")]),t._v(" 远程桌面协议RDP(Remote Desktop Protocol)")]),t._v(" "),a("h2",{attrs:{id:"超文本传输协议http-hyper-text-transfer-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超文本传输协议http-hyper-text-transfer-protocol"}},[t._v("#")]),t._v(" 超文本传输协议HTTP(Hyper Text Transfer Protocol)")]),t._v(" "),a("p",[t._v("通过这个协议访问网站。")]),t._v(" "),a("h3",{attrs:{id:"万维网www-world-wide-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#万维网www-world-wide-web"}},[t._v("#")]),t._v(" 万维网www(World Wide Web)")]),t._v(" "),a("ol",[a("li",[t._v("www提供分布式服务")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image7.png",alt:"img"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("统一资源定位系统URL(Uniform Resource Locator)")])]),t._v(" "),a("p",[t._v("有点像地址。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image8.png",alt:"img"}})]),t._v(" "),a("p",[t._v("网站的标识有多种方式，不同的端口，不同的IP地址，不同的域名(主机头)来区分。")]),t._v(" "),a("h3",{attrs:{id:"使用web代理服务器访问网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用web代理服务器访问网站"}},[t._v("#")]),t._v(" 使用web代理服务器访问网站")]),t._v(" "),a("p",[t._v("内网其它主机不能通过路由访问Internet，只能由web代理(在同一个网段里)访问外网，然后内网其它主机访问这个web代理来实现上网功能。如果web代理在外网，反而速度更慢。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("节省内网访问Internet的带宽(便于访问内容变化不大的网站)。")])]),t._v(" "),a("li",[a("p",[t._v("绕过防火墙访问外网。例如访问某个禁止的网站A，但是假如通过在与A同一个网络中的web代理，就可以访问该网站。")])]),t._v(" "),a("li",[a("p",[t._v("通过web代理避免被跟踪。")])])]),t._v(" "),a("h2",{attrs:{id:"电子邮件-smtp-pop3-imap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电子邮件-smtp-pop3-imap"}},[t._v("#")]),t._v(" 电子邮件(SMTP, POP3, IMAP)")]),t._v(" "),a("p",[t._v("SMTP发, POP3和IMAP是收。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image9.png",alt:"img"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);