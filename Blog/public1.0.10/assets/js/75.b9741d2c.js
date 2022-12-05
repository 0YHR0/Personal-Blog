(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{477:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"资源管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源管理"}},[s._v("#")]),s._v(" 资源管理")]),s._v(" "),t("h4",{attrs:{id:"_1-资源管理介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-资源管理介绍"}},[s._v("#")]),s._v(" 1. 资源管理介绍")]),s._v(" "),t("p",[s._v("在kubernetes中，所有的内容都抽象为资源，用户需要通过操作资源来管理kubernetes。")]),s._v(" "),t("blockquote",[t("p",[s._v("kubernetes的本质上就是一个集群系统，用户可以在集群中部署各种服务，所谓的部署服务，其实就是在kubernetes集群中运行一个个的容器，并将指定的程序跑在容器中。")]),s._v(" "),t("p",[s._v("kubernetes的最小管理单元是pod而不是容器，所以只能将容器放在"),t("code",[s._v("Pod")]),s._v("中，而kubernetes一般也不会直接管理Pod，而是通过"),t("code",[s._v("Pod控制器")]),s._v("来管理Pod的。")]),s._v(" "),t("p",[s._v("Pod可以提供服务之后，就要考虑如何访问Pod中服务，kubernetes提供了"),t("code",[s._v("Service")]),s._v("资源实现这个功能。")]),s._v(" "),t("p",[s._v("当然，如果Pod中程序的数据需要持久化，kubernetes还提供了各种"),t("code",[s._v("存储")]),s._v("系统。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20200406225334627.png",alt:"image-20200406225334627"}})]),s._v(" "),t("blockquote",[t("p",[s._v("学习如何对集群上的"),t("code",[s._v("Pod、Pod控制器、Service、存储")]),s._v("等各种资源进行操作")])]),s._v(" "),t("h4",{attrs:{id:"_2-yaml语言介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-yaml语言介绍"}},[s._v("#")]),s._v(" 2. YAML语言介绍")]),s._v(" "),t("p",[s._v("YAML是一个类似 XML、JSON 的标记性语言。它强调以"),t("strong",[s._v("数据")]),s._v('为中心，并不是以标识语言为重点。因而YAML本身的定义比较简单，号称"一种人性化的数据格式语言"。')]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("<heima"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n    <age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("15</age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n    <address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("Beijing</address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n</heima"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("heima")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Beijing\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("YAML的语法比较简单，主要有下面几个：")]),s._v(" "),t("ul",[t("li",[s._v("大小写敏感")]),s._v(" "),t("li",[s._v("使用缩进表示层级关系")]),s._v(" "),t("li",[s._v("缩进不允许使用tab，只允许空格( 低版本限制 )")]),s._v(" "),t("li",[s._v("缩进的空格数不重要，只要相同层级的元素左对齐即可")]),s._v(" "),t("li",[s._v("'#'表示注释")])]),s._v(" "),t("p",[s._v("YAML支持以下几种数据类型：")]),s._v(" "),t("ul",[t("li",[s._v("纯量：单个的、不可再分的值")]),s._v(" "),t("li",[s._v("对象：键值对的集合，又称为映射（mapping）/ 哈希（hash） / 字典（dictionary）")]),s._v(" "),t("li",[s._v("数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 纯量, 就是指的一个简单的值，字符串、布尔值、整数、浮点数、Null、时间、日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 布尔类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true (或者True)\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2 整型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("234")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 浮点型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4 null类型 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token null important"}},[s._v("~")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用~表示null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5 日期类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("2018-02-17")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日期必须使用ISO 8601格式，即yyyy-MM-dd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6 时间类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("2018-02-17T15:02:31+08:00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7 字符串类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" heima     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简单写法，直接写值 , 如果字符串中间有特殊字符，必须使用双引号或者单引号包裹 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" line1\n    line2     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串过多的情况可以拆成多行，每一行会被转化成一个空格")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 形式一(推荐):")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("heima")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Beijing\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 形式二(了解):")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("heima")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Beijing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 形式一(推荐):")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 顺义\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 昌平  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 形式二(了解):")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("顺义"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("昌平"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("blockquote",[t("p",[s._v("小提示：")]),s._v(" "),t("p",[s._v("1 书写yaml切记"),t("code",[s._v(":")]),s._v(" 后面要加一个空格")]),s._v(" "),t("p",[s._v("2 如果需要将多段yaml配置放在一个文件中，中间要使用"),t("code",[s._v("---")]),s._v("分隔")]),s._v(" "),t("p",[s._v("3 下面是一个yaml转json的网站，可以通过它验证yaml是否书写正确")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://gitee.com/link?target=https%3A%2F%2Fwww.json2yaml.com%2Fconvert-yaml-to-json",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.json2yaml.com/convert-yaml-to-json"),t("OutboundLink")],1)])]),s._v(" "),t("h4",{attrs:{id:"_3-资源管理方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-资源管理方式"}},[s._v("#")]),s._v(" 3 资源管理方式")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令式对象管理：直接使用命令去操作kubernetes资源")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl run nginx-pod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx:1.17.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx-pod是pod的名称")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("命令式对象配置：通过命令配置和配置文件去操作kubernetes资源")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl create/patch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" nginx-pod.yaml     \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("声明式对象配置：通过apply命令和配置文件去操作kubernetes资源")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" nginx-pod.yaml   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#apply相当于创建或者更新")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("操作对象")]),s._v(" "),t("th",[s._v("适用环境")]),s._v(" "),t("th",[s._v("优点")]),s._v(" "),t("th",[s._v("缺点")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("命令式对象管理")]),s._v(" "),t("td",[s._v("对象")]),s._v(" "),t("td",[s._v("测试")]),s._v(" "),t("td",[s._v("简单")]),s._v(" "),t("td",[s._v("只能操作活动对象，无法审计、跟踪")])]),s._v(" "),t("tr",[t("td",[s._v("命令式对象配置")]),s._v(" "),t("td",[s._v("文件")]),s._v(" "),t("td",[s._v("开发")]),s._v(" "),t("td",[s._v("可以审计、跟踪")]),s._v(" "),t("td",[s._v("项目大时，配置文件多，操作麻烦")])]),s._v(" "),t("tr",[t("td",[s._v("声明式对象配置")]),s._v(" "),t("td",[s._v("目录")]),s._v(" "),t("td",[s._v("开发")]),s._v(" "),t("td",[s._v("支持目录操作")]),s._v(" "),t("td",[s._v("意外情况下难以调试")])])])]),s._v(" "),t("h4",{attrs:{id:"_3-1-命令式对象管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-命令式对象管理"}},[s._v("#")]),s._v(" 3.1 命令式对象管理")]),s._v(" "),t("p",[t("strong",[s._v("kubectl命令")])]),s._v(" "),t("p",[s._v("kubectl是kubernetes集群的命令行工具，通过它能够对集群本身进行管理，并能够在集群上进行容器化应用的安装部署。kubectl命令的语法如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kubectl [command] [type] [name] [flags]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("comand")]),s._v("：指定要对资源执行的操作，例如create、get、delete")]),s._v(" "),t("p",[t("strong",[s._v("type")]),s._v("：指定资源类型，比如deployment、pod、service")]),s._v(" "),t("p",[t("strong",[s._v("name")]),s._v("：指定资源的名称，名称大小写敏感")]),s._v(" "),t("p",[t("strong",[s._v("flags")]),s._v("：指定额外的可选参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有pod")]),s._v("\nkubectl get pod \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某个pod")]),s._v("\nkubectl get pod pod_name\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某个pod,以yaml格式展示结果")]),s._v("\nkubectl get pod pod_name "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看全部pod")]),s._v("\nkubectl get pod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" wide\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#排错常用")]),s._v("\nkubectl describe pod"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PodName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("NAMESPACE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看版本")]),s._v("\nkubectl version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看集群")]),s._v("\nkubectl cluster-info\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询节点信息")]),s._v("\nkubectl get nodes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[t("strong",[s._v("资源类型")])]),s._v(" "),t("p",[s._v("kubernetes中所有的内容都抽象为资源，可以通过下面的命令进行查看:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl api-resources\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("经常使用的资源有下面这些：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("资源分类")]),s._v(" "),t("th",[s._v("资源名称")]),s._v(" "),t("th",[s._v("缩写")]),s._v(" "),t("th",[s._v("资源作用")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("集群级别资源")]),s._v(" "),t("td",[s._v("nodes")]),s._v(" "),t("td",[s._v("no")]),s._v(" "),t("td",[s._v("集群组成部分")])]),s._v(" "),t("tr",[t("td",[s._v("namespaces")]),s._v(" "),t("td",[s._v("ns")]),s._v(" "),t("td",[s._v("隔离Pod")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("pod资源")]),s._v(" "),t("td",[s._v("pods")]),s._v(" "),t("td",[s._v("po")]),s._v(" "),t("td",[s._v("装载容器")])]),s._v(" "),t("tr",[t("td",[s._v("pod资源控制器")]),s._v(" "),t("td",[s._v("replicationcontrollers")]),s._v(" "),t("td",[s._v("rc")]),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("replicasets")]),s._v(" "),t("td",[s._v("rs")]),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("deployments")]),s._v(" "),t("td",[s._v("deploy")]),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("daemonsets")]),s._v(" "),t("td",[s._v("ds")]),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("jobs")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("cronjobs")]),s._v(" "),t("td",[s._v("cj")]),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("horizontalpodautoscalers")]),s._v(" "),t("td",[s._v("hpa")]),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("statefulsets")]),s._v(" "),t("td",[s._v("sts")]),s._v(" "),t("td",[s._v("控制pod资源")])]),s._v(" "),t("tr",[t("td",[s._v("服务发现资源")]),s._v(" "),t("td",[s._v("services")]),s._v(" "),t("td",[s._v("svc")]),s._v(" "),t("td",[s._v("统一pod对外接口")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("ingress")]),s._v(" "),t("td",[s._v("ing")]),s._v(" "),t("td",[s._v("统一pod对外接口")])]),s._v(" "),t("tr",[t("td",[s._v("存储资源")]),s._v(" "),t("td",[s._v("volumeattachments")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("存储")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("persistentvolumes")]),s._v(" "),t("td",[s._v("pv")]),s._v(" "),t("td",[s._v("存储")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("persistentvolumeclaims")]),s._v(" "),t("td",[s._v("pvc")]),s._v(" "),t("td",[s._v("存储")])]),s._v(" "),t("tr",[t("td",[s._v("配置资源")]),s._v(" "),t("td",[s._v("configmaps")]),s._v(" "),t("td",[s._v("cm")]),s._v(" "),t("td",[s._v("配置")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("secrets")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("配置")])])])]),s._v(" "),t("p",[t("strong",[s._v("操作")])]),s._v(" "),t("p",[s._v("kubernetes允许对资源进行多种操作，可以通过--help查看详细的操作命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kubectl --help\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("经常使用的操作有下面这些：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("命令分类")]),s._v(" "),t("th",[s._v("命令")]),s._v(" "),t("th",[s._v("翻译")]),s._v(" "),t("th",[s._v("命令作用")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("基本命令")]),s._v(" "),t("td",[s._v("create")]),s._v(" "),t("td",[s._v("创建")]),s._v(" "),t("td",[s._v("创建一个资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("edit")]),s._v(" "),t("td",[s._v("编辑")]),s._v(" "),t("td",[s._v("编辑一个资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("get")]),s._v(" "),t("td",[s._v("获取")]),s._v(" "),t("td",[s._v("获取一个资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("patch")]),s._v(" "),t("td",[s._v("更新")]),s._v(" "),t("td",[s._v("更新一个资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("delete")]),s._v(" "),t("td",[s._v("删除")]),s._v(" "),t("td",[s._v("删除一个资源")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("explain")]),s._v(" "),t("td",[s._v("解释")]),s._v(" "),t("td",[s._v("展示资源文档")])]),s._v(" "),t("tr",[t("td",[s._v("运行和调试")]),s._v(" "),t("td",[s._v("run")]),s._v(" "),t("td",[s._v("运行")]),s._v(" "),t("td",[s._v("在集群中运行一个指定的镜像")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("expose")]),s._v(" "),t("td",[s._v("暴露")]),s._v(" "),t("td",[s._v("暴露资源为Service")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("describe")]),s._v(" "),t("td",[s._v("描述")]),s._v(" "),t("td",[s._v("显示资源内部信息")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("logs")]),s._v(" "),t("td",[s._v("日志输出容器在 pod 中的日志")]),s._v(" "),t("td",[s._v("输出容器在 pod 中的日志")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("attach")]),s._v(" "),t("td",[s._v("缠绕进入运行中的容器")]),s._v(" "),t("td",[s._v("进入运行中的容器")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("exec")]),s._v(" "),t("td",[s._v("执行容器中的一个命令")]),s._v(" "),t("td",[s._v("执行容器中的一个命令")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("cp")]),s._v(" "),t("td",[s._v("复制")]),s._v(" "),t("td",[s._v("在Pod内外复制文件")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("rollout")]),s._v(" "),t("td",[s._v("首次展示")]),s._v(" "),t("td",[s._v("管理资源的发布")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("scale")]),s._v(" "),t("td",[s._v("规模")]),s._v(" "),t("td",[s._v("扩(缩)容Pod的数量")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("autoscale")]),s._v(" "),t("td",[s._v("自动调整")]),s._v(" "),t("td",[s._v("自动调整Pod的数量")])]),s._v(" "),t("tr",[t("td",[s._v("高级命令")]),s._v(" "),t("td",[s._v("apply")]),s._v(" "),t("td",[s._v("rc")]),s._v(" "),t("td",[s._v("通过文件对资源进行配置")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("label")]),s._v(" "),t("td",[s._v("标签")]),s._v(" "),t("td",[s._v("更新资源上的标签")])]),s._v(" "),t("tr",[t("td",[s._v("其他命令")]),s._v(" "),t("td",[s._v("cluster-info")]),s._v(" "),t("td",[s._v("集群信息")]),s._v(" "),t("td",[s._v("显示集群信息")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td",[s._v("version")]),s._v(" "),t("td",[s._v("版本")]),s._v(" "),t("td",[s._v("显示当前Server和Client的版本")])])])]),s._v(" "),t("p",[s._v("下面以一个namespace / pod的创建和删除简单演示下命令的使用：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个namespace")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create namespace dev")]),s._v("\nnamespace/dev created\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取namespace")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get ns")]),s._v("\nNAME              STATUS   AGE\ndefault           Active   21h\ndev               Active   21s\nkube-node-lease   Active   21h\nkube-public       Active   21h\nkube-system       Active   21h\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在此namespace下创建并运行一个nginx的Pod")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl run pod --image=nginx:latest -n dev")]),s._v("\nkubectl run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--generator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deployment/apps.v1 is DEPRECATED and will be removed "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a future version. Use kubectl run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--generator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("run-pod/v1 or kubectl create instead.\ndeployment.apps/pod created\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看新创建的pod")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod -n dev")]),s._v("\nNAME  READY   STATUS    RESTARTS   AGE\npod   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          21s\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定的pod")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete pod pod-864f9875b9-pcw7x")]),s._v("\npod "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pod"')]),s._v(" deleted\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定的namespace")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete ns dev")]),s._v("\nnamespace "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),s._v(" deleted\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h4",{attrs:{id:"_3-2-命令式对象配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-命令式对象配置"}},[s._v("#")]),s._v(" 3.2 命令式对象配置")]),s._v(" "),t("p",[s._v("命令式对象配置就是使用命令配合配置文件一起来操作kubernetes资源。")]),s._v(" "),t("p",[s._v("1） 创建一个nginxpod.yaml，内容如下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Namespace\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginxpod\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("containers\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("2）执行create命令，创建资源：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nginxpod.yaml")]),s._v("\nnamespace/dev created\npod/nginxpod created\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("此时发现创建了两个资源对象，分别是namespace和pod")]),s._v(" "),t("p",[s._v("3）执行get命令，查看资源：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  kubectl get -f nginxpod.yaml")]),s._v("\nNAME            STATUS   AGE\nnamespace/dev   Active   18s\n\nNAME            READY   STATUS    RESTARTS   AGE\npod/nginxpod    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          17s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这样就显示了两个资源对象的信息")]),s._v(" "),t("p",[s._v("4）执行delete命令，删除资源：")]),s._v(" "),t("div",{staticClass:"language-SH line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete -f nginxpod.yaml")]),s._v("\nnamespace "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),s._v(" deleted\npod "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginxpod"')]),s._v(" deleted\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("此时发现两个资源对象被删除了")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("总结:\n    命令式对象配置的方式操作资源，可以简单的认为：命令  +  yaml配置文件（里面是命令需要的各种参数）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_3-3-3-声明式对象配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-声明式对象配置"}},[s._v("#")]),s._v(" 3.3.3 声明式对象配置")]),s._v(" "),t("p",[s._v("声明式对象配置跟命令式对象配置很相似，但是它只有一个命令apply。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先执行一次kubectl apply -f yaml文件，发现创建了资源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  kubectl apply -f nginxpod.yaml")]),s._v("\nnamespace/dev created\npod/nginxpod created\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次执行一次kubectl apply -f yaml文件，发现说资源没有变动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  kubectl apply -f nginxpod.yaml")]),s._v("\nnamespace/dev unchanged\npod/nginxpod unchanged\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("总结:\n其实声明式对象配置就是使用apply描述一个资源最终的状态（在yaml中定义状态）\n使用apply操作资源：")]),s._v(" "),t("ul",[t("li",[s._v("如果资源不存在，就创建，相当于 kubectl create")]),s._v(" "),t("li",[s._v("如果资源已存在，就更新，相当于 kubectl patch")])]),s._v(" "),t("blockquote",[t("p",[s._v("扩展：kubectl可以在node节点上运行吗 ?")])]),s._v(" "),t("p",[s._v("kubectl的运行是需要进行配置的，它的配置文件是$HOME/.kube，如果想要在node节点运行此命令，需要将master上的.kube文件复制到node节点上，即在master节点上执行下面操作：(云服务器手动复制才能成功)")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("  ~/.kube   node1: ~/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("使用推荐: 三种方式应该怎么用 ?")])]),s._v(" "),t("p",[s._v("创建/更新资源 使用声明式对象配置 kubectl apply -f XXX.yaml")]),s._v(" "),t("p",[s._v("删除资源 使用命令式对象配置 kubectl delete -f XXX.yaml")]),s._v(" "),t("p",[s._v("查询资源 使用命令式对象管理 kubectl get(describe) 资源名称")])])}),[],!1,null,null,null);t.default=n.exports}}]);