(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{508:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"副本集-replica-sets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#副本集-replica-sets"}},[t._v("#")]),t._v(" 副本集-Replica Sets")]),t._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("MongoDB中的副本集（Replica Set）是一组维护相同数据集的mongod服务。 副本集可提供冗余和高\n可用性，是所有生产部署的基础。")]),t._v(" "),s("p",[t._v("也可以说，副本集类似于有自动故障恢复功能的主从集群。通俗的讲就是用多台机器进行同一数据的异\n步同步，从而使多台机器拥有同一数据的多个副本，并且当主库当掉时在不需要用户干预的情况下自动\n切换其他备份服务器做主库。而且还可以利用副本服务器做只读服务器，实现读写分离，提高负载。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("冗余和数据可用性\n复制提供冗余并提高数据可用性。 通过在不同数据库服务器上提供多个数据副本，复制可提供一定级别\n的容错功能，以防止丢失单个数据库服务器。")]),t._v(" "),s("p",[t._v("在某些情况下，复制可以提供增加的读取性能，因为客户端可以将读取操作发送到不同的服务上， 在不\n同数据中心维护数据副本可以增加分布式应用程序的数据位置和可用性。 您还可以为专用目的维护其他\n副本，例如灾难恢复，报告或备份。")])]),t._v(" "),s("li",[s("p",[t._v("MongoDB中的复制\n副本集是一组维护相同数据集的mongod实例。 副本集包含多个数据承载节点和可选的一个仲裁节点。\n在承载数据的节点中，一个且仅一个成员被视为主节点，而其他节点被视为次要（从）节点。")]),t._v(" "),s("p",[t._v("主节点接收所有写操作。 副本集只能有一个master能够确认具有{w：“most”}写入关注的写入; 虽然在某\n些情况下，另一个mongod实例可能暂时认为自己也是master。主要记录其操作日志中的数据集的所有\n更改，即oplog。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118103757388.png",alt:"image-20221118103757388"}})]),t._v(" "),s("p",[t._v("辅助(副本)节点复制主节点的oplog并将操作应用于其数据集，以使辅助节点的数据集反映主节点的数据\n集。 如果master不在，则符合条件的中学将举行选举以选出新的master。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("主从复制和副本集区别")]),t._v(" "),s("p",[t._v("主从集群和副本集最大的区别就是副本集没有固定的“主节点”，但是主从复制有；整个集群会选出一个“主节点”，当其挂掉后，又在剩下的从节点中选中其他节点为“主节点”，副本集总有一个活跃点(主、primary)和一个或多个备份节点(从、secondary)。")])])]),t._v(" "),s("h3",{attrs:{id:"副本集的三个角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#副本集的三个角色"}},[t._v("#")]),t._v(" 副本集的三个角色")]),t._v(" "),s("p",[t._v("副本集有两种类型三种角色")]),t._v(" "),s("p",[t._v("两种类型：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("主节点（Primary）类型：数据操作的主要连接点，可读写。")])]),t._v(" "),s("li",[s("p",[t._v("次要（辅助、从）节点（Secondaries）类型：数据冗余备份节点，可以读或选举。")])])]),t._v(" "),s("p",[t._v("三种角色：")]),t._v(" "),s("ul",[s("li",[t._v("主要成员（Primary）！：主要接收所有写操作。就是主节点。")]),t._v(" "),s("li",[t._v("副本成员（Replicate）：从主节点通过复制操作以维护相同的数据集，即备份数据，不可写操作，但可\n以读操作（但需要配置）。是默认的一种从节点类型。")]),t._v(" "),s("li",[t._v("仲裁者（Arbiter）：不保留任何数据的副本，只具有投票选举作用。当然也可以将仲裁服务器维护为副\n本集的一部分，即副本成员同时也可以是仲裁者。也是一种从节点类型。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118105740396.png",alt:"image-20221118105740396"}})]),t._v(" "),s("p",[t._v("关于仲裁者的额外说明：用来凑奇数个实例")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("您可以将额外的mongod实例添加到副本集作为仲裁者。 仲裁者不维护数据集。 仲裁者的目的是通过\n响应其他副本集成员的心跳和选举请求来维护副本集中的仲裁。 因为它们不存储数据集，所以仲裁器可\n以是提供副本集仲裁功能的好方法，其资源成本比具有数据集的全功能副本集成员更便宜。")])]),t._v(" "),s("li",[s("p",[t._v("如果您的副本集具有偶数个成员，请添加仲裁者以获得主要选举中的“大多数”投票。 仲裁者不需要专用\n硬件。")])]),t._v(" "),s("li",[s("p",[t._v("仲裁者将永远是仲裁者，而主要人员可能会退出并成为次要人员，而次要人员可能成为选举期间的主要\n人员。")])]),t._v(" "),s("li",[s("p",[t._v("如果你的副本+主节点的个数是偶数，建议加一个仲裁者，形成奇数，容易满足大多数的投票。")])]),t._v(" "),s("li",[s("p",[t._v("如果你的副本+主节点的个数是奇数，可以不加仲裁者。")])])]),t._v(" "),s("h3",{attrs:{id:"主节点的选举原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主节点的选举原则"}},[t._v("#")]),t._v(" 主节点的选举原则")]),t._v(" "),s("p",[t._v("MongoDB在副本集中，会自动进行主节点的选举，主节点选举的触发条件：\n1） 主节点故障\n2） 主节点网络不可达（默认心跳信息为10秒）\n3） 人工干预（rs.stepDown(600)）\n一旦触发选举，就要根据一定规则来选主节点。")]),t._v(" "),s("p",[t._v("选举规则是根据票数来决定谁获胜：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("票数最高，且获得了“大多数”成员的投票支持的节点获胜。\n“大多数”的定义为：假设复制集内投票成员数量为N，则大多数为 N/2 + 1。例如：3个投票成员，\n则大多数的值是2。当复制集内存活成员数量不足大多数时，整个复制集将无法选举出Primary，\n复制集将无法提供写服务，处于只读状态。")])]),t._v(" "),s("li",[s("p",[t._v("若票数相同，且都获得了“大多数”成员的投票支持的，数据新的节点获胜。\n数据的新旧是通过操作日志oplog来对比的。")])])]),t._v(" "),s("p",[t._v("在获得票数的时候，优先级（priority）参数影响重大。\n可以通过设置优先级（priority）来设置额外票数。优先级即权重，取值为0-1000，相当于可额外增加\n0-1000的票数，优先级的值越大，就越可能获得多数成员的投票（votes）数。指定较高的值可使成员\n更有资格成为主要成员，更低的值可使成员更不符合条件。\n默认情况下，优先级的值是1")]),t._v(" "),s("h3",{attrs:{id:"仲裁节点和主节点故障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仲裁节点和主节点故障"}},[t._v("#")]),t._v(" 仲裁节点和主节点故障")]),t._v(" "),s("p",[t._v("先关掉仲裁节点27019，\n关掉现在的主节点27018")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("登录27017后，发现，27017仍然是从节点，副本集中没有主节点了，导致此时，副本集是只读状态，\n无法写入。")])]),t._v(" "),s("li",[s("p",[t._v("为啥不选举了？因为27017的票数，没有获得大多数，即没有大于等于2，它只有默认的一票（优先级\n是1）")])]),t._v(" "),s("li",[s("p",[t._v("如果要触发选举，随便加入一个成员即可。")])]),t._v(" "),s("li",[s("p",[t._v("如果只加入27019仲裁节点成员，则主节点一定是27017，因为没得选了，仲裁节点不参与选举，\n但参与投票。")])]),t._v(" "),s("li",[s("p",[t._v("如果只加入27018节点，会发起选举。因为27017和27018都是两票，则按照谁数据新，谁当主节\n点。")])])]),t._v(" "),s("h2",{attrs:{id:"仲裁节点和从节点故障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仲裁节点和从节点故障"}},[t._v("#")]),t._v(" 仲裁节点和从节点故障")]),t._v(" "),s("p",[t._v("先关掉仲裁节点27019，\n关掉现在的副本节点27018")]),t._v(" "),s("ul",[s("li",[t._v("10秒后，27017主节点自动降级为副本节点。（服务降级）")]),t._v(" "),s("li",[t._v("副本集不可写数据了，已经故障了。")])]),t._v(" "),s("h2",{attrs:{id:"compass连接副本集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compass连接副本集"}},[t._v("#")]),t._v(" Compass连接副本集")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118115734408.png",alt:"image-20221118115734408"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118115741020.png",alt:"image-20221118115741020"}})]),t._v(" "),s("h2",{attrs:{id:"springdatamongodb连接副本集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springdatamongodb连接副本集"}},[t._v("#")]),t._v(" SpringDataMongoDB连接副本集")]),t._v(" "),s("p",[t._v("副本集语法：")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//host1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("host2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("host3/articledb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("\nconnect=replicaSet"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&slaveOk=true&replicaSet=副本集名字")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("其中：")]),t._v(" "),s("ul",[s("li",[t._v("slaveOk=true：开启副本节点读的功能，可实现读写分离。")]),t._v(" "),s("li",[t._v("connect=replicaSet：自动到副本集中选择读写的主机。如果slaveOK是打开的，则实现了读写分离")])]),t._v(" "),s("p",[t._v("【示例】\n连接 replica set 三台服务器 (端口 27017, 27018, 和27019)，直接连接第一个服务器，无论是replica\nset一部分或者主服务器或者从服务器，写入操作应用在主服务器 并且分布查询到从服务器。\n修改配置文件application.yml")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#数据源配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mongodb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主机地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# host: 180.76.159.126")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# database: articledb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认端口是27017")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# port: 27017")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#也可以使用uri连接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#uri: mongodb://192.168.40.134:27017/articledb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 副本集的连接字符串")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nmongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//180.76.159.126"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("180.76.159.126"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("180.76.159.126"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("27019/article\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("connect=replicaSet"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&slaveOk=true&replicaSet=myrs")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("注意：\n主机必须是副本集中所有的主机，包括主节点、副本节点、仲裁节点。\nSpringDataMongoDB自动实现了读写分离：")]),t._v(" "),s("ul",[s("li",[t._v("写操作时，只打开主节点连接")]),t._v(" "),s("li",[t._v("读操作是，同时打开主节点和从节点连接，但使用从节点获取数据")])]),t._v(" "),s("p",[t._v("完整的连接字符串的参考\nMongoDB客户端连接语法：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mongodb://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("username:password@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("host1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":port1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(",host2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":port2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(",hostN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":portN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("?options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("mongodb:// 这是固定的格式，必须要指定。")])]),t._v(" "),s("li",[s("p",[t._v("username:password@ 可选项，如果设置，在连接数据库服务器之后，驱动都会尝试登陆这个数据库")])]),t._v(" "),s("li",[s("p",[t._v("host1 必须的指定至少一个host, host1 是这个URI唯一要填写的。它指定了要连接服务器的地址。如果要连接复制集，请指定多个主机地址。")])]),t._v(" "),s("li",[s("p",[t._v("portX 可选的指定端口，如果不填，默认为27017")])]),t._v(" "),s("li",[s("p",[t._v("/database 如果指定username:password@，连接并验证登陆指定数据库。若不指定，默认打开test 数据库。")])]),t._v(" "),s("li",[s("p",[t._v("?options 是连接选项。如果不使用/database，则前面需要加上/。所有连接选项都是键值对\nname=value，键值对之间通过&或;（分号）隔开")])])]),t._v(" "),s("p",[t._v("标准的连接格式包含了多个选项(options)，如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118120111565.png",alt:"image-20221118120111565"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);