(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{546:function(r,t,a){"use strict";a.r(t);var e=a(2),o=Object(e.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[r._v("#")]),r._v(" 定义")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120102059015.png",alt:"image-20221120102059015"}})]),r._v(" "),t("h2",{attrs:{id:"function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[r._v("#")]),r._v(" Function")]),r._v(" "),t("p",[r._v("传统的消息队列的主要应用场景包括：缓存/消峰、解耦和异步通信。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120102350139.png",alt:"image-20221120102350139"}})]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120102403972.png",alt:"image-20221120102403972"}})]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120104303607.png",alt:"image-20221120104303607"}})]),r._v(" "),t("h2",{attrs:{id:"消息队列的两种模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息队列的两种模式"}},[r._v("#")]),r._v(" 消息队列的两种模式")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120105508549.png",alt:"image-20221120105508549"}})]),r._v(" "),t("ul",[t("li",[r._v("一个分区只能由一个消费者消费")])]),r._v(" "),t("h2",{attrs:{id:"基础架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础架构"}},[r._v("#")]),r._v(" 基础架构")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221120110043918.png",alt:"image-20221120110043918"}})]),r._v(" "),t("ul",[t("li",[r._v("Producer：消息生产者，就是向Kafka broker 发消息的客户端。")]),r._v(" "),t("li",[r._v("Consumer：消息消费者，向Kafka broker 取消息的客户端。")]),r._v(" "),t("li",[r._v("Consumer Group（CG）：消费者组，由多个consumer 组成。消费者组内每个消\n费者负责消费不同分区的数据，一个分区只能由一个组内消费者消费；消费者组之间互不\n影响。所有的消费者都属于某个消费者组，即消费者组是逻辑上的一个订阅者。")]),r._v(" "),t("li",[r._v("Broker：一台Kafka 服务器就是一个broker。一个集群由多个broker 组成。一个\nbroker 可以容纳多个topic。")]),r._v(" "),t("li",[r._v("Topic：可以理解为一个队列，生产者和消费者面向的都是一个topic。")]),r._v(" "),t("li",[r._v("Partition：为了实现扩展性，一个非常大的topic 可以分布到多个broker（即服\n务器）上，一个topic 可以分为多个partition，每个partition 是一个有序的队列。")]),r._v(" "),t("li",[r._v("Replica：副本。一个topic 的每个分区都有若干个副本，一个Leader 和若干个\nFollower。")]),r._v(" "),t("li",[r._v("Leader：每个分区多个副本的“主”，生产者发送数据的对象，以及消费者消费数\n据的对象都是Leader。")]),r._v(" "),t("li",[r._v("Follower：每个分区多个副本中的“从”，实时从Leader 中同步数据，保持和\nLeader 数据的同步。Leader 发生故障时，某个Follower 会成为新的Leader。")])]),r._v(" "),t("p",[r._v("未完待续。。。")])])}),[],!1,null,null,null);t.default=o.exports}}]);