(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{570:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"daemonset-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemonset-简介"}},[s._v("#")]),s._v(" "),a("strong",[s._v("DaemonSet 简介")])]),s._v(" "),a("p",[s._v("DaemonSet 的主要作用，是在 Kubernetes 集群里，运行一个 Daemon Pod。 DaemonSet 只管理 Pod 对象，然后通过 nodeAffinity 和 Toleration 这两个调度器参数的功能，保证了每个节点上有且只有一个 Pod。")]),s._v(" "),a("p",[s._v("DaemonSet 是一种面向特定应用场景的 Pod 控制器，尽管它也可以管理 Pod 的多个副本，但它主要用于保证一个 Node 上只运行一个 Pod 的场景：")]),s._v(" "),a("h2",{attrs:{id:"daemonset-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemonset-使用场景"}},[s._v("#")]),s._v(" "),a("strong",[s._v("DaemonSet 使用场景")])]),s._v(" "),a("p",[s._v("每个节点上只有一个这样的 Daemon Pod 实例，然后当有新的节点加入 Kubernetes 集群后，该 Pod 会自动地在新节点上被创建出来。当旧节点被删除后，它上面的 Pod 也会相应地被回收掉。")]),s._v(" "),a("p",[s._v("Daemon Pod 的意义确实是非常重要的。比如的作用：")]),s._v(" "),a("ul",[a("li",[s._v("网络插件的 Agent 组件，都必须运行在每一个节点上，用来处理这个节点上的容器网络。")]),s._v(" "),a("li",[s._v("存储插件的 Agent 组件，也必须运行在每一个节点上，用来在这个节点上挂载远程存储目录，操作容器的 Volume 目录，比如：glusterd、ceph。")]),s._v(" "),a("li",[s._v("监控组件和日志组件，也必须运行在每一个节点上，负责这个节点上的监控信息和日志搜集，比如：fluentd、logstash、Prometheus 等。")])]),s._v(" "),a("h2",{attrs:{id:"daemonset-创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemonset-创建"}},[s._v("#")]),s._v(" "),a("strong",[s._v("DaemonSet 创建")])]),s._v(" "),a("p",[s._v("一个简单的 DaemonSet 配置如下：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DaemonSet\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("daemonset\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.17.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("初步看，这份配置跟 Deployment 基本类似，唯一一个显著的差异是 DaemonSet 不需要指定副本数，因为它的副本数取决于工作节点数。")]),s._v(" "),a("h2",{attrs:{id:"查看-daemonset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-daemonset"}},[s._v("#")]),s._v(" "),a("strong",[s._v("查看 DaemonSet")])]),s._v(" "),a("p",[s._v("首先查看刚刚创建的 DaemonSet 对象：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get daemonset")]),s._v("\nNAME  DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE\nnginx-daemonset     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("          1m3s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("命令行输出中各字段含义如下：")]),s._v(" "),a("ul",[a("li",[s._v("NAME: DaemonSet 对象名称，同配置中的 metadata.name；")]),s._v(" "),a("li",[s._v("DESIRED：需求副本个数，由于没有刻意筛选节点，所以副本个数等同于节点个数(默认)；")]),s._v(" "),a("li",[s._v("CURRENT：当前已创建的副本个数；")]),s._v(" "),a("li",[s._v("READY：处于 Ready 状态的副本个数；")]),s._v(" "),a("li",[s._v("UP-TO-DATE：已按最新 Pod 模版创建的 Pod 个数；")]),s._v(" "),a("li",[s._v("AVAILABLE：可用的副本个数；")]),s._v(" "),a("li",[s._v("NODE SELECTOR：节点选择器，本例中我们没有选择，值为空；")]),s._v(" "),a("li",[s._v("AGE：创建至今经历的时间。")])]),s._v(" "),a("p",[s._v("上面的字段中，除了 NODE SELECTOR 以外，我们已在前面的章节中介绍过。其实 Node Selector 并不是 DaemonSet 对象特有的配置，它是 Pod 模版中用于为 Pod 匹配节点的配置，DaemonSet 控制器使用该 Node Selector 来筛选需要创建副本的节点，如果没有指定，则默认选择全部节点。")]),s._v(" "),a("p",[s._v("接着，查看 DaemonSet 控制器所创建的 Pod 副本信息：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods -o wide")]),s._v("\nNAME                    READY   STATUS    RESTARTS   AGE     IP           NODE           NOMINATED NODE   READINESS GATES\nnginx-daemonset-66dbc   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          5m13s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.135")]),s._v(".3.2   k8s-master   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nnginx-daemonset-akpdg   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          5m13s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.135")]),s._v(".1.2   k8s-node1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nnginx-daemonset-l3wnd   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          5m13s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.135")]),s._v(".2.2   k8s-node2    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("可以看到，在每个节点上均创建了一个副本，是符合预期的。")]),s._v(" "),a("h2",{attrs:{id:"更新-daemonset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新-daemonset"}},[s._v("#")]),s._v(" "),a("strong",[s._v("更新 DaemonSet")])]),s._v(" "),a("p",[s._v("下面我们适当的调整下 Pod 部署策略，只希望 Pod 运行在名为 k8s-node 的节点上，这样我们只需要配置 DaemonSet 对象的 spec.template.spec.nodeSelector 来选择节点即可。")]),s._v(" "),a("p",[s._v("在 k8s-node 的节点中存在一个标识节点的 label：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubernetes.io/hostname: k8s-node1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用 kubectl edit 命令修改配置的 spec.template.spec.nodeSelector 参数如下：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DaemonSet\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubernetes.io/hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("然后再次观察 DaemonSet 对象和 Pod 副本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get daemonsets")]),s._v("\nNAME              DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                        AGE\nnginx-daemonset   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           kubernetes.io/hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k8s-node1   37m\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods -o wide")]),s._v("\nNAME                    READY   STATUS    RESTARTS   AGE   IP           NODE          NOMINATED NODE   READINESS GATES\nnginx-daemonset-66gk2   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          10s   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.135")]),s._v(".2.3   k8s-node1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("可以发现 DaemonSet 状态中，NODE SELECTOR 正确地展示了上面的修改，而且需求的 Pod 副本数也变成了 1 个，符合预期。")]),s._v(" "),a("p",[s._v("原来运行的 3 个 Pod 副本减少到 1 个，而且只在我们配置选定的节点（k8s-node1）上运行。")]),s._v(" "),a("h2",{attrs:{id:"删除-daemonset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-daemonset"}},[s._v("#")]),s._v(" "),a("strong",[s._v("删除 DaemonSet")])]),s._v(" "),a("p",[s._v("像其他 Pod 控制器一样，当删除 DaemonSet 对象时，其所管理的 Pod 默认也会被删除，操作如下所示：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete daemonsets nginx-daemonset")]),s._v("\ndaemonset.apps "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-daemonset"')]),s._v(" deleted\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods")]),s._v("\nNo resources found "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" default namespace.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("ref: https://zhuanlan.zhihu.com/p/561595005")])])}),[],!1,null,null,null);a.default=e.exports}}]);