(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{472:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[s._v("#")]),s._v(" Namespace")]),s._v(" "),a("p",[s._v("Namespace是kubernetes系统中的一种非常重要资源，它的主要作用是用来实现"),a("strong",[s._v("多套环境的资源隔离")]),s._v("或者"),a("strong",[s._v("多租户的资源隔离")]),s._v("。")]),s._v(" "),a("p",[s._v('默认情况下，kubernetes集群中的所有的Pod都是可以相互访问的。但是在实际中，可能不想让两个Pod之间进行互相的访问，那此时就可以将两个Pod划分到不同的namespace下。kubernetes通过将集群内部的资源分配到不同的Namespace中，可以形成逻辑上的"组"，以方便不同的组的资源进行隔离使用和管理。')]),s._v(" "),a("p",[s._v("可以通过kubernetes的授权机制，将不同的namespace交给不同租户进行管理，这样就实现了多租户的资源隔离。此时还能结合kubernetes的资源配额机制，限定不同租户能占用的资源，例如CPU使用量、内存使用量等等，来实现租户可用资源的管理。")]),s._v(" "),a("p",[s._v("kubernetes在集群启动之后，会默认创建几个namespace")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl  get namespace")]),s._v("\nNAME              STATUS   AGE\ndefault           Active   45h     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  所有未指定Namespace的对象都会被分配在default命名空间")]),s._v("\nkube-node-lease   Active   45h     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  集群节点之间的心跳维护，v1.13开始引入")]),s._v("\nkube-public       Active   45h     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  此命名空间下的资源可以被所有人访问（包括未认证用户）")]),s._v("\nkube-system       Active   45h     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  所有由Kubernetes系统创建的资源都处于这个命名空间")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("下面来看namespace资源的具体操作：")]),s._v(" "),a("h3",{attrs:{id:"查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[s._v("#")]),s._v(" 查看")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 查看所有的ns  命令：kubectl get ns")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get ns")]),s._v("\nNAME              STATUS   AGE\ndefault           Active   45h\nkube-node-lease   Active   45h\nkube-public       Active   45h     \nkube-system       Active   45h     \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2 查看指定的ns   命令：kubectl get ns ns名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get ns default")]),s._v("\nNAME      STATUS   AGE\ndefault   Active   45h\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 指定输出格式  命令：kubectl get ns ns名称  -o 格式参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubernetes支持的格式有很多，比较常见的是wide、json、yaml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get ns default -o yaml")]),s._v("\napiVersion: v1\nkind: Namespace\nmetadata:\n  creationTimestamp: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-05-08T04:44:16Z"')]),s._v("\n  name: default\n  resourceVersion: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"151"')]),s._v("\n  selfLink: /api/v1/namespaces/default\n  uid: 7405f73a-e486-43d4-9db6-145f1409f090\nspec:\n  finalizers:\n  - kubernetes\nstatus:\n  phase: Active\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4 查看ns详情  命令：kubectl describe ns ns名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe ns default")]),s._v("\nName:         default\nLabels:       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAnnotations:  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nStatus:       Active  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Active 命名空间正在使用中  Terminating 正在删除命名空间")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ResourceQuota 针对namespace做的资源限制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LimitRange针对namespace中的每个组件做的资源限制")]),s._v("\nNo resource quota.\nNo LimitRange resource.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h3",{attrs:{id:"创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[s._v("#")]),s._v(" 创建")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建namespace")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create ns dev")]),s._v("\nnamespace/dev created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[s._v("#")]),s._v(" 删除")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除namespace")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete ns dev")]),s._v("\nnamespace "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),s._v(" deleted\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"配置方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置方式"}},[s._v("#")]),s._v(" 配置方式")]),s._v(" "),a("p",[s._v("首先准备一个yaml文件：ns-dev.yaml")]),s._v(" "),a("div",{staticClass:"language-YAML line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Namespace\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-SH line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ns-dev.yaml\nkubectl delete "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ns-dev.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);