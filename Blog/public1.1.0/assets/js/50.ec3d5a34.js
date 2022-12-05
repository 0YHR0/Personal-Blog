(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{451:function(a,e,r){"use strict";r.r(e);var t=r(2),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[a._v("#")]),a._v(" YARN")]),a._v(" "),e("p",[e("strong",[a._v("架构：")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528195210453.png",alt:"image-20220528195210453"}})]),a._v(" "),e("h3",{attrs:{id:"container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[a._v("#")]),a._v(" "),e("strong",[a._v("Container")])]),a._v(" "),e("p",[a._v("容器（Container）这个东西是 Yarn 对资源做的一层抽象。就像我们平时开发过程中，经常需要对底层一些东西进行封装，只提供给上层一个调用接口一样，Yarn 对资源的管理也是用到了这种思想。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/7fd3a_1440w.jpeg",alt:"img"}})]),a._v(" "),e("p",[a._v("如上所示，Yarn 将CPU核数，内存这些计算资源都封装成为一个个的容器（Container）。需要注意两点：")]),a._v(" "),e("ul",[e("li",[a._v("容器由 NodeManager 启动和管理，并被它所监控。")]),a._v(" "),e("li",[a._v("容器被 ResourceManager 进行调度。")])]),a._v(" "),e("h3",{attrs:{id:"三个主要组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三个主要组件"}},[a._v("#")]),a._v(" "),e("strong",[a._v("三个主要组件")])]),a._v(" "),e("p",[a._v("再看最上面的图，我们能直观发现的两个主要的组件是 ResourceManager 和 NodeManager ，但其实还有一个 ApplicationMaster 在图中没有直观显示。我们分别来看这三个组件。")]),a._v(" "),e("h4",{attrs:{id:"resourcemanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resourcemanager"}},[a._v("#")]),a._v(" "),e("strong",[a._v("ResourceManager")])]),a._v(" "),e("p",[a._v("我们先来说说上图中最中央的那个 ResourceManager（RM）。从名字上我们就能知道这个组件是负责资源管理的，整个系统有且只有一个 RM ，来负责资源的调度。它也包含了两个主要的组件：定时调用器(Scheduler)以及应用管理器(ApplicationManager)。")]),a._v(" "),e("ol",[e("li",[a._v("定时调度器(Scheduler)：从本质上来说，定时调度器就是一种策略，或者说一种算法。当 Client 提交一个任务的时候，它会根据所需要的资源以及当前集群的资源状况进行分配。注意，它只负责向应用程序分配资源，并不做监控以及应用程序的状态跟踪。")]),a._v(" "),e("li",[a._v("应用管理器(ApplicationManager)：同样，听名字就能大概知道它是干嘛的。应用管理器就是负责管理 Client 用户提交的应用。上面不是说到定时调度器（Scheduler）不对用户提交的程序监控嘛，其实啊，监控应用的工作正是由应用管理器（ApplicationManager）完成的。")])]),a._v(" "),e("h4",{attrs:{id:"applicationmaster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applicationmaster"}},[a._v("#")]),a._v(" "),e("strong",[a._v("ApplicationMaster")])]),a._v(" "),e("p",[a._v("每当 Client 提交一个 Application 时候，就会新建一个 ApplicationMaster 。由这个 ApplicationMaster 去与 ResourceManager 申请容器资源，获得资源后会将要运行的程序发送到容器上启动，然后进行分布式计算。")]),a._v(" "),e("p",[a._v("这里可能有些难以理解，为什么是把运行程序发送到容器上去运行？如果以传统的思路来看，是程序运行着不动，然后数据进进出出不停流转。但当数据量大的时候就没法这么玩了，因为海量数据移动成本太大，时间太长。但是中国有一句老话山不过来，我就过去。大数据分布式计算就是这种思想，既然大数据难以移动，那我就把容易移动的应用程序发布到各个节点进行计算呗，这就是大数据分布式计算的思路。")]),a._v(" "),e("h4",{attrs:{id:"nodemanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodemanager"}},[a._v("#")]),a._v(" "),e("strong",[a._v("NodeManager")])]),a._v(" "),e("p",[a._v("NodeManager 是 ResourceManager 在每台机器的上代理，负责容器的管理，并监控他们的资源使用情况（cpu，内存，磁盘及网络等），以及向 ResourceManager/Scheduler 提供这些资源使用报告。")]),a._v(" "),e("p",[e("strong",[a._v("提交一个 Application 到 Yarn 的流程：")])]),a._v(" "),e("ol",[e("li",[a._v("Client 向 Yarn 提交 Application，这里我们假设是一个 MapReduce 作业。")]),a._v(" "),e("li",[a._v("ResourceManager 向 NodeManager 通信，为该 Application 分配第一个容器。并在这个容器中运行这个应用程序对应的 ApplicationMaster。")]),a._v(" "),e("li",[a._v("ApplicationMaster 启动以后，对 作业（也就是 Application） 进行拆分，拆分 task 出来，这些 task 可以运行在一个或多个容器中。然后向 ResourceManager 申请要运行程序的容器，并定时向 ResourceManager 发送心跳。")]),a._v(" "),e("li",[a._v("申请到容器后，ApplicationMaster 会去和容器对应的 NodeManager 通信，而后将作业分发到对应的 NodeManager 中的容器去运行，这里会将拆分后的 MapReduce 进行分发，对应容器中运行的可能是 Map 任务，也可能是 Reduce 任务。")]),a._v(" "),e("li",[a._v("容器中运行的任务会向 ApplicationMaster 发送心跳，汇报自身情况。当程序运行完成后， ApplicationMaster 再向 ResourceManager 注销并释放容器资源。")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528195231404.png",alt:"image-20220528195231404"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);