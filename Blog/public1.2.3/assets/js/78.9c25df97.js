(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{475:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"distributed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distributed"}},[s._v("#")]),s._v(" Distributed")]),s._v(" "),t("h2",{attrs:{id:"数据同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据同步"}},[s._v("#")]),s._v(" 数据同步")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113238606.png",alt:"image-20230115113238606"}})]),s._v(" "),t("ul",[t("li",[s._v("方案1："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113448589.png",alt:"image-20230115113448589"}})]),s._v(" "),t("li",[s._v("方案2："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113520412.png",alt:"image-20230115113520412"}})]),s._v(" "),t("li",[s._v("方案3："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113749715.png",alt:"image-20230115113749715"}})]),s._v(" "),t("li",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115113914462.png",alt:"image-20230115113914462"}})])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115122007225.png",alt:"image-20230115122007225"}})]),s._v(" "),t("ul",[t("li",[s._v("声明队列交换机"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115122644192.png",alt:"image-20230115122644192"}})]),s._v(" "),t("li",[s._v("发送消息：由于把整个hotel对象发到消息队列里面太占内存了，所以只发id，根据id到mysql查询"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115123013530.png",alt:"image-20230115123013530"}})])]),s._v(" "),t("h2",{attrs:{id:"集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[s._v("#")]),s._v(" 集群")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115124512942.png",alt:"image-20230115124512942"}})]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.2'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("es01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("7.12.1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" es01\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node.name=es01\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.name=es"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" discovery.seed_hosts=es02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es03\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.initial_master_nodes=es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es03\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9200"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" elastic\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("es02")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("7.12.1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" es02\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node.name=es02\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.name=es"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" discovery.seed_hosts=es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es03\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.initial_master_nodes=es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es03\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9201"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" elastic\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("es03")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("7.12.1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" es03\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node.name=es03\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.name=es"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cluster\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" discovery.seed_hosts=es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es02\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cluster.initial_master_nodes=es01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("es03\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" elastic\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9202"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data02")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data03")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elastic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115125122769.png",alt:"image-20230115125122769"}})]),s._v(" "),t("ul",[t("li",[s._v("监控集群状态https://github.com/lmenezes/cerebro"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115125802681.png",alt:"image-20230115125802681"}})]),s._v(" "),t("li",[s._v("创建索引库时集群分片"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130026581.png",alt:"image-20230115130026581"}})]),s._v(" "),t("li",[s._v("可以在上面more的地方创建索引库并设置分片"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130152938.png",alt:"image-20230115130152938"}})]),s._v(" "),t("li",[s._v("节点角色"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130516690.png",alt:"image-20230115130516690"}})]),s._v(" "),t("li",[s._v("节点选择"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115130826653.png",alt:"image-20230115130826653"}})])]),s._v(" "),t("h3",{attrs:{id:"脑裂问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脑裂问题"}},[s._v("#")]),s._v(" 脑裂问题")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115131137586.png",alt:"image-20230115131137586"}})]),s._v(" "),t("ul",[t("li",[s._v("一个集群由于网络阻塞出现了两个主节点，在网络恢复之后，会出现两个主节点")])]),s._v(" "),t("h2",{attrs:{id:"分片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分片"}},[s._v("#")]),s._v(" 分片")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115171445641.png",alt:"image-20230115171445641"}})]),s._v(" "),t("ul",[t("li",[s._v("新增数据（左边是协调节点）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115171637136.png",alt:"image-20230115171637136"}})]),s._v(" "),t("li",[s._v("查询数据"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115173333625.png",alt:"image-20230115173333625"}})])]),s._v(" "),t("h2",{attrs:{id:"故障转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故障转移"}},[s._v("#")]),s._v(" 故障转移")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115173602331.png",alt:"image-20230115173602331"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230115173845491.png",alt:"image-20230115173845491"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);