(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{475:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"部署metrics-server服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署metrics-server服务"}},[s._v("#")]),s._v(" 部署Metrics-Server服务")]),s._v(" "),t("h2",{attrs:{id:"_1-下载并解压metrics-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载并解压metrics-server"}},[s._v("#")]),s._v(" 1.下载并解压Metrics-Server")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("https://github.com/kubernetes-sigs/metrics-server/archive/v0.3.6.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" v0.3.6.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2-修改metrics-server配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改metrics-server配置文件"}},[s._v("#")]),s._v(" 2.修改Metrics-Server配置文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" metrics-server-0.3.6/deploy/1.8+/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" metrics-server-deployment.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("vim metrics-server-deployment.yaml文件原有的内容如下所示")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ServiceAccount\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("system\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("system\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceAccountName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount in tmp so we can safely use from-scratch images and/or read-only containers")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dir\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("emptyDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" k8s.gcr.io/metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v0.3.6\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Always\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeMounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dir\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mountPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /tmp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("p",[s._v("修改后的文件内容如下所示。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ServiceAccount\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("system\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("system\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceAccountName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount in tmp so we can safely use from-scratch images and/or read-only containers")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dir\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("emptyDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改image 和 imagePullPolicy")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mirrorgooglecontainers/metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v0.3.6\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IfNotPresent\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增command配置")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("insecure"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tls\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("kubelet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("preferred"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("types=InternalDNS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("InternalIP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ExternalDNS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ExternalIP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Hostname\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeMounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dir\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mountPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /tmp\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增resources配置")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("limits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300m\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200Mi\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requests")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200m\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100Mi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("p",[s._v("修改完metrics-server-deployment.yaml文件后保存退出。")]),s._v(" "),t("h2",{attrs:{id:"_3-安装metrics-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装metrics-server"}},[s._v("#")]),s._v(" 3.安装Metrics-Server")]),s._v(" "),t("p",[s._v("执行如下命令安装Metrics-Server")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" metrics-server-0.3.6/deploy/1.8+/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给与权限")]),s._v("\nkubectl create clusterrolebinding system:anonymous  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--clusterrole")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cluster-admin  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("system:anonymous\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_4-查看node信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看node信息"}},[s._v("#")]),s._v(" 4.查看node信息")]),s._v(" "),t("p",[s._v("安装完Metrics-Server之后，查看node信息，如下所示。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@binghe101 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl top node")]),s._v("\nNAME        CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cores"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   CPU%   MEMORY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   MEMORY%   \nbinghe101   141m         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("%     1113Mi          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v("%       \nbinghe102   62m          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("%     549Mi           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("% \nbinghe103   100m         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("%     832Mi           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v("%\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("可以看到，使用Metrics-Server收集到节点信息，说明Metrics-Server安装成功。")])])}),[],!1,null,null,null);t.default=e.exports}}]);