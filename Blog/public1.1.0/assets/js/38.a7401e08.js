(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{440:function(r,t,e){"use strict";e.r(t);var _=e(2),o=Object(_.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"ch01-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ch01-docker"}},[r._v("#")]),r._v(" Ch01 Docker")]),r._v(" "),t("h2",{attrs:{id:"_1-1-docker作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-docker作用"}},[r._v("#")]),r._v(" 1.1.Docker作用")]),r._v(" "),t("p",[r._v("Docker如何解决大型项目依赖关系复杂，不同组件依赖的兼容性问题？")]),r._v(" "),t("ul",[t("li",[r._v("Docker允许开发中将应用、依赖、函数库、配置一起"),t("strong",[r._v("打包")]),r._v("，形成可移植镜像")]),r._v(" "),t("li",[r._v("Docker应用运行在容器中，使用沙箱机制，相互"),t("strong",[r._v("隔离")])])]),r._v(" "),t("p",[r._v("Docker如何解决开发、测试、生产环境有差异的问题？")]),r._v(" "),t("ul",[t("li",[r._v("Docker镜像中包含完整运行环境，包括系统函数库，仅依赖系统的Linux内核，因此可以在任意Linux操作系统上运行")])]),r._v(" "),t("p",[r._v("Docker是一个快速交付应用、运行应用的技术，具备下列优势：")]),r._v(" "),t("ul",[t("li",[r._v("可以将程序及其依赖、运行环境一起打包为一个镜像，可以迁移到任意Linux操作系统")]),r._v(" "),t("li",[r._v("运行时利用沙箱机制形成隔离容器，各个应用互不干扰")]),r._v(" "),t("li",[r._v("启动、移除都可以通过一行命令完成，方便快捷")])]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731145914960.png",alt:"image-20210731145914960"}})]),r._v(" "),t("h2",{attrs:{id:"_1-2-docker架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-docker架构"}},[r._v("#")]),r._v(" 1.2.Docker架构")]),r._v(" "),t("h3",{attrs:{id:"_1-2-1-镜像和容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-镜像和容器"}},[r._v("#")]),r._v(" 1.2.1.镜像和容器")]),r._v(" "),t("p",[r._v("Docker中有几个重要的概念：")]),r._v(" "),t("p",[t("strong",[r._v("镜像（Image）")]),r._v("：Docker将应用程序及其所需的依赖、函数库、环境、配置等文件打包在一起，称为镜像。")]),r._v(" "),t("p",[t("strong",[r._v("容器（Container）")]),r._v("：镜像中的应用程序运行后形成的进程就是"),t("strong",[r._v("容器")]),r._v("，只是Docker会给容器进程做隔离，对外不可见。")]),r._v(" "),t("p",[r._v("一切应用最终都是代码组成，都是硬盘中的一个个的字节形成的"),t("strong",[r._v("文件")]),r._v("。只有运行时，才会加载到内存，形成进程。")]),r._v(" "),t("p",[r._v("而"),t("strong",[r._v("镜像")]),r._v("，就是把一个应用在硬盘上的文件、及其运行环境、部分系统函数库文件一起打包形成的文件包。这个文件包是只读的。")]),r._v(" "),t("p",[t("strong",[r._v("容器")]),r._v("呢，就是将这些文件中编写的程序、函数加载到内存中允许，形成进程，只不过要隔离起来。因此一个镜像可以启动多次，形成多个容器进程。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731153059464.png",alt:"image-20210731153059464"}})]),r._v(" "),t("h3",{attrs:{id:"_1-2-2-dockerhub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-dockerhub"}},[r._v("#")]),r._v(" 1.2.2.DockerHub")]),r._v(" "),t("p",[r._v("开源应用程序非常多，打包这些应用往往是重复的劳动。为了避免这些重复劳动，人们就会将自己打包的应用镜像，例如Redis、MySQL镜像放到网络上，共享使用，就像GitHub的代码共享一样。")]),r._v(" "),t("ul",[t("li",[t("p",[r._v("DockerHub：DockerHub是一个官方的Docker镜像的托管平台。这样的平台称为Docker Registry。")])]),r._v(" "),t("li",[t("p",[r._v("国内也有类似于DockerHub 的公开服务，比如 "),t("a",{attrs:{href:"https://c.163yun.com/hub",target:"_blank",rel:"noopener noreferrer"}},[r._v("网易云镜像服务"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://cr.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("阿里云镜像库"),t("OutboundLink")],1),r._v("等。")])])]),r._v(" "),t("p",[r._v("我们一方面可以将自己的镜像共享到DockerHub，另一方面也可以从DockerHub拉取镜像：")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731153743354.png",alt:"image-20210731153743354"}})]),r._v(" "),t("h3",{attrs:{id:"_1-2-3-docker架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-docker架构"}},[r._v("#")]),r._v(" 1.2.3.Docker架构")]),r._v(" "),t("p",[r._v("我们要使用Docker来操作镜像、容器，就必须要安装Docker。")]),r._v(" "),t("p",[r._v("Docker是一个CS架构的程序，由两部分组成：")]),r._v(" "),t("ul",[t("li",[t("p",[r._v("服务端(server)：Docker守护进程，负责处理Docker指令，管理镜像、容器等")])]),r._v(" "),t("li",[t("p",[r._v("客户端(client)：通过命令或RestAPI向Docker服务端发送指令。可以在本地或远程向服务端发送指令。")])])]),r._v(" "),t("p",[r._v("如图：")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731154257653.png",alt:"image-20210731154257653"}})]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220418115558700.png",alt:"image-20220418115558700"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);